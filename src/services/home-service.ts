import { HomeHyGrahp } from "../models";
import { fetchHygraphQuery } from "@/utils";

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
            fileName
          }
        }
        apresentation
        experienceProfessional {
          titleExperience
          apresentationJob
          trajetoria
          experience {
            raw
          }
        }
      }
    }
  `;

  return fetchHygraphQuery(
    query,
    60 * 60 * 24
  )
}