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
    <section id="coverage" className="coverage-widget-section">
      <div className="container coverage-widget-container">
        <h2 className="section-title coverage-widget-title">
          Check if Link3 Internet is available in your area
        </h2>

        {/* Rounded Search Input Container */}
        <div className="coverage-widget-search-wrap">
          <div className="coverage-widget-pill-bar">
            <Search size={20} className="coverage-widget-search-icon" />
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
              className="coverage-widget-input"
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
              className="btn btn-pill-black coverage-widget-submit-btn"
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
                    <MapPin size={16} className="coverage-dropdown-pin-icon" />
                    <div>
                      <div className="coverage-dropdown-title">
                        {item.name}
                      </div>
                      <div className="coverage-dropdown-sub">{item.area}</div>
                    </div>
                  </div>
                  <span className="badge badge-primary">100% Fibre Ready</span>
                </button>
              ))}
            </div>
          )}

          {/* Instant Coverage Result Card */}
          {selectedBuilding && (
            <div className="coverage-widget-success-box">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={24} className="coverage-success-icon" />
                <div>
                  <div className="coverage-success-title">
                    Awesome! {selectedBuilding.name} is 100% Fibre Ready!
                  </div>
                  <div className="coverage-success-desc">
                    Speeds up to {selectedBuilding.maxSpeed} with Same-Day / Next-Day Installation available.
                  </div>
                </div>
              </div>

              <Link
                href="/#plans"
                className="btn btn-pill-primary btn-sm coverage-success-cta-btn"
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
