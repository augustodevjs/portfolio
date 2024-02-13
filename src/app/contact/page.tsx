import { Metadata } from "next";
import { Contact } from "@/components";
import { ContatoService } from "@/services";

export const metadata: Metadata = {
  title: 'Contact | João Augusto',
  description: 'Get in touch.',
}

export default async function Page() {
  const { contato: ContatoPage, } = await ContatoService()

  return (
    <Contact contact={ContatoPage} />
  )
}