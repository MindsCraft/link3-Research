import fs from 'fs';
import path from 'path';
import type {
  SiteConfig,
  Service,
  CaseStudy,
  Article,
  InquiryRecord,
} from '@link3/contracts';

export interface DatabaseSchema {
  siteConfig: SiteConfig;
  services: Service[];
  caseStudies: CaseStudy[];
  articles: Article[];
  inquiries: InquiryRecord[];
}

const DATA_DIR = path.resolve(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

const defaultSiteConfig: SiteConfig = {
  name: 'Link3 Studio',
  tagline: 'Engineering Next-Generation Digital Experiences & Intelligent Systems',
  description:
    'Link3 Studio crafts high-velocity web platforms, resilient cloud architectures, and agentic workflows for ambitious engineering teams.',
  url: 'https://link3.io',
  logoText: 'LINK3',
  announcement: {
    enabled: true,
    text: '⚡ Link3 Engine 2.0 has been deployed with integrated Agentic CMS pipelines',
    linkText: 'Explore System',
    href: '/insights/the-rise-of-agentic-software-workflows',
  },
  navigation: [
    { label: 'Capabilities', href: '/#capabilities' },
    { label: 'Work', href: '/work' },
    { label: 'Insights', href: '/insights' },
    { label: 'About', href: '/about' },
    { label: 'Start Project', href: '/contact', badge: 'New' },
  ],
  socialLinks: [
    { platform: 'github', url: 'https://github.com', label: 'GitHub' },
    { platform: 'twitter', url: 'https://twitter.com', label: 'X (Twitter)' },
    { platform: 'linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { platform: 'discord', url: 'https://discord.com', label: 'Discord' },
  ],
  contactEmail: 'contact@link3.io',
  location: 'San Francisco, CA & Distributed Global Nodes',
};

const defaultServices: Service[] = [
  {
    id: 'srv-1',
    slug: 'ai-powered-platforms',
    title: 'Agentic & AI-Powered Platforms',
    tagline: 'Autonomous AI agents, generative UX, and predictive backend systems.',
    summary:
      'We architect self-healing, agentic workflows and LLM-powered applications with sub-100ms streaming responses and structured outputs.',
    icon: 'sparkles',
    badge: 'Flagship',
    highlightMetric: {
      value: '4.8x',
      label: 'Faster Workflow Execution',
    },
    order: 1,
    features: [
      {
        title: 'Structured Agent Pipelines',
        description: 'Multi-agent orchestration with deterministic state machines and audit trails.',
      },
      {
        title: 'Real-Time Streaming UX',
        description: 'Instant generative interfaces with optimistic updates and partial token rendering.',
      },
      {
        title: 'Contextual RAG & Embeddings',
        description: 'High-throughput vector indexing with hybrid lexical and semantic search pipelines.',
      },
    ],
    deliverables: [
      'Multi-agent orchestration framework',
      'Evaluation & safety harness',
      'Streaming UI components',
      'Continuous fine-tuning pipelines',
    ],
  },
  {
    id: 'srv-2',
    slug: 'high-performance-cloud',
    title: 'Distributed Cloud Architectures',
    tagline: 'Ultra-low latency edge computing, event streaming, and global data sync.',
    summary:
      'Engineered for 99.999% availability. We design distributed microservices, edge computing topologies, and zero-downtime database migrations.',
    icon: 'layers',
    badge: 'Enterprise',
    highlightMetric: {
      value: '< 18ms',
      label: 'Global Edge TTFB',
    },
    order: 2,
    features: [
      {
        title: 'Global Edge Deployments',
        description: 'Multi-region serverless execution with geo-routed cache invalidation.',
      },
      {
        title: 'Event-Driven Microservices',
        description: 'Kafka and RabbitMQ streaming backbones with idempotent consumer topologies.',
      },
      {
        title: 'Zero-Trust Security & RBAC',
        description: 'Fine-grained policy enforcement with hardware security module key rotations.',
      },
    ],
    deliverables: [
      'Infrastructure as Code (Terraform/OpenTofu)',
      'High-availability Kubernetes topologies',
      'Automated disaster recovery drills',
      'Observability and distributed tracing',
    ],
  },
  {
    id: 'srv-3',
    slug: 'modern-design-systems',
    title: 'Enterprise Design Systems & UX',
    tagline: 'Pixel-perfection, accessible components, and unified brand token architectures.',
    summary:
      'Bridging design tokens and production codebases with cohesive, accessible, and delightful interactive design systems.',
    icon: 'globe',
    badge: 'UX / UI',
    highlightMetric: {
      value: '100%',
      label: 'WCAG AAA Compliant',
    },
    order: 3,
    features: [
      {
        title: 'Design Token Synchronizers',
        description: 'Automated bidirectional sync between Figma variables and Tailwind CSS / CSS variables.',
      },
      {
        title: 'Accessible Component Suites',
        description: 'Comprehensive keyboard navigation, ARIA live regions, and screen reader testing.',
      },
      {
        title: 'Micro-Interactions & Motion',
        description: 'Hardware-accelerated physics-based transitions that enhance user clarity.',
      },
    ],
    deliverables: [
      'Complete React / Next.js Component Library',
      'Interactive Storybook documentation',
      'Figma Token Sync Automation',
      'Brand style guides & motion presets',
    ],
  },
  {
    id: 'srv-4',
    slug: 'real-time-collaboration',
    title: 'Real-Time Collaborative Systems',
    tagline: 'Multiplayer canvas, conflict-free replicated data types, and live presence.',
    summary:
      'We build collaborative workspaces like Figma and Notion with CRDTs (Yjs, Automerge) and WebSockets for seamless multi-user co-creation.',
    icon: 'workflow',
    highlightMetric: {
      value: '0',
      label: 'Data Merge Conflicts',
    },
    order: 4,
    features: [
      {
        title: 'CRDT State Convergence',
        description: 'Mathematical guarantees of state consistency across distributed offline clients.',
      },
      {
        title: 'Ultra-Fast Presence & Cursors',
        description: '60 FPS multiplayer cursor tracking with smart spatial broadcasting.',
      },
      {
        title: 'Selective Sync & Offline Mode',
        description: 'Local-first client storage that silently queues and reconciles mutations.',
      },
    ],
    deliverables: [
      'Custom WebSockets gateway',
      'CRDT document persistence adapter',
      'Live cursor and presence UI kit',
      'Stress-test load generator',
    ],
  },
];

const defaultCaseStudies: CaseStudy[] = [
  {
    id: 'cs-1',
    slug: 'nexus-pay',
    title: 'Nexus Pay: Re-architecting Global Cross-Border Settlements',
    client: 'Nexus Financial Global',
    category: 'FinTech',
    summary:
      'Migrated legacy batch settlement rails to a sub-second real-time clearing engine handling $420M+ daily transactional volume.',
    challenge:
      'Legacy clearing systems suffered from multi-hour transaction finality, reconciliation errors, and scaling bottlenecks during peak trading volatility.',
    solution:
      'Architected an event-sourced distributed ledger pipeline utilizing Kafka, Rust worker nodes, and an edge Next.js executive portal.',
    impact:
      'Reduced settlement latency from 4 hours to 340 milliseconds while slashing infrastructure costs by 42%.',
    metrics: [
      { label: 'Settlement Time', value: '340ms', change: '-99.8%' },
      { label: 'Daily Volume', value: '$420M+', change: '+185%' },
      { label: 'System Uptime', value: '99.999%', change: '+0.09%' },
    ],
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Rust', 'Apache Kafka', 'PostgreSQL'],
    coverImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    publishedAt: '2026-02-14T10:00:00Z',
    testimonial: {
      quote:
        'Link3 delivered what two previous tier-one consultancies said was impossible. The new platform handles our surging global volume without breaking a sweat.',
      author: 'Elena Rostova',
      role: 'Chief Technology Officer',
      company: 'Nexus Financial Global',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    },
  },
  {
    id: 'cs-2',
    slug: 'aura-cloud-observability',
    title: 'Aura Cloud: Autonomous AI Telemetry & Incident Mitigation',
    client: 'Aura Infrastructure',
    category: 'AI Systems',
    summary:
      'Designed an autonomous observability platform that predicts cloud outages 15 minutes before customer impact using machine learning anomaly models.',
    challenge:
      'Engineers were overwhelmed by 120,000+ daily alerts across 4,000 microservices, resulting in alert fatigue and delayed incident resolution.',
    solution:
      'Developed an intelligent agent that synthesizes distributed traces, correlates anomalies, and executes automated remediation runbooks.',
    impact:
      'Slashed Mean Time to Detect (MTTD) by 84% and automatically resolved 62% of standard tier-1 infrastructure alerts.',
    metrics: [
      { label: 'MTTD Reduction', value: '84%', change: 'from 22m to 3.5m' },
      { label: 'Autonomous Fixes', value: '62%', change: '+62%' },
      { label: 'Telemetry Throughput', value: '1.2TB/s', change: 'Real-time' },
    ],
    techStack: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Python', 'ClickHouse', 'Vector Agents'],
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    publishedAt: '2026-01-20T10:00:00Z',
    testimonial: {
      quote:
        'The speed and depth of technical insight Link3 brought to our team shifted our engineering culture from reactive firefighting to proactive automation.',
      author: 'Marcus Vance',
      role: 'VP of Site Reliability',
      company: 'Aura Infrastructure',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    },
  },
  {
    id: 'cs-3',
    slug: 'pulse-spatial-health',
    title: 'Pulse Health: Real-time Patient Telemetry Network',
    client: 'Pulse Biosystems',
    category: 'Digital Health',
    summary:
      'Constructed a low-latency WebSockets & CRDT platform displaying real-time biometric telemetry for intensive care clinical staff.',
    challenge:
      'Hospital monitoring workstations needed sub-200ms vital sign updates without packet loss under unstable clinical Wi-Fi conditions.',
    solution:
      'Built a local-first telemetry visualization system with WebGL chart rendering and automatic offline buffering.',
    impact:
      'Over 25,000 hospital beds successfully deployed with 100% vital stream continuity during network drops.',
    metrics: [
      { label: 'Data Latency', value: '< 85ms', change: 'End-to-End' },
      { label: 'Beds Monitored', value: '25,000+', change: '+320%' },
      { label: 'Render Frame Rate', value: '60 FPS', change: 'Rock-solid' },
    ],
    techStack: ['Next.js', 'WebGL', 'Zod', 'WebSockets', 'Go', 'TimescaleDB'],
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    publishedAt: '2025-11-18T10:00:00Z',
  },
];

const defaultArticles: Article[] = [
  {
    id: 'art-1',
    slug: 'the-rise-of-agentic-software-workflows',
    title: 'The Rise of Agentic Software Workflows: Beyond Auto-Complete',
    excerpt:
      'Why the next generation of software development belongs to autonomous reasoning loops, deterministic sandboxes, and contract-first architecture.',
    content: `
# The Rise of Agentic Software Workflows

For the past two years, AI in software development has largely looked like supercharged auto-completion: autocomplete suggestions, inline code generation, and chat assistants answering syntax questions.

While helpful, this model barely scratches the surface. The real revolution begins when agents transition from assistants into collaborative systems engineers capable of multi-step planning, iterative execution, verification, and autonomous feedback loops.

## The Contract-First Imperative

In an agentic workflow, code generation cannot operate in a vacuum. Autonomous agents thrive when boundaries and invariants are clearly defined.
    `,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    author: {
      id: 'auth-1',
      name: 'Dr. Sarah Chen',
      role: 'Principal Systems Architect',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      bio: 'Pioneering distributed multi-agent systems and compiler optimizations.',
    },
    category: 'Architecture',
    tags: ['Agentic AI', 'Next.js', 'System Design', 'TypeScript'],
    readingTime: '6 min read',
    featured: true,
    publishedAt: '2026-03-01T08:00:00Z',
  },
  {
    id: 'art-2',
    slug: 'architecting-zero-downtime-data-sync',
    title: 'Architecting for Zero-Downtime Global Data Synchronizations',
    excerpt:
      'A deep dive into dual-write strategies, change-data-capture (CDC) pipelines, and blue-green database cutovers at scale.',
    content: `
# Architecting for Zero-Downtime Global Data Synchronizations

When your user base is active 24/7 across every timezone from Tokyo to New York, scheduled maintenance windows are a luxury of the past. 

In this article, we break down the exact patterns we implemented for Nexus Pay to migrate 40 million records across multi-cloud regions with zero downtime.
    `,
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    author: {
      id: 'auth-2',
      name: 'Alex Rivera',
      role: 'Head of Infrastructure',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      bio: 'Ex-Stripe infrastructure engineer specializing in distributed consensus.',
    },
    category: 'Infrastructure',
    tags: ['Distributed Systems', 'Kafka', 'PostgreSQL', 'High Availability'],
    readingTime: '8 min read',
    featured: false,
    publishedAt: '2026-02-18T14:30:00Z',
  },
  {
    id: 'art-3',
    slug: 'composable-design-tokens-in-enterprise-nextjs',
    title: 'Composable Design Tokens in Enterprise Next.js Applications',
    excerpt:
      'How to build a unified design system that scales across multiple applications without style regressions or CSS bloat.',
    content: `
# Composable Design Tokens in Enterprise Next.js

Modern enterprise web applications frequently suffer from "style drift": slight discrepancies in padding, colors, border radii, and button states that compound over time across multiple product teams.
    `,
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    author: {
      id: 'auth-3',
      name: 'Mia Thorne',
      role: 'Design Systems Lead',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
      bio: 'Obsessed with accessibility, typographic rhythm, and fluid interfaces.',
    },
    category: 'Design Systems',
    tags: ['Tailwind CSS', 'Next.js', 'UI/UX', 'Design Tokens'],
    readingTime: '5 min read',
    featured: false,
    publishedAt: '2026-01-28T11:15:00Z',
  },
];

class Database {
  private data: DatabaseSchema;

  constructor() {
    this.ensureDataDir();
    this.data = this.readDb();
  }

  private ensureDataDir() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  }

  private readDb(): DatabaseSchema {
    try {
      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, 'utf-8');
        return JSON.parse(raw);
      }
    } catch (err) {
      console.error('Error reading db.json, falling back to defaults:', err);
    }

    // Default initialization
    const initial: DatabaseSchema = {
      siteConfig: defaultSiteConfig,
      services: defaultServices,
      caseStudies: defaultCaseStudies,
      articles: defaultArticles,
      inquiries: [],
    };
    this.saveDb(initial);
    return initial;
  }

  private saveDb(data: DatabaseSchema) {
    try {
      this.ensureDataDir();
      fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    } catch (err) {
      console.error('Failed to write db.json:', err);
    }
  }

  // Site Config
  getSiteConfig(): SiteConfig {
    return this.data.siteConfig;
  }

  updateSiteConfig(updates: Partial<SiteConfig>): SiteConfig {
    this.data.siteConfig = { ...this.data.siteConfig, ...updates };
    this.saveDb(this.data);
    return this.data.siteConfig;
  }

  // Services
  getServices(): Service[] {
    return this.data.services.sort((a, b) => a.order - b.order);
  }

  createService(srv: Omit<Service, 'id'>): Service {
    const newService: Service = {
      ...srv,
      id: `srv-${Date.now()}`,
    };
    this.data.services.push(newService);
    this.saveDb(this.data);
    return newService;
  }

  updateService(id: string, updates: Partial<Service>): Service | null {
    const idx = this.data.services.findIndex((s) => s.id === id);
    if (idx === -1) return null;
    this.data.services[idx] = { ...this.data.services[idx], ...updates };
    this.saveDb(this.data);
    return this.data.services[idx];
  }

  deleteService(id: string): boolean {
    const before = this.data.services.length;
    this.data.services = this.data.services.filter((s) => s.id !== id);
    if (this.data.services.length !== before) {
      this.saveDb(this.data);
      return true;
    }
    return false;
  }

  // Case Studies
  getCaseStudies(): CaseStudy[] {
    return this.data.caseStudies;
  }

  createCaseStudy(cs: Omit<CaseStudy, 'id'>): CaseStudy {
    const newCs: CaseStudy = {
      ...cs,
      id: `cs-${Date.now()}`,
    };
    this.data.caseStudies.unshift(newCs);
    this.saveDb(this.data);
    return newCs;
  }

  updateCaseStudy(id: string, updates: Partial<CaseStudy>): CaseStudy | null {
    const idx = this.data.caseStudies.findIndex((c) => c.id === id);
    if (idx === -1) return null;
    this.data.caseStudies[idx] = { ...this.data.caseStudies[idx], ...updates };
    this.saveDb(this.data);
    return this.data.caseStudies[idx];
  }

  deleteCaseStudy(id: string): boolean {
    const before = this.data.caseStudies.length;
    this.data.caseStudies = this.data.caseStudies.filter((c) => c.id !== id);
    if (this.data.caseStudies.length !== before) {
      this.saveDb(this.data);
      return true;
    }
    return false;
  }

  // Articles
  getArticles(): Article[] {
    return this.data.articles;
  }

  createArticle(art: Omit<Article, 'id'>): Article {
    const newArt: Article = {
      ...art,
      id: `art-${Date.now()}`,
    };
    this.data.articles.unshift(newArt);
    this.saveDb(this.data);
    return newArt;
  }

  updateArticle(id: string, updates: Partial<Article>): Article | null {
    const idx = this.data.articles.findIndex((a) => a.id === id);
    if (idx === -1) return null;
    this.data.articles[idx] = { ...this.data.articles[idx], ...updates };
    this.saveDb(this.data);
    return this.data.articles[idx];
  }

  deleteArticle(id: string): boolean {
    const before = this.data.articles.length;
    this.data.articles = this.data.articles.filter((a) => a.id !== id);
    if (this.data.articles.length !== before) {
      this.saveDb(this.data);
      return true;
    }
    return false;
  }

  // Inquiries
  getInquiries(): InquiryRecord[] {
    return this.data.inquiries;
  }

  createInquiry(inq: Omit<InquiryRecord, 'id' | 'createdAt' | 'status'>): InquiryRecord {
    const newInq: InquiryRecord = {
      ...inq,
      id: `inq-${Date.now()}`,
      status: 'new',
      createdAt: new Date().toISOString(),
    };
    this.data.inquiries.unshift(newInq);
    this.saveDb(this.data);
    return newInq;
  }

  updateInquiryStatus(id: string, status: InquiryRecord['status']): InquiryRecord | null {
    const idx = this.data.inquiries.findIndex((i) => i.id === id);
    if (idx === -1) return null;
    this.data.inquiries[idx].status = status;
    this.saveDb(this.data);
    return this.data.inquiries[idx];
  }
}

export const db = new Database();
