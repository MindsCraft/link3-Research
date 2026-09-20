'use client';

import React from 'react';
import Link from 'next/link';

export function WhyUsSection() {
  return (
    <section id="why-us" className="section">
      <div className="container">
        <h2 className="section-title why-us-section-title">
          Our Home Internet Is Just Better
        </h2>

        <div className="why-us-grid">
          {/* Card 1: 100% Fibre, 100% Ours */}
          <div className="why-us-card">
            <h3 className="why-us-title">
              100% Fibre, 100% Ours
            </h3>

            {/* Illustration */}
            <div className="why-us-graphic-box">
              <svg width="120" height="110" viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Robot / Network Guardian */}
                <ellipse cx="60" cy="70" rx="35" ry="24" fill="#9C60FF" />
                <ellipse cx="60" cy="45" rx="30" ry="20" fill="#00C4DF" stroke="#000" strokeWidth="2.5" />
                <circle cx="50" cy="42" r="5" fill="#ffffff" />
                <circle cx="70" cy="42" r="5" fill="#ffffff" />
                <circle cx="51" cy="42" r="2.5" fill="#000000" />
                <circle cx="71" cy="42" r="2.5" fill="#000000" />
                {/* Sparkles */}
                <path d="M25 25 L30 15 L35 25 L45 30 L35 35 L30 45 L25 35 L15 30 Z" fill="#FFD800" />
                <path d="M95 65 L98 58 L101 65 L108 68 L101 71 L98 78 L95 71 L88 68 Z" fill="#FFD800" />
              </svg>
            </div>

            <p className="why-us-desc">
              We fully own our fibre network, which means faster speeds, greater stability and better service for you.
            </p>

            <Link
              href="/#plans"
              className="btn btn-pill-primary btn-sm why-us-btn"
            >
              FIND OUT MORE
            </Link>
          </div>

          {/* Card 2: Say Hello to True 2Gbps */}
          <div className="why-us-card">
            <h3 className="why-us-title">
              Say Hello to True 2Gbps
            </h3>

            {/* Speedometer graphic */}
            <div className="why-us-graphic-box">
              <div className="why-us-speedometer">
                <div className="why-us-speed-number">
                  2
                </div>
                <div className="why-us-speed-unit">
                  Gbps
                </div>
              </div>
            </div>

            <p className="why-us-desc">
              First in Bangladesh &amp; region to offer TRUE 2Gbps to supercharge your internet.
            </p>

            <Link
              href="/#plans"
              className="btn btn-pill-primary btn-sm why-us-btn"
            >
              GET UP TO SPEED
            </Link>
          </div>

          {/* Card 3: Powerful and Seamless WiFi coverage */}
          <div className="why-us-card">
            <h3 className="why-us-title">
              Powerful and Seamless WiFi coverage
            </h3>

            {/* Router & Phone Graphic */}
            <div className="why-us-graphic-box">
              <svg width="130" height="110" viewBox="0 0 130 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Router */}
                <rect x="25" y="45" width="70" height="35" rx="8" fill="#40C4FF" stroke="#000" strokeWidth="2.5" />
                <line x1="40" y1="45" x2="35" y2="18" stroke="#000" strokeWidth="3" strokeLinecap="round" />
                <line x1="80" y1="45" x2="85" y2="18" stroke="#000" strokeWidth="3" strokeLinecap="round" />
                <circle cx="45" cy="62" r="3" fill="#ffffff" />
                <circle cx="55" cy="62" r="3" fill="#ffffff" />
                <circle cx="65" cy="62" r="3" fill="#ffffff" />
                {/* Phone */}
                <rect x="85" y="35" width="28" height="50" rx="5" fill="#C6F6D5" stroke="#000" strokeWidth="2.5" />
                <circle cx="99" cy="78" r="2.5" fill="#000" />
                {/* Signal waves */}
                <path d="M10 35 A30 30 0 0 1 30 20" stroke="#FFD800" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M102 20 A20 20 0 0 1 118 32" stroke="var(--brand-primary)" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            <p className="why-us-desc">
              Faster, stronger and smoother WiFi that reaches further, powers every device and delivers a smooth online experience without interruptions.
            </p>

            <Link
              href="/#plans"
              className="btn btn-pill-primary btn-sm why-us-btn"
            >
              SEE PLANS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
