import React, { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { config as chatbotConfig } from './chatbot.config';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isDisabled?: boolean;
  placeholder?: string;
}

const ChatInput: React.FC<ChatInputProps> = ({ 
  onSendMessage, 
  isDisabled = false, 
  placeholder = 'Escribe tu mensaje...' 
}) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { theme, maxMessageLength } = chatbotConfig;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isDisabled) return;
    
    onSendMessage(message.trim());
    setMessage('');
    
    // Restablecer la altura del textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [message]);

  const remainingChars = maxMessageLength - message.length;
  const isNearLimit = remainingChars < 20;

  return (
    <form onSubmit={handleSubmit} className="relative" aria-label="Enviar mensaje a Eva">
      <div className="relative flex items-end">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={isDisabled}
          maxLength={maxMessageLength}
          className="w-full px-4 py-3 pr-12 text-gray-800 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden relative z-50"
          rows={1}
          style={{
            minHeight: '48px',
            maxHeight: '150px',
            position: 'relative',
            zIndex: 50,
            pointerEvents: 'auto',
          }}
          data-eva-input="1"
          aria-label="Mensaje para Eva"
        />
        <button
          type="submit"
          disabled={!message.trim() || isDisabled}
          className={`absolute right-2 bottom-2 p-2 rounded-full ${
            message.trim() && !isDisabled
              ? 'text-white bg-blue-500 hover:bg-blue-600'
              : 'text-gray-400 bg-gray-100 cursor-not-allowed'
          } transition-colors`}
          style={{
            backgroundColor: message.trim() && !isDisabled ? theme.primaryColor : '',
          }}
        >
          <PaperAirplaneIcon className="w-5 h-5" />
        </button>
      </div>
      {isNearLimit && (
        <div className="text-xs text-right mt-1 text-gray-500">
          {remainingChars} caracteres restantes
        </div>
      )}
    </form>
  );
};

export default ChatInput;
