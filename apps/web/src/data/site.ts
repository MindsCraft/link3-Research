export interface SegmentItem {
  id: 'home' | 'business' | 'wholesale' | 'enterprise' | 'energy' | 'support';
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  badge?: string;
  isButton?: boolean;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string; desc?: string }[];
}

export const siteSegments: SegmentItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'business', label: 'Business', href: '/#segments' },
  { id: 'wholesale', label: 'Wholesale', href: '/#segments' },
  { id: 'enterprise', label: 'Enterprise', href: '/#segments' },
  { id: 'energy', label: 'Energy / Cloud', href: '/#segments' },
  { id: 'support', label: 'Support', href: '/#faq' },
];

export const homeNavLinks: NavLink[] = [
  { label: 'Explore Plans', href: '/#plans' },
  {
    label: 'Why Link3?',
    href: '/#why-us',
    hasDropdown: true,
    dropdownItems: [
      { label: '100% Fibre, 100% Ours', href: '/#why-us', desc: 'Full optical infrastructure ownership' },
      { label: 'Say Hello to True 2Gbps', href: '/#why-us', desc: 'Unleash gigabit speed' },
      { label: 'Seamless WiFi Coverage', href: '/#why-us', desc: 'Smart mesh & FTTR solutions' },
    ],
  },
  {
    label: 'Add Ons',
    href: '/#plans',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Mesh WiFi 6 / 7 Nodes', href: '/#plans', desc: 'Eliminate dead zones' },
      { label: 'Fibre-To-The-Room (FTTR)', href: '/#plans', desc: 'Micro-optical transparent glass' },
      { label: 'Voice & Static IP', href: '/#contact', desc: 'Add-on communication lines' },
    ],
  },
  {
    label: 'Discover More',
    href: '/#why-us',
    hasDropdown: true,
    dropdownItems: [
      { label: 'About Link3', href: '/#why-us', desc: 'Our corporate journey and mission' },
      { label: 'Self Care Portal', href: 'https://selfcare.link3.net', desc: 'Manage your bill and status' },
      { label: 'Enterprise & Wholesale', href: '/#segments', desc: 'Connectivity for businesses & operators' },
    ],
  },
  { label: 'Check Coverage', href: '/#coverage' },
];

export const siteConfig = {
  brandName: 'Link3',
  tagline: '100% Full Fibre Broadband & Digital Infrastructure',
  copyrightYear: 2026,
  supportHotline: '16335',
  supportEmail: 'support@link3.net',
  socials: [
    { label: 'Facebook', href: 'https://facebook.com/link3technologies' },
    { label: 'Twitter / X', href: 'https://twitter.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/link3-technologies-ltd' },
    { label: 'Instagram', href: 'https://instagram.com' },
  ],
};
