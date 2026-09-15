'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { Smartphone } from 'lucide-react';
import { Link3Logo } from './Link3Logo';

/* Inline SVG social icons — lucide-react v1.x dropped brand icons */
const iconProps = { width: 18, height: 18, fill: 'currentColor', viewBox: '0 0 24 24' } as const;

function Facebook({ size = 18 }: { size?: number }) {
  return (
    <svg {...iconProps} width={size} height={size}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function Instagram({ size = 18 }: { size?: number }) {
  return (
    <svg {...iconProps} width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function Linkedin({ size = 18 }: { size?: number }) {
  return (
    <svg {...iconProps} width={size} height={size}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Twitter({ size = 18 }: { size?: number }) {
  return (
    <svg {...iconProps} width={size} height={size}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}


export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid var(--border)',
        paddingTop: '64px',
        paddingBottom: '48px',
        fontSize: '13px',
      }}
    >
      <div className="container">
        {/* Brand Logo Row */}
        <div style={{ marginBottom: '40px' }}>
          <div className="flex items-center" style={{ flexShrink: 0 }}>
            <Link3Logo height={48} />
          </div>
        </div>

        {/* 4-Column Sitemap Grid */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            paddingBottom: '48px',
            borderBottom: '1px solid var(--border)',
          }}
        >
          {/* Column 1: About Link3 */}
          <div className="flex flex-col gap-3">
            <h5 className="font-display" style={{ color: 'var(--text)', fontWeight: 'var(--font-bold)', marginBottom: '8px' }}>
              About {siteConfig.brandName}
            </h5>
            <Link href="/#why-us" className="text-muted">Our Company</Link>
            <Link href="/#why-us" className="text-muted">Newsroom &amp; Press</Link>
            <Link href="/#why-us" className="text-muted">Investor Relations</Link>
            <Link href="/#why-us" className="text-muted">Careers &amp; Engineering</Link>
            <Link href="/#why-us" className="text-muted">Sustainability Commitments</Link>
            <Link href="/#why-us" className="text-muted">Corporate Governance</Link>
          </div>

          {/* Column 2: More From Link3 */}
          <div className="flex flex-col gap-3">
            <h5 className="font-display" style={{ color: 'var(--text)', fontWeight: 'var(--font-bold)', marginBottom: '8px' }}>
              More From {siteConfig.brandName}
            </h5>
            <Link href="/#plans" className="text-muted">Home Fibre</Link>
            <Link href="/#segments" className="text-muted">Link3 Business</Link>
            <Link href="/#segments" className="text-muted">Link3 Enterprise</Link>
            <Link href="/#segments" className="text-muted">Link3 Wholesale</Link>
            <Link href="/#plans" className="text-muted">Devices &amp; Mesh WiFi</Link>
            <Link href="/#plans" className="text-muted">Fibre-To-The-Room (FTTR)</Link>
          </div>

          {/* Column 3: Help & Support */}
          <div className="flex flex-col gap-3">
            <h5 className="font-display" style={{ color: 'var(--text)', fontWeight: 'var(--font-bold)', marginBottom: '8px' }}>
              Help &amp; Support
            </h5>
            <Link href="/#contact" className="text-muted">Customer Support</Link>
            <Link href="/#faq" className="text-muted">Frequently Asked Questions</Link>
            <Link href="/#coverage" className="text-muted">Check Coverage Status</Link>
            <a href="https://selfcare.link3.net" target="_blank" rel="noopener noreferrer" className="text-muted">
              Self Care Portal
            </a>
            <div style={{ marginTop: '8px' }}>
              <span className="badge badge-primary">Hotline: {siteConfig.supportHotline}</span>
            </div>
          </div>

          {/* Column 4: Follow Us & Certifications */}
          <div className="flex flex-col gap-4">
            <div>
              <h5 className="font-display" style={{ color: 'var(--text)', fontWeight: 'var(--font-bold)', marginBottom: '12px' }}>
                Follow Us
              </h5>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text)',
                  }}
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text)',
                  }}
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text)',
                  }}
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text)',
                  }}
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-display" style={{ color: 'var(--text)', fontWeight: 'var(--font-bold)', marginBottom: '8px' }}>
                Self Care App
              </h5>
              <div className="flex items-center gap-2">
                <div
                  style={{
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border)',
                    fontSize: '11px',
                    fontWeight: 'var(--font-bold)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Smartphone size={14} />
                  <span>iOS &amp; Android</span>
                </div>
              </div>
            </div>

            {/* Certifications row */}
            <div className="flex items-center gap-2" style={{ marginTop: '4px' }}>
              <span className="badge" style={{ fontSize: '10px' }}>MEF 3.0 Certified</span>
              <span className="badge" style={{ fontSize: '10px' }}>ISO 27001</span>
              <span className="badge" style={{ fontSize: '10px' }}>Licensed ISP</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div
          style={{
            paddingTop: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            fontSize: '12px',
            color: 'var(--text-subtle)',
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              © {siteConfig.copyrightYear} {siteConfig.brandName} Technologies Ltd. All rights reserved.
            </div>

            <div className="flex items-center gap-3">
              <Link href="/#faq">Terms &amp; Conditions</Link>
              <span>|</span>
              <Link href="/#faq">Privacy Policies</Link>
              <span>|</span>
              <Link href="/#faq">Usage Policies</Link>
            </div>
          </div>

          <div style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>
            Registered with regulatory authorities. Full Gigabit optical broadband connectivity.
          </div>
        </div>
      </div>
    </footer>
  );
}
