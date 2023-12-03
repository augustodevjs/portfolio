'use client';

import Image from "next/image"
import Link from "next/link";

import { motion } from 'framer-motion'
import { ProjectsProps } from "../types";
import { extractNameFile } from "@/utils";
import { CmsIcon } from "../cms-icon/cms-icon";

import './styles.css'

export const Projects = ({ project }: ProjectsProps) => {
  return (
    <section className="project">
      <div className="container-project">
        <div className="project-introduce">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.description}
          </motion.p>
        </div>

        <motion.div
          className="project-content"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="project-me">
            <p>{project.projetos}</p>
          </div>

          <div className="all-projects">
            {project.projectPersonals.map((project, index) => (
              <div className="project-card" key={index}>
                <Image
                  src={project.imageProject.url}
                  width={project.imageProject.width}
                  height={project.imageProject.height}
                  alt={extractNameFile(project.imageProject.fileName)}
                  onClick={() => window.open(project.urlImage)}
                />
                <div className="content-project">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="stacks">
                    {project.technologies.map((tech, index) => (
                      <span key={index}>{tech.name}</span>
                    ))}
                  </div>

                  <div className="links">
                    {project.links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        className={link.className}
                        target="_blank"
                      >
                        <CmsIcon icon={link.svgIcon} />
                        <div className="name">
                          {link.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}