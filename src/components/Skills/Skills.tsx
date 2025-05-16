import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionTitle from '../common/SectionTitle';
import SkillCategory from './SkillCategory';
import { skillsData } from './skillsData';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const skillsRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(skillsRef, { threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
          isVisible={isVisible}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <SkillCategory
            title={t('skills.frontend')}
            skills={skillsData.frontend}
            variants={itemVariants}
            isVisible={isVisible}
          />
          
          <SkillCategory
            title={t('skills.backend')}
            skills={skillsData.backend}
            variants={itemVariants}
            isVisible={isVisible}
            delay={0.2}
          />
          
          <SkillCategory
            title={t('skills.other')}
            skills={skillsData.other}
            variants={itemVariants}
            isVisible={isVisible}
            delay={0.4}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;