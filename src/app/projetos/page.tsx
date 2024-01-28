import { Metadata } from "next";
import { Projects } from "@/components";
import { ProjetoService } from "@/services";

export const metadata: Metadata = {
  title: 'Projetos | João Augusto',
  description: 'Aqui você encontra os meu projetos pessoais.',
}

export default async function Page() {
  const { project: ProjetoPage } = await ProjetoService();

  console.log(ProjetoPage)

  return (
    <Projects project={ProjetoPage} />
  )
} 