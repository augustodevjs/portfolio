import { HomeHyGrahp } from "../models";
import { fetchHygraphQuery } from "@/utils";

export const HomeService = async (): Promise<HomeHyGrahp> => {
  const query = `
    query HomePage {
      home(where: {slug: "home"}) {
        introduction {
          raw
        }
        stackPrincipal
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
        courses {
          url
          certificate {
            width
            height
            fileName
            url
          }
        }
        titleCourse
          titleRecentProjects
        recentProjects {
          image {
            url
            fileName
            width
            height
          }
          title
          description
          showProject
          url
          technologies {
            name
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