'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { siteSegments } from '@/data/site';

export function SegmentBar() {
  const pathname = usePathname();

  return (
    <div className="segment-bar-root">
      <div className="container flex items-center justify-between segment-bar-container">
        {/* Segment Switcher Tabs */}
        <div className="flex items-center gap-1 segment-bar-tabs">
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
        <div className="flex items-center gap-4 segment-bar-right">
          <a
            href="https://selfcare.link3.net"
            target="_blank"
            rel="noopener noreferrer"
            className="segment-bar-link"
            id="segment-selfcare-link"
          >
            <span>Self Care</span>
            <ExternalLink size={13} className="segment-bar-link-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
