'use client';

import React from 'react';
import { Calendar, Clock, Headphones } from 'lucide-react';

export function CustomerCareBanner() {
  return (
    <section className="care-banner-section">
      <div className="container care-banner-container">
        <h2 className="section-title care-banner-title">
          Always Here to Help
        </h2>

        <div className="care-grid">
          {/* Card 1: Extended Installation Hours */}
          <div className="care-card">
            {/* Calendar / Clock Icon */}
            <div className="care-icon-box care-icon-box-yellow">
              <Calendar size={28} className="care-icon-dark" />
              <div className="care-icon-sub-badge">
                <Clock size={14} />
              </div>
            </div>

            <div>
              <h3 className="font-display care-card-title">
                Extended Installation Hours
              </h3>
              <p className="care-card-desc">
                No more rushing home or applying for leaves! With our extended installation hours on weekdays to 8pm and weekends to 4pm for your convenience.
              </p>
            </div>
          </div>

          {/* Card 2: 24/7 Support */}
          <div className="care-card">
            {/* Headset Icon */}
            <div className="care-icon-box care-icon-box-primary">
              <Headphones size={28} className="text-primary" />
            </div>

            <div>
              <h3 className="font-display care-card-title">
                24/7 Support
              </h3>
              <p className="care-card-desc">
                Chat, call or write to us anytime of the day, help is at your fingertips! Our network operations team monitors uptime around the clock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
