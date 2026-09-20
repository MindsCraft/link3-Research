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
      <div className="hero-carousel-image-container">
        <img
          src="/banners/slide 1.webp"
          alt="Link3 2Gbps Symmetrical Optical Fibre in Modern Home"
          className="hero-carousel-real-image"
        />
        <div className="hero-carousel-image-overlay" />
        <div className="hero-carousel-image-badge">
          <div className="hero-carousel-image-badge-dot" />
          <span>2.0 Gbps Live Symmetrical</span>
        </div>
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
      <div className="hero-carousel-image-container">
        <img
          src="/banners/slide 2.webp"
          alt="FTTR Whole-Home Dedicated Micro-Fibre to Every Room"
          className="hero-carousel-real-image"
        />
        <div className="hero-carousel-image-overlay" />
        <div className="hero-carousel-image-badge">
          <div className="hero-carousel-image-badge-dot" />
          <span>FTTR In Every Room</span>
        </div>
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
      <div className="hero-carousel-image-container">
        <img
          src="/banners/slide 4.webp"
          alt="Next-Gen WiFi 7 Tri-Band Hardware Setup"
          className="hero-carousel-real-image"
        />
        <div className="hero-carousel-image-overlay" />
        <div className="hero-carousel-image-badge">
          <div className="hero-carousel-image-badge-dot" />
          <span>WiFi 7 Certified Router</span>
        </div>
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
      <div className="hero-carousel-image-container">
        <img
          src="/banners/slide-5.jpg"
          alt="Link3 100% Owned Nationwide Optical Transport Backbone"
          className="hero-carousel-real-image"
        />
        <div className="hero-carousel-image-overlay" />
        <div className="hero-carousel-image-badge">
          <div className="hero-carousel-image-badge-dot" />
          <span>100% Owned Optical Core</span>
        </div>
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
      <div className="hero-carousel-image-container">
        <img
          src="/banners/slide 3.webp"
          alt="Direct Low-Latency Cloud On-Ramps & Enterprise SLA"
          className="hero-carousel-real-image"
        />
        <div className="hero-carousel-image-overlay" />
        <div className="hero-carousel-image-badge">
          <div className="hero-carousel-image-badge-dot" />
          <span>99.99% Carrier Grade SLA</span>
        </div>
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
    <section className="hero-carousel-section">
      {/* Outer track wrapper with left margin matching container */}
      <div className="hero-carousel-outer">
        {/* Animated Horizontal Carousel Track */}
        <div
          className="hero-carousel-track"
          style={{
            transform: `translateX(-${trackOffset}px)`,
          }}
        >
          {slides.map((slide, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div
                key={slide.id}
                className={`hero-carousel-slide ${
                  isActive ? 'hero-carousel-slide-active' : 'hero-carousel-slide-inactive'
                }`}
                onClick={() => {
                  if (!isActive) setActiveIndex(idx);
                }}
              >
                {/* Left Text Card (Animates between 428px when active and 304px when preview) */}
                <div
                  className={`hero-carousel-text-card ${
                    isActive ? 'hero-carousel-text-card-active' : 'hero-carousel-text-card-inactive'
                  }`}
                  style={{ backgroundColor: slide.pastelBg }}
                >
                  <div>
                    {/* Category Kicker */}
                    <div className="hero-carousel-category">
                      {slide.category}
                    </div>

                    {/* Headline */}
                    <h2
                      className={`hero-carousel-headline ${
                        isActive ? 'hero-carousel-headline-active' : 'hero-carousel-headline-inactive'
                      }`}
                    >
                      {isActive ? slide.title : slide.shortTitle}
                    </h2>

                    {/* Excerpt Body: Smoothly fades in & expands when active */}
                    <div
                      className={`hero-carousel-excerpt-wrap ${
                        isActive ? 'hero-carousel-excerpt-wrap-active' : 'hero-carousel-excerpt-wrap-inactive'
                      }`}
                    >
                      <p className="hero-carousel-excerpt-text">
                        {slide.desc}
                      </p>
                    </div>
                  </div>

                  {/* Attribution & CTA Button */}
                  <div>
                    <div
                      className={`hero-carousel-author-wrap ${
                        isActive ? 'hero-carousel-author-wrap-active' : 'hero-carousel-author-wrap-inactive'
                      }`}
                    >
                      <div className="hero-carousel-author-name">
                        {slide.authorName}
                      </div>
                      <div className="hero-carousel-author-role">
                        {slide.authorRole}
                      </div>
                    </div>

                    {/* Pill CTA: Smoothly fades in & expands when active */}
                    <div
                      className={`hero-carousel-cta-wrap ${
                        isActive ? 'hero-carousel-cta-wrap-active' : 'hero-carousel-cta-wrap-inactive'
                      }`}
                    >
                      <Link href={slide.ctaHref} className="blog-pill-btn">
                        <span>{slide.ctaText}</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Media Card (Smoothly expands alongside text card) */}
                <div
                  className={`hero-carousel-media-wrap ${
                    isActive ? 'hero-carousel-media-wrap-active' : 'hero-carousel-media-wrap-inactive'
                  }`}
                >
                  <div className="hero-carousel-media-inner">
                    {slide.mediaCard}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Google Blog Controls (Fixed at bottom-left aligned under active text card) */}
        <div className="hero-carousel-controls-bar">
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
          <div className="hero-carousel-gap-8" />

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
          <div className="hero-carousel-gap-16" />

          {/* Google Blog Horizontal Progress Track Bar */}
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
