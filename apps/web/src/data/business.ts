export interface BusinessPlan {
  id: string;
  name: string;
  speed: string;
  price: string;
  sla: string;
  features: string[];
  target: string;
}

export const businessPlans: BusinessPlan[] = [
  {
    id: 'biz-100',
    name: 'Business Fibre 100M',
    speed: '100 Mbps Symmetrical',
    price: 'RM 138/mo',
    sla: '99.7% Uptime Commitment',
    target: 'Small retail stores, startup offices (up to 10 staff)',
    features: [
      'Unlimited Business-Grade Data',
      'Dynamic Business IP with DDNS',
      '4-Hour Technical Restoral SLA',
      'Free Business WiFi 6 Gateway',
    ],
  },
  {
    id: 'biz-500',
    name: 'Business Fibre 500M Pro',
    speed: '500 Mbps Symmetrical',
    price: 'RM 288/mo',
    sla: '99.9% High Availability SLA',
    target: 'Growing companies, creative agencies, POS cloud sync',
    features: [
      '1 Fixed Static IP Included (Valued RM200)',
      'Dual-Homing Failover Redundancy Support',
      'Priority 2-Hour On-Site Service SLA',
      'Dedicated Account Management',
    ],
  },
  {
    id: 'biz-1g',
    name: 'Business Gigabit Max',
    speed: '1 Gbps Ultra Symmetrical',
    price: 'RM 398/mo',
    sla: '99.95% Carrier-Grade SLA',
    target: 'Tech companies, financial firms, multi-floor workspaces',
    features: [
      '2 Fixed Static IPs Included',
      'Uncontended Optical Bandwidth Pipeline',
      '24/7/365 NOC Proactive Circuit Monitoring',
      'Enterprise Mesh Gateway Hardware',
    ],
  },
];

export const enterpriseSolutions = [
  {
    id: 'ent-connect',
    title: 'Metro & Regional Ethernet',
    category: 'Connectivity',
    description:
      'Point-to-point and point-to-multipoint dedicated private optical networks with sub-millisecond intra-city latency.',
    specs: ['Up to 100Gbps Dedicated Pipes', 'MEF 3.0 Certified', 'Zero Packet Loss Guarantee'],
  },
  {
    id: 'ent-cloud',
    title: 'Cloud Interconnect & Data Centre',
    category: 'Cloud & Infrastructure',
    description:
      'Direct, carrier-neutral cross-connects to AWS Direct Connect, Microsoft ExpressRoute, Google Cloud, and Tier III/IV data centres.',
    specs: ['Direct Cloud On-Ramps', 'BGP Peering Options', '100% Redundant Fibre Paths'],
  },
  {
    id: 'ent-security',
    title: 'Managed Cyber Defence & DDoS Shield',
    category: 'Cybersecurity',
    description:
      'Always-on volumetric DDoS mitigation filtering up to 5Tbps of malicious traffic at the edge before it hits your network.',
    specs: ['Multi-Tbps Cloud Scrubbing', 'Next-Gen Firewall as a Service', 'SOC 24/7 Telemetry'],
  },
];

export const wholesaleOfferings = [
  {
    id: 'ws-transit',
    title: 'Global IP Transit & Peering',
    description:
      'Tier-1 upstream reachability with direct peering at all major Southeast Asian internet exchange points (MyIX, SGIX, BDIX).',
  },
  {
    id: 'ws-subsea',
    title: 'Submarine Cable Networks',
    description:
      'Consortium stakes in FASTER, Unity, APG, and SKR1 subsea systems connecting Malaysia to USA, Japan, Hong Kong, and Singapore.',
  },
  {
    id: 'ws-backhaul',
    title: 'Carrier Backhaul & Dark Fibre',
    description:
      'Nationwide dark fibre leases and protected DWDM wavelengths for telecommunication operators, hyperscalers, and mobile carriers.',
  },
];
