'use client';

import Image from "next/image";
import './styles.css'

import Aspnet from '../../assets/images/dev.io-aspnet.png'
import Entity from '../../assets/images/dev.io-entity.png'
import React from '../../assets/images/react-udemy.jpg'
import Next from '../../assets/images/nextjs-udemy.jpg'
import Typescript from '../../assets/images/typescript.jpg'
import Javascript from '../../assets/images/javascript-b7web.jpg'

export const Courses = () => {
  return (
    <section className="courses">
      <div className="container-courses">
        <h2 data-anime="top">Cursos concluídos</h2>

        <div className="card-content" data-anime="top">
          <div className="card-course">
            <Image
              src={Aspnet}
              onClick={() => window.open('https://desenvolvedor.io/certificado/5539a1c8-2ade-4dce-a744-28c403ce6bc5')}
              alt="aspnet"
            />
          </div>
          <div className="card-course">
            <Image
              src={Entity}
              alt="entity"
              onClick={() => window.open('https://desenvolvedor.io/certificado/78167ae8-a415-4baf-a247-b39ff8f616a6')}
            />
          </div>

          <div className="card-course">
            <Image
              src={React}
              alt="react"
              onClick={() => window.open('https://www.udemy.com/certificate/UC-9f29cd79-1ad4-496a-b777-9d0e8fc1ba26/')}
            />
          </div>
          <div className="card-course">
            <Image
              src={Next}
              alt="nextjs"
              onClick={() => window.open('https://www.udemy.com/certificate/UC-2bfa02db-585d-409a-833e-fcd6533485d1/')}
            />
          </div>
          <div className="card-course">
            <Image
              src={Typescript}
              alt="typescript"
              onClick={() => window.open('https://alunos.b7web.com.br/media/certificates/certificado_8316141.jpg')}
            />
          </div>
          <div className="card-course">
            <Image
              src={Javascript}
              onClick={() => window.open('https://alunos.b7web.com.br/media/certificates/certificado_2677777.jpg')}
              alt="javascript"
            />
          </div>
        </div>
      </div>
    </section>
  )
}