'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { sampleCoverageList, type CoverageLocation } from '@/data/coverage';
import { Search, MapPin, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

export function CoverageChecker() {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<CoverageLocation | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setSearched(true);
    const q = query.toLowerCase().trim();
    const match = sampleCoverageList.find(
      (loc) =>
        loc.building.toLowerCase().includes(q) ||
        loc.street.toLowerCase().includes(q) ||
        loc.postcode.includes(q) ||
        loc.city.toLowerCase().includes(q)
    );

    setResult(match || null);
  };

  const selectSample = (loc: CoverageLocation) => {
    setQuery(loc.building);
    setSearched(true);
    setResult(loc);
  };

  return (
    <div className="card" style={{ maxWidth: '780px', margin: '0 auto', padding: '32px' }}>
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        <div>
          <label className="form-label" style={{ fontSize: '14px' }}>
            Enter Building Name, Street, or Postcode
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Horizon Residences, Bangsar South, or 50400"
              className="form-input"
              style={{ flex: 1 }}
            />
            <button type="submit" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
              <Search size={16} />
              <span>Check Now</span>
            </button>
          </div>
        </div>

        {/* Quick sample chips */}
        <div className="flex items-center gap-2" style={{ flexWrap: 'wrap', fontSize: '12px' }}>
          <span style={{ color: 'var(--text-subtle)' }}>Popular Covered Areas:</span>
          {sampleCoverageList.slice(0, 3).map((loc) => (
            <button
              type="button"
              key={loc.id}
              onClick={() => selectSample(loc)}
              className="badge"
              style={{ cursor: 'pointer', background: 'var(--bg)', borderColor: 'var(--border)' }}
            >
              📍 {loc.building}
            </button>
          ))}
        </div>
      </form>

      {/* Results View */}
      {searched && (
        <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
          {result ? (
            <div style={{
              backgroundColor: 'var(--accent-blue-subtle)',
              border: '1px solid #c7d8ed',
              borderRadius: 'var(--radius)',
              padding: '20px',
            }}>
              <div className="flex items-start gap-3">
                <CheckCircle size={24} style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '2px' }} />
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: 'var(--accent-blue)', marginBottom: '4px' }}>
                    100% Full Fibre is Available at Your Location!
                  </h4>
                  <p style={{ color: 'var(--text)', fontSize: '14px', marginBottom: '8px' }}>
                    <strong>{result.building}</strong> — {result.street}, {result.postcode} {result.city}, {result.state}
                  </p>
                  <div className="flex items-center gap-2" style={{ marginBottom: '16px' }}>
                    <span className="badge badge-dark">Speed Capability: Up to {result.maxSpeed}</span>
                    <span className="badge badge-blue">Ready for 24h Setup</span>
                  </div>
                  <Link href="/#plans" className="btn btn-primary btn-sm" style={{ textDecoration: 'none' }}>
                    <span>Browse & Order Plans</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div style={{
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '20px',
            }}>
              <div className="flex items-start gap-3">
                <AlertCircle size={22} style={{ color: 'var(--text-muted)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ marginBottom: '4px' }}>Address Not Found in Current Footprint</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                    We couldn't confirm direct optical line coverage for "{query}". You can request our optical planning team to evaluate your building.
                  </p>
                  <Link href="/#contact" className="btn btn-outline btn-sm">
                    <span>Submit to Building Wishlist</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
