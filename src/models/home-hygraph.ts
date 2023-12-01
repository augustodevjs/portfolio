import type { RichTextContent } from "@graphcms/rich-text-types"

export type HomePage = {
  introduction: {
    raw: RichTextContent;
  }
  jobTitle: string
  socials: Socials[]
  stacks: Stacks[]
  profilePicture: ProfilePicture
  apresentation: string;
}

export type ProfilePicture = {
  url: string;
  height: number;
  width: number;
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