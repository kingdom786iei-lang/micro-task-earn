# 🚀 Micro Task Earn - Complete Deployment Guide

## ✅ Quick Deploy (5 Minutes)

### **Option 1: VERCEL (Recommended - Easiest)**

#### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Micro Task Earn"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/micro-task-earn.git
git push -u origin main
```

#### Step 2: Deploy on Vercel
1. Go to **vercel.com**
2. Click **"Add New"** → **Project**
3. Select your GitHub repo
4. Set environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL = your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY = your_key
   NEXT_PUBLIC_TURNSTILE_SITE_KEY = your_site_key
   TURNSTILE_SECRET_KEY = your_secret_key
   ```
5. Click **Deploy** ✅

**Your app goes LIVE in 2-3 minutes!**

---

### **Option 2: CLOUDFLARE PAGES** (Free, Fast)

#### Step 1: Connect GitHub to Cloudflare
1. Go to **dash.cloudflare.com**
2. Pages → Create a project → Connect to Git
3. Select repo → Authorize

#### Step 2: Configure Build
- **Framework preset:** Next.js
- **Build command:** `npm run build`
- **Build output directory:** `.next`
- **Node.js version:** 18.x

#### Step 3: Add Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_TURNSTILE_SITE_KEY
TURNSTILE_SECRET_KEY
```

#### Step 4: Deploy
Click **Save and Deploy** ✅

---

## 📋 Pre-Deployment Checklist

### Supabase Setup
- [ ] Create Supabase project
- [ ] Copy Project URL
- [ ] Copy Anon Key
- [ ] Copy Service Role Key
- [ ] Run `supabase-schema.sql` in SQL Editor
- [ ] Create `proofs` storage bucket (PUBLIC)

### Cloudflare Turnstile Setup
- [ ] Go to **dash.cloudflare.com** → Turnstile
- [ ] Create new site
- [ ] Get Site Key
- [ ] Get Secret Key

### GitHub Setup
- [ ] Create GitHub account (if not have)
- [ ] Create repository
- [ ] Push code to GitHub

---

## 🔐 Environment Variables (.env.local)

Create `.env.local` file with:

```env
# SUPABASE
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# CLOUDFLARE TURNSTILE
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
```

---

## 📱 Testing After Deploy

1. **Go to live URL**
2. **Homepage:** Check layout loads
3. **Dashboard:** Click "Submit Proof" → Test upload
4. **Admin Panel:** Create campaign, approve submissions
5. **Profile:** Add Binance wallet, test withdrawal
6. **Turnstile:** Verify captcha appears

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Env variables not loading | Redeploy platform after adding vars |
| Supabase auth error | Check anon key + URL match |
| Turnstile not showing | Verify Site Key + add domain in Turnstile |
| Image upload fails | Check proofs bucket is PUBLIC |
| DB schema error | Run supabase-schema.sql again |

---

## 📊 Performance Tips

```js
// next.config.js - Already configured
{
  images: { 
    domains: ['ynnrhunxyyzxsttzhopm.supabase.co'] 
  }
}
```

- Images auto-optimized ✅
- API routes serverless ✅
- Storage via Supabase ✅

---

## 🔒 Security Checklist

- [ ] Never commit `.env.local` (in .gitignore)
- [ ] Use Service Role key only on server
- [ ] Enable Supabase RLS on all tables
- [ ] Verify Turnstile on backend
- [ ] Add domain to Turnstile after deploy

---

## 💰 Cost Breakdown (Per Month)

| Service | Free Tier |
|---------|-----------|
| Vercel | Up to 100 GB bandwidth |
| Supabase | 500MB database, 1GB storage |
| Cloudflare Turnstile | 1M challenges free |
| Total | **$0** (if < limits) |

---

## 🎯 Next Steps After Deploy

1. ✅ **Test full workflow** (create task → submit → approve → payout)
2. ✅ **Add real Supabase credentials**
3. ✅ **Configure real Binance wallet payouts**
4. ✅ **Add custom domain** (optional)
5. ✅ **Enable email notifications** (optional)

---

## 📞 Quick Help

- **Vercel Issues?** → vercel.com/docs/frameworks/nextjs
- **Supabase Issues?** → supabase.com/docs
- **Turnstile Issues?** → developers.cloudflare.com/turnstile

**Deploy now → Go live in 5 minutes! 🚀**
