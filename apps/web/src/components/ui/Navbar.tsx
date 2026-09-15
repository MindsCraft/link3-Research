'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { homeNavLinks, siteConfig } from '@/data/site';
import { Menu, X, ChevronDown, Search, Sparkles } from 'lucide-react';
import { Link3Logo } from './Link3Logo';

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="navbar-root">
      <div className="container flex items-center justify-between" style={{ height: 'var(--header-height)' }}>
        {/* Brand Lockup */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${siteConfig.brandName} Broadband`}
        >
          <div className="flex items-center justify-center" style={{ flexShrink: 0 }}>
            <Link3Logo height={40} />
          </div>
          <span className="navbar-brand-text">
            Broadband
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="flex items-center"
          style={{ display: 'none', gap: '4px' }}
          id="desktop-nav"
        >
          <style>{`
            @media (min-width: 990px) {
              #desktop-nav { display: flex !important; gap: 6px !important; }
              #desktop-actions { display: flex !important; gap: 10px !important; }
              #mobile-toggle { display: none !important; }
            }
            .nav-item-dropdown {
              position: relative;
            }
            .nav-item-dropdown:hover .nav-dropdown-menu {
              opacity: 1;
              visibility: visible;
              transform: translateY(0);
            }
          `}</style>

          {homeNavLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.hasDropdown) {
              return (
                <div key={link.label} className="nav-item-dropdown">
                  <button
                    type="button"
                    className="navbar-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    <span>{link.label}</span>
                    <ChevronDown size={14} style={{ color: 'var(--text-muted)' }} />
                  </button>

                  <div
                    className="nav-dropdown-menu"
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '0',
                      minWidth: '240px',
                      backgroundColor: '#ffffff',
                      borderRadius: '16px',
                      border: '1px solid var(--border)',
                      padding: '8px',
                      opacity: 0,
                      visibility: 'hidden',
                      transform: 'translateY(6px)',
                      transition: 'all 0.16s ease',
                      zIndex: 50,
                    }}
                  >
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        style={{
                          display: 'block',
                          padding: '10px 14px',
                          borderRadius: '10px',
                          transition: 'background-color 0.12s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-subtle)')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        <div style={{ fontSize: '13px', fontWeight: 'var(--font-semibold)', color: 'var(--text)' }}>
                          {item.label}
                        </div>
                        {item.desc && (
                          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                            {item.desc}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`navbar-link ${isActive ? 'navbar-link-active' : ''}`}
              >
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Action Buttons */}
        <div id="desktop-actions" className="flex items-center" style={{ display: 'none', gap: '10px' }}>
          {/* Search Button */}
          <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-subtle)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            aria-label="Search site"
          >
            <Search size={18} />
          </button>

          {/* Pill Button 1: Self Care */}
          <a
            href="https://selfcare.link3.net"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-pill-black btn-sm"
          >
            Self Care
          </a>

          {/* Pill Button 2: Get Started */}
          <Link
            href="/#plans"
            className="btn btn-pill-primary btn-sm"
            style={{ gap: '6px' }}
          >
            <Sparkles size={14} />
            <span>Get Started</span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          id="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Expandable Search Bar */}
      {searchOpen && (
        <div
          style={{
            backgroundColor: '#ffffff',
            borderTop: '1px solid var(--border)',
            padding: '12px 0',
          }}
        >
          <div className="container flex items-center gap-3">
            <Search size={16} style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search broadband plans, devices, coverage..."
              style={{
                border: 'none',
                background: 'transparent',
                outline: 'none',
                width: '100%',
                fontSize: '14px',
                color: 'var(--text)',
              }}
              autoFocus
            />
            <button
              onClick={() => setSearchOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-muted)',
                fontSize: '13px',
                padding: '4px 8px',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: '#ffffff',
            borderBottom: '1px solid var(--border)',
            padding: '16px 20px',
          }}
        >
          <div className="flex flex-col gap-2">
            {homeNavLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block',
                    padding: '10px 12px',
                    fontSize: '15px',
                    fontWeight: 'var(--font-medium)',
                    color: 'var(--text)',
                    borderRadius: 'var(--radius)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-subtle)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  {link.label}
                </Link>
              </div>
            ))}
            <div style={{ paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href="https://selfcare.link3.net"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-pill-black"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Self Care
              </a>
              <Link
                href="/#plans"
                onClick={() => setMobileOpen(false)}
                className="btn btn-pill-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Sparkles size={14} />
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
