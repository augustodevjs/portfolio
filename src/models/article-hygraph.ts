import type { RichTextContent } from "@graphcms/rich-text-types"

export type ArticlePage = {
  introductionArticle: string
  description: string
  article: {
    raw: RichTextContent
  }[]
}

export type ArticleHypgrah = {
  article: ArticlePage;
}