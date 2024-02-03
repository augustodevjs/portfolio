import { Metadata } from "next";
import { HomeService } from "@/services";
import { Courses, Experience, Info, RecentProjects } from "@/components";

export const metadata: Metadata = {
  title: 'João Augusto',
  description: 'I am João Augusto, a seasoned Full Stack developer with expertise in .NET and React.',
}

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
