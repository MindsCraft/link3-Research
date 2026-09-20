'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { sampleCoverageList, type CoverageLocation } from '@/data/coverage';
import { Search, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

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
    <div className="card coverage-card-wrap">
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        <div>
          <label className="form-label coverage-label-text">
            Enter Building Name, Street, or Postcode
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Horizon Residences, Bangsar South, or 50400"
              className="form-input coverage-input-flex"
            />
            <button type="submit" className="btn btn-primary coverage-check-btn-nowrap">
              <Search size={16} />
              <span>Check Now</span>
            </button>
          </div>
        </div>

        {/* Quick sample chips */}
        <div className="flex items-center gap-2 coverage-sample-chips-row">
          <span className="coverage-sample-label">Popular Covered Areas:</span>
          {sampleCoverageList.slice(0, 3).map((loc) => (
            <button
              type="button"
              key={loc.id}
              onClick={() => selectSample(loc)}
              className="badge coverage-sample-chip-btn"
            >
              📍 {loc.building}
            </button>
          ))}
        </div>
      </form>

      {/* Results View */}
      {searched && (
        <div className="coverage-results-section">
          {result ? (
            <div className="coverage-result-success">
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="coverage-result-success-icon" />
                <div className="coverage-input-flex">
                  <h4 className="coverage-result-success-title">
                    100% Full Fibre is Available at Your Location!
                  </h4>
                  <p className="coverage-result-success-address">
                    <strong>{result.building}</strong> — {result.street}, {result.postcode} {result.city}, {result.state}
                  </p>
                  <div className="flex items-center gap-2 coverage-badges-row">
                    <span className="badge badge-dark">Speed Capability: Up to {result.maxSpeed}</span>
                    <span className="badge badge-blue">Ready for 24h Setup</span>
                  </div>
                  <Link href="/#plans" className="btn btn-primary btn-sm coverage-result-cta">
                    <span>Browse & Order Plans</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="coverage-result-notfound">
              <div className="flex items-start gap-3">
                <AlertCircle size={22} className="coverage-result-notfound-icon" />
                <div>
                  <h4 className="coverage-result-notfound-title">Address Not Found in Current Footprint</h4>
                  <p className="coverage-result-notfound-desc">
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
