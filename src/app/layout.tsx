import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Footer, Header } from '@/components'
import { HeaderService, FooterService, HomeService } from '@/services'

import '../styles/global.css'

export const metadata: Metadata = {
  icons: {
    icon: '.icon.svg'
  }
}

const poppins = Poppins({
  subsets: ['devanagari'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap'
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { home } = await HomeService()
  const { values: HeaderValues } = await HeaderService();
  const { values: FooterValues } = await FooterService();

  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <main className="container">
          <Header header={HeaderValues} home={home} />
          {children}
          <Footer footer={FooterValues} />
        </main>
      </body>
    </html>
  )
}
