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
    <div className="accordion-group">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="accordion-item">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="accordion-trigger"
            >
              <span>{item.title}</span>
              <ChevronDown
                size={18}
                className={`accordion-chevron ${isOpen ? 'accordion-chevron-open' : ''}`}
              />
            </button>

            {isOpen && (
              <div className="accordion-content">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
