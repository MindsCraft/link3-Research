'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { jioBannerSlides, type JioBannerSlide } from '@/data/jioBanners';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Wifi,
  MapPin,
  Globe,
  Headphones,
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowRightLeft,
} from 'lucide-react';

export function JioHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [rechargeTab, setRechargeTab] = useState<'broadband' | 'enterprise'>('broadband');
  const [subscriberInput, setSubscriberInput] = useState('');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = jioBannerSlides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // 5-second autoplay like Jio.com
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlide]);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="jio-fullwidth-hero">
      {/* 1. Full-Width Carousel Track - Active slide ALWAYS centered */}
      <div
        className="jio-carousel-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="jio-carousel-track"
          style={
            {
              '--current-slide': currentSlide,
            } as React.CSSProperties
          }
        >
          {jioBannerSlides.map((slide, idx) => {
            const isActive = idx === currentSlide;
            const hasCustomImage = Boolean(slide.image && !failedImages[slide.id]);
            const isFullImageMode = hasCustomImage && slide.displayMode === 'full-image';

            return (
              <div
                key={slide.id}
                className={`jio-card-item ${isActive ? 'jio-card-active' : ''}`}
                style={{ background: slide.bgGradient }}
              >
                {/* Mode A: Full Banner Image Mode */}
                {isFullImageMode ? (
                  <Link href={slide.ctaHref} className="jio-card-full-image-link">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="jio-card-full-image"
                      onError={() => handleImageError(slide.id)}
                    />
                  </Link>
                ) : (
                  <>
                    {/* Mode B: Hybrid Mode (Photo backdrop or right-hand visual + Text & Spec Card) */}
                    {hasCustomImage && (
                      <div className="jio-card-bg-image-wrap">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={slide.image}
                          alt={slide.alt}
                          className="jio-card-bg-image"
                          onError={() => handleImageError(slide.id)}
                        />
                        <div className="jio-card-bg-overlay" />
                      </div>
                    )}

                    {/* Ambient background glow */}
                    <div className="jio-card-ambient-shape" />

                    {/* Left Side: Editorial Typography & Blue Pill CTA */}
                    <div className="jio-card-left">
                      <div className="jio-card-badge">
                        <Sparkles size={13} className="jio-sparkle-icon" />
                        <span>{slide.badge}</span>
                      </div>

                      <h1 className="jio-card-heading">{slide.title}</h1>

                      <p className="jio-card-description">{slide.description}</p>

                      <div className="jio-card-actions">
                        <Link href={slide.ctaHref} className="jio-pill-btn">
                          <span>{slide.ctaText}</span>
                          <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>

                    {/* Right Side: Floating Spec Badge Card (Matching Jio's floating plan card) */}
                    <div className="jio-card-right">
                      {slide.floatingBadge && (
                        <div className="jio-floating-spec-card">
                          {slide.floatingBadge.price && (
                            <div className="jio-spec-price-row">
                              <div className="jio-spec-price">{slide.floatingBadge.price}</div>
                              {slide.floatingBadge.period && (
                                <div className="jio-spec-period">{slide.floatingBadge.period}</div>
                              )}
                            </div>
                          )}

                          {slide.floatingBadge.speed && (
                            <div className="jio-spec-speed">
                              <Zap size={14} className="jio-zap-icon" />
                              <span>{slide.floatingBadge.speed}</span>
                            </div>
                          )}

                          <div className="jio-spec-divider" />

                          <ul className="jio-spec-features">
                            {slide.floatingBadge.items.map((item, i) => (
                              <li key={i} className="jio-spec-feature-item">
                                <CheckCircle2 size={13} className="jio-spec-check" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>

                          {slide.floatingBadge.partnerLogos && (
                            <div className="jio-spec-partners">
                              <span className="jio-spec-partners-label">Includes OTT Apps</span>
                              <div className="jio-spec-partner-tags">
                                {slide.floatingBadge.partnerLogos.map((p, i) => (
                                  <span key={i} className="jio-partner-tag">
                                    {p}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </>
                )}

                {/* Floating Bottom-Right Pill Counter: [ ← 1/4 → ] */}
                {isActive && (
                  <div className="jio-pill-counter">
                    <button
                      type="button"
                      className="jio-counter-arrow"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        prevSlide();
                      }}
                      aria-label="Previous slide"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="jio-counter-text">
                      {currentSlide + 1} / {totalSlides}
                    </span>
                    <button
                      type="button"
                      className="jio-counter-arrow"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        nextSlide();
                      }}
                      aria-label="Next slide"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Jio Signature "Recharge or pay bills" Interactive Component */}
      <div className="jio-recharge-section">
        <div className="container">
          <div className="jio-recharge-card">
            <h2 className="jio-recharge-title">Recharge or pay bills</h2>

            {/* Segment Toggle Pills: [ Home Fibre ] [ Enterprise ] */}
            <div className="jio-recharge-tabs">
              <button
                type="button"
                className={`jio-recharge-tab ${rechargeTab === 'broadband' ? 'jio-recharge-tab-active' : ''}`}
                onClick={() => setRechargeTab('broadband')}
              >
                <Wifi size={16} />
                <span>Home Fibre</span>
              </button>

              <button
                type="button"
                className={`jio-recharge-tab ${rechargeTab === 'enterprise' ? 'jio-recharge-tab-active' : ''}`}
                onClick={() => setRechargeTab('enterprise')}
              >
                <Globe size={16} />
                <span>Enterprise</span>
              </button>
            </div>

            {/* Combined Subscriber Input + Proceed Pill */}
            <form
              className="jio-recharge-form"
              onSubmit={(e) => {
                e.preventDefault();
                window.open('https://selfcare.link3.net', '_blank');
              }}
            >
              <div className="jio-input-group">
                <div className="jio-input-prefix">+880</div>
                <input
                  type="text"
                  className="jio-recharge-input"
                  placeholder={
                    rechargeTab === 'broadband'
                      ? 'Enter Mobile Number or User ID'
                      : 'Enter Enterprise Corporate Account ID'
                  }
                  value={subscriberInput}
                  onChange={(e) => setSubscriberInput(e.target.value)}
                  aria-label="Subscriber ID or Phone Number"
                />
              </div>

              <button type="submit" className="jio-proceed-btn">
                Proceed
              </button>
            </form>

            {/* 5 Circular Quick Action Icons (Matching Jio's circular buttons with labels below) */}
            <div className="jio-circle-actions-row">
              <Link href="/#plans" className="jio-circle-action-item">
                <div className="jio-circle-icon-btn">
                  <Wifi size={22} />
                </div>
                <span className="jio-circle-action-label">Get Link3 Fibre</span>
              </Link>

              <Link href="/#coverage" className="jio-circle-action-item">
                <div className="jio-circle-icon-btn">
                  <MapPin size={22} />
                </div>
                <span className="jio-circle-action-label">Check Coverage</span>
              </Link>

              <Link href="/#contact" className="jio-circle-action-item">
                <div className="jio-circle-icon-btn">
                  <ArrowRightLeft size={22} />
                </div>
                <span className="jio-circle-action-label">Switch to Link3</span>
              </Link>

              <Link href="/#plans" className="jio-circle-action-item">
                <div className="jio-circle-icon-btn">
                  <Zap size={22} />
                </div>
                <span className="jio-circle-action-label">VIP Booster</span>
              </Link>

              <a
                href="https://selfcare.link3.net"
                target="_blank"
                rel="noopener noreferrer"
                className="jio-circle-action-item"
              >
                <div className="jio-circle-icon-btn">
                  <Headphones size={22} />
                </div>
                <span className="jio-circle-action-label">Support 24/7</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
