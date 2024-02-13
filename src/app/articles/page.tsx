import { Metadata } from "next";
import { Articles } from "@/components";
import { ArticleService } from "@/services";

export const metadata: Metadata = {
  title: 'Articles | João Augusto',
  description: 'Read my articles about studies and tech.',
}

export default async function Page() {
  const { article } = await ArticleService();

  return (
    <Articles article={article} />
  )
}