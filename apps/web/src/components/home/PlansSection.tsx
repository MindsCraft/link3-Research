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
    <section id="plans" className="plans-section-root">
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
              <div className="text-primary plans-toggle-subtext-active">
                Now with WiFi 7
              </div>
            </button>

            <button
              type="button"
              onClick={() => setContract('12m')}
              className={`plans-toggle-btn ${contract === '12m' ? 'plans-toggle-btn-active' : ''}`}
            >
              <div>12 Months</div>
              <div className="text-subtle plans-toggle-subtext">
                Perfect for Renters
              </div>
            </button>

            <button
              type="button"
              onClick={() => setContract('nocontract')}
              className={`plans-toggle-btn ${contract === 'nocontract' ? 'plans-toggle-btn-active' : ''}`}
            >
              <div>No Contract</div>
              <div className="text-subtle plans-toggle-subtext">
                Maximum Flexibility
              </div>
            </button>
          </div>
        </div>

        {/* Sign-Up Exclusive Promo Banner */}
        <div className="plans-banner-promo">
          {/* Router icon illustration */}
          <div className="plans-promo-icon-box">
            <Wifi size={18} className="plans-promo-icon" />
          </div>

          <div className="plans-promo-content">
            <span className="badge-yellow plans-promo-badge">
              SIGN-UP EXCLUSIVE PROMO
            </span>
            <span className="plans-promo-text">
              Add on mesh WiFi and enjoy up to RM300 rebate.{' '}
              <Link href="/#plans" className="text-primary plans-promo-link">
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
                <div className="flex items-center justify-between plan-header-row">
                  <span className="plan-speed-text">
                    {plan.speed}
                  </span>
                  {plan.wifi7Badge && (
                    <span className="badge-wifi7">WIFI 7</span>
                  )}
                </div>

                {/* Pricing Display */}
                <div className="plan-price-block">
                  {'promo' in pricing && pricing.promo ? (
                    <div>
                      <div className="plan-price-promo">
                        {pricing.promo}
                      </div>
                      {pricing.original && (
                        <div className="text-subtle plan-price-original">
                          {pricing.original}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="plan-price-row">
                      <span className="plan-price-regular">
                        {pricing.regular}
                      </span>
                      <span className="text-muted plan-price-period">/month</span>
                    </div>
                  )}
                </div>

                {/* Target Audience & Device Description */}
                <div className="plan-audience-box">
                  <div className="flex items-center gap-2">
                    {plan.icon === 'laptop' && <Laptop size={16} className="text-primary plan-audience-icon" />}
                    {plan.icon === 'monitor' && <Monitor size={16} className="text-primary plan-audience-icon" />}
                    {plan.icon === 'gamepad' && <Gamepad2 size={16} className="text-primary plan-audience-icon" />}
                    {plan.icon === 'users' && <Users size={16} className="text-primary plan-audience-icon" />}
                    <span className="plan-audience-title">
                      {plan.desc}
                    </span>
                  </div>
                  <span className="text-subtle plan-audience-sub">
                    {plan.recommendedFor}
                  </span>
                </div>

                {/* What You'll Get Feature List */}
                <div className="plan-features-block">
                  <div className="plan-features-title">
                    What you&apos;ll get
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="plan-feature-row">
                      <div className="plan-icon-circle plan-circle-purple">
                        <Wifi size={14} className="plan-icon-purple" />
                      </div>
                      <span className="plan-feature-text">
                        {plan.features.router}
                      </span>
                    </div>

                    <div className="plan-feature-row">
                      <div className="plan-icon-circle plan-circle-yellow">
                        <Wrench size={14} className="plan-icon-dark" />
                      </div>
                      <span className="plan-feature-text">
                        <span className="badge-yellow plan-badge-inline">FREE</span>
                        Installation
                      </span>
                    </div>

                    <div className="plan-feature-row">
                      <div className="plan-icon-circle plan-circle-primary">
                        <ArrowUpDown size={14} className="text-primary" />
                      </div>
                      <span className="plan-feature-text">
                        {plan.features.speedDetail}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="plan-card-btn-wrap">
                  <Link
                    href="/#contact"
                    className={`${isFeatured ? 'btn btn-pill-primary' : 'btn btn-pill-black'} plan-card-btn`}
                  >
                    SIGN UP NOW
                  </Link>
                </div>

                {/* What you can add on section */}
                <div className="plan-addon-box">
                  <div className="text-subtle plan-addon-title">
                    What you can add on
                  </div>

                  <div className="flex flex-col gap-2 text-muted plan-addon-list">
                    <div className="flex items-start gap-2">
                      <Wifi size={14} className="text-primary plan-addon-icon" />
                      <span>{plan.addOns.mesh}</span>
                    </div>

                    {plan.addOns.fttr && (
                      <div className="flex items-start gap-2">
                        <Sparkles size={14} className="plan-addon-icon-cyan" />
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
        <div className="plans-terms-wrap">
          <button
            type="button"
            onClick={() => setShowTerms(!showTerms)}
            className="plans-terms-btn"
          >
            <span className="font-display plans-terms-title">
              Terms &amp; Conditions
            </span>
            {showTerms ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {showTerms && (
            <div className="plans-terms-content">
              <ol className="plans-terms-list">
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
