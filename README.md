# Jasmine Allen — Portfolio

Built with Next.js 14, Tailwind CSS, deployed on AWS Amplify.

---

## Local setup

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

---

## Updating content

**All site content lives in one file:**
```
src/data/content.ts
```

Edit that file to update your name, projects, skills, experience, links, and resume URL.
You never need to touch the component files just to change text.

---

## Adding your resume PDF

Drop your resume PDF into the `/public` folder and name it:
```
Jasmine_Allen_Resume.pdf
```

The download button will automatically link to it.

---

## Deploying to AWS Amplify

### First deploy

1. Push this project to a GitHub repo
2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
3. Click **New app → Host web app**
4. Connect your GitHub repo
5. Amplify will auto-detect Next.js — accept the default settings
6. Click **Save and deploy**

Your site will be live at a `.amplifyapp.com` URL within ~3 minutes.

### Custom domain (optional)

In Amplify Console → **Domain management** → Add your custom domain.
Amplify handles the SSL certificate automatically.

### Auto-deploy on push

Every time you push to `main`, Amplify rebuilds and redeploys automatically.
No extra config needed.

---

## Project structure

```
src/
  app/
    layout.tsx        ← metadata, fonts, root layout
    page.tsx          ← assembles all sections
    globals.css       ← CSS variables, Tailwind, fonts
  components/
    Navbar.tsx        ← sticky nav
    Hero.tsx          ← name, summary, stats, CTAs
    Projects.tsx      ← project cards grid
    Skills.tsx        ← skill bars by category
    Experience.tsx    ← timeline
    Contact.tsx       ← contact links
    Footer.tsx        ← footer
  data/
    content.ts        ← ALL content lives here ← edit this
public/
    Jasmine_Allen_Resume.pdf   ← drop your PDF here
```

---

## Adding a new project

Open `src/data/content.ts` and add to the `projects` array:

```ts
{
  tag: 'Your Category',
  title: 'Project Name',
  description: 'What you built and what it achieved.',
  stack: ['Tech1', 'Tech2'],
  link: 'https://github.com/you/repo',  // optional
},
```

Save the file. Done.

---

## Color palette reference

| Variable            | Value     | Usage                     |
|---------------------|-----------|---------------------------|
| `--nautilus-deep`   | `#162839` | Page background           |
| `--nautilus`        | `#1e3345` | Card / section background |
| `--nautilus-mid`    | `#253f55` | Hover states              |
| `--nautilus-light`  | `#2e4f68` | Active / focus states     |
| `--gold`            | `#c9a84c` | Accents, headings, CTAs   |
| `--gold-light`      | `#e2c97e` | Hover gold                |
| `--cream`           | `#eef2f0` | Body text                 |
| `--muted`           | `#7a97a8` | Secondary text            |
