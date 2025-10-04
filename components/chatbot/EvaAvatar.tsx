import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export type EvaMood = 'neutral' | 'thinking' | 'happy' | 'concerned';

export type EvaAvatarProps = {
  size?: number; // px
  isSpeaking?: boolean;
  className?: string;
  mood?: EvaMood;
  reducedMotion?: boolean;
};

/**
 * EvaAvatar: Lightweight animated avatar using SVG + Framer Motion
 * - Idle: subtle breathing and eye blinks
 * - Speaking: animated mouth
 * - Mood: neutral | thinking | happy | concerned
 */
const EvaAvatar: React.FC<EvaAvatarProps> = ({ size = 32, isSpeaking = false, className, mood = 'neutral', reducedMotion }) => {
  const s = size;
  const cx = s / 2;
  const cy = s / 2;
  const r = s / 2;

  const prefersReduced = useMemo(() => {
    try {
      return reducedMotion === true || (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    } catch {
      return !!reducedMotion;
    }
  }, [reducedMotion]);

  // Mouth path by mood
  const mouthPath = useMemo(() => {
    switch (mood) {
      case 'happy':
        return `M ${s * 0.36} ${s * 0.62} Q ${s * 0.5} ${s * 0.74}, ${s * 0.64} ${s * 0.62}`;
      case 'concerned':
        return `M ${s * 0.36} ${s * 0.66} Q ${s * 0.5} ${s * 0.58}, ${s * 0.64} ${s * 0.66}`;
      case 'thinking':
        return `M ${s * 0.44} ${s * 0.64} Q ${s * 0.5} ${s * 0.64}, ${s * 0.56} ${s * 0.64}`;
      default:
        return `M ${s * 0.38} ${s * 0.62} Q ${s * 0.5} ${s * 0.70}, ${s * 0.62} ${s * 0.62}`;
    }
  }, [mood, s]);

  // Eyebrows offset by mood
  const browTilt = useMemo(() => {
    switch (mood) {
      case 'thinking':
        return { left: -3, right: 3 };
      case 'concerned':
        return { left: 4, right: -4 };
      case 'happy':
        return { left: 0, right: 0 };
      default:
        return { left: 0, right: 0 };
    }
  }, [mood]);

  return (
    <motion.div
      className={className}
      style={{ width: s, height: s }}
      initial={{ scale: 1 }}
      animate={prefersReduced ? { scale: 1 } : { scale: [1, 1.02, 1] }}
      transition={prefersReduced ? undefined : { duration: 3, repeat: Infinity, repeatType: 'reverse' }}
    >
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
        {/* Background circle */}
        <defs>
          <linearGradient id="evaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <circle cx={cx} cy={cy} r={r} fill="url(#evaGrad)" />

        {/* Hair (simple top arc) */}
        <path
          d={`M ${s * 0.05} ${s * 0.35}
              Q ${s * 0.5} ${s * 0.0}, ${s * 0.95} ${s * 0.35}
              L ${s * 0.95} ${s * 0.15}
              Q ${s * 0.5} ${s * -0.05}, ${s * 0.05} ${s * 0.15} Z`}
          fill="#ef4444"
          opacity={0.7}
        />

        {/* Face */}
        <circle cx={cx} cy={cy} r={s * 0.36} fill="#fffaf0" />

        {/* Eyebrows (simple lines) */}
        <line x1={s * 0.32} y1={s * 0.40 + browTilt.left} x2={s * 0.44} y2={s * 0.40 - browTilt.left} stroke="#1f2937" strokeWidth={1.5} strokeLinecap="round" />
        <line x1={s * 0.56} y1={s * 0.40 - browTilt.right} x2={s * 0.68} y2={s * 0.40 + browTilt.right} stroke="#1f2937" strokeWidth={1.5} strokeLinecap="round" />

        {/* Eyes */}
        <motion.ellipse
          cx={s * 0.38}
          cy={s * 0.48}
          rx={s * 0.045}
          ry={s * 0.06}
          fill="#1f2937"
          animate={prefersReduced ? undefined : { scaleY: [1, 1, 0.1, 1] }}
          transition={prefersReduced ? undefined : { duration: 4, repeat: Infinity, times: [0, 0.88, 0.9, 1] }}
          style={{ originY: 'center', originX: 'center' }}
        />
        <motion.ellipse
          cx={s * 0.62}
          cy={s * 0.48}
          rx={s * 0.045}
          ry={s * 0.06}
          fill="#1f2937"
          animate={prefersReduced ? undefined : { scaleY: [1, 1, 0.1, 1] }}
          transition={prefersReduced ? undefined : { duration: 4.2, repeat: Infinity, times: [0, 0.9, 0.92, 1] }}
          style={{ originY: 'center', originX: 'center' }}
        />

        {/* Smile / Mouth */}
        <motion.path
          d={mouthPath}
          stroke="#ef4444"
          strokeWidth={2}
          fill="transparent"
          animate={isSpeaking && !prefersReduced ? { scaleY: [1, 0.7, 1] } : { scaleY: 1 }}
          transition={isSpeaking && !prefersReduced ? { duration: 0.6, repeat: Infinity } : undefined}
          style={{ originY: s * 0.62, originX: s * 0.5 }}
        />

        {/* Cheek blush */}
        <circle cx={s * 0.30} cy={s * 0.58} r={s * 0.04} fill="#fca5a5" opacity={mood === 'concerned' ? 0.3 : 0.6} />
        <circle cx={s * 0.70} cy={s * 0.58} r={s * 0.04} fill="#fca5a5" opacity={mood === 'concerned' ? 0.3 : 0.6} />
      </svg>
    </motion.div>
  );
};

export default EvaAvatar;
