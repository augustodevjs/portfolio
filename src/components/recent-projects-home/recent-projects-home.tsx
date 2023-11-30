'use client';

import Image from "next/image"
import Link from "next/link"
import sysra from '../../assets/images/sysra-landing.png'
import intranet from '../../assets/images/intranet.png'
import './styles.css'

export const RecentProjectsHome = () => {
  return (
    <section className="recent-projects">
      <div className="recent-projects-container">
        <div className="header-projects">
          <h2>Atuação em projetos reais:</h2>
        </div>

        <div className="recent-projects-content">
          <div className="recent-project-card">
            <Image
              src={sysra}
              alt="sysra"
              onClick={() => window.open('https://sysra-h.maracanau.ifce.edu.br')}
            />

            <div className="content-project">
              <h3>Sysra</h3>
              <p>
                Sysra é uma plataforma desenvolvida pelo Núcleo de
                Desenvolvimento de Software do IFCE Maracanáu, que visa de
                forma inteligente resolver as demandas de alimentos em
                unidades federais, com o objetivo claro de minimizar os
                desperdícios alimentares. Essa ferramenta simplifica as
                operações diárias, fomenta práticas sustentáveis e se ajusta
                às necessidades específicas de cada unidade.
              </p>

              <div className="stacks">
                <span>React.js</span>
                <span>Typescript</span>
                <span>Javascript</span>
                <span>Bootstrap</span>
                <span>React Query</span>
                <span>Nx Workspace</span>
                <span>.NET 6</span>
                <span>Entity Framework</span>
                <span>AutoMapper</span>
                <span>MySql</span>
              </div>

              <Link
                target="_blank"
                href="https://sysra-h.maracanau.ifce.edu.br"
              >Ver o projeto
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="recent-project-card">
            <Image
              src={intranet}
              alt="intranet"
              onClick={() => window.open('https://intranet.maracanau.ifce.edu.br/login')}
            />

            <div className="content-project">
              <h3>Intranet</h3>
              <p>
                A Intranet é um ERP desenvolvido pelo Núcleo de
                Desenvolvimento de Software do IFCE Maracanaú. Seu principal
                objetivo é facilitar os processos administrativos do campus,
                proporcionando uma ampla variedade de módulos que simplificam
                a vida tanto dos alunos quanto dos servidores. Com essa
                plataforma, é possível otimizar a gestão acadêmica e
                administrativa, promovendo uma maior eficiência e agilidade
                nas atividades diárias.
              </p>

              <div className="stacks">
                <span>React.js</span>
                <span>Typescript</span>
                <span>Javascript</span>
                <span>Styled Components</span>
                <span>Bootstrap</span>
                <span>React Query</span>
                <span>React Hook Form</span>
                <span>Atomic Design</span>
              </div>

              <div className="content-actions">
                <Link
                  target="_blank"
                  href="https://intranet.maracanau.ifce.edu.br/login"
                >
                  Ver o projeto
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}