import React from 'react';
import { ChatMessage as MessageType } from './chatbot.types';
import { config as chatbotConfig } from './chatbot.config';
import EvaAvatar, { EvaMood } from './EvaAvatar';

interface ChatMessageProps {
  message: MessageType;
  isAssistantSpeaking?: boolean;
  assistantMood?: EvaMood;
  reducedMotion?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isAssistantSpeaking, assistantMood = 'neutral', reducedMotion }) => {
  const isUser = message.role === 'user';
  const { theme } = chatbotConfig;

  const messageStyles = isUser
    ? `ml-auto bg-${theme.primaryColor} text-${theme.userTextColor} rounded-tl-2xl rounded-bl-2xl rounded-br-2xl max-w-[85%]`
    : `mr-auto bg-${theme.botBubbleColor} text-${theme.botTextColor} rounded-tr-2xl rounded-bl-2xl rounded-br-2xl max-w-[85%]`;

  const containerStyles = `flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-4`;
  const avatarStyles = `w-8 h-8 rounded-full flex items-center justify-center text-white ${isUser ? 'ml-2' : 'mr-2'}`;

  return (
    <div className={containerStyles}>
      {!isUser && (
        <EvaAvatar size={32} isSpeaking={Boolean(isAssistantSpeaking)} className="mr-2" mood={assistantMood} reducedMotion={reducedMotion} />
      )}
      <div 
        className={`px-4 py-2 ${messageStyles}`}
        style={{
          backgroundColor: isUser ? theme.userBubbleColor : theme.botBubbleColor,
          color: isUser ? theme.userTextColor : theme.botTextColor,
          whiteSpace: 'pre-line',
        }}
      >
        {message.content}
        {/* Las opciones se manejarán en el componente ChatSuggestions */}
      </div>
      {isUser && (
        <div 
          className={avatarStyles}
          style={{ backgroundColor: theme.primaryColor }}
        >
          T
        </div>
      )}
      {message.isLoading && (
        <div className="flex space-x-1 items-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
