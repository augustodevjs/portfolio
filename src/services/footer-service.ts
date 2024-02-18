import { FooterHygraph } from "@/models";
import { fetchHygraphQuery } from "@/utils";

export const FooterService = async (): Promise<FooterHygraph> => {
  const query = `
    query footer {
      values: footer(where: {slug: "pt"}) {
        copyright
      }
    }
  `;

  return fetchHygraphQuery(
    query,
    60
  )
}