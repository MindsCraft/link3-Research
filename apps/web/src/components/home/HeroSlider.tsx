'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { heroSlidesData } from '@/data/hero';
import { sampleCoverageList, type CoverageLocation } from '@/data/coverage';
import {
  ArrowRight,
  Check,
  Search,
  CheckCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
} from 'lucide-react';

export function HeroSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Inline coverage check state
  const [coverageInput, setCoverageInput] = useState('');
  const [coverageChecked, setCoverageChecked] = useState(false);
  const [coverageResult, setCoverageResult] = useState<CoverageLocation | null>(null);

  const slide = heroSlidesData[currentIdx];

  // Auto advance every 8 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroSlidesData.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleCoverageSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!coverageInput.trim()) return;

    setCoverageChecked(true);
    const q = coverageInput.toLowerCase().trim();
    const match = sampleCoverageList.find(
      (loc) =>
        loc.building.toLowerCase().includes(q) ||
        loc.street.toLowerCase().includes(q) ||
        loc.postcode.includes(q) ||
        loc.city.toLowerCase().includes(q)
    );
    setCoverageResult(match || null);
  };

  const handleQuickSelect = (loc: CoverageLocation) => {
    setCoverageInput(loc.building);
    setCoverageChecked(true);
    setCoverageResult(loc);
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="hero-slider-section"
    >
      <div className="container">
        {/* Main Grid: Left copy & Right visual display */}
        <div className="grid grid-2 gap-12 hero-slider-grid">
          {/* Left Column: Copy & Actions */}
          <div>
            {/* Badge */}
            <div className="badge badge-blue hero-slider-badge">
              <Zap size={13} />
              <span>{slide.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="hero-slider-headline">
              {slide.headline}{' '}
              <span className="hero-slider-accent-text">{slide.headlineAccent}</span>
            </h1>

            {/* Subhead */}
            <p className="hero-slider-subhead">
              {slide.subhead}
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-col gap-2 hero-slider-highlights">
              {slide.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 hero-slider-highlight-item">
                  <div className="hero-slider-check-circle">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="hero-slider-highlight-label">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex items-center gap-3 hero-slider-actions-row">
              <Link href={slide.primaryCtaHref} className="btn btn-primary btn-lg">
                <span>{slide.primaryCtaText}</span>
                <ArrowRight size={16} />
              </Link>
              <Link href={slide.secondaryCtaHref} className="btn btn-outline btn-lg">
                <span>{slide.secondaryCtaText}</span>
              </Link>
            </div>

            {/* Inline Fast Coverage Check Widget */}
            <div className="hero-slider-coverage-box">
              <div className="hero-slider-coverage-header">
                <Search size={14} className="hero-slider-coverage-icon" />
                <span>Quick Coverage Lookup in Your Area</span>
              </div>

              <form onSubmit={handleCoverageSearch} className="flex gap-2">
                <input
                  type="text"
                  value={coverageInput}
                  onChange={(e) => setCoverageInput(e.target.value)}
                  placeholder="Enter building name, street, or postcode..."
                  className="form-input hero-slider-coverage-input"
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-sm hero-slider-coverage-btn"
                >
                  <span>Check</span>
                </button>
              </form>

              {/* Sample area chips */}
              <div className="flex items-center gap-1.5 hero-slider-chips-row">
                <span className="text-subtle">Try:</span>
                {sampleCoverageList.slice(0, 3).map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => handleQuickSelect(loc)}
                    className="hero-slider-chip-btn"
                  >
                    {loc.building}
                  </button>
                ))}
              </div>

              {/* Inline feedback banner */}
              {coverageChecked && (
                <div
                  className={`hero-slider-feedback-box ${
                    coverageResult
                      ? 'hero-slider-feedback-success'
                      : 'hero-slider-feedback-notfound'
                  }`}
                >
                  {coverageResult ? (
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} className="hero-slider-coverage-icon" />
                        <span className="hero-slider-accent-text text-bold">
                          {coverageResult.building} is covered! (Up to {coverageResult.maxSpeed})
                        </span>
                      </div>
                      <Link
                        href="/#plans"
                        className="hero-slider-feedback-link hero-slider-feedback-link-success"
                      >
                        Order Plan →
                      </Link>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <AlertCircle size={16} className="text-muted" />
                        <span className="text-muted">
                          Address not found in current optical ring.
                        </span>
                      </div>
                      <Link
                        href="/#coverage"
                        className="hero-slider-feedback-link hero-slider-feedback-link-dark"
                      >
                        Wishlist →
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Visual Technical Display Card */}
          <div className="hero-slider-visual-col">
            <div className="card hero-slider-telemetry-card">
              {/* Header inside card */}
              <div className="flex items-center justify-between hero-slider-telemetry-header">
                <div className="flex items-center gap-2">
                  <span className="hero-slider-status-dot" />
                  <span className="hero-slider-status-label">
                    NETWORK STATUS: OPERATIONAL
                  </span>
                </div>
                <span className="hero-slider-gpon-badge">
                  GPON / XGS-PON
                </span>
              </div>

              {/* Price Banner */}
              {slide.priceTag && (
                <div className="hero-slider-price-box">
                  <div className="hero-slider-price-prefix">
                    {slide.priceTag.prefix}
                  </div>
                  <div className="hero-slider-price-amount">
                    {slide.priceTag.amount}
                  </div>
                  <div className="hero-slider-price-suffix">
                    {slide.priceTag.suffix}
                  </div>
                </div>
              )}

              {/* Telemetry Metrics */}
              <div className="hero-slider-telemetry-wrap">
                <div className="hero-slider-telemetry-title">
                  {slide.visualData.title}
                </div>
                <div className="flex flex-col gap-2">
                  {slide.visualData.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between hero-slider-metric-row"
                    >
                      <span className="hero-slider-metric-label">{m.label}</span>
                      <span className="hero-slider-metric-val">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-slider-caption">
                {slide.visualData.caption}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Slide Controller Pills */}
        <div className="flex items-center justify-between gap-4 hero-slider-controller-bar">
          {/* Slide Tab Buttons */}
          <div className="flex items-center gap-2 hero-slider-tabs-row">
            {heroSlidesData.map((s, idx) => {
              const isActive = idx === currentIdx;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`hero-slider-tab-btn ${
                    isActive ? 'hero-slider-tab-btn-active' : 'hero-slider-tab-btn-inactive'
                  }`}
                >
                  {s.id === 'slide-works'
                    ? '1. Internet that just works'
                    : s.id === 'slide-2gbps'
                    ? '2. Up to 2Gbps Symmetrical'
                    : '3. Whole-Home FTTR'}
                </button>
              );
            })}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() =>
                setCurrentIdx((prev) => (prev === 0 ? heroSlidesData.length - 1 : prev - 1))
              }
              className="btn btn-outline btn-sm hero-slider-nav-btn"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="hero-slider-nav-counter">
              {currentIdx + 1} / {heroSlidesData.length}
            </span>
            <button
              onClick={() => setCurrentIdx((prev) => (prev + 1) % heroSlidesData.length)}
              className="btn btn-outline btn-sm hero-slider-nav-btn"
              aria-label="Next Slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
