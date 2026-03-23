// ============================================================
// PORTFOLIO DATA — edit this file to update all site content
// ============================================================

export const personal = {
  name: 'Jasmine Allen',
  initials: 'JA',
  title: 'Software Engineer & Technical Consultant',
  location: 'Southfield, MI',
  availability: 'Available for full time roles',
  summary:
    'Full-stack software engineer with a strong .NET and C# foundation, sharpened through production work at Ford Motor Company. Experienced across the development lifecycle — from requirements gathering and QA to CI/CD deployment and documentation. Brings a collaborative, cross-functional approach with additional depth in Python, React, and cloud platforms (Azure, AWS, GCP).',
  email: 'jasmineallen.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jasmine-allen/',   // ← update this
  github: 'https://github.com/jas-dev0',          // ← update this
  consulting: 'https://blupix.me',
  resumeUrl: '/Jas_Allen_Resume.pdf',     // ← drop PDF in root folder
}

export const stats = [
  { number: '5+',  label: 'Years experience' },
  { number: '3',   label: 'Cloud platforms'  },
  { number: '10+', label: 'Languages & frameworks'  },
  { number: '3',   label: 'Industries worked in'   },
]

export const projects = [
  {
    tag: 'Consulting / BluPix',
    title: 'Website Development & Branding',
    description:
      'End-to-end web development and brand identity for small business clients — custom sites, visual assets, and technical documentation delivered through BluPix.',
  stack: ['React', 'Next.js', 'Typescript', 'Tailwind CSS', 'Adobe CC', 'Procreate'],
    link: 'https://blupix.me/#work',
  },
  {
    tag: 'AI / Automation',
    title: 'Customer Support Chatbot',
    description:
      'Python-based AI chatbot deployed for client support, reducing response times and increasing engagement.',
    stack: ['Python', 'REST API', 'JSON'],
    link: 'https://github.com/jas-dev0/python-ai-chatbot', // ← optional GitHub or live link
  },
  {
    tag: 'Enterprise / .NET',
    title: 'Ford Call Center Platform',
    description:
      'Production C# web application supporting 50+ agents.',
    stack: ['C#', 'ASP.NET', 'Azure', 'MS SQL'],
    link: '',
  },
  {
    tag: 'Dashboards / BI',
    title: 'BCBSM Reporting Suite',
    description:
      'Leadership-level Power BI dashboards communicating system performance and project status across the organization.',
    stack: ['Power BI', 'Excel', 'SharePoint'],
    link: '',
  },

]

export const skillGroups = [
  {
    title: 'Backend',
    skills: [
      { name: 'C# / .NET',   level: 88 },
      { name: 'Python',       level: 75 },
      { name: 'MS SQL',       level: 80 },
      { name: 'REST APIs',    level: 85 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Azure',            level: 72 },
      { name: 'AWS',              level: 55 },
      { name: 'CI/CD Pipelines',  level: 70 },
      { name: 'Active Directory', level: 78 },
    ],
  },
  {
    title: 'Frontend & Tools',
    skills: [
      { name: 'JavaScript',    level: 70 },
      { name: 'React / Next.js', level: 40 },
      { name: 'Git / GitHub',  level: 82 },
      { name: 'Power BI',      level: 68 },
    ],
  },
]

export const experience = [
  {
    dates: '2020 — Present',
    role: 'Technical Consultant',
    company: 'BluPix',
    companyUrl: 'https://blupix.me',
    description:
      'Branding, REST API integrations, AI chatbot development, and technical documentation for independent clients.',
  },
  {
    dates: '2019 — 2022',
    role: 'Application Support Engineer',
    company: 'Ford Motor Company (via Advantage Resourcing)',
    companyUrl: '',
    description:
      'C#/.NET production support, Azure CI/CD automation, Agile team collaboration.',
  },
  {
    dates: '2018 — 2019',
    role: 'Web Developer Intern',
    company: 'Blue Cross Blue Shield of Michigan',
    companyUrl: '',
    description:
      'SharePoint development, requirements analysis, Power BI dashboards, and cross-platform web feature testing.',
  },
  {
    dates: '2016 — 2018',
    role: 'IT Intern',
    company: 'Blue Cross Blue Shield of Michigan',
    companyUrl: '',
    description:
      'MDM administration via Microsoft Intune and Azure AD. Hardware and software support across MacOS, Linux, Windows, iOS and Android — 98% first-contact resolution rate.',
  },
]

export const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]
