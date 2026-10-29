'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HeroCarousel, type BlogSlide } from '@/components/home/HeroCarousel';
import { businessPlans, enterpriseSolutions, wholesaleOfferings } from '@/data/business';
import { siteConfig } from '@/data/site';
import {
  ShieldCheck,
  Zap,
  Building2,
  Clock,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  FileText,
  ChevronDown,
  Sparkles,
  Server,
  Network,
  Cloud,
} from 'lucide-react';

const businessSlides: BlogSlide[] = [
  {
    id: 'biz-2gbps',
    category: 'SME & Corporate Connectivity',
    title: 'Dedicated symmetrical business fibre up to 2Gbps with SLA',
    shortTitle: 'Dedicated symmetrical business fibre up to 2Gbps with SLA',
    desc: 'Uncontended, carrier-grade optical connectivity engineered for mission-critical operations, real-time POS processing, and high-density office productivity.',
    authorName: 'Link3 Enterprise Engineering',
    authorRole: 'Optical Transport & B2B Solutions',
    ctaText: 'View Business Plans',
    ctaHref: '#plans',
    pastelBg: '#E8F0FE',
    mediaCard: (
      <div className="hero-carousel-image-container">
        <img
          src="/banners/slide 1.webp"
          alt="Link3 High-Speed Dedicated Business Fibre"
          className="hero-carousel-real-image"
        />
        <div className="hero-carousel-image-overlay" />
        <div className="hero-carousel-image-badge">
          <div className="hero-carousel-image-badge-dot" />
          <span>99.95% Carrier-Grade SLA</span>
        </div>
      </div>
    ),
  },
  {
    id: 'biz-ftto',
    category: 'Commercial Office Infrastructure',
    title: 'Zero-loss micro-optical fibre direct to every workstation (FTTO)',
    shortTitle: 'Zero-loss micro-optical fibre direct to every workstation (FTTO)',
    desc: 'Banish dead zones, concrete partition interference, and copper latency. Hair-thin transparent optical fibre delivers dedicated gigabit bandwidth to every boardroom and desk.',
    authorName: 'Corporate Solutions Group',
    authorRole: 'In-Building Structured Cabling Lab',
    ctaText: 'Explore FTTO Solutions',
    ctaHref: '#solutions',
    pastelBg: '#F3E8FD',
    mediaCard: (
      <div className="hero-carousel-image-container">
        <img
          src="/banners/slide 2.webp"
          alt="FTTO Fibre to the Office Workstations"
          className="hero-carousel-real-image"
        />
        <div className="hero-carousel-image-overlay" />
        <div className="hero-carousel-image-badge">
          <div className="hero-carousel-image-badge-dot" />
          <span>Fibre To The Office (FTTO)</span>
        </div>
      </div>
    ),
  },
  {
    id: 'biz-wifi7',
    category: 'Enterprise Hardware',
    title: 'Business WiFi 7 tri-band gateways with multi-gigabit ports',
    shortTitle: 'Business WiFi 7 tri-band gateways with multi-gigabit ports',
    desc: 'Support 200+ concurrent employee devices with 320MHz channel widths, 4K-QAM modulation, and automated band steering with zero frame degradation.',
    authorName: 'Network Hardware Division',
    authorRole: 'Commercial CPE Testing Lab',
    ctaText: 'Review Router Specs',
    ctaHref: '#plans',
    pastelBg: '#FEF7E0',
    mediaCard: (
      <div className="hero-carousel-image-container">
        <img
          src="/banners/slide 4.webp"
          alt="WiFi 7 Enterprise Tri-Band Router"
          className="hero-carousel-real-image"
        />
        <div className="hero-carousel-image-overlay" />
        <div className="hero-carousel-image-badge">
          <div className="hero-carousel-image-badge-dot" />
          <span>WiFi 7 Multi-Gig Hardware</span>
        </div>
      </div>
    ),
  },
  {
    id: 'biz-backbone',
    category: 'Digital Backbone',
    title: '100% owned nationwide optical transport network',
    shortTitle: '100% owned nationwide optical transport network',
    desc: 'Unlike resellers, Link3 owns and maintains thousands of kilometres of underground optical fibre with automated dual-ring protection for unconditional corporate uptime.',
    authorName: 'National NOC & Field Services',
    authorRole: 'Core Network Operations Centre',
    ctaText: 'Network Architecture',
    ctaHref: '#infrastructure',
    pastelBg: '#E6F4EA',
    mediaCard: (
      <div className="hero-carousel-image-container">
        <img
          src="/banners/slide-5.jpg"
          alt="Link3 100% Owned Optical Backbone"
          className="hero-carousel-real-image"
        />
        <div className="hero-carousel-image-overlay" />
        <div className="hero-carousel-image-badge">
          <div className="hero-carousel-image-badge-dot" />
          <span>100% Owned Optical Infrastructure</span>
        </div>
      </div>
    ),
  },
  {
    id: 'biz-cloud',
    category: 'Cloud Interconnect & SLA',
    title: 'Direct sub-5ms low-latency on-ramps to AWS, Azure & Google Cloud',
    shortTitle: 'Direct sub-5ms low-latency on-ramps to AWS, Azure & Google Cloud',
    desc: 'Dedicated private cross-connects bypass public internet bottlenecks with multi-terabit edge DDoS mitigation and 24/7 dedicated account management.',
    authorName: 'Enterprise Cloud Division',
    authorRole: 'Hyperscaler Peering & Direct Connect',
    ctaText: 'Consult Cloud Solutions',
    ctaHref: '#solutions',
    pastelBg: '#FCE8E6',
    mediaCard: (
      <div className="hero-carousel-image-container">
        <img
          src="/banners/slide 3.webp"
          alt="Direct Low-Latency Hyperscaler Cloud On-Ramps"
          className="hero-carousel-real-image"
        />
        <div className="hero-carousel-image-overlay" />
        <div className="hero-carousel-image-badge">
          <div className="hero-carousel-image-badge-dot" />
          <span>AWS • Azure • Google Cloud</span>
        </div>
      </div>
    ),
  },
];

const businessFaqs = [
  {
    q: 'How does business fibre differ from standard residential broadband?',
    a: 'Business fibre delivers symmetrical upload and download speeds, uncontended bandwidth pipelines, static IP allocation for hosted servers and IP-PBX, a formal Service Level Agreement (SLA) with financial guarantees, and priority 2 to 4-hour on-site restoration times with a dedicated corporate account manager.',
  },
  {
    q: 'Can we retain or port our existing static IP addresses?',
    a: 'Yes. Link3 can assist in reassigning public IP subnets (/29, /28, or /27 ranges) or setting up BGP routing if your organization manages your own Autonomous System Number (ASN) and IP blocks.',
  },
  {
    q: 'What is the standard installation lead time for corporate premises?',
    a: 'For multi-tenant commercial buildings where Link3 fibre is already pre-provisioned, standard activation takes 2 to 3 business days. For specialized enterprise leased lines requiring civil works or new optical spur drops, lead time is typically 7 to 10 working days.',
  },
  {
    q: 'Do Link3 business packages support dual-homing and 4G/5G automatic failover?',
    a: 'Yes. Our Business Fibre 500M Pro and Gigabit Max packages support dual-homed optical physical redundancy as well as seamless 4G/LTE automated cellular backup gateways to ensure zero transaction drops during cable cuts.',
  },
];

export default function BusinessPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    planSpeed: 'Business Fibre 500M Pro',
    premiseType: 'Commercial Office',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="business-page-root">
      {/* 1. TOP HERO SECTION: Google Blog Style Hero Carousel */}
      <HeroCarousel slides={businessSlides} />

      {/* 2. CORPORATE TRUST & SLA METRICS BAR */}
      <div className="biz-trust-bar">
        <div className="container">
          <div className="biz-trust-grid">
            <div className="biz-trust-item">
              <div className="biz-trust-icon-box">
                <ShieldCheck size={22} />
              </div>
              <div>
                <div className="biz-trust-title">99.95% Carrier SLA</div>
                <div className="biz-trust-desc">Guaranteed uptime with financial rebate credit</div>
              </div>
            </div>

            <div className="biz-trust-item">
              <div className="biz-trust-icon-box">
                <Zap size={22} />
              </div>
              <div>
                <div className="biz-trust-title">Sub-2ms Metro Ping</div>
                <div className="biz-trust-desc">Direct peering at BDIX, MyIX, and regional IXPs</div>
              </div>
            </div>

            <div className="biz-trust-item">
              <div className="biz-trust-icon-box">
                <Clock size={22} />
              </div>
              <div>
                <div className="biz-trust-title">4-Hour Fast Restoral</div>
                <div className="biz-trust-desc">Priority on-site engineer dispatch SLA</div>
              </div>
            </div>

            <div className="biz-trust-item">
              <div className="biz-trust-icon-box">
                <Building2 size={22} />
              </div>
              <div>
                <div className="biz-trust-title">Dedicated Corporate NOC</div>
                <div className="biz-trust-desc">24/7/365 tier-3 enterprise phone support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BUSINESS PLANS SECTION */}
      <section id="plans" className="biz-plans-section">
        <div className="container">
          <div className="section-header">
            <div className="biz-rfp-badge" style={{ margin: '0 auto 12px auto' }}>
              <Sparkles size={13} />
              <span>Tailored For Commercial Growth</span>
            </div>
            <h2 className="section-title">High-Performance SME &amp; Business Broadband</h2>
            <p className="section-subtitle">
              Symmetrical, unthrottled gigabit speeds engineered to keep your team collaborating,
              your POS transactions instant, and your cloud pipelines lightning-fast.
            </p>
          </div>

          <div className="biz-plans-grid">
            {businessPlans.map((plan) => {
              const isPopular = plan.id === 'biz-500';

              return (
                <div
                  key={plan.id}
                  className={`biz-plan-card ${isPopular ? 'biz-plan-popular' : ''}`}
                >
                  {isPopular && (
                    <div className="biz-plan-popular-badge">
                      <Sparkles size={13} />
                      <span>Recommended Choice</span>
                    </div>
                  )}

                  <div className="biz-plan-header">
                    <h3 className="biz-plan-name">{plan.name}</h3>
                    <p className="biz-plan-target">{plan.target}</p>
                  </div>

                  <div className="biz-plan-speed-badge">
                    <Zap size={14} />
                    <span>{plan.speed}</span>
                  </div>

                  <div className="biz-plan-pricing">
                    <span className="biz-plan-price-val">{plan.price.split('/')[0]}</span>
                    <span className="biz-plan-price-period">/month</span>
                    <div className="biz-plan-sla-pill">
                      <ShieldCheck size={14} />
                      <span>{plan.sla}</span>
                    </div>
                  </div>

                  <ul className="biz-plan-features">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="biz-plan-feature-item">
                        <CheckCircle2 size={16} className="biz-plan-check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#rfp"
                    className={`btn ${
                      isPopular ? 'btn-pill-primary' : 'btn-pill-secondary'
                    } w-full text-center flex items-center justify-center gap-2`}
                  >
                    <span>Get {plan.name}</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ENTERPRISE & LEASED LINE SOLUTIONS */}
      <section id="solutions" className="biz-enterprise-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Enterprise Infrastructure &amp; Dedicated Pipes</h2>
            <p className="section-subtitle">
              Carrier-grade point-to-point leased circuits, hybrid cloud interconnects, and
              multi-terabit edge cyber defence tailored for banks, MNCs, and distributed enterprises.
            </p>
          </div>

          <div className="biz-enterprise-grid">
            {enterpriseSolutions.map((sol) => (
              <div key={sol.id} className="biz-enterprise-card">
                <span className="biz-enterprise-tag">{sol.category}</span>
                <h3 className="biz-enterprise-title">{sol.title}</h3>
                <p className="biz-enterprise-desc">{sol.description}</p>

                <div className="biz-enterprise-specs">
                  {sol.specs.map((sp, idx) => (
                    <div key={idx} className="biz-spec-item">
                      <div className="biz-spec-dot" />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CARRIER & WHOLESALE CAPACITY */}
      <section id="infrastructure" className="biz-wholesale-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Wholesale &amp; National Infrastructure Reach</h2>
            <p className="section-subtitle">
              Serving mobile operators, data centres, and international carriers with nationwide dark
              fibre, DWDM lambdas, and subsea cable capacity.
            </p>
          </div>

          <div className="biz-wholesale-grid">
            {wholesaleOfferings.map((ws) => (
              <div key={ws.id} className="biz-wholesale-card">
                <div
                  className="biz-trust-icon-box"
                  style={{ marginBottom: '16px', background: '#F0FDF4', color: '#166534', borderColor: '#BBF7D0' }}
                >
                  <Server size={20} />
                </div>
                <h3 className="biz-wholesale-title">{ws.title}</h3>
                <p className="biz-wholesale-desc">{ws.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. B2B RFP / CONSULTATION REQUEST FORM */}
      <section id="rfp" className="biz-rfp-section">
        <div className="container">
          <div className="biz-rfp-container">
            <div className="biz-rfp-info">
              <div>
                <div className="biz-rfp-badge">
                  <FileText size={13} />
                  <span>Corporate Consultation</span>
                </div>
                <h2 className="biz-rfp-headline">
                  Let’s architect connectivity tailored for your enterprise
                </h2>
                <p className="biz-rfp-subhead">
                  Speak directly with an enterprise solutions architect. Receive a custom site survey,
                  dual-homed route diagram, and bank-grade SLA proposal within 24 hours.
                </p>
              </div>

              <div className="biz-rfp-contacts">
                <div className="biz-contact-item">
                  <Phone size={18} color="#0284C7" />
                  <span>Corporate Hotline: <strong>{siteConfig.supportHotline}</strong> (Ext. 2)</span>
                </div>
                <div className="biz-contact-item">
                  <Mail size={18} color="#0284C7" />
                  <span>Enterprise Desk: <a href="mailto:enterprise@link3.net">enterprise@link3.net</a></span>
                </div>
              </div>
            </div>

            <div>
              {formSubmitted ? (
                <div
                  style={{
                    backgroundColor: '#F0FDF4',
                    border: '1px solid #BBF7D0',
                    borderRadius: '16px',
                    padding: '36px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#DCFCE7',
                      color: '#166534',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px auto',
                    }}
                  >
                    <CheckCircle2 size={26} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display, 'Figtree', sans-serif)",
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: '8px',
                    }}
                  >
                    Proposal Request Received
                  </h3>
                  <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.5 }}>
                    Thank you! An enterprise account manager will contact {formData.contactName || 'you'} within
                    4 business hours with custom pricing and route eligibility.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="biz-rfp-form">
                  <div className="biz-form-row">
                    <div>
                      <label className="form-label">Company Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Technologies Ltd."
                        className="form-input"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="form-label">Contact Person *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Arif Hossain"
                        className="form-input"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="biz-form-row">
                    <div>
                      <label className="form-label">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="arif@company.com"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="form-label">Contact Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 1700 000000"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="biz-form-row">
                    <div>
                      <label className="form-label">Interested Package / Service</label>
                      <select
                        className="form-select"
                        value={formData.planSpeed}
                        onChange={(e) => setFormData({ ...formData, planSpeed: e.target.value })}
                      >
                        <option value="Business Fibre 100M">Business Fibre 100M (RM 138/mo)</option>
                        <option value="Business Fibre 500M Pro">Business Fibre 500M Pro (RM 288/mo)</option>
                        <option value="Business Gigabit Max">Business Gigabit Max (RM 398/mo)</option>
                        <option value="Dedicated Leased Line (DIA)">Dedicated Leased Line (DIA)</option>
                        <option value="Cloud Interconnect & DDoS">Cloud Interconnect &amp; DDoS</option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label">Premise Type</label>
                      <select
                        className="form-select"
                        value={formData.premiseType}
                        onChange={(e) => setFormData({ ...formData, premiseType: e.target.value })}
                      >
                        <option value="Commercial Office">Commercial Multi-Floor Office</option>
                        <option value="Retail Outlet / Branch">Retail Store / Branch Outlet</option>
                        <option value="Data Centre / HQ">Headquarters / Campus</option>
                        <option value="Factory / Warehouse">Industrial / Factory Site</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Additional Requirements or Bandwidth Needs</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Need dual-fibre path failover and 4 public static IPs for our branch in Gulshan."
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="biz-submit-btn">
                    <span>Request Corporate Proposal &amp; Site Survey</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. BUSINESS FAQ SECTION */}
      <section className="section-subtle">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Business Questions</h2>
            <p className="section-subtitle">
              Clear answers regarding our corporate SLAs, installation timelines, and technical redundancy.
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {businessFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '14px',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '18px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display, 'Figtree', sans-serif)",
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#0F172A',
                      }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      style={{
                        color: '#64748B',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0,
                        marginLeft: '16px',
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 24px 20px 24px',
                        fontSize: '14.5px',
                        color: '#475569',
                        lineHeight: 1.6,
                        borderTop: '1px solid #F1F5F9',
                        paddingTop: '16px',
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
