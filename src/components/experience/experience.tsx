import './styles.css'

export const Experience = () => {
  return (
    <section className="experience">
      <div className="container-experience">
        <div className="experience-introduce">
          <h2 data-anime="top">Experiência Profissional</h2>
          <p data-anime="top">
            Estou sempre aberto a novos desafios e projetos emocionantes.
            Vamos trabalhar juntos para criar soluções incríveis para sua
            empresa!
          </p>
        </div>

        <div className="experience-content">
          <div className="experience-journey" data-anime="top">
            <p>Trajetória</p>
          </div>

          <div className="experience-content-info">
            <div className="experience-info" data-anime="left">
              <h3>IFCE Maracanaú</h3>
              <p className="job">Full Stack Developer</p>
              <p className="time-experience">jan 2022 • O momento</p>
              <ul>
                <li>
                  Contribuí na concepção e desenvolvimento tanto do backend
                  quanto do frontend de uma aplicação do Restaurante
                  Acadêmico, seguindo uma arquitetura monolítica
                  monorepositório utilizando .NET e React.
                </li>
                <li>
                  Efetuei o deploy manual das aplicações, garantindo uma
                  implementação segura e eficiente das atualizações no
                  ambiente de produção.
                </li>
                <li>
                  Participei ativamente na manutenção e aprimoramento de um
                  ERP utilizado por mais de 2.000 alunos e funcionários,
                  desempenhando tarefas de alto impacto que resultaram em
                  melhorias significativas nos processos administrativos do
                  campus.
                </li>
                <li>
                  Aprimorei o desempenho e a arquitetura dos sistemas,
                  solucionando irregularidades e aplicando padrões de projeto.
                </li>

                <li>
                  Participei de tomadas de decisões estratégicas relacionadas
                  a padrões de projeto e arquitetura do sistema, utilizando NX
                  Workspace e princípios do SOLID.
                </li>
                <li>
                  Realizei revisões de código para garantir a consistência e
                  qualidade do software, utilizando a plataforma Gitlab.
                </li>
                <li>
                  Orientei novos membros da equipe técnica para assegurar a
                  excelência no código.
                </li>
              </ul>
            </div>

            <div className="experience-info" data-anime="left">
              <h3>NerdWeb</h3>
              <p className="job">Front End Developer</p>
              <p className="time-experience">jul 2023 • Out 2023</p>
              <ul>
                <li>
                  Aprimorei significativamente a otimização de websites para
                  mecanismos de busca (SEO) através da adoção e implementação
                  das práticas recomendadas mais refinadas.
                </li>
                <li>
                  Realizei um desenvolvimento minucioso dos layouts,
                  garantindo sua aderência rigorosa aos padrões estabelecidos
                  nos protótipos conceituais do software Figma.
                </li>
                <li>
                  Utilizei práticas eficazes de gerenciamento de código ao
                  empregar o GitLab, simplificando a colaboração e o controle
                  de versões.
                </li>
              </ul>
            </div>

            <div className="experience-info" data-anime="left">
              <h3>Polo de Inovação</h3>
              <p className="job">Front End Developer</p>
              <p className="time-experience">jun 2022 • set 2022</p>
              <ul>
                <li>
                  Atuei na criação de um sistema de triagem e alertas em
                  Unidades de Pronto Atendimento Médico (UPA).
                </li>
                <li>
                  Contribuí ativamente em reuniões estratégicas, fornecendo
                  insights valiosos e colaborando na definição de metas para o
                  projeto.
                </li>
                <li>
                  Desenvolvi interfaces intuitivas e agradáveis para os
                  usuários, utilizando tecnologias de ponta como Next.js e
                  Typescript.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}