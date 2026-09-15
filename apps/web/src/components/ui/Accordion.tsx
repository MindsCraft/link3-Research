'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionEntry {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionEntry[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            style={{
              backgroundColor: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              transition: 'border-color 0.15s ease',
            }}
          >
            <button
              onClick={() => toggle(item.id)}
              style={{
                width: '100%',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '15px',
                fontWeight: 'var(--font-bold)',
                color: 'var(--text)',
              }}
            >
              <span>{item.title}</span>
              <ChevronDown
                size={18}
                style={{
                  color: 'var(--accent-blue)',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                  flexShrink: 0,
                  marginLeft: '12px',
                }}
              />
            </button>

            {isOpen && (
              <div
                style={{
                  padding: '0 20px 18px 20px',
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: '1.6',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '14px',
                }}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
