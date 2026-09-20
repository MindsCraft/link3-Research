'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SisterSegment {
  id: string;
  title: string;
  headerClass: string;
  subtitle: string;
  desc: string;
  href: string;
}

const segments: SisterSegment[] = [
  {
    id: 'business',
    title: 'LINK3 BUSINESS',
    headerClass: 'sister-header-business',
    subtitle: 'Businesses Grow With Link3',
    desc: 'High-speed Internet plans built for scalability, SLA reliability and seamless SME operations.',
    href: '/#contact',
  },
  {
    id: 'enterprise',
    title: 'LINK3 ENTERPRISE',
    headerClass: 'sister-header-enterprise',
    subtitle: "Link3's 3Cs of Digitalisation",
    desc: 'Supercharge your enterprise with cloud interconnect, managed cyber defence, and expert technical support.',
    href: '/#contact',
  },
  {
    id: 'wholesale',
    title: 'LINK3 WHOLESALE',
    headerClass: 'sister-header-wholesale',
    subtitle: 'Partnership Beyond Connectivity',
    desc: 'Expanding collaboration beyond basic network services to offer regional IP transit, dark fibre, and subsea capacity.',
    href: '/#contact',
  },
  {
    id: 'cloud-energy',
    title: 'LINK3 CLOUD / ENERGY',
    headerClass: 'sister-header-cloud',
    subtitle: 'Sustainable Digital Infrastructure',
    desc: 'Tier-III green data centres, private cloud solutions, and zero-carbon smart infrastructure.',
    href: '/#contact',
  },
];

export function CrossBrandGrid() {
  return (
    <section id="segments" className="section-subtle">
      <div className="container">
        <h2 className="section-title cross-brand-section-title">
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
              <div className={`sister-card-header ${seg.headerClass}`}>
                {seg.title}
              </div>

              {/* Card Body */}
              <div className="sister-card-body">
                <h3 className="font-display sister-card-title">
                  {seg.subtitle}
                </h3>
                <p className="sister-card-desc">
                  {seg.desc}
                </p>

                {/* Bottom-right Arrow Button */}
                <div className="sister-arrow-row">
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
