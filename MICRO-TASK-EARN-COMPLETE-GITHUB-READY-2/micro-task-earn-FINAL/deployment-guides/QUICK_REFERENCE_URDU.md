# ⚡ QUICK REFERENCE - Roman Urdu

## 🏃 5 Minute Deploy

**Jani, bilkul quick cheez:**

---

### 1️⃣ SUPABASE (5 min)
```
supabase.com → Sign Up → New Project
Settings → API → Copy 3 keys
SQL Editor → Paste schema.sql → RUN
Storage → New Bucket → Name: proofs → PUBLIC
```
**GET: 3 Keys**

---

### 2️⃣ TURNSTILE (3 min)
```
dash.cloudflare.com → Turnstile → Create Site
Site Name: Micro Task Earn
Domain: localhost
Copy 2 Keys
```
**GET: 2 Keys**

---

### 3️⃣ .env.local FILE
```env
NEXT_PUBLIC_SUPABASE_URL=[Supabase URL]
NEXT_PUBLIC_SUPABASE_ANON_KEY=[Supabase Key]
SUPABASE_SERVICE_ROLE_KEY=[Supabase Service Key]
NEXT_PUBLIC_TURNSTILE_SITE_KEY=[Turnstile Site Key]
TURNSTILE_SECRET_KEY=[Turnstile Secret Key]
```

---

### 4️⃣ GITHUB (2 min)
```bash
git init
git add .
git commit -m "Initial"
git remote add origin https://github.com/[username]/micro-task-earn.git
git push -u origin main
```

---

### 5️⃣ VERCEL DEPLOY (2 min)
```
vercel.com → Add New → Project
Select GitHub Repo
Add 5 Environment Variables (from .env.local)
Click DEPLOY
WAIT 2-3 MINUTE
🎉 LIVE!
```

---

## 📝 COMMAND LINE (Local Testing)

**Agar locally test karna ho:**

```bash
cd micro-task-earn
npm install
npm run dev
# Browser: http://localhost:3000
```

---

## ❌ COMMON PROBLEMS & FIXES

| Masla | Fix |
|------|-----|
| "Env not working" | Vercel par redeploy karo |
| "Database error" | Keys check karo bilkul exact |
| "Turnstile not show" | Domain add karo Cloudflare par |
| "Images upload fail" | Bucket public hay check karo |

---

## ✅ TEST AFTER DEPLOY

- [ ] Homepage load
- [ ] Dashboard dikhay
- [ ] Admin panel khul jaye
- [ ] Upload button work karay
- [ ] Captcha dikhay
- [ ] Submit successful ho

---

## 🔗 IMPORTANT LINKS

- **Supabase:** supabase.com
- **Vercel:** vercel.com
- **Turnstile:** dash.cloudflare.com
- **GitHub:** github.com

---

## 💰 COST (Per Month)

- Vercel: FREE (up to 100GB)
- Supabase: FREE (500MB database)
- Turnstile: FREE (1M challenges)
- **Total: $0** ✅

---

## 🎯 TOTAL TIME

- Supabase Setup: 5 min
- Turnstile Setup: 3 min
- GitHub Upload: 2 min
- Vercel Deploy: 3 min
- **TOTAL: ~13 minutes** ⚡

---

## 🚀 USKE BAAD

1. Real Binance wallet add karo
2. Test karo pore upload
3. Admin approval check karo
4. Balance update check karo
5. Custom domain connect karo (optional)

---

**JAB TAK LIVE HO JAYE, JANI BADHA WELCOME HAI!** 💪

