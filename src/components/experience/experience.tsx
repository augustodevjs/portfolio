import { ExperienceProps } from '../types';
import { RichText } from "@graphcms/rich-text-react-renderer";
import './styles.css'

export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section className="experience">
      <div className="container-experience">
        <div className="experience-introduce">
          <h2 data-anime="top">{experience.experienceProfessional.titleExperience}</h2>
          <p data-anime="top">
            {experience.experienceProfessional.apresentationJob}
          </p>
        </div>

        <div className="experience-content">
          <div className="experience-journey" data-anime="top">
            <p>{experience.experienceProfessional.trajetoria}</p>
          </div>

          <div className="experience-content-info">
            {experience.experienceProfessional.experience.map((experience, index) => (
              <div key={index} className="experience-info" data-anime="left">
                <RichText content={experience.raw} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}