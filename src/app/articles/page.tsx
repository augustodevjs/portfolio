import { Articles } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Articles | João Augusto',
  description: 'Read my articles about studies and tech work.',
}

export default async function Page() {
  return (
    <Articles />
  )
}