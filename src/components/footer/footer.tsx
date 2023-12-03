'use client'

import { LinkItems } from '@/utils'
import { FooterProps } from '../types'
import { motion } from 'framer-motion'
import { ItemsLink } from '../items-link/items-link'

import './styles.css'

export const Footer = ({ footer }: FooterProps) => {
  return (
    <footer>
      <div className="container-footer">
        <nav>
          <motion.ul initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
            {LinkItems.map((item, index) => (
              <ItemsLink {...item} key={index} />
            ))}
          </motion.ul>
        </nav>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {footer.copyright}
        </motion.p>
      </div>
    </footer>
  )
}