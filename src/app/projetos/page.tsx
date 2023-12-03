import { Projects } from "@/components";
import { ProjetoService } from "@/services";

export default async function Page() {
  const { project: ProjetoPage } = await ProjetoService();

  return (
    <Projects project={ProjetoPage} />
  )
} 