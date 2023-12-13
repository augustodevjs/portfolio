import { HeaderHygraph } from "@/models";
import { fetchHygraphQuery } from "@/utils";

export const HeaderService = async (): Promise<HeaderHygraph> => {
  const query = `
    query profile {
      values: profilePicture(where: {profilePicture: "profile"}) {
        profile {
          width
          height
          url
          fileName
        }
      }
    }
  `;

  return fetchHygraphQuery(
    query,
    60
  )
}