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
            <div className="flex items-center gap-4" style={{ alignItems: 'flex-start' }}>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                  fontWeight: 'var(--font-black)',
                  color: 'var(--text)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                }}
              >
                NEED HELP
                <br />
                SIGNING UP
                <br />
                LET&apos;S TALK
              </h2>

              {/* Mascot SVG */}
              <div style={{ marginTop: '10px', flexShrink: 0 }}>
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

            <p
              style={{
                fontSize: '18px',
                fontWeight: 'var(--font-medium)',
                color: '#4B5563',
                maxWidth: '460px',
                lineHeight: 1.45,
              }}
            >
              We&apos;ll guide you through the signup process, from choosing the perfect plan to hassle-free installation.
            </p>

            <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <PhoneCall size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-muted" style={{ fontSize: '12px' }}>Prefer calling right away?</div>
                <div style={{ fontSize: '15px', fontWeight: 'var(--font-bold)', color: 'var(--text)' }}>
                  Hotline: 16335 / 09666716335
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating White Form Card */}
          <div>
            <div className="lead-form-box">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                    <CheckCircle2 size={56} style={{ color: '#0F9D58' }} />
                  </div>
                  <h3 className="font-display" style={{ fontSize: '20px', fontWeight: 'var(--font-bold)', color: 'var(--text)', marginBottom: '8px' }}>
                    Request Received!
                  </h3>
                  <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.5, marginBottom: '24px' }}>
                    Thank you, <strong style={{ color: 'var(--text)' }}>{form.name}</strong>. A Link3 broadband specialist will call you at{' '}
                    <strong style={{ color: 'var(--text)' }}>{form.contact}</strong> shortly.
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
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: '18px',
                      fontWeight: 'var(--font-bold)',
                      color: 'var(--text)',
                      marginBottom: '4px',
                    }}
                  >
                    Get in touch with our team
                  </h3>

                  <div>
                    <label style={{ display: 'none' }} htmlFor="lead-name">Full Name</label>
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
                    <label style={{ display: 'none' }} htmlFor="lead-contact">Contact Number</label>
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
                    <label style={{ display: 'none' }} htmlFor="lead-email">Email Address</label>
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
                    <label className="form-label" style={{ fontSize: '11px', color: 'var(--text-subtle)', marginBottom: '4px' }}>
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
                    className="btn btn-pill-primary"
                    style={{
                      width: '100%',
                      padding: '14px',
                      fontSize: '14px',
                      marginTop: '8px',
                    }}
                  >
                    SUBMIT
                  </button>

                  <p style={{ fontSize: '11px', color: 'var(--text-subtle)', lineHeight: 1.4, marginTop: '4px' }}>
                    By clicking &quot;Submit&quot;, I agree to the Link3 Fibre Home{' '}
                    <Link href="/#faq" className="text-primary" style={{ textDecoration: 'underline' }}>
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/#faq" className="text-primary" style={{ textDecoration: 'underline' }}>
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
