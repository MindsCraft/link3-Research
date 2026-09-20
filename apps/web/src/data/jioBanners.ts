export interface JioBannerSlide {
  id: string;
  /**
   * Path to your banner image inside apps/web/public/banners/
   * e.g. '/banners/banner-1.jpg' or '/banners/banner-1.webp'
   * Leave empty or undefined to use the styled gradient + live text card layout.
   */
  image?: string;
  mobileImage?: string;
  alt: string;

  /** Display mode:
   * - 'full-image': The banner image covers the entire rounded slide card (ideal if your image already has text & graphics baked in).
   * - 'hybrid': The image sits as the card backdrop with live typography, CTA button, and floating spec card overlaid.
   */
  displayMode?: 'full-image' | 'hybrid';

  // Live content & overlays (used in hybrid mode or as fallback if image isn't loaded)
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  bgGradient: string;
  themeColor: string;
  floatingBadge?: {
    price?: string;
    period?: string;
    speed?: string;
    items: string[];
    partnerLogos?: string[];
  };
}

export const jioBannerSlides: JioBannerSlide[] = [
  {
    id: 'jio-1',
    image: '/banners/slide 1.webp',
    alt: '365 Days of Gigabit Benefits at ৳1,599',
    displayMode: 'hybrid',
    badge: '30 Years of Trust • Festive Celebration',
    title: '365 days of gigabit benefits at just ৳1,599',
    description:
      'Enjoy 100 Mbps symmetrical fibre, 1 Gbps BDIX YouTube & Play peering, zero latency jitter, and a free WiFi 6 router added just for you.',
    ctaText: 'Recharge now',
    ctaHref: '/#plans',
    bgGradient: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)',
    themeColor: '#0f3cc9',
    floatingBadge: {
      price: '৳1,599',
      period: 'per month',
      speed: '100 Mbps Symmetrical',
      items: ['WiFi 6 Gigabit Router', '1 Gbps BDIX Peering', 'Buffer-Free 4K Streaming', 'Sub-2ms Gaming Ping'],
      partnerLogos: ['Chorki', 'Hoichoi', 'Toffee', 'SonyLIV'],
    },
  },
  {
    id: 'jio-2',
    image: '/banners/slide 2.webp',
    alt: 'Looking for a ৳999 plan? It is here',
    displayMode: 'hybrid',
    badge: 'Most Popular • Home Broadband',
    title: 'Looking for a ৳999 plan? It\'s here',
    description:
      'Link3 continues to deliver true unlimited optical broadband with symmetrical 60 Mbps, unlimited devices, and 24/7 dedicated support.',
    ctaText: 'Switch to Link3',
    ctaHref: '/#plans',
    bgGradient: 'linear-gradient(135deg, #78350f 0%, #92400e 55%, #b45309 100%)',
    themeColor: '#b45309',
    floatingBadge: {
      price: '৳999',
      period: 'per month',
      speed: '60 Mbps Symmetrical',
      items: ['Free Optical ONT Modem', 'Zero FUP Data Cap', '100% Optical Underground Core', '24/7 Priority Hotline'],
    },
  },
  {
    id: 'jio-3',
    image: '/banners/slide 3.webp',
    alt: 'Experience Link3 FTTR: Fibre to every room',
    displayMode: 'hybrid',
    badge: 'Whole-Home Smart Living • FTTR',
    title: 'Experience Link3 FTTR: Fibre to every room',
    description:
      'Zero dead zones with transparent optical micro-cabling. Get seamless gigabit roaming across your living room, bedrooms, and home office.',
    ctaText: 'Explore FTTR',
    ctaHref: '/#plans',
    bgGradient: 'linear-gradient(135deg, #3b0764 0%, #581c87 55%, #6b21a8 100%)',
    themeColor: '#5b21b6',
    floatingBadge: {
      price: 'Up to 2.5 Gbps',
      period: 'Whole Home Coverage',
      speed: 'Ultra-Low Latency',
      items: ['Invisible Cable Routing', '< 10ms Roaming Handoff', 'Master + Sub ONT Mesh', 'Free On-Site Signal Survey'],
    },
  },
  {
    id: 'jio-4',
    image: '/banners/slide 4.webp',
    alt: 'Direct cloud on-ramps to AWS, Azure & Google Cloud',
    displayMode: 'hybrid',
    badge: 'Enterprise • 99.99% SLA Guaranteed',
    title: 'Direct cloud on-ramps to AWS, Azure & Google Cloud',
    description:
      'Dedicated optical interconnects with wire-speed DDoS shield protection, 24/7 priority NOC dispatch, and mission-critical SLAs.',
    ctaText: 'Contact Enterprise',
    ctaHref: '/#contact',
    bgGradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 55%, #047857 100%)',
    themeColor: '#065f46',
    floatingBadge: {
      price: '99.99% SLA',
      period: 'Guaranteed Uptime',
      speed: '1:1 Dedicated Bandwidth',
      items: ['Dedicated IP Pool', 'Self-Healing Optical Rings', 'Direct Regional Peering', 'Dedicated Account Manager'],
    },
  },
];

