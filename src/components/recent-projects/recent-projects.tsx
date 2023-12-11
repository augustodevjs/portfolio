'use client';

import React from "react";
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion";
import { extractNameFile } from "@/utils";
import { RecentProjectsProps } from "../types";

import './styles.css'

export const RecentProjects = ({ recentProjects }: RecentProjectsProps) => {
  return (
    <section className="recent-projects">
      <div className="recent-projects-container">
        <motion.div
          className="header-projects"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{recentProjects.titleRecentProjects}</h2>
        </motion.div>

        <div className="recent-projects-content">
          {recentProjects.recentProjects.map((project, index) => (
            <React.Fragment key={index}>
              <div className="recent-project-card">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    priority
                    src={project.image.url}
                    width={project.image.width}
                    height={project.image.height}
                    alt={extractNameFile(project.image.fileName)}
                    onClick={() => window.open(project.url)}
                  />
                </motion.div>

                <div className="content-project">
                  <motion.h3
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>

                  <div className="stacks">
                    {project.technologies.map((tecnology, index) => (
                      <motion.span
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        key={index}
                      >
                        {tecnology.name}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link
                      target="_blank"
                      href={project.url}
                    >
                      {project.showProject}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </div>

              <motion.div className="border"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section >
  )
}