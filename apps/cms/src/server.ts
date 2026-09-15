import express from 'express';
import cors from 'cors';
import { apiRouter } from './routes/api.js';
import { renderAdminHtml } from './admin/ui.js';

const app = express();
const PORT = process.env.PORT || 4005;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', apiRouter);

// CMS Admin Portal
app.get('/admin', (_req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(renderAdminHtml());
});

// Root redirects or displays admin
app.get('/', (_req, res) => {
  res.redirect('/admin');
});

app.listen(PORT, () => {
  console.log(`=============================================`);
  console.log(`🚀 Link3 CMS Engine active on port ${PORT}`);
  console.log(`📊 Admin Portal: http://localhost:${PORT}/admin`);
  console.log(`⚡ REST API:     http://localhost:${PORT}/api`);
  console.log(`=============================================`);
});
