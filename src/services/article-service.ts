import { ArticleHypgrah } from "@/models";
import { fetchHygraphQuery } from "@/utils";

export const ArticleService = async (): Promise<ArticleHypgrah> => {
  const query = `
    query ArticlePage {
      article(where: {slug: "en"}) {
        introductionArticle
        description
        article {
          raw
        }
      }
    }
  `;

  return fetchHygraphQuery(
    query,
    60
  )
}