# 🚀 GitHub aur Vercel Deployment Guide

## Step 1: GitHub par Upload kren

### Terminal Commands:
```bash
# GitHub par initialize kren
git init
git add .
git commit -m "Initial commit: Micro Task Earn project"
git remote add origin https://github.com/YOUR_USERNAME/micro-task-earn.git
git branch -M main
git push -u origin main
```

### Important:
- ✅ `.env.local` GitHub par nahin jayega (`.gitignore` se hide hai)
- ✅ `node_modules/` nahin jayega
- ✅ `.next/` nahin jayega

## Step 2: Environment Variables Setup

GitHub mein upload karne se PEHLE `.env.local` banayein:

```bash
cp .env.example .env.local
```

Phir `.env.local` mein sab values fill kren:
```
NEXT_PUBLIC_SUPABASE_URL=your_actual_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_key
SUPABASE_SERVICE_ROLE_KEY=your_actual_key
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_actual_key
TURNSTILE_SECRET_KEY=your_actual_key
```

## Step 3: Vercel par Deploy kren

### Option A: GitHub se Direct Connect

1. https://vercel.com par jayein
2. "Import Project" click kren
3. GitHub account connect kren
4. Apna repository select kren
5. Environment variables add kren:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
   - `TURNSTILE_SECRET_KEY`

### Option B: Vercel CLI

```bash
# Install kren
npm i -g vercel

# Vercel mein login kren
vercel login

# Deploy kren
vercel --prod
```

## Common Errors aur Fix

### Error: "Couldn't find any 'pages' or 'app' directory"
✅ **Fixed!** Hum ne `tsconfig.json` aur `next.config.js` update kar diye hain.

### Error: "Cannot find module '@supabase/supabase-js'"
```bash
npm install
```

### Error: Environment variables missing
Sunika kren ke Vercel project settings mein sab variables add ho gaye.

## Deployment Status Check

Vercel dashboard par:
1. Go to https://vercel.com/dashboard
2. Project select kren
3. "Deployments" tab dekhen
4. Latest deployment ka status check kren

## Local Testing

Deploy karne se pehle local mein test kren:

```bash
# Dependencies install kren
npm install

# Development server chalayein
npm run dev

# Build test kren
npm run build

# Production mein test kren
npm start
```

---

✅ **Ab deployment ready ho!** GitHub par push kren aur Vercel automatically deploy kar degaa.
