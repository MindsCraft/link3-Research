'use client';

import React, { useState } from 'react';
import { Search, MapPin, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const sampleBuildings = [
  { name: 'Menara Binjai', area: 'Jalan Binjai, KLCC', status: 'available', maxSpeed: '2 Gbps' },
  { name: 'The Horizon Residences', area: 'Jalan Tun Razak, KL', status: 'available', maxSpeed: '2 Gbps' },
  { name: 'Vortex Suites KLCC', area: 'Jalan Sultan Ismail, KL', status: 'available', maxSpeed: '1 Gbps' },
  { name: 'South View Serviced Apartments', area: 'Bangsar South, KL', status: 'available', maxSpeed: '2 Gbps' },
  { name: 'Empire Damansara', area: 'Damansara Perdana, PJ', status: 'available', maxSpeed: '1 Gbps' },
  { name: 'Subang Olives Residence', area: 'Subang Jaya, Selangor', status: 'available', maxSpeed: '2 Gbps' },
];

export function CoverageCheckerWidget() {
  const [query, setQuery] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState<typeof sampleBuildings[0] | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const filtered = query.trim()
    ? sampleBuildings.filter(
        (b) =>
          b.name.toLowerCase().includes(query.toLowerCase()) ||
          b.area.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (building: typeof sampleBuildings[0]) => {
    setSelectedBuilding(building);
    setQuery(building.name);
    setShowDropdown(false);
  };

  return (
    <section id="coverage" style={{ paddingTop: '20px', paddingBottom: '36px' }}>
      <div className="container" style={{ maxWidth: '840px', textAlign: 'center' }}>
        <h2 className="section-title" style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.3rem)', marginBottom: '24px' }}>
          Check if Link3 Internet is available in your area
        </h2>

        {/* Rounded Search Input Container */}
        <div style={{ position: 'relative', margin: '0 auto', maxWidth: '640px' }}>
          <div
            className="flex items-center"
            style={{
              position: 'relative',
              backgroundColor: '#ffffff',
              border: '2px solid var(--border)',
              borderRadius: 'var(--radius-pill)',
              padding: '6px 12px 6px 20px',
              boxShadow: 'var(--shadow-sm)',
              transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
            }}
          >
            <Search size={20} style={{ color: 'var(--text-muted)', marginRight: '12px', flexShrink: 0 }} />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowDropdown(true);
                if (selectedBuilding && e.target.value !== selectedBuilding.name) {
                  setSelectedBuilding(null);
                }
              }}
              onFocus={() => setShowDropdown(true)}
              placeholder="Enter building or street name"
              style={{
                border: 'none',
                outline: 'none',
                width: '100%',
                fontSize: '16px',
                color: 'var(--text)',
                backgroundColor: 'transparent',
                padding: '8px 0',
              }}
            />

            <button
              type="button"
              onClick={() => {
                if (query.trim() && !selectedBuilding && filtered.length > 0) {
                  handleSelect(filtered[0]);
                } else if (query.trim() && !selectedBuilding) {
                  setSelectedBuilding({
                    name: query,
                    area: 'Selected Location',
                    status: 'available',
                    maxSpeed: '2 Gbps',
                  });
                }
              }}
              className="btn btn-pill-black"
              style={{
                padding: '10px 22px',
                fontSize: '13px',
                flexShrink: 0,
              }}
            >
              Check
            </button>
          </div>

          {/* Autocomplete Dropdown */}
          {showDropdown && filtered.length > 0 && (
            <div className="coverage-dropdown-list">
              {filtered.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleSelect(item)}
                  className="coverage-dropdown-item"
                >
                  <div className="flex items-center gap-3">
                    <MapPin size={16} style={{ color: 'var(--brand-primary)' }} />
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 'var(--font-bold)', color: 'var(--text)' }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.area}</div>
                    </div>
                  </div>
                  <span className="badge badge-primary">100% Fibre Ready</span>
                </button>
              ))}
            </div>
          )}

          {/* Instant Coverage Result Card */}
          {selectedBuilding && (
            <div
              style={{
                marginTop: '16px',
                padding: '16px 20px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: '#F3FAF5',
                border: '1px solid #C6EAD3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'left',
              }}
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 size={24} style={{ color: '#0F9D58', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 'var(--font-bold)', color: '#0F9D58' }}>
                    Awesome! {selectedBuilding.name} is 100% Fibre Ready!
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    Speeds up to {selectedBuilding.maxSpeed} with Same-Day / Next-Day Installation available.
                  </div>
                </div>
              </div>

              <Link
                href="/#plans"
                className="btn btn-pill-primary btn-sm"
                style={{ flexShrink: 0, padding: '8px 18px' }}
              >
                Sign Up Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
