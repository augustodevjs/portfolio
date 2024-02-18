import { Metadata } from "next";
import { Articles } from "@/components";
import { ArticleService } from "@/services";

export const metadata: Metadata = {
  title: 'Artigos | João Augusto',
  description: 'Leia meus artigos sobre tecnologia',
}

export default async function Page() {
  const { article } = await ArticleService();

  return (
    <Articles article={article} />
  )
}