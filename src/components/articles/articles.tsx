'use client';

import { motion } from 'framer-motion';
import { ArticlePage } from '@/models';

import './styles.css';

type ArticlesProps = {
  article: ArticlePage;
}

export const Articles = ({ article }: ArticlesProps) => {
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
            {article.introductionArticle}
          </motion.h2>
          <motion.p
            {...animeProps}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {article.description}
          </motion.p>
        </div>
        {article.article.length === 0 ? (
          <motion.h2
            className='development'
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            🚧 In development...
          </motion.h2>
        ) : (
          <div></div>
        )}
      </div>
    </section >
  )
}