'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { HeaderProps } from '../types'
import { CmsIcon } from '../cms-icon/cms-icon'
import { LinkItems, extractNameFile } from '@/utils'
import { ItemsLink } from '../items-link/items-link'

import './styles.css'

export const Header = ({ header, home }: HeaderProps) => {
  const [isMobile, setIsMobile] = useState(false)

  const toggleBodyScroll = (enable: boolean) => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = enable ? 'hidden' : '';
    }
  };

  const handleMenuOpen = () => {
    setIsMobile(true);
    toggleBodyScroll(true);
  };

  const handleMenuClose = () => {
    setIsMobile(false);
    toggleBodyScroll(false);
  };

  return (
    <header>
      <div className="container header">
        <div className="nav-bar">
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Link href="/" className="logo">
              <Image
                src={header.profile.url}
                width={header.profile.width}
                height={header.profile.height}
                alt={extractNameFile(header.profile.fileName)}
              />
              <p>jaugusto</p>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="menu-right">
            <nav>
              <ul>
                {LinkItems.map((item, index) => (
                  <ItemsLink {...item} key={index} />
                ))}
              </ul>
            </nav>
            <div className="menu-align-end" onClick={handleMenuOpen}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                />
              </svg>
            </div>
          </motion.div>

          <div className={`menu ${isMobile ? 'mobile-navbar' : ''}`}>
            <div className="menu-navbar">
              <Link href="/" className="social-media">
                <Image
                  src={header.profile.url}
                  width={header.profile.width}
                  height={header.profile.height}
                  alt={extractNameFile(header.profile.fileName)}
                />
                <p>jaugusto</p>
              </Link>
              <div className="close-menu white" onClick={handleMenuClose}>
                <svg
                  className="menu-align-justify"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <path
                    d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                  />
                </svg>
              </div>

              <div className="menu-mobile-hamburguer">
                <ul className="menu-mobile-header">
                  {LinkItems.map((item, index) => (
                    <ItemsLink {...item} key={index} closeMenuMobile={handleMenuClose} />
                  ))}
                </ul>

                <div className="border"></div>

                <div className="menu-icons">
                  {home.socials.map((social, index) => (
                    <Link
                      href={social.url}
                      key={index}
                      aria-label={social.name}
                      target="_blank"
                    >
                      <CmsIcon icon={social.iconSvg} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}