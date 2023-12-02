import { HeaderHygraph } from "@/models";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

export const HeaderService = async (): Promise<HeaderHygraph> => {
  const query = `
    query profile {
      values: profilePicture(where: {profilePicture: "profile"}) {
        profile {
          width
          height
          url
        }
      }
    }
  `;

  return fetchHygraphQuery(
    query,
    60 * 60 * 24
  )
}