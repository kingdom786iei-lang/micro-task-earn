# 🚀 Micro Task Earn - Deployment Guide (Roman Urdu)

## ⚡ QUICK DEPLOY (5 Minute)

Jani, bilkul asan hay! Yeh rahe simple steps:

---

## 📋 STEP 1: Supabase Setup (5 minute)

### Kya Karna Hay:

1. **supabase.com** par jao
   - "Sign Up" ya "Log In" karo
   - Click "New Project"
   - Name dau: "Micro Task Earn"
   - Wait karenge 1-2 minute project banne ka

2. **Project ban gya to:**
   - Sidebar me "Settings" dhundo
   - "API" option kholo
   - Yahan se ye teen cheezein **Copy** karo:

```
📌 Project URL:
https://[your-project-id].supabase.co

📌 Anon Key:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

📌 Service Role Key:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. **Database Tables Banao:**
   - Sidebar me "SQL Editor" dhundo
   - Naya tab kholo
   - Aapke pास **supabase-schema.sql** file hay
   - Poori file copy karke Supabase ke SQL Editor me paste karo
   - **RUN** button par click karo
   - Wait karenge 2-3 second ✅

4. **Storage Bucket Banao:**
   - Sidebar me "Storage" dhundo
   - **"New Bucket"** button par click karo
   - Bucket ka naam: `proofs`
   - **Important:** "Make it public" toggle ON karo
   - Create button daba do ✅

**✅ Supabase DONE! Ab 3 keys aapke paas hain.**

---

## 🔐 STEP 2: Cloudflare Turnstile Setup (3 minute)

### Kya Hay Ye?
Turnstile = Security widget jo bots se bachaye. Jab user submit karay ga proof to captcha dikhega.

### Setup Kaise Karo:

1. **dash.cloudflare.com** par jao
   - Login karo (agar account nahi hay to banao, free hay)

2. **Turnstile Section:**
   - Left sidebar me dhundo "Turnstile"
   - Click karo

3. **Naya Site Banao:**
   - **"Create Site"** button par click karo
   - **Isko Fill Karo:**
     - Site name: `Micro Task Earn` 
     - Domains: `localhost` (abi ke liye)
     - Mode: Managed (default)
   - Create button daba do

4. **Keys Milo:**
   - Site ban gya to dono keys dikhai denge:

```
📌 Site Key (PUBLIC - .env me lagega):
1x00000000000000000000AA

📌 Secret Key (SERVER - .env me lagega):
1x0000000000000000000000000000000AA
```

**Copy kar lo dono!** ✅

---

## 📝 STEP 3: .env.local File Banao

### Ye Kya Hay?
.env.local = ek file jisme aapke secret keys hote hain. Local machine par download hota hay, server par nahi.

### Kaise Banao:

1. **Micro Task Earn** folder kholo (jahan se extract kia tha)

2. **Nai File Banao:**
   - File ka naam: `.env.local` (bilkul exact - dot se shuru)

3. **Isme Ye Copy-Paste Karo:**

```env
# ========== SUPABASE ==========
NEXT_PUBLIC_SUPABASE_URL=https://[your-project-id].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# ========== CLOUDFLARE TURNSTILE ==========
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
```

4. **Apne Values Replace Karo:**
   - Supabase se jo 3 cheezein copy kiye thin = un ko yahan paste karo
   - Turnstile se jo 2 keys copy kiye thin = un ko yahan paste karo

5. **File Save Karo** ✅

---

## 🧪 STEP 4: Locally Test Karo (Optional but Good)

### Computer Par Run Karo:

```bash
# Terminal/Command Prompt kholo
# Micro Task Earn folder me jao
cd micro-task-earn

# Dependencies install karo
npm install

# App start karo
npm run dev
```

**Output dikhey ga:**
```
> next dev
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

**Browser me jao:** `http://localhost:3000`

### Test Karenge:
- ✅ Homepage load ho gya?
- ✅ Dashboard page khul gya? (`/dashboard`)
- ✅ Admin panel show ho gya? (`/admin`)
- ✅ Upload button work kar rahi?

**Agar sab kuch ✅ hay to achha hai!**

---

## 🌍 STEP 5: GitHub Par Upload Karo

### Kya Hay Ye?
GitHub = aapke code ka backup + Vercel ke sath connect hone ke liye zaruri.

### Setup:

1. **GitHub Account Banao** (agar nahi hay):
   - github.com par jao
   - Sign up karo (free)

2. **Naya Repository Banao:**
   - GitHub login karo
   - Top right me "+" icon
   - Click "New repository"
   - Name: `micro-task-earn`
   - **Important:** "Public" select karo
   - "Create repository" button daba do

3. **Terminal/Command Prompt Kholo:**
   - Micro Task Earn folder ko open karo
   - Iske andar Terminal kholo

4. **Ye Commands Chalo:**

```bash
git init

git add .

git commit -m "Micro Task Earn - Initial Commit"

git branch -M main

git remote add origin https://github.com/YOUR_USERNAME/micro-task-earn.git

git push -u origin main
```

**Agar koi error aye:**
- `YOUR_USERNAME` ko apne GitHub username se replace karo
- Git download hai ki nahi check karo

**✅ Upload Complete!** Code GitHub par chala gya.

---

## 🚀 STEP 6: VERCEL PAR DEPLOY KARO (FINAL!)

### Ye LIVE Hone Ka Time Hai:

1. **vercel.com** par jao
   - Login karo GitHub se (sab easy hota hay)

2. **New Project Create Karo:**
   - Click "Add New"
   - Click "Project"
   - "Import Git Repository" par click karo
   - Apna "micro-task-earn" repo select karo
   - "Import" button daba do

3. **Build Settings (Automatic ho jayengi):**
   ```
   Framework: Next.js ✓
   Build Command: next build ✓
   Output Directory: .next ✓
   ```

4. **Environment Variables Add Karo:**
   - Vercel ka panel me "Environment Variables" section dikhega
   - Ye 5 variables add karo (copy-paste from .env.local):
   
   ```
   NEXT_PUBLIC_SUPABASE_URL = [value]
   NEXT_PUBLIC_SUPABASE_ANON_KEY = [value]
   SUPABASE_SERVICE_ROLE_KEY = [value]
   NEXT_PUBLIC_TURNSTILE_SITE_KEY = [value]
   TURNSTILE_SECRET_KEY = [value]
   ```

5. **Deploy Button:**
   - **"Deploy"** button par click karo
   - Wait karenge 2-3 minute
   - Jab green checkmark aye = **LIVE HAI!** 🎉

6. **Live URL Milo:**
   - Vercel apko URL dey ga
   - Kuch aise: `https://micro-task-earn-xyz.vercel.app`
   - Ye apka LIVE WEBSITE hay! 🌐

---

## ✅ POST-DEPLOYMENT CHECKLIST

App live ho gya, ab check karo:

- [ ] Homepage load ho gya?
- [ ] `/dashboard` page khul gya?
- [ ] `/admin` page khul gya?
- [ ] Task card dikhay?
- [ ] "Submit Proof" button work kar rahi?
- [ ] Captcha (Turnstile) dikhay?
- [ ] Image upload work kar rahi?
- [ ] Admin panel me submissions dikhay?
- [ ] Approve button work kar rahi?
- [ ] `/profile` page khul gya?

**Sab kuch ✅ hay? Mubarak ho! 🎉**

---

## 🔄 TURNSTILE DOMAIN UPDATE

Jab app deploy ho jaye, Cloudflare ko batana zaruri hay:

1. **dash.cloudflare.com** par jao
2. **Turnstile** section kholo
3. Apne site ke **Settings** me jao
4. **Domains** section me apna Vercel URL add karo
   ```
   micro-task-earn-xyz.vercel.app
   ```
5. Save karo ✅

---

## 🧠 Agar Kuch Masla Aye:

### Problem: ".env.local not working"
**Solve:** 
- Vercel par redeploy karo (env vars add karne ke baad)
- `npm run dev` restart karo (local par)

### Problem: "Database connection error"
**Solve:**
- Check karo key bilkul correct ho
- Supabase project ko open karke URL check karo
- `.env.local` me space na ho

### Problem: "Turnstile not showing"
**Solve:**
- Vercel par domain add karo Turnstile settings me
- Page refresh karo
- Browser cache clear karo

### Problem: "Images not uploading"
**Solve:**
- `proofs` bucket PUBLIC hay na?
- Bucket name bilkul "proofs" hay?
- File size 5MB se chhota hay?

---

## 💡 Pro Tips:

1. **Local development:** `npm run dev` se test karo phir deploy karo
2. **Environment variables:** Kabhi commit mat karo `.env.local`
3. **Database backup:** Supabase se regular backup lo
4. **Custom domain:** Baad me `.com` domain connect kar sakte ho Vercel par

---

## 🎯 FINAL CHECKLIST:

```
[ ] Supabase project banaya ✓
[ ] Turnstile site banaya ✓
[ ] .env.local file banai ✓
[ ] GitHub par upload kia ✓
[ ] Vercel par deploy kia ✓
[ ] App live chalu hai ✓
[ ] Sab features test kiye ✓
[ ] Turnstile domain add kia ✓
```

**Agar ye sab ✓ hay TO KHUDA HAFIZ! APP LIVE HAI!** 🚀

---

## 📞 QUICK HELP LINKS:

- **Supabase Help:** supabase.com/docs
- **Vercel Help:** vercel.com/docs
- **Turnstile Help:** developers.cloudflare.com/turnstile
- **Next.js Help:** nextjs.org/docs

---

## 🎊 MUBARAK HO JANI!

Aab tera app live hay internet par! Har koi dekh sakta hay.

**Agla step:** Real Binance wallet add karo payouts ke liye.

**GOOD LUCK! 💪🚀**

---

**Written with ❤️ for easy understanding in Roman Urdu**
