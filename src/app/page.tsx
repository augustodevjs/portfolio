import { Metadata } from "next";
import { HomeService } from "@/services";
import { Courses, Experience, Info, RecentProjects } from "@/components";

export const metadata: Metadata = {
  title: 'João Augusto',
  description: 'Meu nome é João Augusto, um desenvolvedor Full Stack experiente, com habilidades sólidas em .NET e React.',
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
