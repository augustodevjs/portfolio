import { FooterHygraph } from "@/models";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

export const FooterService = async (): Promise<FooterHygraph> => {
  const query = `
    query footer {
      values: footer(where: {slug: "footer"}) {
        copyright
      }
    }
  `;

  return fetchHygraphQuery(
    query,
    60 * 60 * 24
  )
}