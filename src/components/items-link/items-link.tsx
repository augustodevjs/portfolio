import Link from "next/link"
import { ItemsLinkProps } from "../types"

export const ItemsLink = ({ label, href }: ItemsLinkProps) => {
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  )
}