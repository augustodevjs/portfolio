import { Metadata } from "next";
import { Projects } from "@/components";
import { ProjetoService } from "@/services";

export const metadata: Metadata = {
  title: 'Projects | João Augusto',
  description: 'Here you can find my personal projects.',
}

export default async function Page() {
  const { project: ProjetoPage } = await ProjetoService();
  return (
    <Projects project={ProjetoPage} />
  )
} 