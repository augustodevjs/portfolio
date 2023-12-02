import { Contact } from "@/components";
import { ContatoService } from "@/services/contato-service";

export default async function Page() {
  const { contato: ContatoPage } = await ContatoService()

  return (
    <Contact contact={ContatoPage} />
  )
}