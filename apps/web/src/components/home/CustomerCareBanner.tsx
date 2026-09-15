'use client';

import React from 'react';
import { Calendar, Clock, Headphones } from 'lucide-react';

export function CustomerCareBanner() {
  return (
    <section className="care-banner-section">
      <div className="container" style={{ maxWidth: '1080px' }}>
        <h2
          className="section-title"
          style={{
            fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          Always Here to Help
        </h2>

        <div className="care-grid">
          {/* Card 1: Extended Installation Hours */}
          <div className="care-card">
            {/* Calendar / Clock Icon */}
            <div
              className="care-icon-box"
              style={{ backgroundColor: '#FFFBE6' }}
            >
              <Calendar size={28} style={{ color: '#0a0a0a' }} />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  right: '-6px',
                  backgroundColor: 'var(--brand-primary)',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}
              >
                <Clock size={14} />
              </div>
            </div>

            <div>
              <h3 className="font-display" style={{ fontSize: '18px', fontWeight: 'var(--font-bold)', color: 'var(--text)', marginBottom: '8px' }}>
                Extended Installation Hours
              </h3>
              <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.5 }}>
                No more rushing home or applying for leaves! With our extended installation hours on weekdays to 8pm and weekends to 4pm for your convenience.
              </p>
            </div>
          </div>

          {/* Card 2: 24/7 Support */}
          <div className="care-card">
            {/* Headset Icon */}
            <div
              className="care-icon-box"
              style={{ backgroundColor: 'var(--brand-primary-subtle)' }}
            >
              <Headphones size={28} className="text-primary" />
            </div>

            <div>
              <h3 className="font-display" style={{ fontSize: '18px', fontWeight: 'var(--font-bold)', color: 'var(--text)', marginBottom: '8px' }}>
                24/7 Support
              </h3>
              <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.5 }}>
                Chat, call or write to us anytime of the day, help is at your fingertips! Our network operations team monitors uptime around the clock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
