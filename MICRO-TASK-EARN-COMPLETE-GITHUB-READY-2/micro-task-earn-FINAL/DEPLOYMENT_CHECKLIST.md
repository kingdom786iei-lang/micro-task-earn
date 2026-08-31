# ✅ Deployment Checklist

## Before GitHub Upload ⚠️

- [ ] `.env.local` file create ki (`.env.example` se copy)
- [ ] Sab environment variables fill kiye
- [ ] Local pe `npm install` run kiya
- [ ] Local pe `npm run build` successfully complete hua
- [ ] Local pe `npm run dev` test kiya - sab pages load hon
- [ ] `.git` folder existing rehti to delete kiya

```bash
# Agar .git rehti ho:
rm -rf .git
```

## GitHub Setup ✅

- [ ] GitHub account create ki (agar nahin hy)
- [ ] New repository create ki (micro-task-earn)
- [ ] Repository public set ki (optional - private bhi ho sakte ho)

### Upload Commands:
```bash
git init
git add .
git commit -m "Initial commit: Micro Task Earn"
git remote add origin https://github.com/YOUR_USERNAME/micro-task-earn.git
git branch -M main
git push -u origin main
```

## Vercel Setup 🚀

### Vercel par Project Configuration:

- [ ] Vercel.com par login ki
- [ ] GitHub account connect ki
- [ ] Repository select ki
- [ ] Framework: Next.js (auto-detect hoga)
- [ ] Build Command: `npm run build` ✓
- [ ] Output Directory: `.next` ✓
- [ ] Install Command: `npm install` ✓

### Environment Variables (Vercel Dashboard):

Add kren ye exact names ke sath:

- [ ] `NEXT_PUBLIC_SUPABASE_URL` = your_url
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your_key
- [ ] `SUPABASE_SERVICE_ROLE_KEY` = your_key
- [ ] `NEXT_PUBLIC_TURNSTILE_SITE_KEY` = your_key
- [ ] `TURNSTILE_SECRET_KEY` = your_key

### Node.js Version:
- [ ] 18.17.0 or higher selected (Vercel settings mein)

## Supabase Configuration 🗄️

### Database Setup:
- [ ] Supabase project create ki
- [ ] SQL Editor mein `supabase-schema.sql` run kiya
- [ ] All tables create ho gaye

### Storage Setup:
- [ ] "proofs" bucket create ki
- [ ] Bucket public set ki
- [ ] CORS rules check kiye

### API Keys:
- [ ] NEXT_PUBLIC_SUPABASE_URL: Copy from project settings
- [ ] NEXT_PUBLIC_SUPABASE_ANON_KEY: Copy from API section
- [ ] SUPABASE_SERVICE_ROLE_KEY: Copy from API section

## Cloudflare Turnstile Setup 🛡️

- [ ] Cloudflare account setup
- [ ] Turnstile site key generate ki
- [ ] Turnstile secret key generate ki
- [ ] Both keys Vercel mein add kiye

## Final Deployment ✨

```bash
# Push changes to GitHub
git add .
git commit -m "Add deployment files"
git push

# Vercel automatically deploy karega!
```

### Deploy Status Check:
- [ ] Vercel dashboard mein deployment running dikhayi diya
- [ ] Build logs mein errors nahin hy
- [ ] Deployment "Ready" status show kar raha hy
- [ ] Live URL assign ho gaya

## Post-Deployment Testing 🧪

- [ ] Live URL open ki
- [ ] Homepage load hota hy
- [ ] Dashboard access ho sakta hy
- [ ] Task list dikhayi deti hy
- [ ] Screenshot upload feature test ki
- [ ] Withdrawal feature test ki

---

## Common Issues & Fixes 🔧

### Build fails with "Couldn't find any 'pages' or 'app' directory"
✅ **FIXED** - `tsconfig.json` aur `next.config.js` already update ho chuke hy

### Environment variables not working
- [ ] Vercel dashboard mein verify kiya (spelling exact)
- [ ] Project redeploy kiya

### Supabase connection failed
- [ ] URL correct hy
- [ ] Anon key correct hy
- [ ] Firewall rules check kiye

### Turnstile not working
- [ ] Site key correct hy
- [ ] Secret key correct hy
- [ ] Cloudflare account active hy

---

## Emergency Rollback

Agar deployment fail ho:

```bash
# Last working version restore kren
git revert HEAD --no-edit
git push
```

Vercel automatically re-deploy karega!

---

## Support Contacts

Agar koi issue aay:
1. Vercel logs dekhen: https://vercel.com/dashboard
2. Supabase logs: Your project → Logs tab
3. Console errors: Browser DevTools (F12)

---

**Status:** ✅ **READY FOR DEPLOYMENT**

Deploy karne ke baad ye checklist archive kar dain taake reference mein rahe! 📚
