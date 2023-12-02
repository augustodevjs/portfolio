import { ComponentProps } from "react";
import { ContatoPage, ProfilePicture, HomePage, FooterContent } from "@/models";
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

export type ContactProps = {
  contact: ContatoPage
}

export type FooterProps = {
  footer: FooterContent
}