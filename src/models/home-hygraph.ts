import type { RichTextContent } from "@graphcms/rich-text-types"

export type HomePage = {
  introduction: {
    raw: RichTextContent;
  }
  stackPrincipal: string
  jobTitle: string
  socials: Socials[]
  stacks: Stacks[]
  apresentation: string;
  experienceProfessional: ExperienceProfessional
  courses: Courses[]
  titleCourse: string
  titleRecentProjects: string
  recentProjects: RecentProjects[]
}

export type RecentProjects = {
  image: {
    url: string
    fileName: string
    width: number
    height: number
  }
  title: string
  description: string
  showProject: string
  url: string
  technologies: Technologies[]
}

export type Technologies = {
  name: string
}

export type ExperienceProfessional = {
  titleExperience: string
  apresentationJob: string
  trajetoria: string
  experience: {
    raw: RichTextContent;
  }[]
}

export type Courses = {
  url: string
  certificate: {
    width: number
    height: number
    fileName: string
    url: string
  }
}

export type Socials = {
  iconSvg: string;
  name: string;
  url: string;
}

export type Stacks = {
  stackTech: {
    url: string
    height: number
    width: number
    fileName: string
  };
  name: string;
}

export type HomeHyGrahp = {
  home: HomePage;
}