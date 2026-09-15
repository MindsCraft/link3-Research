'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface BlogSlide {
  id: string;
  category: string;
  title: string;
  shortTitle: string;
  desc: string;
  authorName: string;
  authorRole: string;
  ctaText: string;
  ctaHref: string;
  pastelBg: string;
  mediaCard: React.ReactNode;
}

const slides: BlogSlide[] = [
  {
    id: 'slide-2gbps',
    category: 'Fibre Innovation',
    title: 'The next generation of 2Gbps symmetrical fibre is here',
    shortTitle: 'The next generation of 2Gbps symmetrical fibre is here',
    desc: 'We are launching symmetrical 2,000 Mbps home fibre with sub-2ms ping latency, unlimited data, and guaranteed zero bandwidth throttling across our 100% owned optical core.',
    authorName: 'By Link3 Network Architecture',
    authorRole: 'Chief Optical Engineering & Infrastructure',
    ctaText: 'Explore 2Gbps',
    ctaHref: '/#plans',
    pastelBg: '#E8F0FE', // Google Light Blue
    mediaCard: (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at 65% 35%, #1A73E8 0%, #1557B0 45%, #0B2B64 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <svg width="460" height="340" viewBox="0 0 460 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="speedGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#80E5FF" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#00C4DF" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#00C4DF" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="50%" stopColor="#80BFFF" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <circle cx="230" cy="170" r="150" fill="url(#speedGlow)" />
          <circle cx="230" cy="170" r="125" stroke="#80E5FF" strokeWidth="2.5" strokeDasharray="10 10" opacity="0.65" />
          <circle cx="230" cy="170" r="96" stroke="url(#ringGrad)" strokeWidth="8" strokeLinecap="round" opacity="0.95" />
          <circle cx="230" cy="170" r="76" fill="#081E48" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <text x="230" y="167" textAnchor="middle" fill="#ffffff" fontSize="48" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="-0.03em">
            2.0
          </text>
          <text x="230" y="196" textAnchor="middle" fill="#80E5FF" fontSize="13" fontWeight="600" letterSpacing="0.14em" fontFamily="system-ui, -apple-system, sans-serif">
            GBPS SYMMETRIC
          </text>
          <circle cx="230" cy="45" r="7" fill="#80E5FF" filter="drop-shadow(0 0 8px #80E5FF)" />
          <circle cx="355" cy="170" r="8" fill="#ffffff" filter="drop-shadow(0 0 10px #ffffff)" />
          <circle cx="105" cy="170" r="6" fill="#00E5FF" />
          <circle cx="320" cy="260" r="5" fill="#80BFFF" />
        </svg>
      </div>
    ),
  },
  {
    id: 'slide-fttr',
    category: 'Smart Living & Mesh',
    title: 'Zero-loss micro-optical fibre direct to every room (FTTR)',
    shortTitle: 'Zero-loss micro-optical fibre direct to every room (FTTR)',
    desc: 'Transparent, ultra-thin micro-optical glass cabling brings dedicated gigabit speeds into every room and office, eliminating thick concrete walls and WiFi dead zones forever.',
    authorName: 'By Customer Experience & Home Solutions',
    authorRole: 'In-Home Digital Infrastructure Team',
    ctaText: 'Discover FTTR',
    ctaHref: '/#plans',
    pastelBg: '#F3E8FD', // Google Lavender
    mediaCard: (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at 65% 35%, #7C3AED 0%, #5B21B6 45%, #2E1065 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <svg width="460" height="340" viewBox="0 0 460 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="lavenderGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#C084FC" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="230" cy="170" r="140" fill="url(#lavenderGlow)" />
          <path d="M100 210 C160 110, 300 230, 360 130" stroke="#E9D5FF" strokeWidth="5" strokeLinecap="round" opacity="0.9" />
          <path d="M110 130 C190 230, 270 90, 350 190" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
          <circle cx="230" cy="170" r="54" fill="#2E1065" stroke="#E9D5FF" strokeWidth="3" />
          <text x="230" y="165" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif">
            FTTR
          </text>
          <text x="230" y="188" textAnchor="middle" fill="#C084FC" fontSize="12" fontWeight="600" letterSpacing="0.1em" fontFamily="system-ui, -apple-system, sans-serif">
            ALL ROOMS
          </text>
          <circle cx="100" cy="210" r="14" fill="#9333EA" stroke="#ffffff" strokeWidth="2.5" />
          <circle cx="360" cy="130" r="14" fill="#38BDF8" stroke="#ffffff" strokeWidth="2.5" />
          <circle cx="110" cy="130" r="12" fill="#E9D5FF" />
          <circle cx="350" cy="190" r="12" fill="#C084FC" />
        </svg>
      </div>
    ),
  },
  {
    id: 'slide-wifi7',
    category: 'Hardware & Devices',
    title: 'WiFi 7 tri-band routers now standard with 1Gbps & 2Gbps',
    shortTitle: 'WiFi 7 tri-band routers now standard with 1Gbps & 2Gbps',
    desc: 'Harness 320MHz ultra-wide channels, 4K-QAM modulation, and Multi-Link Operation (MLO) for lag-free 8K cloud gaming, VR experiences, and multi-device modern households.',
    authorName: 'By Device Ecosystem Group',
    authorRole: 'Product Engineering & Hardware Testing Lab',
    ctaText: 'View Hardware Specs',
    ctaHref: '/#plans',
    pastelBg: '#FEF7E0', // Google Soft Amber
    mediaCard: (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at 65% 35%, #D97706 0%, #92400E 45%, #451A03 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <svg width="460" height="340" viewBox="0 0 460 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="amberGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
            </radialGradient>
          </defs>
          <circle cx="230" cy="180" r="140" fill="url(#amberGlow)" />
          <path d="M170 90 A85 85 0 0 1 290 90" stroke="#FDE68A" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.9" />
          <path d="M140 65 A125 125 0 0 1 320 65" stroke="#FCD34D" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.65" />
          <path d="M110 40 A165 165 0 0 1 350 40" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4" />
          <rect x="120" y="180" width="220" height="65" rx="16" fill="#1C1814" stroke="#FDE68A" strokeWidth="2.5" />
          <line x1="155" y1="180" x2="135" y2="105" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
          <line x1="230" y1="180" x2="230" y2="95" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
          <line x1="305" y1="180" x2="325" y2="105" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
          <circle cx="230" cy="212" r="5" fill="#10B981" filter="drop-shadow(0 0 6px #10B981)" />
          <circle cx="195" cy="212" r="4" fill="#F59E0B" />
          <circle cx="265" cy="212" r="4" fill="#38BDF8" />
        </svg>
      </div>
    ),
  },
  {
    id: 'slide-network',
    category: 'Digital Infrastructure',
    title: '100% fibre, 100% ours: Nationwide optical backbone',
    shortTitle: '100% fibre, 100% ours: Nationwide optical backbone',
    desc: 'Unlike resellers that rely on third-party legacy copper, Link3 owns and operates every kilometre of underground optical cabling with automated self-healing ring topologies for 99.99% carrier uptime.',
    authorName: 'By Infrastructure Operations',
    authorRole: 'National NOC & Core Transport Operations',
    ctaText: 'Our Network Architecture',
    ctaHref: '/#why-us',
    pastelBg: '#E6F4EA', // Google Mint Green
    mediaCard: (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at 65% 35%, #059669 0%, #047857 45%, #064E3B 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <svg width="460" height="340" viewBox="0 0 460 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="mintGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#34D399" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="230" cy="170" r="140" fill="url(#mintGlow)" />
          <polygon points="230,90 330,150 290,250 170,250 130,150" stroke="#A7F3D0" strokeWidth="3" fill="none" strokeDasharray="6 6" />
          <line x1="230" y1="90" x2="230" y2="170" stroke="#34D399" strokeWidth="2.5" />
          <line x1="330" y1="150" x2="230" y2="170" stroke="#34D399" strokeWidth="2.5" />
          <line x1="290" y1="250" x2="230" y2="170" stroke="#34D399" strokeWidth="2.5" />
          <line x1="170" y1="250" x2="230" y2="170" stroke="#34D399" strokeWidth="2.5" />
          <line x1="130" y1="150" x2="230" y2="170" stroke="#34D399" strokeWidth="2.5" />
          <circle cx="230" cy="170" r="28" fill="#10B981" stroke="#ffffff" strokeWidth="3.5" />
          <circle cx="230" cy="90" r="11" fill="#ffffff" stroke="#059669" strokeWidth="3" />
          <circle cx="330" cy="150" r="11" fill="#ffffff" stroke="#059669" strokeWidth="3" />
          <circle cx="290" cy="250" r="11" fill="#ffffff" stroke="#059669" strokeWidth="3" />
          <circle cx="170" cy="250" r="11" fill="#ffffff" stroke="#059669" strokeWidth="3" />
          <circle cx="130" cy="150" r="11" fill="#ffffff" stroke="#059669" strokeWidth="3" />
        </svg>
      </div>
    ),
  },
  {
    id: 'slide-enterprise',
    category: 'Enterprise & Cloud',
    title: 'Direct low-latency cloud on-ramps to global hyperscalers',
    shortTitle: 'Direct low-latency cloud on-ramps to global hyperscalers',
    desc: 'Dedicated private interconnects to AWS, Microsoft Azure, and Google Cloud with sub-5ms regional latency, wire-speed DDoS mitigation, and enterprise mission-critical SLAs.',
    authorName: 'By Enterprise Connectivity Services',
    authorRole: 'Global Carrier Peering & Solutions',
    ctaText: 'Enterprise Solutions',
    ctaHref: '/#segments',
    pastelBg: '#FCE8E6', // Google Soft Coral
    mediaCard: (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at 65% 35%, #E11D48 0%, #BE123C 45%, #4C0519 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <svg width="460" height="340" viewBox="0 0 460 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="blueGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="230" cy="170" r="140" fill="url(#blueGlow)" />
          <polygon points="230,75 315,115 315,200 230,260 145,200 145,115" fill="#0B192C" stroke="#93C5FD" strokeWidth="3.5" />
          <path d="M205 168 L225 188 L265 148" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="230" y="228" textAnchor="middle" fill="#93C5FD" fontSize="13" fontWeight="700" letterSpacing="0.12em" fontFamily="system-ui, -apple-system, sans-serif">
            99.99% SLA
          </text>
        </svg>
      </div>
    ),
  },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const canPrev = activeIndex > 0;
  const canNext = activeIndex < slides.length - 1;

  const goToPrev = () => {
    if (canPrev) setActiveIndex((prev) => prev - 1);
  };

  const goToNext = () => {
    if (canNext) setActiveIndex((prev) => prev + 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  // Track offset: each inactive slide takes cardStep = 304px + 24px = 328px
  const cardStep = 304 + 24; // 328px
  const trackOffset = activeIndex * cardStep;

  // Progress indicator width & position
  const progressTrackWidth = 332; // Exactly 332px matching Google Blog
  const indicatorWidth = progressTrackWidth / slides.length;
  const indicatorLeft = activeIndex * indicatorWidth;

  const CARD_HEIGHT = '500px';

  return (
    <section
      style={{
        paddingTop: '20px',
        paddingBottom: '36px',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Outer track wrapper with left margin matching container */}
      <div
        style={{
          paddingLeft: 'max(24px, calc((100vw - 1280px) / 2))',
          paddingRight: '24px',
          width: '100%',
        }}
      >
        {/* Animated Horizontal Carousel Track */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'flex-start',
            transform: `translateX(-${trackOffset}px)`,
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            willChange: 'transform',
          }}
        >
          {slides.map((slide, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div
                key={slide.id}
                style={{
                  width: isActive ? '1296px' : '304px',
                  minWidth: isActive ? '1296px' : '304px',
                  maxWidth: isActive ? '1296px' : '304px',
                  height: CARD_HEIGHT,
                  display: 'flex',
                  flexShrink: 0,
                  overflow: 'hidden',
                  transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1), min-width 0.6s cubic-bezier(0.4, 0, 0.2, 1), max-width 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: isActive ? 'default' : 'pointer',
                  borderRadius: '28px',
                }}
                onClick={() => {
                  if (!isActive) setActiveIndex(idx);
                }}
              >
                {/* Left Text Card (Animates between 428px when active and 304px when preview) */}
                <div
                  style={{
                    width: isActive ? '428px' : '304px',
                    minWidth: isActive ? '428px' : '304px',
                    maxWidth: isActive ? '428px' : '304px',
                    height: CARD_HEIGHT,
                    backgroundColor: slide.pastelBg,
                    borderRadius: '28px',
                    padding: isActive ? '44px 40px' : '36px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flexShrink: 0,
                    overflow: 'hidden',
                    transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1), min-width 0.6s cubic-bezier(0.4, 0, 0.2, 1), max-width 0.6s cubic-bezier(0.4, 0, 0.2, 1), padding 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s ease, box-shadow 0.2s ease',
                    boxShadow: isActive ? '0 4px 20px rgba(0, 0, 0, 0.04)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.06)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <div>
                    {/* Category Kicker */}
                    <div
                      style={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        fontWeight: 500,
                        color: '#1f1f1f',
                        marginBottom: '12px',
                        letterSpacing: '0.1px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {slide.category}
                    </div>

                    {/* Headline */}
                    <h2
                      style={{
                        fontSize: isActive ? '32px' : '22px',
                        lineHeight: isActive ? '40px' : '28px',
                        fontWeight: 400,
                        color: '#1f1f1f',
                        letterSpacing: '-0.01em',
                        marginBottom: isActive ? '12px' : '0px',
                        transition: 'font-size 0.5s cubic-bezier(0.4, 0, 0.2, 1), line-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), margin-bottom 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      {isActive ? slide.title : slide.shortTitle}
                    </h2>

                    {/* Excerpt Body: Smoothly fades in & expands when active */}
                    <div
                      style={{
                        opacity: isActive ? 1 : 0,
                        maxHeight: isActive ? '140px' : '0px',
                        overflow: 'hidden',
                        transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '16px',
                          lineHeight: '24px',
                          color: '#444746',
                          fontWeight: 400,
                        }}
                      >
                        {slide.desc}
                      </p>
                    </div>
                  </div>

                  {/* Attribution & CTA Button */}
                  <div>
                    <div style={{ marginBottom: isActive ? '20px' : '0px', transition: 'margin-bottom 0.5s ease', whiteSpace: 'nowrap' }}>
                      <div style={{ fontSize: '13px', lineHeight: '18px', fontWeight: 600, color: '#1f1f1f' }}>
                        {slide.authorName}
                      </div>
                      <div style={{ fontSize: '12px', lineHeight: '16px', color: '#444746', marginTop: '2px' }}>
                        {slide.authorRole}
                      </div>
                    </div>

                    {/* Pill CTA: Smoothly fades in & expands when active */}
                    <div
                      style={{
                        opacity: isActive ? 1 : 0,
                        maxHeight: isActive ? '50px' : '0px',
                        marginTop: isActive ? '16px' : '0px',
                        overflow: 'hidden',
                        transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.15s, max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), margin-top 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                    >
                      <Link href={slide.ctaHref} className="blog-pill-btn">
                        <span>{slide.ctaText}</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Media Card (Smoothly expands from 0px to 852px alongside text card!) */}
                <div
                  style={{
                    width: isActive ? '852px' : '0px',
                    minWidth: '0px',
                    maxWidth: isActive ? '852px' : '0px',
                    marginLeft: isActive ? '16px' : '0px',
                    height: CARD_HEIGHT,
                    borderRadius: '28px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    opacity: isActive ? 1 : 0,
                    transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1), min-width 0.6s cubic-bezier(0.4, 0, 0.2, 1), max-width 0.6s cubic-bezier(0.4, 0, 0.2, 1), margin-left 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <div style={{ width: '852px', height: CARD_HEIGHT, borderRadius: '28px', overflow: 'hidden' }}>
                    {slide.mediaCard}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Google Blog Controls (Fixed at bottom-left aligned under active text card) */}
        {/* Math: 36px (prev) + 8px (gap) + 36px (next) + 16px (gap) + 332px (progress track) = 428px */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '20px',
            width: '428px',
          }}
        >
          {/* Circular Previous Button */}
          <button
            type="button"
            className="blog-nav-arrow"
            onClick={goToPrev}
            disabled={!canPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          {/* 8px Gap */}
          <div style={{ width: '8px' }} />

          {/* Circular Next Button */}
          <button
            type="button"
            className="blog-nav-arrow"
            onClick={goToNext}
            disabled={!canNext}
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* 16px Gap */}
          <div style={{ width: '16px' }} />

          {/* Google Blog Horizontal Progress Track Bar (332px wide x 2px high) */}
          <div className="blog-progress-track">
            <div
              className="blog-progress-indicator"
              style={{
                width: `${indicatorWidth}px`,
                transform: `translateX(${indicatorLeft}px)`,
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
