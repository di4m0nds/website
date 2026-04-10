import type { Project, Experience, SiteConfig, SocialLink } from '../lib/types'

export const siteConfig: SiteConfig = {
  name: 'Javier Silvestri',
  title: "Javier Silvestri — Software Developer",
  description:
    'Junior Software Developer specializing in full-stack web development. Building intuitive, performant digital experiences.',
  url: 'https://javiersilvestri.vercel.app',
  author: 'Javier Silvestri',
  twitter: '@javslvt',
  github: 'https://github.com/di4m0nds',
  linkedin: 'https://www.linkedin.com/in/silvestrijavier/',
  email: 'ws.2000.sja@gmail.com',
  ogImage: '/portfolio.png',
}

export const aboutInfo = {
  greeting: "Hi, I'm",
  name: 'Javier',
  surname: 'Silvestri',
  roles: ['Software Developer', 'Frontend Engineer', 'UI/UX Enthusiast'],
  bio: '+1 year of experience building dynamic web and mobile applications. Integrated into both Frontend and Backend teams — specializing in intuitive, user-friendly interfaces that bridge design and engineering.',
  bioContinued:
    'Passionate about clean code, performance, and crafting experiences that feel great to use.',
  cvEn: '/curriculum/en.pdf',
  cvEs: '/curriculum/es.pdf',
  photo: '/metoo.jpeg',
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub',   href: 'https://github.com/di4m0nds',              icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/silvestrijavier/', icon: 'linkedin' },
  { label: 'Twitter',  href: 'https://twitter.com/javslvt',               icon: 'twitter' },
  { label: 'Email',    href: 'mailto:ws.2000.sja@gmail.com',              icon: 'mail' },
]

export const experiences: Experience[] = [
  {
    role: 'Software Developer',
    company: 'RunaID IT Services',
    date: 'Apr 2022 — Aug 2023',
    type: 'Full-Time',
    location: 'San Luis, Argentina',
    tech: ['Flutter', 'Dart', 'React', 'Node.js', 'REST APIs'],
    responsibilities: [
      'Stepped into early project stages and propelled them forward using agile practices.',
      'Translated designer specs into functional, pixel-perfect screens using OOP principles.',
      'Contributed to both frontend and API development across web and mobile projects.',
    ],
    keyAccomplishments: [
      'Rapidly onboarded to Flutter/Dart and delivered a Greenfield mobile app from day one.',
      'Transitioned across diverse projects, demonstrating agile adaptability and consistent delivery.',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'chefco',
    name: 'CHEFCO PASTAS',
    description:
      'Online ordering platform for artisanal pasta dishes. Full e-commerce experience with menu browsing, cart, and order tracking.',
    tags: ['React', 'Tailwind', 'Node.js'],
    href: 'https://chefcopastas.netlify.app',
    img: '/chefcopastas',
    featured: true,
    year: 2023,
  },
  {
    id: 'tesla',
    name: "TESLA CLONE",
    description:
      'Hands-on rebuild of Tesla\'s website. Deep dive into modern web design patterns, animations, and responsive layouts.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://tesladev.netlify.app',
    img: '/tesla',
    featured: false,
    year: 2022,
  },
  {
    id: 'rockets',
    name: 'ROCKETS EXPLORER',
    description:
      'Space exploration app with seamless transitions powered by View Transitions API. Data visualization of SpaceX rocket fleet.',
    tags: ['Astro', 'View Transitions', 'REST API'],
    href: 'https://rocketsexplorer.netlify.app',
    img: '/rocketsexplorer',
    featured: true,
    year: 2023,
  },
  {
    id: 'euge',
    name: 'EUGE FOTOGRAFIA',
    description:
      'Photography portfolio showcasing visual storytelling. Optimized gallery with lightbox, lazy loading, and full mobile responsiveness.',
    tags: ['Astro', 'Tailwind', 'MDX'],
    href: 'https://eugefotografia.netlify.app',
    img: '/eugefotografia',
    featured: false,
    year: 2023,
  },
]

export const skills = {
  frontend: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Astro', 'Tailwind CSS', 'HTML5', 'CSS3'],
  backend: ['Node.js', 'Go', 'REST APIs', 'SQL', 'MongoDB', 'Redis'],
  mobile: ['Flutter', 'Dart'],
  devops: ['Docker', 'Git', 'GitHub'],
  tools: ['VS Code', 'Figma', 'Linux'],
}
