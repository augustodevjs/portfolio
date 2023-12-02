
import { ItemsLink } from '..'
import { FooterProps } from '../types'

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

export const Footer = ({ footer }: FooterProps) => {
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

        <p>{footer.copyright}</p>
      </div>
    </footer>
  )
}