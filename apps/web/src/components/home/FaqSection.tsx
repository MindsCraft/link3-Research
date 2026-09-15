'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What documents are required for subscription?',
    answer:
      'A valid National ID (NID) or Passport copy with at least 6 months validity. For businesses, a copy of the Trade License and authorized signatory ID is required.',
  },
  {
    id: 'faq-2',
    question: 'What do I get if I register for Auto Debit?',
    answer:
      'Registering for Auto Debit guarantees zero late payment charges, uninterrupted connectivity, and instant promotional rebates on your recurring broadband subscription bill depending on your plan tier.',
  },
  {
    id: 'faq-3',
    question: 'When do I get my first bill?',
    answer:
      'Your first bill will be generated within 7 to 14 days after your broadband service has been successfully installed and activated. It covers the pro-rated charges for the first month plus the advance monthly subscription.',
  },
  {
    id: 'faq-4',
    question: 'What is WiFi 7?',
    answer:
      'WiFi 7 (802.11be Extremely High Throughput) is the newest wireless standard, featuring 320MHz ultra-wide channels, 4K-QAM modulation, and Multi-Link Operation (MLO). It delivers up to 4.8x faster throughput and ultra-low latency compared to WiFi 6.',
  },
  {
    id: 'faq-5',
    question: 'What is Fibre-To-The-Room (FTTR)?',
    answer:
      'FTTR extends pure glass optical fibre directly to individual rooms using transparent, hair-thin micro-optical cabling adhered invisibly along baseboards. This completely eliminates WiFi wall attenuation and delivers true 1,000 Mbps wire speed to every bedroom.',
  },
  {
    id: 'faq-6',
    question: 'Can I relocate my service if I move?',
    answer:
      'Yes! Service relocation is free of charge within our coverage footprint. Simply submit a relocation request via Self Care or contact our support team at least 14 days prior to your moving date.',
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="section">
      <div className="container" style={{ maxWidth: '840px' }}>
        <h2
          className="section-title"
          style={{
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          Frequently Asked Questions
        </h2>

        {/* Rounded FAQ Container */}
        <div className="faq-container-box">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="faq-item-row">
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="faq-btn-trigger"
                >
                  <span
                    className={`faq-question-text ${isOpen ? 'text-primary' : 'text-dark'}`}
                  >
                    {faq.question}
                  </span>

                  <div
                    className="text-primary flex items-center justify-center"
                    style={{ flexShrink: 0 }}
                  >
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer-body">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Link */}
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link
            href="/#contact"
            className="text-primary"
            style={{
              fontSize: '13px',
              fontWeight: 'var(--font-bold)',
            }}
          >
            Have more questions? Contact our team →
          </Link>
        </div>
      </div>
    </section>
  );
}
