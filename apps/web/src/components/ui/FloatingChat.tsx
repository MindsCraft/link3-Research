'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState<{ sender: 'agent' | 'user'; text: string }[]>([
    { sender: 'agent', text: 'Hi there! 👋 How can we help you today with Link3 Full Fibre Broadband?' },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userText = message;
    setChatLog((prev) => [...prev, { sender: 'user', text: userText }]);
    setMessage('');

    setTimeout(() => {
      setChatLog((prev) => [
        ...prev,
        {
          sender: 'agent',
          text: 'Thanks for reaching out! A Link3 customer service representative will respond right here shortly. You can also call us at 16335.',
        },
      ]);
    }, 800);
  };

  return (
    <div className="floating-chat-container">
      {/* Floating Chat Window */}
      {open && (
        <div className="floating-chat-window">
          {/* Header */}
          <div className="floating-chat-header">
            <div className="flex items-center gap-2">
              <div className="floating-chat-status-dot" />
              <span className="floating-chat-title">Link3 Live Support</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="floating-chat-close-btn"
              aria-label="Close live support"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="floating-chat-messages">
            {chatLog.map((chat, idx) => (
              <div
                key={idx}
                className={`floating-chat-bubble ${
                  chat.sender === 'user'
                    ? 'floating-chat-bubble-user'
                    : 'floating-chat-bubble-agent'
                }`}
              >
                {chat.text}
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSend}
            className="floating-chat-form"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="floating-chat-input"
            />
            <button
              type="submit"
              className="floating-chat-send-btn"
              aria-label="Send message"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Open support chat"
        className="floating-chat-trigger-btn"
      >
        {open ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}
