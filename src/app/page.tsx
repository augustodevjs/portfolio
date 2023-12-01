import { fetchHygraphQuery } from '../utils/fetch-hygraph-query';
import { Courses, Experience, Info, RecentProjects } from '../components'
import { HomeHyGrahp } from '../models/home-hygraph';

const getPageData = async (): Promise<HomeHyGrahp> => {
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
          size
          width
        }
      }
    }
  }
  `;

  return fetchHygraphQuery(
    query,
    // 60 * 60 * 24
  )
}

export default async function Page() {
  const { home: HomePage } = await getPageData();

  return (
    <>
      <Info info={HomePage} />
      <RecentProjects />
      <Experience />
      <Courses />
    </>
  )
}