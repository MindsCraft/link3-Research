import { Router, type Request, type Response } from 'express';
import {
  SiteConfigSchema,
  ServiceSchema,
  CaseStudySchema,
  ArticleSchema,
  ContactSubmissionSchema,
} from '@link3/contracts';
import { db } from '../db.js';

export const apiRouter = Router();

const getParam = (param: string | string[] | undefined): string => {
  if (Array.isArray(param)) return param[0] || '';
  return param || '';
};

// ==========================================
// 1. Site Config
// ==========================================
apiRouter.get('/site-config', (_req: Request, res: Response) => {
  const config = db.getSiteConfig();
  res.json({ success: true, data: config });
});

apiRouter.put('/site-config', (req: Request, res: Response) => {
  const parsed = SiteConfigSchema.partial().safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ success: false, error: parsed.error.errors[0]?.message });
    return;
  }
  const updated = db.updateSiteConfig(parsed.data);
  res.json({ success: true, data: updated });
});

// ==========================================
// 2. Services
// ==========================================
apiRouter.get('/services', (_req: Request, res: Response) => {
  const services = db.getServices();
  res.json({ success: true, data: services });
});

apiRouter.get('/services/:slug', (req: Request, res: Response) => {
  const slug = getParam(req.params.slug);
  const service = db.getServices().find((s) => s.slug === slug);
  if (!service) {
    res.status(404).json({ success: false, error: 'Service not found' });
    return;
  }
  res.json({ success: true, data: service });
});

apiRouter.post('/services', (req: Request, res: Response) => {
  const parsed = ServiceSchema.omit({ id: true }).safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ success: false, error: parsed.error.errors[0]?.message });
    return;
  }
  const created = db.createService(parsed.data);
  res.status(201).json({ success: true, data: created });
});

apiRouter.put('/services/:id', (req: Request, res: Response) => {
  const id = getParam(req.params.id);
  const updated = db.updateService(id, req.body);
  if (!updated) {
    res.status(404).json({ success: false, error: 'Service not found' });
    return;
  }
  res.json({ success: true, data: updated });
});

apiRouter.delete('/services/:id', (req: Request, res: Response) => {
  const id = getParam(req.params.id);
  const ok = db.deleteService(id);
  res.json({ success: ok });
});

// ==========================================
// 3. Case Studies
// ==========================================
apiRouter.get('/case-studies', (req: Request, res: Response) => {
  let list = db.getCaseStudies();
  const category = req.query.category as string;
  if (category && category !== 'All') {
    list = list.filter((cs) => cs.category.toLowerCase() === category.toLowerCase());
  }
  res.json({ success: true, data: list });
});

apiRouter.get('/case-studies/:slug', (req: Request, res: Response) => {
  const slug = getParam(req.params.slug);
  const item = db.getCaseStudies().find((c) => c.slug === slug);
  if (!item) {
    res.status(404).json({ success: false, error: 'Case study not found' });
    return;
  }
  res.json({ success: true, data: item });
});

apiRouter.post('/case-studies', (req: Request, res: Response) => {
  const parsed = CaseStudySchema.omit({ id: true }).safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ success: false, error: parsed.error.errors[0]?.message });
    return;
  }
  const created = db.createCaseStudy(parsed.data);
  res.status(201).json({ success: true, data: created });
});

apiRouter.put('/case-studies/:id', (req: Request, res: Response) => {
  const id = getParam(req.params.id);
  const updated = db.updateCaseStudy(id, req.body);
  if (!updated) {
    res.status(404).json({ success: false, error: 'Case study not found' });
    return;
  }
  res.json({ success: true, data: updated });
});

apiRouter.delete('/case-studies/:id', (req: Request, res: Response) => {
  const id = getParam(req.params.id);
  const ok = db.deleteCaseStudy(id);
  res.json({ success: ok });
});

// ==========================================
// 4. Articles
// ==========================================
apiRouter.get('/articles', (req: Request, res: Response) => {
  let list = db.getArticles();
  const category = req.query.category as string;
  const search = (req.query.search as string)?.toLowerCase();

  if (category && category !== 'All') {
    list = list.filter((a) => a.category.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    list = list.filter(
      (a) =>
        a.title.toLowerCase().includes(search) ||
        a.excerpt.toLowerCase().includes(search) ||
        a.tags.some((t) => t.toLowerCase().includes(search))
    );
  }

  res.json({ success: true, data: list });
});

apiRouter.get('/articles/:slug', (req: Request, res: Response) => {
  const slug = getParam(req.params.slug);
  const item = db.getArticles().find((a) => a.slug === slug);
  if (!item) {
    res.status(404).json({ success: false, error: 'Article not found' });
    return;
  }
  res.json({ success: true, data: item });
});

apiRouter.post('/articles', (req: Request, res: Response) => {
  const parsed = ArticleSchema.omit({ id: true }).safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ success: false, error: parsed.error.errors[0]?.message });
    return;
  }
  const created = db.createArticle(parsed.data);
  res.status(201).json({ success: true, data: created });
});

apiRouter.put('/articles/:id', (req: Request, res: Response) => {
  const id = getParam(req.params.id);
  const updated = db.updateArticle(id, req.body);
  if (!updated) {
    res.status(404).json({ success: false, error: 'Article not found' });
    return;
  }
  res.json({ success: true, data: updated });
});

apiRouter.delete('/articles/:id', (req: Request, res: Response) => {
  const id = getParam(req.params.id);
  const ok = db.deleteArticle(id);
  res.json({ success: ok });
});

// ==========================================
// 5. Inquiries (Contact Submissions / CRM)
// ==========================================
apiRouter.get('/inquiries', (_req: Request, res: Response) => {
  const list = db.getInquiries();
  res.json({ success: true, data: list });
});

apiRouter.post('/inquiries', (req: Request, res: Response) => {
  const parsed = ContactSubmissionSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ success: false, error: parsed.error.errors[0]?.message });
    return;
  }
  const created = db.createInquiry(parsed.data);
  res.status(201).json({ success: true, data: created });
});

apiRouter.patch('/inquiries/:id/status', (req: Request, res: Response) => {
  const id = getParam(req.params.id);
  const { status } = req.body;
  const updated = db.updateInquiryStatus(id, status);
  if (!updated) {
    res.status(404).json({ success: false, error: 'Inquiry not found' });
    return;
  }
  res.json({ success: true, data: updated });
});
