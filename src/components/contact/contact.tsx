import Link from 'next/link';
import { ContactProps } from '../types';
import { RichText } from "@graphcms/rich-text-react-renderer";

import './styles.css'

export const Contact = ({ contact }: ContactProps) => {
  return (
    <section className="contact">
      <div className="container-contact">
        <div className="contact-introduce" data-anime="left">
          <h2>{contact.titleContato}</h2>
          <p>
            {contact.introductionDescriptionContato}
          </p>
        </div>

        <div className="contact-content" data-anime="top">
          <div className="contact-me">
            <p>{contact.contato}</p>
          </div>

          <Link
            href={contact.contatoLink}
            target="_blank"
            className="contact-schedule"
          >
            <div className="contact-content-info">
              <div className="contact-info">
                <RichText content={contact.entreContato.raw} />
                <div className="contact-schedule-now">
                  <span>{contact.agendeContato}</span>

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
          </Link>
        </div>
      </div>
    </section>
  )
}