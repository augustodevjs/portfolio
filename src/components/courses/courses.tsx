'use client';

import Image from "next/image";
import { CoursesProps } from "../types";
import { extractNameFile } from "@/utils";

import './styles.css'

export const Courses = ({ courses }: CoursesProps) => {
  return (
    <section className="courses">
      <div className="container-courses">
        <h2 data-anime="top">{courses.titleCourse}</h2>

        <div className="card-content" data-anime="top">
          {courses.courses.map((course, index) => (
            <div className="card-course" key={index}>
              <Image
                src={course.certificate.url}
                width={course.certificate.width}
                height={course.certificate.height}
                onClick={() => window.open(course.certificate.url)}
                alt={extractNameFile(course.certificate.fileName)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}