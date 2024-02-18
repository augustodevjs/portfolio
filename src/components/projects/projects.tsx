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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.description}
          </motion.p>
        </div>

        <div className="project-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="border"
          />
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="project-me"
          >
            <p>{project.projetos}</p>
          </motion.div>

          <div className="all-projects">
            {project.projectPersonals.map((project, index) => (
              <div className="project-card" key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    priority
                    src={project.imageProject.url}
                    width={project.imageProject.width}
                    height={project.imageProject.height}
                    alt={extractNameFile(project.imageProject.fileName)}
                    onClick={() => window.open(project.urlImage)}
                  />
                </motion.div>
                <div className="content-project">
                  <motion.h3
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >{project.description}</motion.p>

                  <div className="stacks">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        key={index}
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>

                  <div className="links">
                    {project.links.map((link, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.2,
                          ease: "easeOut"
                        }}
                      >
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
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}