import React from 'react';
import Link from 'next/link';
import type { BroadbandPlan } from '@/data/plans';
import { Check, ArrowRight } from 'lucide-react';

interface PlanCardProps {
  plan: BroadbandPlan;
}

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <div
      className={`card flex flex-col justify-between plan-card-item ${
        plan.isPopular ? 'plan-card-item-popular' : ''
      }`}
    >
      {/* Popular or promo badge */}
      {plan.promoBadge && (
        <div
          className={`plan-card-promo-badge ${
            plan.isPopular ? 'plan-card-promo-badge-popular' : ''
          }`}
        >
          {plan.promoBadge}
        </div>
      )}

      {/* Card Header: Speed & Category */}
      <div className={plan.promoBadge ? 'plan-card-header-with-badge' : 'plan-card-header'}>
        <div className="flex items-baseline gap-1 plan-card-speed-row">
          <span className="plan-card-speed-val">
            {plan.speed}
          </span>
          <span className="plan-card-speed-unit">
            {plan.speedUnit}
          </span>
        </div>

        <p className="plan-card-ideal-for">
          {plan.idealFor}
        </p>

        {/* Pricing block */}
        <div className="plan-card-pricing-block">
          <div className="flex items-baseline gap-2">
            {plan.originalPrice && (
              <span className="plan-card-orig-price">
                {plan.currency} {plan.originalPrice}
              </span>
            )}
            <span className="plan-card-price-value">
              {plan.currency} {plan.monthlyPrice}
            </span>
            <span className="plan-card-price-period">
              / {plan.billingPeriod}
            </span>
          </div>

          <div className="plan-card-router-tag">
            📦 {plan.routerIncluded}
          </div>
        </div>

        {/* Feature list */}
        <div className="flex flex-col gap-2.5 plan-card-feature-list">
          {plan.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 plan-card-feature-row">
              <Check size={16} className="plan-card-check-icon" />
              <span className="plan-card-feature-label">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Action CTA */}
      <div>
        <Link
          href={`/check-coverage?plan=${plan.id}`}
          className="btn btn-primary plan-card-cta-btn"
        >
          <span>Sign Up Plan</span>
          <ArrowRight size={16} />
        </Link>
        <div className="plan-card-footnote-wrap">
          <span className="plan-card-footnote">
            Free installation & zero upfront deposit for citizens
          </span>
        </div>
      </div>
    </div>
  );
}
