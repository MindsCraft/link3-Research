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
      className="card flex flex-col justify-between"
      style={{
        position: 'relative',
        borderColor: plan.isPopular ? 'var(--border-strong)' : 'var(--border)',
        borderWidth: plan.isPopular ? '2px' : '1px',
      }}
    >
      {/* Popular or promo badge */}
      {plan.promoBadge && (
        <div style={{
          position: 'absolute',
          top: '-12px',
          left: '20px',
          backgroundColor: plan.isPopular ? 'var(--accent-blue)' : 'var(--bg-inverse)',
          color: 'var(--text-inverse)',
          fontSize: '11px',
          fontWeight: 'var(--font-bold)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          padding: '4px 10px',
          borderRadius: 'var(--radius)',
        }}>
          {plan.promoBadge}
        </div>
      )}

      {/* Card Header: Speed & Category */}
      <div style={{ marginTop: plan.promoBadge ? '8px' : '0' }}>
        <div className="flex items-baseline gap-1" style={{ marginBottom: '8px' }}>
          <span style={{ fontSize: '3rem', fontWeight: 'var(--font-bold)', lineHeight: '1' }}>
            {plan.speed}
          </span>
          <span style={{ fontSize: '1.25rem', fontWeight: 'var(--font-bold)', color: 'var(--accent-blue)' }}>
            {plan.speedUnit}
          </span>
        </div>

        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px', minHeight: '38px' }}>
          {plan.idealFor}
        </p>

        {/* Pricing block */}
        <div style={{
          padding: '16px 0',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          marginBottom: '20px',
        }}>
          <div className="flex items-baseline gap-2">
            {plan.originalPrice && (
              <span style={{
                fontSize: '14px',
                color: 'var(--text-subtle)',
                textDecoration: 'line-through',
              }}>
                {plan.currency} {plan.originalPrice}
              </span>
            )}
            <span style={{ fontSize: '1.75rem', fontWeight: 'var(--font-bold)', color: 'var(--text)' }}>
              {plan.currency} {plan.monthlyPrice}
            </span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              / {plan.billingPeriod}
            </span>
          </div>

          <div style={{
            marginTop: '8px',
            fontSize: '12px',
            fontWeight: 'var(--font-medium)',
            color: 'var(--text)',
            backgroundColor: 'var(--bg-subtle)',
            padding: '6px 10px',
            borderRadius: 'var(--radius)',
            border: '1px solid var(--border)',
          }}>
            📦 {plan.routerIncluded}
          </div>
        </div>

        {/* Feature list */}
        <div className="flex flex-col gap-2.5" style={{ marginBottom: '24px' }}>
          {plan.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2" style={{ fontSize: '13px' }}>
              <Check size={16} style={{ color: 'var(--accent-blue)', marginTop: '2px', flexShrink: 0 }} />
              <span style={{ color: 'var(--text)' }}>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Action CTA */}
      <div>
        <Link
          href={`/check-coverage?plan=${plan.id}`}
          className="btn btn-primary"
          style={{ width: '100%', textDecoration: 'none' }}
        >
          <span>Sign Up Plan</span>
          <ArrowRight size={16} />
        </Link>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>
            Free installation & zero upfront deposit for citizens
          </span>
        </div>
      </div>
    </div>
  );
}
