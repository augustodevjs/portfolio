import type { RichTextContent } from "@graphcms/rich-text-types"

export type ContatoPage = {
  titleContato: string
  introductionDescriptionContato: string
  contatoLink: string
  contato: string
  agendeContato: string
  entreContato: {
    raw: RichTextContent
  }
}

export type ContatoHygraph = {
  contato: ContatoPage
}