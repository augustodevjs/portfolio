import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";
import { ContatoHygraph } from "@/models/contato-hypgrah";

export const ContatoService = async (): Promise<ContatoHygraph> => {
  const query = `
    query ContatoPage {
      contato(where: {slug: "contato"}) {
        titleContato
        introductionDescriptionContato
        contatoLink
        contato
        agendeContato
        entreContato {
          raw
        }
      }
    }
  `;

  return fetchHygraphQuery(
    query,
    60 * 60 * 24
  )
}