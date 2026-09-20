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
      <div className="container flex items-center justify-between navbar-container">
        {/* Brand Lockup */}
        <Link
          href="/"
          className="navbar-brand-link"
          aria-label={`${siteConfig.brandName} Broadband`}
        >
          <div className="navbar-logo-wrap">
            <Link3Logo height={40} />
          </div>
          <span className="navbar-brand-text">
            Broadband
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="navbar-desktop-nav"
          id="desktop-nav"
        >
          {homeNavLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.hasDropdown) {
              return (
                <div key={link.label} className="nav-item-dropdown">
                  <button
                    type="button"
                    className="navbar-link"
                  >
                    <span>{link.label}</span>
                    <ChevronDown size={14} className="navbar-chevron-icon" />
                  </button>

                  <div className="nav-dropdown-menu">
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="nav-dropdown-item"
                      >
                        <div className="nav-dropdown-title">
                          {item.label}
                        </div>
                        {item.desc && (
                          <div className="nav-dropdown-desc">
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
        <div id="desktop-actions" className="navbar-desktop-actions">
          {/* Search Button */}
          <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            className="navbar-search-btn"
            aria-label="Search site"
          >
            <Search size={18} />
          </button>

          {/* Pill Button: Get Started */}
          <Link
            href="/#plans"
            className="btn btn-pill-primary btn-sm navbar-action-btn-gap"
          >
            <Sparkles size={14} />
            <span>Get Started</span>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          id="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="navbar-mobile-toggle"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Expandable Search Bar */}
      {searchOpen && (
        <div className="navbar-search-bar">
          <div className="container flex items-center gap-3">
            <Search size={16} className="navbar-search-icon" />
            <input
              type="text"
              placeholder="Search broadband plans, devices, coverage..."
              className="navbar-search-input"
              autoFocus
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="navbar-search-close-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="navbar-mobile-drawer">
          <div className="navbar-mobile-menu">
            {homeNavLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="navbar-mobile-link"
                >
                  {link.label}
                </Link>
              </div>
            ))}
            <div className="navbar-mobile-actions">
              <Link
                href="/#plans"
                onClick={() => setMobileOpen(false)}
                className="btn btn-pill-primary navbar-mobile-btn-full"
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
