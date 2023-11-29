import Link from 'next/link'
import './styles.css'

export const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projetos">Projetos</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </nav>

        <p>© 2023 João Augusto. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}