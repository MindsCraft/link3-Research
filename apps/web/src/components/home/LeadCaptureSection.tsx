'use client';

import React, { useState } from 'react';
import { CheckCircle2, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export function LeadCaptureSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    contact: '',
    email: '',
    language: 'English',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.contact) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-subtle">
      <div className="container">
        <div className="lead-capture-grid">
          {/* Left Column: Bold Headline & Mascot */}
          <div>
            <div className="flex items-center gap-4 lead-header-row">
              <h2 className="lead-headline">
                NEED HELP
                <br />
                SIGNING UP
                <br />
                LET&apos;S TALK
              </h2>

              {/* Mascot SVG */}
              <div className="lead-mascot-wrap">
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="36" cy="36" r="30" fill="var(--brand-primary)" />
                  <circle cx="27" cy="32" r="7" fill="#ffffff" />
                  <circle cx="45" cy="32" r="7" fill="#ffffff" />
                  <circle cx="28" cy="32" r="3" fill="#000000" />
                  <circle cx="46" cy="32" r="3" fill="#000000" />
                  <path d="M30 46 Q36 52 42 46" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <line x1="36" y1="6" x2="36" y2="0" stroke="var(--brand-primary)" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="36" cy="0" r="4" fill="#FFD800" />
                </svg>
              </div>
            </div>

            <p className="lead-desc">
              We&apos;ll guide you through the signup process, from choosing the perfect plan to hassle-free installation.
            </p>

            <div className="lead-hotline-wrap">
              <div className="lead-phone-icon-wrap">
                <PhoneCall size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-muted lead-hotline-label">Prefer calling right away?</div>
                <div className="lead-hotline-num">
                  Hotline: 16335 / 09666716335
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating White Form Card */}
          <div>
            <div className="lead-form-box">
              {submitted ? (
                <div className="lead-submitted-wrap">
                  <div className="lead-submitted-icon-wrap">
                    <CheckCircle2 size={56} className="lead-success-icon" />
                  </div>
                  <h3 className="font-display lead-submitted-title">
                    Request Received!
                  </h3>
                  <p className="lead-submitted-desc">
                    Thank you, <strong className="lead-highlight-text">{form.name}</strong>. A Link3 broadband specialist will call you at{' '}
                    <strong className="lead-highlight-text">{form.contact}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', contact: '', email: '', language: 'English' });
                    }}
                    className="btn btn-pill-black btn-sm"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="lead-form">
                  <h3 className="font-display lead-form-title">
                    Get in touch with our team
                  </h3>

                  <div>
                    <label className="sr-only" htmlFor="lead-name">Full Name</label>
                    <input
                      id="lead-name"
                      type="text"
                      placeholder="Full Name *"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="lead-contact">Contact Number</label>
                    <input
                      id="lead-contact"
                      type="tel"
                      placeholder="Contact Number (e.g. 017xxxxxxxx) *"
                      required
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="lead-email">Email Address</label>
                    <input
                      id="lead-email"
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="form-label lead-lang-label">
                      Preferred Language
                    </label>
                    <select
                      value={form.language}
                      onChange={(e) => setForm({ ...form, language: e.target.value })}
                      className="form-select"
                    >
                      <option value="English">English</option>
                      <option value="Bengali">Bengali</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-pill-primary lead-submit-btn"
                  >
                    SUBMIT
                  </button>

                  <p className="lead-terms-notice">
                    By clicking &quot;Submit&quot;, I agree to the Link3 Fibre Home{' '}
                    <Link href="/#faq" className="text-primary lead-terms-link">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/#faq" className="text-primary lead-terms-link">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
