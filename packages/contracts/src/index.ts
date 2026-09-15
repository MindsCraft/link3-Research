import { z } from 'zod';

// ==========================================
// 1. Site Configuration & Navigation
// ==========================================
export const NavItemSchema = z.object({
  label: z.string(),
  href: z.string(),
  badge: z.string().optional(),
  isExternal: z.boolean().optional(),
});

export const SocialLinkSchema = z.object({
  platform: z.enum(['github', 'twitter', 'linkedin', 'discord', 'youtube', 'email']),
  url: z.string(),
  label: z.string(),
});

export const SiteConfigSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  description: z.string(),
  url: z.string(),
  logoText: z.string(),
  announcement: z
    .object({
      enabled: z.boolean(),
      text: z.string(),
      linkText: z.string().optional(),
      href: z.string().optional(),
    })
    .optional(),
  navigation: z.array(NavItemSchema),
  socialLinks: z.array(SocialLinkSchema),
  contactEmail: z.string().email(),
  location: z.string(),
});

export type NavItem = z.infer<typeof NavItemSchema>;
export type SocialLink = z.infer<typeof SocialLinkSchema>;
export type SiteConfig = z.infer<typeof SiteConfigSchema>;

// ==========================================
// 2. Services / Capabilities
// ==========================================
export const ServiceFeatureSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export const ServiceSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  tagline: z.string(),
  summary: z.string(),
  icon: z.string(), // icon identifier e.g. 'cpu', 'globe', 'layers', 'shield', 'sparkles', 'workflow'
  features: z.array(ServiceFeatureSchema),
  deliverables: z.array(z.string()),
  badge: z.string().optional(),
  highlightMetric: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .optional(),
  order: z.number().default(0),
});

export type ServiceFeature = z.infer<typeof ServiceFeatureSchema>;
export type Service = z.infer<typeof ServiceSchema>;

// ==========================================
// 3. Case Studies / Work Portfolio
// ==========================================
export const MetricSchema = z.object({
  label: z.string(),
  value: z.string(),
  change: z.string().optional(),
});

export const TestimonialSchema = z.object({
  quote: z.string(),
  author: z.string(),
  role: z.string(),
  company: z.string(),
  avatarUrl: z.string().optional(),
});

export const CaseStudySchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  client: z.string(),
  category: z.string(), // e.g. 'FinTech', 'AI Systems', 'Next-Gen Commerce', 'Enterprise Cloud'
  summary: z.string(),
  challenge: z.string(),
  solution: z.string(),
  impact: z.string(),
  metrics: z.array(MetricSchema),
  techStack: z.array(z.string()),
  coverImage: z.string(),
  featured: z.boolean().default(false),
  publishedAt: z.string(), // ISO date
  testimonial: TestimonialSchema.optional(),
});

export type Metric = z.infer<typeof MetricSchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;
export type CaseStudy = z.infer<typeof CaseStudySchema>;

// ==========================================
// 4. Articles / Insights
// ==========================================
export const AuthorSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  avatarUrl: z.string(),
  bio: z.string().optional(),
});

export const ArticleSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  excerpt: z.string(),
  content: z.string(), // Markdown or rich content
  coverImage: z.string(),
  author: AuthorSchema,
  category: z.string(),
  tags: z.array(z.string()),
  readingTime: z.string(),
  featured: z.boolean().default(false),
  publishedAt: z.string(), // ISO date
});

export type Author = z.infer<typeof AuthorSchema>;
export type Article = z.infer<typeof ArticleSchema>;

// ==========================================
// 5. Contact & Project Inquiries
// ==========================================
export const ContactSubmissionSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  serviceInterest: z.string().min(1, 'Please select a service interest'),
  budgetRange: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const InquiryRecordSchema = ContactSubmissionSchema.extend({
  id: z.string(),
  status: z.enum(['new', 'in_review', 'contacted', 'archived']).default('new'),
  createdAt: z.string(),
});

export type ContactSubmission = z.infer<typeof ContactSubmissionSchema>;
export type InquiryRecord = z.infer<typeof InquiryRecordSchema>;

// ==========================================
// 6. Generic API Response Envelopes
// ==========================================
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
  meta?: PaginationMeta;
}
