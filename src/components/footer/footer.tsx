import Link from 'next/link'
import { ItemsLink } from '../items-link/items-link'
import './styles.css'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Projetos',
    href: '/projetos'
  },
  {
    label: 'Contato',
    href: '/contato'
  }
]

export const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <nav>
          <ul>
            {NAV_ITEMS.map((item, index) => (
              <ItemsLink {...item} key={index} />
            ))}
          </ul>
        </nav>

        <p>© 2023 João Augusto. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}