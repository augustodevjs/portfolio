import { Contact } from "@/components";
import { ContatoService } from "@/services";

export default async function Page() {
  const { contato: ContatoPage } = await ContatoService()

  return (
    <Contact contact={ContatoPage} />
  )
}