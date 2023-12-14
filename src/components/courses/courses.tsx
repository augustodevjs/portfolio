'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { CoursesProps } from "../types";
import { extractNameFile } from "@/utils";

import './styles.css'

export const Courses = ({ courses }: CoursesProps) => {
  return (
    <section className="courses">
      <div className="container-courses">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.5 }}
        >
          {courses.titleCourse}
        </motion.h2>

        <div className="card-content" data-anime="top">
          {courses.courses.map((course, index) => (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-course" key={index}>
              <Image
                src={course.certificate.url}
                width={course.certificate.width}
                height={course.certificate.height}
                onClick={() => window.open(course.url)}
                alt={extractNameFile(course.certificate.fileName)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}