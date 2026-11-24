# Falguni Kohale: Portfolio

Next.js 14 + TypeScript + Tailwind CSS + Lucide icons.

## Run locally
1. Install Node.js 18.18 or newer from nodejs.org
2. In this folder run: `npm install`
3. Run: `npm run dev` and open http://localhost:3000

## Edit content
Everything lives in `data/content.ts`. Replace the placeholder entries (Projects, Experience), add your LinkedIn and GitHub links, and set `photo` after adding an image to `public/`.
To update the resume, replace `public/Falguni-Kohale-Resume.docx` (keep the same name, or change `resumeFile`).

## Deploy to Vercel
1. Create a GitHub account and a new repository, then push this folder:
   `git init && git add . && git commit -m "Portfolio" && git branch -M main`
   `git remote add origin <your-repo-url> && git push -u origin main`
2. Sign in at vercel.com with GitHub, click Add New > Project, and import the repository.
3. Keep the default settings (Next.js is detected) and click Deploy.
4. Every later `git push` redeploys automatically.
