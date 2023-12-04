import { ComponentProps } from "react";
import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer"
import { ContatoPage, ProfilePicture, HomePage, FooterContent, ProjectPage } from "@/models";

export type CmsIconProps = {
  icon: string;
}

export type HeaderProps = {
  header: ProfilePicture
  home: HomePage
}

export type InfoProps = {
  info: HomePage
}

export type ItemsLinkProps = {
  label: string
  href: string
  closeMenuMobile?: () => void
}

export type RichTextProps = ComponentProps<typeof CMSRichText>

export type ContactProps = {
  contact: ContatoPage
}

export type FooterProps = {
  footer: FooterContent
}

export type ExperienceProps = {
  experience: HomePage
}

export type CoursesProps = {
  courses: HomePage
}

export type RecentProjectsProps = {
  recentProjects: HomePage
}

export type ProjectsProps = {
  project: ProjectPage
}