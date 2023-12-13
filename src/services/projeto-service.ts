import { ProjetoHygraph } from "@/models";
import { fetchHygraphQuery } from "@/utils";

export const ProjetoService = async (): Promise<ProjetoHygraph> => {
  const query = `
    query ProjetoPage {
      project(where: {slug: "projeto"}) {
        title
        description
        projetos
        projectPersonals {
          urlImage
          title
          description
          imageProject {
            width
            height
            url
            fileName
          }
          technologies(first: 30) {
            name
          }
          links {
            url
            svgIcon
            name
            className
          }
        }
      }
    }
  `;

  return fetchHygraphQuery(
    query,
    60
  )
}