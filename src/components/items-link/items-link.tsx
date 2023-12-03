'use client'

import Link from "next/link"
import { ItemsLinkProps } from "../types"
import { usePathname } from "next/navigation"

export const ItemsLink = ({ label, href }: ItemsLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link className={isActive ? 'active' : ''} href={href}>{label}</Link>
    </li>
  )
}