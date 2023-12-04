'use client'

import Link from "next/link"
import Image from "next/image"

import { InfoProps } from "../types";
import { motion } from 'framer-motion'
import { extractNameFile } from "@/utils";
import { CmsIcon } from "../cms-icon/cms-icon";
import { RichText } from "@graphcms/rich-text-react-renderer";

import './styles.css'

export const Info = ({ info }: InfoProps) => {
  return (
    <section className="info">
      <div className="container-info">
        <div className="text-info-me">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            {info.apresentation}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <RichText content={info.introduction.raw} />
          </motion.div>

          <div className="info-icons">
            {info.socials.map((social, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                key={index}>
                <Link
                  href={social.url}
                  key={index}
                  aria-label={social.name}
                  target="_blank"
                >
                  <CmsIcon icon={social.iconSvg} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="stack-info"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="stack">
            <div className="main-stack">
              <span>{info.stackPrincipal}</span>
              <p>{info.jobTitle}</p>
            </div>

            <div className="tech-images">
              {info.stacks.map((stack, index) => (
                <Image
                  src={stack.stackTech.url}
                  width={stack.stackTech.width}
                  height={stack.stackTech.height}
                  key={index}
                  alt={extractNameFile(stack.stackTech.fileName)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}