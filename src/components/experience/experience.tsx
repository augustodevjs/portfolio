'use client'

import { motion } from 'framer-motion';
import { ExperienceProps } from '../types';
import { RichText } from "@graphcms/rich-text-react-renderer";

import './styles.css'

export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section className="experience">
      <div className="container-experience">
        <div className="experience-introduce">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            {experience.experienceProfessional.titleExperience}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {experience.experienceProfessional.apresentationJob}
          </motion.p>
        </div>

        <div className="experience-content">
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
            className="experience-journey"
          >
            <p>{experience.experienceProfessional.trajetoria}</p>
          </motion.div>

          <div className="experience-content-info">
            {experience.experienceProfessional.experience.map((experience, index) => (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index} className="experience-info"
              >
                <RichText content={experience.raw} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}