import { HomeHyGrahp } from "../models/home-hygraph";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

export const HomeService = async (): Promise<HomeHyGrahp> => {
  const query = `
    query HomePage {
      home(where: {slug: "home"}) {
        introduction {
          raw
        }
        jobTitle
        socials {
          iconSvg
          name
          url
        }
        stacks {
          stackTech {
            url
            height
            width
          }
        }
        apresentation
      }
    }
  `;

  return fetchHygraphQuery(
    query,
    60 * 60 * 24
  )
}