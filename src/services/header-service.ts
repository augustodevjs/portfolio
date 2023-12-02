import { HeaderHygraph } from "@/models/header-hygraph";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

export const HeaderService = async (): Promise<HeaderHygraph> => {
  const query = `
    query profile {
      values: profilePicture(where: {id: "clpo4htuh1dn50altc1lf1705"}) {
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