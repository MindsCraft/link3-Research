export type ContractType = '24m' | '12m' | 'nocontract';

export interface PlanPricing {
  regular?: string;
  promo?: string;
  original?: string;
}

export interface PlanItem {
  id: string;
  speed: string;
  wifi7Badge?: boolean;
  featured?: boolean;
  specialOfferBadge?: string;
  monthlyPrice: {
    '24m': PlanPricing;
    '12m': PlanPricing;
    nocontract: PlanPricing;
  };
  icon: 'laptop' | 'monitor' | 'gamepad' | 'users';
  desc: string;
  recommendedFor: string;
  features: {
    router: string;
    speedDetail: string;
  };
  addOns: {
    mesh: string;
    fttr?: string;
  };
}

export const plans: PlanItem[] = [
  {
    id: 'plan-200m',
    speed: '200 Mbps',
    wifi7Badge: false,
    monthlyPrice: {
      '24m': { regular: 'RM99' },
      '12m': { regular: 'RM119' },
      nocontract: { regular: 'RM139' },
    },
    icon: 'laptop',
    desc: 'Everyday browsing, 4K streaming & work from home',
    recommendedFor: 'Up to 5 devices connected simultaneously',
    features: {
      router: 'WiFi 6 Dual-Band Router',
      speedDetail: '200 Mbps symmetrical upload & download',
    },
    addOns: {
      mesh: 'Mesh WiFi from RM15/month',
      fttr: 'FTTR micro-fibre ready',
    },
  },
  {
    id: 'plan-600m',
    speed: '600 Mbps',
    wifi7Badge: false,
    featured: true,
    specialOfferBadge: 'RM20/MO OFF FOR 24 MOS',
    monthlyPrice: {
      '24m': { promo: 'RM139', original: 'Was RM159' },
      '12m': { regular: 'RM159' },
      nocontract: { regular: 'RM179' },
    },
    icon: 'monitor',
    desc: 'Families, remote professionals & simultaneous 4K streams',
    recommendedFor: '10+ devices connected simultaneously',
    features: {
      router: 'WiFi 6 High-Performance Router',
      speedDetail: '600 Mbps symmetrical upload & download',
    },
    addOns: {
      mesh: 'Add WiFi 6 Mesh node for RM10/mo',
      fttr: 'FTTR all-room optical installation',
    },
  },
  {
    id: 'plan-1g',
    speed: '1 Gbps',
    wifi7Badge: true,
    monthlyPrice: {
      '24m': { promo: 'RM199', original: 'Was RM229' },
      '12m': { regular: 'RM229' },
      nocontract: { regular: 'RM259' },
    },
    icon: 'gamepad',
    desc: 'Competitive gaming, heavy cloud sync & content creation',
    recommendedFor: '15+ high-bandwidth smart home devices',
    features: {
      router: 'Next-Gen WiFi 7 Tri-Band Router',
      speedDetail: '1,000 Mbps symmetrical gigabit throughput',
    },
    addOns: {
      mesh: 'Tri-band mesh expansion available',
      fttr: 'FTTR whole-home bundle ready',
    },
  },
  {
    id: 'plan-2g',
    speed: '2 Gbps',
    wifi7Badge: true,
    monthlyPrice: {
      '24m': { regular: 'RM379' },
      '12m': { regular: 'RM399' },
      nocontract: { regular: 'RM429' },
    },
    icon: 'users',
    desc: 'Ultimate multi-gigabit homelabs, pro studios & smart villas',
    recommendedFor: '30+ devices, 8K HDR, zero congestion',
    features: {
      router: 'WiFi 7 Router with 2.5Gbps WAN/LAN port',
      speedDetail: '2 Gbps symmetrical extreme speed',
    },
    addOns: {
      mesh: 'Included multi-gig mesh node',
      fttr: 'Complimentary FTTR room survey',
    },
  },
];

export interface BroadbandPlan {
  id: string;
  speed: string;
  speedUnit: 'Mbps' | 'Gbps';
  speedNumber: number;
  monthlyPrice: number;
  originalPrice?: number;
  currency: string;
  billingPeriod: string;
  isPopular?: boolean;
  promoBadge?: string;
  routerIncluded: string;
  contractOptions: string[];
  features: string[];
  idealFor: string;
}

export const homeFibrePlans: BroadbandPlan[] = [
  {
    id: 'plan-200m',
    speed: '200',
    speedUnit: 'Mbps',
    speedNumber: 200,
    monthlyPrice: 99,
    currency: 'RM',
    billingPeriod: 'month',
    routerIncluded: 'Free WiFi 6 Dual-Band Router',
    contractOptions: ['24 Months Contract', '12 Months Contract', 'No Contract'],
    idealFor: 'Casual browsing, HD streaming on 3-5 devices',
    features: [
      'Unlimited High-Speed Data Quota',
      'Symmetrical 200Mbps Upload & Download',
      'Free Standard Installation',
      '24/7 Dedicated Fibre Support',
    ],
  },
  {
    id: 'plan-600m',
    speed: '600',
    speedUnit: 'Mbps',
    speedNumber: 600,
    monthlyPrice: 139,
    originalPrice: 159,
    currency: 'RM',
    billingPeriod: 'month',
    isPopular: true,
    promoBadge: 'Most Popular',
    routerIncluded: 'Free WiFi 6 High-Performance Router',
    contractOptions: ['24 Months Contract', '12 Months Contract', 'No Contract'],
    idealFor: 'Families, 4K streaming, simultaneous remote work',
    features: [
      'RM20/mo Discount for 24 Months',
      'Ultra-Low Gaming Latency (< 10ms)',
      '100% Full Fibre Optic Direct Connection',
      'Free Standard Setup & Testing',
      'Parental Control & Security Suite',
    ],
  },
  {
    id: 'plan-1g',
    speed: '1',
    speedUnit: 'Gbps',
    speedNumber: 1000,
    monthlyPrice: 199,
    originalPrice: 229,
    currency: 'RM',
    billingPeriod: 'month',
    promoBadge: 'Gigabit Power',
    routerIncluded: 'Free WiFi 6 Tri-Band Mesh Router (2 Units)',
    contractOptions: ['24 Months Contract', '12 Months Contract'],
    idealFor: 'Gamers, creators, 8K streaming across whole house',
    features: [
      'Gigabit Symmetrical Speeds (1,000 Mbps)',
      'Free 2x Mesh WiFi Nodes for Whole-Home Coverage',
      'Priority VIP Routing & Tech Support',
      'Unlimited High-Speed Quota',
      'Same-Day Installation Option',
    ],
  },
  {
    id: 'plan-2g',
    speed: '2',
    speedUnit: 'Gbps',
    speedNumber: 2000,
    monthlyPrice: 379,
    currency: 'RM',
    billingPeriod: 'month',
    promoBadge: 'Ultra Speed',
    routerIncluded: 'Next-Gen 2.5G WAN WiFi 7 Router',
    contractOptions: ['24 Months Contract'],
    idealFor: 'Heavy multi-gigabit homelabs, smart home automation',
    features: [
      'Full 2Gbps Download / 1Gbps Upload Throughput',
      '2.5Gbps Multi-Gig Port Included',
      'Dedicated Engineer Dispatch & Concierge',
      'Zero Throttling & Zero Traffic Shaping',
      'Free Premium Optical Terminal',
    ],
  },
];
