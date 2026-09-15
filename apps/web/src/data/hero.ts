export interface HeroSlide {
  id: string;
  badge: string;
  headline: string;
  headlineAccent: string;
  subhead: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  priceTag?: {
    prefix: string;
    amount: string;
    suffix: string;
  };
  highlights: string[];
  visualType: 'speed' | 'coverage' | 'fttr';
  visualData: {
    title: string;
    metrics: { label: string; value: string }[];
    caption: string;
  };
}

export const heroSlidesData: HeroSlide[] = [
  {
    id: 'slide-works',
    badge: 'TIME FIBRE HOME',
    headline: 'Internet that',
    headlineAccent: 'just works.',
    subhead:
      'Home Internet should be fast, stable and here for you 24/7. (Everyone else complicates it. We don’t.)',
    primaryCtaText: 'Check Coverage',
    primaryCtaHref: '/check-coverage',
    secondaryCtaText: 'See All Plans',
    secondaryCtaHref: '#plans',
    priceTag: {
      prefix: 'From',
      amount: 'RM 99',
      suffix: '/month',
    },
    highlights: [
      '100% Pure Full Fibre (Zero Copper)',
      'Symmetrical Download & Upload',
      'No Fair Usage Policy (FUP) Caps',
    ],
    visualType: 'speed',
    visualData: {
      title: '100% Full Fibre Direct Connection',
      metrics: [
        { label: 'Latency to Local IX', value: '< 8ms' },
        { label: 'Uptime Reliability', value: '99.99%' },
        { label: 'FUP Throttling', value: 'Zero' },
      ],
      caption: 'Direct optical termination inside your premise.',
    },
  },
  {
    id: 'slide-2gbps',
    badge: 'ULTRA SPEED TIERS',
    headline: 'Up to 2Gbps. Zero Lag.',
    headlineAccent: 'Zero Excuses.',
    subhead:
      'Double the gigabit speed for heavy 8K streaming, simultaneous multi-device downloads, and sub-10ms competitive gaming.',
    primaryCtaText: 'Explore 2Gbps Plan',
    primaryCtaHref: '/#plans',
    secondaryCtaText: 'Compare Speeds',
    secondaryCtaHref: '/#plans',
    priceTag: {
      prefix: 'Ultimate',
      amount: '2,000 Mbps',
      suffix: 'symmetrical',
    },
    highlights: [
      'Free WiFi 7 Multi-Gig Router Included',
      'Dual-Route Physical Path Redundancy',
      'VIP Engineer Installation Priority',
    ],
    visualType: 'speed',
    visualData: {
      title: '2Gbps Extreme Throughput',
      metrics: [
        { label: 'Download Speed', value: '2,000 Mbps' },
        { label: 'Upload Speed', value: '1,000 Mbps' },
        { label: 'Bufferbloat Grade', value: 'A+' },
      ],
      caption: 'Equipped with 2.5GbE Multi-Gigabit LAN ports.',
    },
  },
  {
    id: 'slide-fttr',
    badge: 'FIBRE-TO-THE-ROOM (FTTR)',
    headline: 'Fibre in every room.',
    headlineAccent: 'Not just your living room.',
    subhead:
      'Say goodbye to thick ugly cables and lossy WiFi extenders. Invisible micro-optical cabling delivering true 1Gbps everywhere.',
    primaryCtaText: 'Discover FTTR Kit',
    primaryCtaHref: '/devices',
    secondaryCtaText: 'Check Home Eligibility',
    secondaryCtaHref: '/check-coverage',
    priceTag: {
      prefix: 'Add-on from',
      amount: 'RM 49',
      suffix: '/month',
    },
    highlights: [
      'Hair-Thin Transparent Optical Glass',
      'Lossless 1,000 Mbps in Every Bedroom',
      'Sub-2ms Internal Wall-to-Wall Latency',
    ],
    visualType: 'fttr',
    visualData: {
      title: 'Whole-Home Optical Mesh',
      metrics: [
        { label: 'Cable Thickness', value: '1.2 mm' },
        { label: 'Coverage Reach', value: 'Up to 6,000 sq ft' },
        { label: 'Signal Degradation', value: '0.0%' },
      ],
      caption: 'Adheres invisibly along baseboards with zero drilling.',
    },
  },
];
