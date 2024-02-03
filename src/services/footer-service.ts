import { FooterHygraph } from "@/models";
import { fetchHygraphQuery } from "@/utils";

export const FooterService = async (): Promise<FooterHygraph> => {
  const query = `
    query footer {
      values: footer(where: {slug: "en"}) {
        copyright
      }
    }
  `;

  return fetchHygraphQuery(
    query,
    60
  )
}