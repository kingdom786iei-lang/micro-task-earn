# 💰 Micro Task Earn - Complete SaaS Platform

**Automated Lead Generation & Micro-Task Management System**

---

## 🚀 Quick Start (Local)

```bash
# 1. Dependencies install kren
npm install

# 2. Environment variables setup
cp .env.example .env.local
# .env.local mein apni values fill kren

# 3. Development server chalayein
npm run dev

# 4. Open browser: http://localhost:3000
```

---

## 📋 Deployment Guide

**Detailed deployment instructions:** [GITHUB_SETUP.md](./GITHUB_SETUP.md)

### GitHub Setup:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Vercel Deployment:
1. Vercel.com par login kren
2. GitHub repository import kren
3. Environment variables add kren (copy `.env.example` values)
4. Deploy button click kren

---

## ✨ Features

- ✅ **User Dashboard** - Real-time task management
- ✅ **Screenshot Proof Upload** - Supabase Storage integration
- ✅ **Admin Approval System** - Automatic balance updates
- ✅ **Crypto Wallet** - Binance TRC20 wallet with $5 minimum
- ✅ **Anti-Bot Protection** - Cloudflare Turnstile integration
- ✅ **Responsive Design** - Mobile & Desktop optimized

---

## 🔧 Required Setup

### Supabase Setup:
```sql
-- Run supabase-schema.sql in Supabase SQL Editor
-- Database tables created automatically
```

### Supabase Storage:
1. Storage → New bucket
2. Name: `proofs`
3. Make it public ✓

### Environment Variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
TURNSTILE_SECRET_KEY=your_secret_key
```

---

## 📱 Tech Stack

- **Frontend:** Next.js 14.2.5 + React 18 + TypeScript
- **Backend:** Supabase PostgreSQL + Edge Functions
- **Styling:** Tailwind CSS
- **Auth:** Supabase Auth
- **Storage:** Supabase Storage
- **Anti-Bot:** Cloudflare Turnstile
- **Deployment:** Vercel

---

## 🛠️ Build Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Lint code
```

---

## 📞 Support

GitHub issues par nahin likhen - ye public code hy! 🔒
Apne deployment mein koi issue aaye to:
1. `.env.local` check kren
2. npm install dobara run kren
3. Vercel logs dekhen

---

**Version:** 1.0.0 | **Last Updated:** 2024 | **Status:** Production Ready ✅