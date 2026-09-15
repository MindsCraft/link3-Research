export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqsData: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Home Fibre',
    question: 'What makes 100% full-fibre different from regular copper broadband?',
    answer:
      'Unlike hybrid copper-fibre networks (VDSL or cable) that suffer from signal attenuation, electrical interference, and asymmetrical speeds, our network brings 100% pure glass optical fibre directly into your premise. This guarantees symmetrical upload and download speeds, rock-solid stability, and latency under 10ms.',
  },
  {
    id: 'faq-2',
    category: 'Home Fibre',
    question: 'Are the broadband plans truly unlimited with no Fair Usage Policy (FUP)?',
    answer:
      'Yes. All TIME residential and commercial broadband packages come with zero data caps and zero throttling. You can download, stream in 4K/8K, and game 24 hours a day at full wire speeds without ever hitting an artificial bottleneck.',
  },
  {
    id: 'faq-3',
    category: 'Installation',
    question: 'How fast can installation be arranged after sign-up?',
    answer:
      'If your building is already on our fibre footprint, standard installation is typically scheduled within 24 to 48 hours. Our certified optical engineers provide free standard cabling up to 20 meters, router configuration, and on-site speed verification.',
  },
  {
    id: 'faq-4',
    category: 'Billing & Contracts',
    question: 'Can I subscribe without a 24-month contract?',
    answer:
      'Yes, we offer flexible contract options including a 12-month contract or a No-Contract plan. On the No-Contract option, a one-time standard installation fee applies, but you retain the freedom to modify or terminate your plan at any time with 30 days notice.',
  },
  {
    id: 'faq-5',
    category: 'Technical',
    question: 'What is Fibre-To-The-Room (FTTR) and how does it work?',
    answer:
      'FTTR replaces copper ethernet cables and lossy WiFi extenders with ultra-thin transparent optical fibre routed cleanly along baseboards into individual rooms. Each room receives a dedicated optical mini-access point, delivering full gigabit speeds with sub-2ms latency throughout every corner of your property.',
  },
];
