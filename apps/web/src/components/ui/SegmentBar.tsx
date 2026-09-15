'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteSegments } from '@/data/site';

export function SegmentBar() {
  const pathname = usePathname();

  return (
    <div className="segment-bar-root">
      <div className="container flex items-center justify-between" style={{ height: '100%' }}>
        {/* Segment Switcher Tabs */}
        <div className="flex items-center gap-1" style={{ height: '100%' }}>
          {siteSegments.map((seg) => {
            const isSelected = seg.id === 'home' ? pathname === '/' : false;
            return (
              <Link
                key={seg.id}
                href={seg.href}
                className={`segment-tab ${isSelected ? 'segment-tab-active' : ''}`}
              >
                {seg.label}
              </Link>
            );
          })}
        </div>

        {/* Right Help / Contact quick link */}
        <div className="flex items-center gap-4 text-muted" style={{ fontSize: '12px' }}>
          <a
            href="https://selfcare.link3.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted"
            id="segment-selfcare-link"
          >
            Self Care
          </a>
        </div>
      </div>
    </div>
  );
}
