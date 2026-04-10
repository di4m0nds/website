export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  href: string
  repo?: string
  img: string
  featured?: boolean
  year: number
}

export interface Experience {
  role: string
  company: string
  date: string
  type: string
  location: string
  responsibilities: string[]
  keyAccomplishments: string[]
  tech?: string[]
}

export interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'tools'
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  author: string
  twitter: string
  github: string
  linkedin: string
  email: string
  ogImage: string
}
