'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SisterSegment {
  id: string;
  title: string;
  headerBg: string;
  headerTextColor?: string;
  subtitle: string;
  desc: string;
  href: string;
}

const segments: SisterSegment[] = [
  {
    id: 'business',
    title: 'LINK3 BUSINESS',
    headerBg: '#9C60FF',
    subtitle: 'Businesses Grow With Link3',
    desc: 'High-speed Internet plans built for scalability, SLA reliability and seamless SME operations.',
    href: '/#contact',
  },
  {
    id: 'enterprise',
    title: 'LINK3 ENTERPRISE',
    headerBg: '#00C4DF',
    headerTextColor: '#0a0a0a',
    subtitle: "Link3's 3Cs of Digitalisation",
    desc: 'Supercharge your enterprise with cloud interconnect, managed cyber defence, and expert technical support.',
    href: '/#contact',
  },
  {
    id: 'wholesale',
    title: 'LINK3 WHOLESALE',
    headerBg: '#141414',
    subtitle: 'Partnership Beyond Connectivity',
    desc: 'Expanding collaboration beyond basic network services to offer regional IP transit, dark fibre, and subsea capacity.',
    href: '/#contact',
  },
  {
    id: 'cloud-energy',
    title: 'LINK3 CLOUD / ENERGY',
    headerBg: 'var(--brand-primary)',
    subtitle: 'Sustainable Digital Infrastructure',
    desc: 'Tier-III green data centres, private cloud solutions, and zero-carbon smart infrastructure.',
    href: '/#contact',
  },
];

export function CrossBrandGrid() {
  return (
    <section id="segments" className="section-subtle">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
          Connecting More Than Just Homes
        </h2>

        <div className="sister-grid">
          {segments.map((seg) => (
            <Link
              key={seg.id}
              href={seg.href}
              className="sister-card"
            >
              {/* Colored Header Block */}
              <div
                className="sister-card-header"
                style={{
                  backgroundColor: seg.headerBg,
                  color: seg.headerTextColor || '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  fontWeight: 'var(--font-black)',
                  fontSize: '18px',
                  minHeight: '100px',
                }}
              >
                {seg.title}
              </div>

              {/* Card Body */}
              <div className="sister-card-body">
                <h3
                  className="font-display"
                  style={{
                    fontSize: '15px',
                    fontWeight: 'var(--font-bold)',
                    color: 'var(--text)',
                    marginBottom: '8px',
                  }}
                >
                  {seg.subtitle}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#4B5563',
                    lineHeight: 1.5,
                    marginBottom: '20px',
                    flex: 1,
                  }}
                >
                  {seg.desc}
                </p>

                {/* Bottom-right Arrow Button */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <div className="sister-circle-arrow">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
