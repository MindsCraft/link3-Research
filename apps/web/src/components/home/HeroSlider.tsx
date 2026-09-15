'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { heroSlidesData, type HeroSlide } from '@/data/hero';
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
  Activity,
  Wifi,
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
      style={{
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        paddingTop: '48px',
        paddingBottom: '56px',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Main Grid: Left copy & Right visual display */}
        <div className="grid grid-2 gap-12" style={{ alignItems: 'center' }}>
          {/* Left Column: Copy & Actions */}
          <div>
            {/* Badge */}
            <div className="badge badge-blue" style={{ marginBottom: '16px' }}>
              <Zap size={13} />
              <span>{slide.badge}</span>
            </div>

            {/* Headline */}
            <h1 style={{ marginBottom: '16px', lineHeight: '1.15' }}>
              {slide.headline}{' '}
              <span style={{ color: 'var(--accent-blue)' }}>{slide.headlineAccent}</span>
            </h1>

            {/* Subhead */}
            <p
              style={{
                fontSize: '17px',
                color: 'var(--text-muted)',
                marginBottom: '24px',
                lineHeight: '1.6',
                maxWidth: '540px',
              }}
            >
              {slide.subhead}
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-col gap-2" style={{ marginBottom: '28px' }}>
              {slide.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5" style={{ fontSize: '14px' }}>
                  <div
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: 'var(--radius)',
                      backgroundColor: 'var(--accent-blue-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-blue)',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span style={{ color: 'var(--text)', fontWeight: 'var(--font-medium)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex items-center gap-3" style={{ flexWrap: 'wrap', marginBottom: '32px' }}>
              <Link href={slide.primaryCtaHref} className="btn btn-primary btn-lg">
                <span>{slide.primaryCtaText}</span>
                <ArrowRight size={16} />
              </Link>
              <Link href={slide.secondaryCtaHref} className="btn btn-outline btn-lg">
                <span>{slide.secondaryCtaText}</span>
              </Link>
            </div>

            {/* Inline Fast Coverage Check Widget */}
            <div
              style={{
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '16px',
                maxWidth: '540px',
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 'var(--font-bold)',
                  color: 'var(--text)',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Search size={14} style={{ color: 'var(--accent-blue)' }} />
                <span>Quick Coverage Lookup in Your Area</span>
              </div>

              <form onSubmit={handleCoverageSearch} className="flex gap-2">
                <input
                  type="text"
                  value={coverageInput}
                  onChange={(e) => setCoverageInput(e.target.value)}
                  placeholder="Enter building name, street, or postcode..."
                  className="form-input"
                  style={{ fontSize: '13px', padding: '8px 12px' }}
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-sm"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  <span>Check</span>
                </button>
              </form>

              {/* Sample area chips */}
              <div
                className="flex items-center gap-1.5"
                style={{ marginTop: '10px', flexWrap: 'wrap', fontSize: '11px' }}
              >
                <span style={{ color: 'var(--text-subtle)' }}>Try:</span>
                {sampleCoverageList.slice(0, 3).map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => handleQuickSelect(loc)}
                    style={{
                      border: '1px solid var(--border)',
                      backgroundColor: 'var(--bg)',
                      color: 'var(--text-muted)',
                      borderRadius: 'var(--radius)',
                      padding: '2px 6px',
                      fontSize: '11px',
                      cursor: 'pointer',
                    }}
                  >
                    {loc.building}
                  </button>
                ))}
              </div>

              {/* Inline feedback banner */}
              {coverageChecked && (
                <div
                  style={{
                    marginTop: '12px',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius)',
                    fontSize: '12px',
                    backgroundColor: coverageResult
                      ? 'var(--accent-blue-subtle)'
                      : 'var(--bg)',
                    border: coverageResult
                      ? '1px solid #c7d8ed'
                      : '1px solid var(--border)',
                  }}
                >
                  {coverageResult ? (
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
                        <span style={{ color: 'var(--accent-blue)', fontWeight: 'var(--font-bold)' }}>
                          {coverageResult.building} is covered! (Up to {coverageResult.maxSpeed})
                        </span>
                      </div>
                      <Link
                        href="/#plans"
                        style={{
                          fontSize: '11px',
                          fontWeight: 'var(--font-bold)',
                          color: 'var(--accent-blue)',
                          textDecoration: 'underline',
                        }}
                      >
                        Order Plan →
                      </Link>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <AlertCircle size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                        <span style={{ color: 'var(--text-muted)' }}>
                          Address not found in current optical ring.
                        </span>
                      </div>
                      <Link
                        href="/#coverage"
                        style={{
                          fontSize: '11px',
                          fontWeight: 'var(--font-bold)',
                          color: 'var(--text)',
                          textDecoration: 'underline',
                        }}
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
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="card"
              style={{
                width: '100%',
                maxWidth: '460px',
                padding: '32px',
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--border-strong)',
              }}
            >
              {/* Header inside card */}
              <div
                className="flex items-center justify-between"
                style={{ paddingBottom: '16px', borderBottom: '1px solid var(--border)' }}
              >
                <div className="flex items-center gap-2">
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-blue)',
                    }}
                  />
                  <span style={{ fontSize: '12px', fontWeight: 'var(--font-bold)', color: 'var(--text)' }}>
                    NETWORK STATUS: OPERATIONAL
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    color: 'var(--accent-blue)',
                    fontWeight: 'var(--font-bold)',
                  }}
                >
                  GPON / XGS-PON
                </span>
              </div>

              {/* Price Banner */}
              {slide.priceTag && (
                <div
                  style={{
                    marginTop: '20px',
                    marginBottom: '20px',
                    padding: '16px',
                    backgroundColor: 'var(--bg)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 'var(--font-bold)',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '4px',
                    }}
                  >
                    {slide.priceTag.prefix}
                  </div>
                  <div
                    style={{
                      fontSize: '2.5rem',
                      fontWeight: 'var(--font-bold)',
                      color: 'var(--accent-blue)',
                      lineHeight: '1',
                    }}
                  >
                    {slide.priceTag.amount}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                      marginTop: '4px',
                      fontWeight: 'var(--font-medium)',
                    }}
                  >
                    {slide.priceTag.suffix}
                  </div>
                </div>
              )}

              {/* Telemetry Metrics */}
              <div style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 'var(--font-bold)',
                    color: 'var(--text)',
                    marginBottom: '10px',
                  }}
                >
                  {slide.visualData.title}
                </div>
                <div className="flex flex-col gap-2">
                  {slide.visualData.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between"
                      style={{
                        padding: '10px 14px',
                        backgroundColor: 'var(--bg)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)',
                        fontSize: '13px',
                      }}
                    >
                      <span style={{ color: 'var(--text-muted)' }}>{m.label}</span>
                      <span
                        style={{
                          fontWeight: 'var(--font-bold)',
                          color: 'var(--text)',
                          fontFamily: 'monospace',
                        }}
                      >
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--text-subtle)',
                  textAlign: 'center',
                  borderTop: '1px solid var(--border)',
                  paddingTop: '12px',
                }}
              >
                {slide.visualData.caption}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Slide Controller Pills */}
        <div
          className="flex items-center justify-between gap-4"
          style={{
            marginTop: '40px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border)',
          }}
        >
          {/* Slide Tab Buttons */}
          <div className="flex items-center gap-2" style={{ flexWrap: 'wrap' }}>
            {heroSlidesData.map((s, idx) => {
              const isActive = idx === currentIdx;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentIdx(idx)}
                  style={{
                    padding: '8px 16px',
                    fontSize: '12px',
                    fontWeight: isActive ? 'var(--font-bold)' : 'var(--font-medium)',
                    color: isActive ? 'var(--text-inverse)' : 'var(--text)',
                    backgroundColor: isActive ? 'var(--accent-blue)' : 'var(--bg-subtle)',
                    border: isActive ? '1px solid var(--accent-blue)' : '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
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
              className="btn btn-outline btn-sm"
              style={{ padding: '6px 10px' }}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={16} />
            </button>
            <span style={{ fontSize: '12px', fontFamily: 'monospace', color: 'var(--text-muted)' }}>
              {currentIdx + 1} / {heroSlidesData.length}
            </span>
            <button
              onClick={() => setCurrentIdx((prev) => (prev + 1) % heroSlidesData.length)}
              className="btn btn-outline btn-sm"
              style={{ padding: '6px 10px' }}
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
