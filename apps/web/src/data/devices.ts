export interface DeviceItem {
  id: string;
  name: string;
  category: 'mesh' | 'router' | 'fttr' | 'smart';
  tagline: string;
  price: string;
  specs: string[];
  coverageArea: string;
  badge?: string;
  image: string;
}

export const deviceCatalog: DeviceItem[] = [
  {
    id: 'dev-mesh-wifi6',
    name: 'OmniMesh WiFi 6 Dual-Band Node',
    category: 'mesh',
    tagline: 'Eliminate dead zones across multi-storey homes and thick concrete walls.',
    price: 'RM 199 / unit (or RM10/mo installment)',
    specs: ['AX3000 WiFi 6 Speeds', 'Seamless Roaming (802.11k/v)', 'Connect up to 64 devices simultaneously'],
    coverageArea: 'Up to 2,500 sq ft per node',
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'dev-fttr-master',
    name: 'Fibre-To-The-Room (FTTR) Optical Kit',
    category: 'fttr',
    tagline: 'Invisible micro-optical cable routed directly into every bedroom for gigabit speeds in every corner.',
    price: 'From RM 49/mo (Includes master + 2 slave optical units)',
    specs: ['Micro-thin transparent optical fibre', 'True zero-loss 1000Mbps everywhere', 'Sub-2ms internal latency'],
    coverageArea: 'Up to 6,000 sq ft whole-premise',
    badge: 'Next-Gen Tech',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'dev-wifi7-be',
    name: 'UltraSpeed WiFi 7 2.5G Gateway',
    category: 'router',
    tagline: 'Multi-link operation and 320MHz channel bandwidth for ultra-concurrency.',
    price: 'RM 499 (or Free with 2Gbps 24M Plan)',
    specs: ['BE9300 Tri-Band WiFi 7', '1x 2.5G WAN + 1x 2.5G LAN ports', 'Hardware VPN acceleration'],
    coverageArea: 'Up to 3,500 sq ft standalone',
    badge: 'Pro Tier',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop',
  },
];
