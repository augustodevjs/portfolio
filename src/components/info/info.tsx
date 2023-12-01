"use client";

import Link from "next/link"
import Image from "next/image"
import Dotnet from '../../assets/images/dotnet.png'
import React from '../../assets/icon/react-js-icon.svg'
import { HomePage } from "../../models/home-hygraph"
import { RichText } from "../rich-text/rich-text";
import './styles.css'
import { CmsIcon } from "../cms-icon/cms-icon";

type InfoProps = {
  info: HomePage
}

export const Info = ({ info }: InfoProps) => {

  return (
    <section className="info">
      <div className="container-info">
        <div className="text-info-me">
          <h1>Olá, me chamo João Augusto.</h1>

          <RichText content={info.introduction.raw} />

          <div className="info-icons">
            {info.socials.map((social, index) => (
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

        <div className="stack-info">
          <div className="stack">
            <div className="main-stack">
              <span>Stack Principal</span>
              <p>{info.jobTitle}</p>
            </div>

            <div className="tech-images">
              {info.stacks.map((stack, index) => (
                <Image src={stack.stackTech.url} width={stack.stackTech.width} height={stack.stackTech.height} key={index} alt="" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}