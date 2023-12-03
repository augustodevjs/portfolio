import { Technologies } from "."

export type ProjectPage = {
  title: string
  description: string
  projetos: string
  projectPersonals: ProjectPersonals[]
}

export type ProjectPersonals = {
  title: string
  description: string
  urlImage: string
  imageProject: {
    width: number
    height: number
    url: string
    fileName: string
  }
  technologies: Technologies[]
  links: Links[]
}

export type Links = {
  url: string
  svgIcon: string
  name: string
  className: string
}

export type ProjetoHygraph = {
  project: ProjectPage
}