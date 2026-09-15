'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { plans, ContractType } from '@/data/plans';
import {
  Laptop,
  Monitor,
  Gamepad2,
  Users,
  Wifi,
  Wrench,
  ArrowUpDown,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export function PlansSection() {
  const [contract, setContract] = useState<ContractType>('24m');
  const [showTerms, setShowTerms] = useState(false);

  return (
    <section id="plans" style={{ paddingTop: '24px', paddingBottom: '64px' }}>
      <div className="container">
        {/* Contract Duration Selector Pills */}
        <div className="plans-toggle-wrapper">
          <div className="plans-toggle-group">
            <button
              type="button"
              onClick={() => setContract('24m')}
              className={`plans-toggle-btn ${contract === '24m' ? 'plans-toggle-btn-active' : ''}`}
            >
              <div>24 Months</div>
              <div className="text-primary" style={{ fontSize: '11px', fontWeight: 'var(--font-bold)', marginTop: '2px' }}>
                Now with WiFi 7
              </div>
            </button>

            <button
              type="button"
              onClick={() => setContract('12m')}
              className={`plans-toggle-btn ${contract === '12m' ? 'plans-toggle-btn-active' : ''}`}
            >
              <div>12 Months</div>
              <div className="text-subtle" style={{ fontSize: '11px', fontWeight: 'var(--font-regular)', marginTop: '2px' }}>
                Perfect for Renters
              </div>
            </button>

            <button
              type="button"
              onClick={() => setContract('nocontract')}
              className={`plans-toggle-btn ${contract === 'nocontract' ? 'plans-toggle-btn-active' : ''}`}
            >
              <div>No Contract</div>
              <div className="text-subtle" style={{ fontSize: '11px', fontWeight: 'var(--font-regular)', marginTop: '2px' }}>
                Maximum Flexibility
              </div>
            </button>
          </div>
        </div>

        {/* Sign-Up Exclusive Promo Banner */}
        <div className="plans-banner-promo">
          {/* Router icon illustration */}
          <div
            style={{
              width: '44px',
              height: '32px',
              backgroundColor: '#ffffff',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1.5px solid #0a0a0a',
              flexShrink: 0,
            }}
          >
            <Wifi size={18} style={{ color: '#0a0a0a' }} />
          </div>

          <div style={{ flex: 1, fontSize: '13px' }}>
            <span className="badge-yellow" style={{ marginRight: '8px', display: 'inline-block' }}>
              SIGN-UP EXCLUSIVE PROMO
            </span>
            <span style={{ color: '#1f2937', fontWeight: 'var(--font-medium)' }}>
              Add on mesh WiFi and enjoy up to RM300 rebate.{' '}
              <Link href="/#plans" className="text-primary" style={{ fontWeight: 'var(--font-bold)', textDecoration: 'underline' }}>
                More info
              </Link>
            </span>
          </div>
        </div>

        {/* 4-Column Plans Grid */}
        <div className="plans-grid-4">
          {plans.map((plan) => {
            const pricing = plan.monthlyPrice[contract];
            const isFeatured = plan.featured;

            return (
              <div
                key={plan.id}
                className={`plan-card-root ${isFeatured ? 'plan-card-featured' : ''}`}
              >
                {/* Top Offer Badge for Featured */}
                {isFeatured && (
                  <div className="plan-featured-badge">
                    {plan.specialOfferBadge}
                  </div>
                )}

                {/* Plan Header: WiFi 7 tag & Speed */}
                <div className="flex items-center justify-between" style={{ marginBottom: '8px' }}>
                  <span className="plan-speed-text">
                    {plan.speed}
                  </span>
                  {plan.wifi7Badge && (
                    <span className="badge-wifi7">WIFI 7</span>
                  )}
                </div>

                {/* Pricing Display */}
                <div style={{ minHeight: '62px', marginBottom: '16px' }}>
                  {'promo' in pricing && pricing.promo ? (
                    <div>
                      <div className="plan-price-promo">
                        {pricing.promo}
                      </div>
                      {pricing.original && (
                        <div className="text-subtle" style={{ fontSize: '12px', marginTop: '4px' }}>
                          {pricing.original}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center" style={{ alignItems: 'baseline', gap: '4px' }}>
                      <span className="plan-price-regular">
                        {pricing.regular}
                      </span>
                      <span className="text-muted" style={{ fontSize: '14px' }}>/month</span>
                    </div>
                  )}
                </div>

                {/* Target Audience & Device Description */}
                <div className="plan-audience-box">
                  <div className="flex items-center gap-2">
                    {plan.icon === 'laptop' && <Laptop size={16} className="text-primary" style={{ flexShrink: 0 }} />}
                    {plan.icon === 'monitor' && <Monitor size={16} className="text-primary" style={{ flexShrink: 0 }} />}
                    {plan.icon === 'gamepad' && <Gamepad2 size={16} className="text-primary" style={{ flexShrink: 0 }} />}
                    {plan.icon === 'users' && <Users size={16} className="text-primary" style={{ flexShrink: 0 }} />}
                    <span style={{ fontSize: '13px', fontWeight: 'var(--font-bold)', color: 'var(--text)', lineHeight: 1.25 }}>
                      {plan.desc}
                    </span>
                  </div>
                  <span className="text-subtle" style={{ fontSize: '11px', paddingLeft: '24px' }}>
                    {plan.recommendedFor}
                  </span>
                </div>

                {/* What You'll Get Feature List */}
                <div style={{ marginBottom: '24px', flex: 1 }}>
                  <div style={{ fontSize: '12px', fontWeight: 'var(--font-bold)', color: 'var(--text-muted)', marginBottom: '12px' }}>
                    What you&apos;ll get
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="plan-feature-row">
                      <div className="plan-icon-circle" style={{ backgroundColor: '#F3ECFF' }}>
                        <Wifi size={14} style={{ color: '#9C60FF' }} />
                      </div>
                      <span style={{ fontSize: '13px', color: 'var(--text)', fontWeight: 'var(--font-medium)' }}>
                        {plan.features.router}
                      </span>
                    </div>

                    <div className="plan-feature-row">
                      <div className="plan-icon-circle" style={{ backgroundColor: '#FFFBE6' }}>
                        <Wrench size={14} style={{ color: '#0a0a0a' }} />
                      </div>
                      <span style={{ fontSize: '13px', color: 'var(--text)' }}>
                        <span className="badge-yellow" style={{ marginRight: '6px' }}>FREE</span>
                        Installation
                      </span>
                    </div>

                    <div className="plan-feature-row">
                      <div className="plan-icon-circle" style={{ backgroundColor: 'var(--brand-primary-subtle)' }}>
                        <ArrowUpDown size={14} className="text-primary" />
                      </div>
                      <span style={{ fontSize: '13px', color: 'var(--text)', fontWeight: 'var(--font-medium)' }}>
                        {plan.features.speedDetail}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div style={{ marginBottom: '20px' }}>
                  <Link
                    href="/#contact"
                    className={isFeatured ? 'btn btn-pill-primary' : 'btn btn-pill-black'}
                    style={{
                      width: '100%',
                      padding: '12px 0',
                      fontSize: '13px',
                    }}
                  >
                    SIGN UP NOW
                  </Link>
                </div>

                {/* What you can add on section */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  <div className="text-subtle" style={{ fontSize: '11px', fontWeight: 'var(--font-medium)', marginBottom: '8px' }}>
                    What you can add on
                  </div>

                  <div className="flex flex-col gap-2 text-muted" style={{ fontSize: '12px' }}>
                    <div className="flex items-start gap-2">
                      <Wifi size={14} className="text-primary" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{plan.addOns.mesh}</span>
                    </div>

                    {plan.addOns.fttr && (
                      <div className="flex items-start gap-2">
                        <Sparkles size={14} style={{ color: '#00C4DF', marginTop: '2px', flexShrink: 0 }} />
                        <span>{plan.addOns.fttr}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Collapsible Terms & Conditions */}
        <div style={{ marginTop: '48px', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
          <button
            type="button"
            onClick={() => setShowTerms(!showTerms)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '8px 0',
            }}
          >
            <span className="font-display" style={{ fontSize: '14px', fontWeight: 'var(--font-bold)', color: 'var(--text)' }}>
              Terms &amp; Conditions
            </span>
            {showTerms ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {showTerms && (
            <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <ol style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>Price(s) displayed are subject to 6% Service Tax where applicable.</li>
                <li>The bill discount(s) apply to your full month&apos;s subscription fee(s). Other charges such as voice calls, deposits, add-ons etc still apply.</li>
                <li>Our 2Gbps plan is only available in selected locations. We&apos;re working on expanding coverage as fast and wide as we can.</li>
                <li>All promotions displayed are applicable to 24-month contract plans and available for a limited time only. Terms and conditions apply.</li>
                <li>Fibre-To-The-Room (FTTR) is only available in selected locations.</li>
                <li>To use voice services, you&apos;ll need a fixed line phone, available at most electronic retailers.</li>
                <li>The 12/24-month contract is tied to the service address. Relocation is subject to coverage availability.</li>
                <li>Read our Terms and Conditions in full <Link href="/#faq" className="text-primary">here</Link>.</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
