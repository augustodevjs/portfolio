import './styles.css'

export default function Page() {
  return (
    <section className="contact">
      <div className="container-contact">
        <div className="contact-introduce" data-anime="left">
          <h2>Entre em contato comigo.</h2>
          <p>
            Em busca de um website ou aplicativo para destacar seu produto
            online? Agende um horário, e juntos, criaremos a presença digital
            perfeita para o seu negócio! Estou aqui para transformar suas
            ideias em realidade e elevar a visibilidade da sua marca online 😃
          </p>
        </div>

        <div className="contact-content" data-anime="top">
          <div className="contact-me">
            <p>Contato</p>
          </div>

          <a
            href="https://cal.com/jaugusto-dev"
            target="_blank"
            className="contact-schedule"
          >
            <div className="contact-content-info">
              <div className="contact-info">
                <h3>Converse comigo</h3>
                <p>
                  Agende uma conversa para nos conhecermos. Estou pronto para
                  compartilhar minha história e, quem sabe, colaborarmos.
                  Espero ansioso pela oportunidade de nos conectarmos e
                  explorarmos possíveis projetos juntos.
                </p>
                <div className="contact-schedule-now">
                  <span>Agende agora</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}