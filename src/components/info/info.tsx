import Link from "next/link"
import Image from "next/image"

import { InfoProps } from "../types";
import { extractNameFile } from "@/utils";
import { CmsIcon } from "../cms-icon/cms-icon";
import { RichText } from "@graphcms/rich-text-react-renderer";

import './styles.css'

export const Info = ({ info }: InfoProps) => {
  return (
    <section className="info">
      <div className="container-info">
        <div className="text-info-me">
          <h1>{info.apresentation}</h1>

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
        </div>
      </div>
    </section>
  )
}