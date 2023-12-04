import { ContatoHygraph } from "@/models";
import { fetchHygraphQuery } from "@/utils";

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