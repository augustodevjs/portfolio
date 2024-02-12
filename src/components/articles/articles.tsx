'use client';

import { motion } from 'framer-motion';

import './styles.css';

export const Articles = () => {
  const animeProps = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
  }

  return (
    <section className="articles">
      <div className="container-articles">
        <div className="articles-introduce" data-anime="left">
          <motion.h2
            {...animeProps}
            transition={{ duration: 0.5 }}
          >
            Insights from My Tech Studies: Backend & DevOps
          </motion.h2>
          <motion.p
            {...animeProps}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Journey through Backend and DevOps: Insights from My Software Engineering and Infrastructure Scalability Studies.
          </motion.p>
        </div>
        <motion.h2
          className='development'
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          🚧 In development...
        </motion.h2>
      </div>
    </section >
  )
}