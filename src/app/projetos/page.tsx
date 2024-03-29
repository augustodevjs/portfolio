import { Metadata } from "next";
import { Projects } from "@/components";
import { ProjetoService } from "@/services";

export const metadata: Metadata = {
  title: 'Projetos | João Augusto',
  description: 'Aqui você pode encontrar meus projetos pessoais.',
}

export default async function Page() {
  const { project: ProjetoPage } = await ProjetoService();
  return (
    <Projects project={ProjetoPage} />
  )
} 