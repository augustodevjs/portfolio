'use client';

import Link from "next/link"
import Image from "next/image"
import { extractNameFile } from "@/utils";
import { RecentProjectsProps } from "../types";

import './styles.css'

export const RecentProjects = ({ recentProjects }: RecentProjectsProps) => {
  return (
    <section className="recent-projects">
      <div className="recent-projects-container">
        <div className="header-projects">
          <h2>{recentProjects.titleRecentProjects}</h2>
        </div>

        <div className="recent-projects-content">
          {recentProjects.recentProjects.map((project, index) => (
            <div className="recent-project-card" key={index}>
              <Image
                src={project.image.url}
                width={project.image.width}
                height={project.image.height}
                alt={extractNameFile(project.image.fileName)}
                onClick={() => window.open(project.url)}
              />

              <div className="content-project">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="stacks">
                  {project.technologies.map((tecnology, index) => (
                    <span key={index}>{tecnology.name}</span>
                  ))}
                </div>

                <Link
                  target="_blank"
                  href={project.url}
                >{project.showProject}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}