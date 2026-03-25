# SRPT Scholar — Study Portal for Stree Roga & Prasuti Tantra

A study website for postgraduate Ayurveda students specialising in Obstetrics & Gynaecology (Stree Roga and Prasuti Tantra). It presents 32 modules covering Semesters 3–6, with Ayurvedic shlokas side-by-side with modern medical knowledge.

---

## How the Website Works (Plain English)

The website has two main parts:

1. **Homepage** — Shows all 32 module cards. You can search by name, filter by semester/paper/category.
2. **Topic Pages** — Click any module card that says "Content Ready" to see the full study material with shlokas, dual-column comparisons, exam bullets, mnemonics, etc.

---

## Folder Structure (What Lives Where)

```
OBGYN/
├── content/
│   └── topics/           ← YOUR CONTENT LIVES HERE
│       └── m1-garbhini-vigyana.mdx   ← Each topic is one file
│
├── src/
│   ├── app/              ← Website pages (you don't need to touch these)
│   │   ├── page.tsx      ← Homepage
│   │   └── topics/[slug]/← Topic page template
│   ├── components/       ← Reusable building blocks (ShlokaCard, etc.)
│   └── data/
│       └── modules.ts    ← List of all 32 modules
│
├── tina/
│   └── config.ts         ← Tina CMS settings
│
├── public/               ← Images and uploads go here
│   └── uploads/          ← Images you upload through the CMS
│
├── package.json          ← Project dependencies
└── README.md             ← This file
```

---

## How to Edit Content (The Easy Way — Using Tina CMS)

Once your site is deployed and Tina Cloud is connected:

1. Go to `yourwebsite.com/admin` in your browser
2. Log in with your Tina Cloud account
3. You'll see a list of all topics on the left
4. Click any topic to open the editor
5. Edit fields like you would in Google Docs:
   - Change the Ayurveda name, Devanagari, English name
   - Add or edit shlokas (source, Devanagari text, transliteration, meaning)
   - Edit exam bullets, mnemonics, dual-column content
6. Click **Save** when done
7. Tina automatically creates a commit on GitHub → Vercel rebuilds → your live site updates

### To Add a Brand New Topic

1. Go to `yourwebsite.com/admin`
2. Click **"Topics"** in the sidebar
3. Click the **"Create New"** button
4. Fill in all the fields:
   - Module Number (e.g., M2)
   - URL Slug (e.g., m2-garbha-sharira)
   - Ayurveda Name, Devanagari Name, English Name
   - Paper, Semester, Units, Category
   - Add shlokas, exam bullets, mnemonics etc.
5. Click **Save**
6. The new topic file will appear in `content/topics/` and a new page will be created

**Important**: After adding a new topic via CMS, you also need to mark it as `hasContent: true` in `src/data/modules.ts` for the card on the homepage to become clickable. You can do this through the CMS or ask someone to make this one small code change.

---

## How to Edit Content (The Manual Way — Editing Files)

If you prefer, you can edit the `.mdx` files directly:

1. Open the `content/topics/` folder
2. Open any `.mdx` file (like `m1-garbhini-vigyana.mdx`)
3. The top section between `---` marks is the "frontmatter" — this is your structured data
4. Edit the text values (keep the formatting structure the same)
5. Save the file
6. Push to GitHub (Vercel will auto-deploy)

### MDX File Structure

Each `.mdx` file has this structure:
```
---
moduleNumber: M1
slug: m1-garbhini-vigyana
nameAyurveda: Garbhini Vigyana
nameDevanagari: गर्भिणी विज्ञान
nameEnglish: Diagnosis of Pregnancy
paper: 1
semester: 3
units: 4
category: prasuti
references:
  - Charaka Sharira Sthana Ch. 4
  - Sushruta Sharira Sthana Ch. 3
shlokas:
  - source: Charaka Sharira Sthana 4/16
    devanagari: ऋतुकाले तु सम्प्राप्ते...
    transliteration: ṛtukāle tu samprāpte...
    meaning: Just as flowers bloom...
    clinicalNote: Amenorrhoea remains the earliest sign...
examBullets:
  - First exam point here
  - Second exam point here
mnemonics:
  - title: Signs of Pregnancy
    acronym: ABCDEF
    expansions:
      - Amenorrhoea
      - Breast tenderness
      - Cravings
      - Drowsiness
      - Excessive salivation
      - Frequency of micturition
---

Any additional notes written here in plain text...
```

---

## Setting Up From Scratch (Step-by-Step)

### Step 1: Create a Free GitHub Account

1. Go to **github.com** in your browser
2. Click **Sign Up**
3. Enter your email, create a password, choose a username
4. Verify your email — done! You now have a GitHub account

### Step 2: Install Required Software

On your computer, install these (all free):

1. **Node.js** — go to **nodejs.org**, download the LTS version, run the installer
2. **Git** — go to **git-scm.com**, download and install
3. **Visual Studio Code** (optional but helpful) — go to **code.visualstudio.com**

### Step 3: Push This Project to GitHub

Open a terminal (Command Prompt or PowerShell on Windows) and run these commands one by one:

```bash
# Go to the project folder
cd C:\Users\rahul\Downloads\sahil\OBGYN

# Install all the required packages
npm install

# Set up Git for this project
git init
git add .
git commit -m "Initial commit - SRPT Scholar project"

# Create a new repository on GitHub:
# 1. Go to github.com → click "+" → "New repository"
# 2. Name it "srpt-scholar"
# 3. Keep it Public, do NOT add a README (we already have one)
# 4. Click "Create repository"
# 5. Copy the URL (looks like: https://github.com/YOUR-USERNAME/srpt-scholar.git)

# Connect and push (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/srpt-scholar.git
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Vercel (Free)

1. Go to **vercel.com**
2. Click **Sign Up** → choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub
4. Click **"Add New Project"**
5. Find your **srpt-scholar** repository and click **Import**
6. Vercel will auto-detect it's a Next.js project
7. Click **Deploy**
8. Wait 2–3 minutes — your site is now live at `srpt-scholar.vercel.app`!

### Step 5: Connect Tina CMS (Visual Editing)

1. Go to **tina.io** and sign up (free tier)
2. Click **"Create a New Project"**
3. Connect it to your **srpt-scholar** GitHub repository
4. Tina will give you two values:
   - **Client ID**
   - **Token**
5. In Vercel, go to your project → **Settings** → **Environment Variables**
6. Add these two variables:
   - `NEXT_PUBLIC_TINA_CLIENT_ID` = (paste your Client ID)
   - `TINA_TOKEN` = (paste your Token)
7. Redeploy your site (go to Deployments → click the 3 dots → Redeploy)
8. Now go to `your-site.vercel.app/admin` — you should see the Tina editor!

---

## Running Locally (For Development)

If you want to preview the site on your computer:

```bash
cd C:\Users\rahul\Downloads\sahil\OBGYN
npm install
npm run dev
```

Then open **http://localhost:3000** in your browser.

To access the CMS editor locally, go to **http://localhost:3000/admin**.

---

## Quick Reference

| What You Want to Do | How to Do It |
|---|---|
| Edit existing topic | Go to yoursite.com/admin → click topic → edit → save |
| Add new topic | Go to yoursite.com/admin → Topics → Create New |
| Add a shloka | In the topic editor, scroll to "Classical Shlokas" → click "Add" |
| Add exam bullets | In the topic editor, scroll to "High-Yield Exam Points" → add items |
| Upload an image | In the CMS editor, use the media manager to upload images |
| See changes live | After saving in CMS, wait 1-2 minutes for Vercel to rebuild |

---

## Technology Used

- **Next.js 14** — The framework that builds the website
- **Tailwind CSS** — Makes the website look beautiful
- **Tina CMS** — Lets you edit content from a browser (no coding)
- **Vercel** — Hosts the website for free
- **GitHub** — Stores the code and content safely

---

## Need Help?

If something isn't working:
1. Check that all environment variables are set in Vercel
2. Make sure your GitHub repo is connected to both Vercel and Tina Cloud
3. Try redeploying on Vercel (Settings → Deployments → Redeploy)

This project was built for Sahil's PG Ayurveda studies in Stree Roga & Prasuti Tantra.
