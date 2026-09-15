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
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 100 }}>
      {/* Floating Chat Window */}
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: '70px',
            right: '0',
            width: '340px',
            maxWidth: 'calc(100vw - 32px)',
            backgroundColor: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.18)',
            border: '1px solid var(--border)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: 'var(--accent-blue)',
              color: '#ffffff',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div className="flex items-center gap-2">
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00E676' }} />
              <span style={{ fontWeight: 'var(--font-bold)', fontSize: '14px' }}>Link3 Live Support</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: 0 }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div
            style={{
              padding: '16px',
              height: '240px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              backgroundColor: '#FAFAFA',
            }}
          >
            {chatLog.map((chat, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: chat.sender === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: chat.sender === 'user' ? '#0a0a0a' : '#ffffff',
                  color: chat.sender === 'user' ? '#ffffff' : '#1f2937',
                  padding: '10px 14px',
                  borderRadius: '16px',
                  fontSize: '13px',
                  maxWidth: '85%',
                  lineHeight: 1.4,
                  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
                }}
              >
                {chat.text}
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSend}
            style={{
              padding: '10px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderTop: '1px solid var(--border)',
              backgroundColor: '#ffffff',
            }}
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: '13px',
                padding: '6px 8px',
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: 'var(--accent-blue)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
              }}
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
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#0a0a0a',
          color: '#ffffff',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 6px 24px rgba(0, 0, 0, 0.22)',
          transition: 'transform 0.15s ease, background-color 0.15s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {open ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}
