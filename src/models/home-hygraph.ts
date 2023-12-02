import type { RichTextContent } from "@graphcms/rich-text-types"

export type HomePage = {
  introduction: {
    raw: RichTextContent;
  }
  jobTitle: string
  socials: Socials[]
  stacks: Stacks[]
  apresentation: string;
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
  };
  name: string;
}

export type HomeHyGrahp = {
  home: HomePage;
}