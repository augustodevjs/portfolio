import Link from "next/link"

type ItemsLinkProps = {
  label: string
  href: string
}

export const ItemsLink = ({ label, href }: ItemsLinkProps) => {
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  )
}