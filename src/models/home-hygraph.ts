import type { RichTextContent } from "@graphcms/rich-text-types"

export type HomePage = {
  introduction: {
    raw: RichTextContent;
  }
  jobTitle: string
  socials: Socials[]
  stacks: Stacks[]
  apresentation: string;
  experienceProfessional: ExperienceProfessional
}

export type ExperienceProfessional = {
  titleExperience: string
  apresentationJob: string
  trajetoria: string
  experience: {
    raw: RichTextContent;
  }[]
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