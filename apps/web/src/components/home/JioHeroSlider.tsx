'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowRight,
  Wifi,
  MapPin,
  CreditCard,
  ArrowRightLeft,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface JioSlide {
  id: string;
  badge: string;
  title: string;
  description: string;
  perks: string[];
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  gradientBg: string;
  illustration: React.ReactNode;
}

const jioSlides: JioSlide[] = [
  {
    id: 'jio-slide-1',
    badge: '100% Optical Fibre • Festive Offer',
    title: 'Supercharge your home with 1Gbps Full Fibre',
    description:
      'Experience lightning-fast symmetrical speeds, sub-2ms ping latency, and zero data caps on our 100% underground optical core.',
    perks: ['Free WiFi 6 High-Gain Router', 'Zero Standard Installation Fee', 'RM20/mo Rebate for 24 Months'],
    primaryCtaText: 'Get Connection',
    primaryCtaHref: '/#plans',
    secondaryCtaText: 'Check Coverage',
    secondaryCtaHref: '/#coverage',
    gradientBg: 'linear-gradient(135deg, #021e4a 0%, #014ea1 55%, #0072e6 100%)',
    illustration: (
      <svg width="420" height="320" viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="jioGlow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#80D0FF" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#0072E6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0072E6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="210" cy="160" r="140" fill="url(#jioGlow1)" />
        <circle cx="210" cy="160" r="115" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeDasharray="8 8" />
        <circle cx="210" cy="160" r="85" stroke="#80D0FF" strokeWidth="6" strokeLinecap="round" />
        <circle cx="210" cy="160" r="68" fill="#011b3e" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <text x="210" y="155" textAnchor="middle" fill="#ffffff" fontSize="42" fontWeight="800" fontFamily="var(--font-display)">
          1.0
        </text>
        <text x="210" y="182" textAnchor="middle" fill="#80D0FF" fontSize="12" fontWeight="700" letterSpacing="0.16em" fontFamily="var(--font-display)">
          GBPS SYMMETRIC
        </text>
        <circle cx="210" cy="45" r="7" fill="#80D0FF" filter="drop-shadow(0 0 8px #80D0FF)" />
        <circle cx="325" cy="160" r="7" fill="#ffffff" filter="drop-shadow(0 0 8px #ffffff)" />
        <circle cx="95" cy="160" r="6" fill="#00D2FF" />
        <circle cx="290" cy="245" r="5" fill="#80BFFF" />
      </svg>
    ),
  },
  {
    id: 'jio-slide-2',
    badge: 'Smart Living • FTTR Micro-Fibre',
    title: 'Zero dead zones: Fibre direct to every single room',
    description:
      'Ultra-thin transparent optical micro-cabling connected seamlessly to master and sub-routers for true gigabit roaming in every bedroom and home office.',
    perks: ['Up to 2.5Gbps Multi-Gig Speeds', '< 10ms Whole-Home Seamless Roaming', 'Aesthetic Invisible Cable Routing'],
    primaryCtaText: 'Discover FTTR',
    primaryCtaHref: '/#plans',
    secondaryCtaText: 'Book Free Survey',
    secondaryCtaHref: '/#contact',
    gradientBg: 'linear-gradient(135deg, #240b54 0%, #581c87 55%, #7e22ce 100%)',
    illustration: (
      <svg width="420" height="320" viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="jioGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D8B4FE" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#A855F7" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="210" cy="160" r="130" fill="url(#jioGlow2)" />
        <path d="M90 200 C150 100, 270 220, 330 120" stroke="#E9D5FF" strokeWidth="4.5" strokeLinecap="round" opacity="0.9" />
        <path d="M100 120 C180 220, 250 80, 320 180" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />
        <circle cx="210" cy="160" r="50" fill="#1e0b3c" stroke="#E9D5FF" strokeWidth="2.5" />
        <text x="210" y="155" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="800" fontFamily="var(--font-display)">
          FTTR
        </text>
        <text x="210" y="176" textAnchor="middle" fill="#C084FC" fontSize="11" fontWeight="700" letterSpacing="0.1em" fontFamily="var(--font-display)">
          ALL ROOMS
        </text>
        <circle cx="90" cy="200" r="12" fill="#9333EA" stroke="#ffffff" strokeWidth="2" />
        <circle cx="330" cy="120" r="12" fill="#38BDF8" stroke="#ffffff" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'jio-slide-3',
    badge: 'Hardware Standard • WiFi 7 Ready',
    title: 'WiFi 7 tri-band routers now standard with 1G & 2G',
    description:
      'Harness 320MHz ultra-wide channels, 4K-QAM modulation, and Multi-Link Operation (MLO) for lag-free 8K cloud gaming, VR streaming, and 50+ smart devices.',
    perks: ['Tri-Band 2.4GHz + 5GHz + 6GHz', '2.5Gbps Multi-Gig WAN/LAN Port', 'Multi-Link Low Latency Engine'],
    primaryCtaText: 'Upgrade Hardware',
    primaryCtaHref: '/#plans',
    secondaryCtaText: 'Learn More',
    secondaryCtaHref: '/#why-us',
    gradientBg: 'linear-gradient(135deg, #3d1b00 0%, #8a3800 55%, #d97706 100%)',
    illustration: (
      <svg width="420" height="320" viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="jioGlow3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="210" cy="170" r="130" fill="url(#jioGlow3)" />
        <path d="M150 90 A75 75 0 0 1 270 90" stroke="#FDE68A" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.9" />
        <path d="M125 65 A110 110 0 0 1 295 65" stroke="#FCD34D" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.65" />
        <rect x="110" y="170" width="200" height="60" rx="14" fill="#1C1814" stroke="#FDE68A" strokeWidth="2" />
        <line x1="145" y1="170" x2="125" y2="105" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
        <line x1="210" y1="170" x2="210" y2="95" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
        <line x1="275" y1="170" x2="295" y2="105" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
        <circle cx="210" cy="200" r="5" fill="#10B981" filter="drop-shadow(0 0 5px #10B981)" />
        <circle cx="180" cy="200" r="4" fill="#F59E0B" />
        <circle cx="240" cy="200" r="4" fill="#38BDF8" />
      </svg>
    ),
  },
  {
    id: 'jio-slide-4',
    badge: 'Enterprise • 99.99% Guaranteed SLA',
    title: 'Direct cloud on-ramps to AWS, Azure & Google Cloud',
    description:
      'Dedicated private interconnects with wire-speed DDoS mitigation, sub-5ms regional latency, 24/7 priority NOC dispatch, and enterprise mission-critical SLAs.',
    perks: ['Carrier-Grade Self-Healing Rings', 'Static IP Subnets Included', 'Dedicated Enterprise Account Lead'],
    primaryCtaText: 'Contact Enterprise',
    primaryCtaHref: '/#contact',
    secondaryCtaText: 'Explore Segments',
    secondaryCtaHref: '/#segments',
    gradientBg: 'linear-gradient(135deg, #02231b 0%, #065f46 55%, #059669 100%)',
    illustration: (
      <svg width="420" height="320" viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="jioGlow4" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#34D399" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="210" cy="160" r="130" fill="url(#jioGlow4)" />
        <polygon points="210,75 290,115 290,195 210,245 130,195 130,115" fill="#042018" stroke="#A7F3D0" strokeWidth="3" />
        <path d="M185 158 L205 178 L240 140" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="210" y="215" textAnchor="middle" fill="#A7F3D0" fontSize="12" fontWeight="700" letterSpacing="0.12em" fontFamily="var(--font-display)">
          99.99% UPTIME SLA
        </text>
      </svg>
    ),
  },
];

export function JioHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = jioSlides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentSlide]);

  return (
    <section className="jio-hero-section">
      <div className="container">
        {/* Main Banner Slider Frame */}
        <div
          className="jio-hero-wrapper"
          onMouseEnter={() => {
            if (timerRef.current) clearInterval(timerRef.current);
          }}
          onMouseLeave={() => {
            if (isPlaying) {
              timerRef.current = setInterval(nextSlide, 5500);
            }
          }}
        >
          {/* Animated Slide Track */}
          <div
            className="jio-slider-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {jioSlides.map((slide) => (
              <div
                key={slide.id}
                className="jio-slide-card"
                style={{ background: slide.gradientBg }}
              >
                {/* Left Text Content */}
                <div className="jio-slide-content">
                  <div className="jio-slide-badge">
                    <Sparkles size={13} style={{ color: '#FFD700' }} />
                    <span>{slide.badge}</span>
                  </div>

                  <h1 className="jio-slide-title">{slide.title}</h1>

                  <p className="jio-slide-desc">{slide.description}</p>

                  <div className="jio-perks-list">
                    {slide.perks.map((perk, i) => (
                      <div key={i} className="jio-perk-pill">
                        <CheckCircle2 size={13} style={{ color: '#00E676' }} />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>

                  <div className="jio-slide-ctas">
                    <Link href={slide.primaryCtaHref} className="jio-btn-primary">
                      <span>{slide.primaryCtaText}</span>
                      <ArrowRight size={16} />
                    </Link>

                    <Link href={slide.secondaryCtaHref} className="jio-btn-secondary">
                      <span>{slide.secondaryCtaText}</span>
                    </Link>
                  </div>
                </div>

                {/* Right Interactive Visual Graphic */}
                <div className="jio-slide-visual">
                  {slide.illustration}
                </div>
              </div>
            ))}
          </div>

          {/* Previous Arrow */}
          <button
            type="button"
            className="jio-nav-arrow jio-nav-prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            className="jio-nav-arrow jio-nav-next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={22} />
          </button>

          {/* Jio-Style Centered Pagination Bar */}
          <div className="jio-pagination-bar">
            {jioSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`jio-dot ${idx === currentSlide ? 'jio-dot-active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}

            <span className="jio-slide-counter">
              {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>

            <button
              type="button"
              className="jio-pause-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
            >
              {isPlaying ? <Pause size={12} /> : <Play size={12} />}
            </button>
          </div>
        </div>

        {/* Jio Signature Quick Actions Dock (Right Under Hero Banner) */}
        <div className="jio-quick-actions-bar">
          <Link href="/#plans" className="jio-quick-item">
            <div className="jio-quick-icon">
              <Wifi size={18} />
            </div>
            <div>
              <div className="jio-quick-text-title">Get Connection</div>
              <div className="jio-quick-text-desc">New home fibre setup</div>
            </div>
          </Link>

          <Link href="/#coverage" className="jio-quick-item">
            <div className="jio-quick-icon">
              <MapPin size={18} />
            </div>
            <div>
              <div className="jio-quick-text-title">Check Coverage</div>
              <div className="jio-quick-text-desc">Find address in seconds</div>
            </div>
          </Link>

          <a
            href="https://selfcare.link3.net"
            target="_blank"
            rel="noopener noreferrer"
            className="jio-quick-item"
          >
            <div className="jio-quick-icon">
              <CreditCard size={18} />
            </div>
            <div>
              <div className="jio-quick-text-title">Pay Bill / Recharge</div>
              <div className="jio-quick-text-desc">Link3 Self-Care portal</div>
            </div>
          </a>

          <Link href="/#contact" className="jio-quick-item">
            <div className="jio-quick-icon">
              <ArrowRightLeft size={18} />
            </div>
            <div>
              <div className="jio-quick-text-title">Switch to Link3</div>
              <div className="jio-quick-text-desc">Zero downtime porting</div>
            </div>
          </Link>

          <Link href="/#faq" className="jio-quick-item">
            <div className="jio-quick-icon">
              <HelpCircle size={18} />
            </div>
            <div>
              <div className="jio-quick-text-title">Help &amp; FAQs</div>
              <div className="jio-quick-text-desc">24/7 dedicated support</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
