import { HomeService } from "@/services";
import { Courses, Experience, Info, RecentProjects } from "@/components";

export default async function Page() {
  const { home: HomePage } = await HomeService();

  return (
    <>
      <Info info={HomePage} />
      <RecentProjects recentProjects={HomePage} />
      <Experience experience={HomePage} />
      <Courses courses={HomePage} />
    </>
  )
}