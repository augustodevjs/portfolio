import { ComponentProps } from "react";
import { HomePage } from "@/models/home-hygraph";
import { ProfilePicture } from "@/models/header-hygraph";
import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer"

export type CmsIconProps = {
  icon: string;
}

export type HeaderProps = {
  header: ProfilePicture
}

export type InfoProps = {
  info: HomePage
}

export type ItemsLinkProps = {
  label: string
  href: string
}

export type RichTextProps = ComponentProps<typeof CMSRichText>