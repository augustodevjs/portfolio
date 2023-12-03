
import { LinkItems } from '@/utils'
import { FooterProps } from '../types'
import { ItemsLink } from '../items-link/items-link'

import './styles.css'

export const Footer = ({ footer }: FooterProps) => {
  return (
    <footer>
      <div className="container-footer">
        <nav>
          <ul>
            {LinkItems.map((item, index) => (
              <ItemsLink {...item} key={index} />
            ))}
          </ul>
        </nav>

        <p>{footer.copyright}</p>
      </div>
    </footer>
  )
}