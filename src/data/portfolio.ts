import type { Project, Experience, Education, SiteConfig, SocialLink } from '../lib/types'

export const siteConfig: SiteConfig = {
  name: 'Javier Silvestri',
  title: 'Javier Silvestri — Software Developer',
  description:
    'Junior Software Developer based in Barcelona. Specialized in Flutter, Dart, and Firebase with a strong foundation in React, TypeScript, and Node.js.',
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
  roles: ['Flutter Developer', 'Frontend Engineer', 'Mobile Developer', 'Full-Stack Builder'],
  bio: 'Junior Software Developer based in Barcelona with over one year of experience delivering production-grade applications. Specialized in Flutter, Dart, and Firebase, with a broad foundation in React, TypeScript, and Node.js.',
  bioContinued:
    'Relocated from Argentina to Spain. Focused on clean architecture, performance, and scalable mobile + web experiences.',
  cvEn: '/curriculum/en.pdf',
  photo: 'https://github.com/di4m0nds.png',
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/di4m0nds', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/silvestrijavier/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:ws.2000.sja@gmail.com', icon: 'mail' },
]

export const experiences: Experience[] = [
  {
    role: 'Junior Software Developer',
    company: 'RunaID IT Consulting Services',
    date: 'Apr 2022 — Aug 2023',
    type: 'Full-Time',
    location: 'San Luis, Argentina',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Agile/Jira'],
    responsibilities: [
      'Delivered new features for DOSEP San Luis (50,000+ downloads) using Flutter/Dart.',
      'Maintained Flutter SDK compatibility and managed third-party package dependencies.',
      'Collaborated across QA, UX/UI, and product teams in fast-paced Agile sprints.',
      'Debugged and optimized Firebase Push Notifications for improved delivery reliability.',
    ],
    keyAccomplishments: [
      'Improved app performance by 30% through targeted refactoring and critical bug fixes.',
      'Ensured long-term app scalability with clean dependency management and SDK upgrades.',
    ],
  },
  {
    role: 'Freelance Flutter Mobile Developer',
    company: 'City Government of San Luis',
    date: 'Nov 2022 — Jun 2023',
    type: 'Freelance',
    location: 'San Luis, Argentina',
    tech: ['Flutter', 'Dart', 'REST APIs', 'Real-time Data'],
    responsibilities: [
      'Reverse-engineered undocumented code in SIGEM S.L. to fix critical bugs and restore functionality.',
      'Built a booking appointments feature across municipal services (driver licenses, permits).',
      'Maintained an internal real-time bus tracking app with accurate location updates and ETAs.',
      'Collaborated with government stakeholders to ensure app stability under tight deadlines.',
    ],
    keyAccomplishments: [
      'Onboarded quickly to a complex legacy codebase with zero documentation.',
      'Delivered booking system across 3+ municipal services, improving citizen UX significantly.',
    ],
  },
]

export const education: Education[] = [
  {
    institution: 'National University of San Luis',
    degree: 'University Technician in Web & Mobile Development',
    date: '2019 — 2021',
    location: 'San Luis, Argentina',
  },
  {
    institution: 'Platzi',
    degree: 'Web/Mobile Development · Cloud Computing · English · Leadership',
    date: '2022 — 2024',
    location: 'Online',
    topics: ['Web Development', 'Mobile Development', 'Cloud Computing', 'English Academy'],
  },
]

export const projects: Project[] = [
    {
    id: 'branchvisualizer',
    name: 'Branch Visualizer',
    description:
      'An interactive GitHub repository commit graph visualizer. Enter any public GitHub repository URL and explore its full branch history as an interactive DAG — branches, merges, tags, and authors, all at a glance.',
    tags: ['React', 'Vite', 'GitHub', 'Typescript', 'Canvas', 'User Experience', 'Tool'],
    href: 'https://branchvisualizer.vercel.app/',
    img: '/branchvisualizer',
    featured: true,
    year: 2022,
  },
  {
    id: 'dosep',
    name: 'DOSEP MOVIL',
    description:
      'Government health service app with 50,000+ downloads. Enables users to request medical orders, generate pharmacy tokens, and pay for healthcare services. Built with Flutter/Dart + Firebase.',
    tags: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Healthcare', 'Performance Optimization', 'User Experience', 'Push Notifications'],
    href: 'https://play.google.com/store/apps/details?id=ar.com.st.dosep_mobile&hl=es',
    img: '/chefcopastas',
    featured: true,
    year: 2022,
  },
  {
    id: 'sigem',
    name: 'SIGEM S.L.',
    description:
      'Government services app for San Luis city, streamlining access to public procedures. Features appointment booking for driver licenses, municipal permits, and real-time bus tracking.',
    tags: ['Flutter', 'Dart', 'REST APIs', 'Real-time Data', 'Government Services', 'Booking System', 'Location Tracking'],
    href: 'https://sigem.sanluislaciudad.gob.ar/sigem/',
    img: '/rocketsexplorer',
    featured: true,
    year: 2023,
  },
  {
    id: 'chefco',
    name: 'CHEFCO PASTAS',
    description:
      'Online ordering platform for artisanal pasta dishes. Full e-commerce experience with menu browsing, cart, and order management.',
    tags: ['React', 'Tailwind', 'Responsive Design', 'E-commerce', 'SEO', 'Performance Optimization', 'Accessibility'],
    href: 'https://chefcopastas.netlify.app',
    img: '/chefcopastas',
    featured: false,
    year: 2023,
  },
  {
    id: 'euge',
    name: 'EUGE FOTOGRAFIA',
    description:
      'Photography portfolio showcasing visual storytelling. Optimized gallery with lightbox, lazy loading, and full mobile responsiveness.',
    tags: ['React', 'Tailwind', 'Lightbox', 'Lazy Loading', 'Gallery Optimization'],
    href: 'https://eugefotografia.netlify.app',
    img: '/eugefotografia',
    featured: false,
    year: 2023,
  },
  {
    id: 'rocketsexplorer',
    name: 'ROCKETS EXPLORER',
    description:
      'Embark on a captivating journey through the history and technology of rockets with Rockets Explorer. Experience seamless transitions powered by modern native techniques like startViewTransition, supported on popular desktop and mobile browsers including Chrome, Edge, Opera and Chrome for Android.',
    tags: ['Astro', 'Tailwind', 'startViewTransition', 'Intersection Observer', 'Prefers-Reduced-Motion'],
    href: 'https://rocketsexplorer.netlify.app',
    img: '/rocketsexplorer',
    featured: true,
    year: 2022,
  },
  {
    id: 'tesla',
    name: 'TESLA CLONE',
    description:
      'Tesla clone website built with Astro and Tailwind CSS. Showcases Tesla’s product lineup with snap scrolling, responsive design, and modern web techniques for a smooth user experience. Navbar auto responsive design animations and scroll behavior.',
    tags: ['Astro', 'Tailwind', 'Intersection Observer', 'Prefers-Reduced-Motion', 'snap scrolling', 'responsive design'],
    href: 'https://tesladev.netlify.app',
    img: '/tesla',
    featured: false,
    year: 2022,
  },
]

export const skills = {
  mobile: ['Flutter (v2/v3)', 'Dart', 'Swift (v6)', 'SwiftUI', 'Kotlin', 'React Native'],
  state: ['BLoC', 'Provider', 'GetX', 'Zustand', 'Redux'],
  frontend: ['TypeScript', 'React', 'Next.js', 'Astro', 'Tailwind CSS', 'JavaScript ES6+'],
  backend: ['Node.js', 'NestJS', 'Firebase', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Python'],
  devops: ['Git', 'GitHub Actions', 'Docker', 'CI/CD', 'Agile/Scrum', 'Postman'],
  ai: ['GitHub Copilot', 'Claude', 'ChatGPT', 'Gemini'],
}
