// ============================================================
// PORTFOLIO DATA — edit this file to update all site content
// ============================================================

export const personal = {
  name: 'Jasmine Allen',
  initials: 'JA',
  title: 'Software Engineer & Technical Consultant',
  location: 'Southfield, MI',
  availability: 'Available for hire',
  summary:
    'Software engineer and technical consultant bridging backend development and enterprise support. Based in Southfield, MI.',
  email: 'jasmineallen.dev@gmail.com',
  linkedin: 'linkedin.com/in/yourprofile',   // ← update this
  github: 'github.com/yourusername',          // ← update this
  consulting: 'blupix.me',
  resumeUrl: '/Jasmine_Allen_Resume.pdf',     // ← drop PDF in /public
}

export const stats = [
  { number: '5+',  label: 'Years experience' },
  { number: '98%', label: 'Resolution rate'  },
  { number: '50+', label: 'Users supported'  },
  { number: '3',   label: 'Certifications'   },
]

export const projects = [
  {
    tag: 'AI / Automation',
    title: 'Customer Support Chatbot',
    description:
      'Python-based AI chatbot deployed for client support workflows, reducing response times and increasing engagement.',
    stack: ['Python', 'REST API', 'JSON'],
    link: '', // ← optional GitHub or live link
  },
  {
    tag: 'Enterprise / .NET',
    title: 'Ford Call Center Platform',
    description:
      'Production C# web application supporting 50+ agents. Reduced support tickets by 30% through regression testing and CI/CD automation.',
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
  {
    tag: 'Consulting / BluPix',
    title: 'Client API Integrations',
    description:
      'Diagnosed and resolved REST API authentication, data sync, and XML/JSON connectivity issues for multiple consulting clients.',
    stack: ['REST APIs', 'XML', 'Python'],
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
      'API integrations, AI automation, branding, and technical documentation for independent clients.',
  },
  {
    dates: '2019 — 2022',
    role: 'Application Support Engineer',
    company: 'Ford Motor Company (via Advantage Resourcing)',
    companyUrl: '',
    description:
      'C#/.NET production support, Azure CI/CD automation, Agile team collaboration, 30% ticket reduction.',
  },
  {
    dates: '2016 — 2019',
    role: 'Web Developer & IT Intern',
    company: 'Blue Cross Blue Shield of Michigan',
    companyUrl: '',
    description:
      'SharePoint development, Power BI dashboards, MDM administration, 98% first-contact resolution rate.',
  },
]

export const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]
