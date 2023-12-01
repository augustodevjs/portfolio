import { ComponentProps } from "react";
import { HomePage } from "@/models/home-hygraph";
import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer"

export type CmsIconProps = {
  icon: string;
}

export type HeaderProps = {
  home: HomePage
}

export type InfoProps = {
  info: HomePage
}

export type ItemsLinkProps = {
  label: string
  href: string
}

export type RichTextProps = ComponentProps<typeof CMSRichText>