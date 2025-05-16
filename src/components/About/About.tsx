import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, BookOpen, Briefcase } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import SectionTitle from '../common/SectionTitle';

const About: React.FC = () => {
  const { t } = useTranslation();
  const aboutRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(aboutRef, { threshold: 0.1 });

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

  // Sample experiences and education data - replace with your own
  const experiences = [
    {
      id: 1,
      position: "Développeur Web Senior",
      company: "Entreprise Exemple",
      period: "2023 - Présent",
      description: "Développement d'applications web fullstack avec React et Node.js. Intégration de solutions de paiement et d'authentification."
    },
    {
      id: 2,
      position: "Développeur Frontend",
      company: "Startup Innovante",
      period: "2021 - 2023",
      description: "Création d'interfaces utilisateur réactives et optimisation des performances pour améliorer l'expérience utilisateur."
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Master en Développement Web",
      institution: "École Numérique",
      period: "2020 - 2021",
      description: "Spécialisation en technologies web modernes et méthodologies agiles."
    },
    {
      id: 2,
      degree: "Licence en Informatique",
      institution: "Université des Sciences",
      period: "2017 - 2020",
      description: "Formation fondamentale en programmation, structures de données et algorithmique."
    }
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t('about.title')}
          subtitle={t('about.subtitle')}
          isVisible={isVisible}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="border-8 border-white dark:border-gray-800 shadow-xl rounded-lg overflow-hidden relative z-10">
              <img
                src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Portrait professionnel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-8 -right-4 bottom-8 -left-4 border-4 border-primary-400 dark:border-primary-600 rounded-lg z-0"></div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              {t('about.title')}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {t('about.description')}
            </p>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Briefcase size={20} className="text-primary-600 dark:text-primary-400 mr-2" />
                <h4 className="text-xl font-medium text-gray-800 dark:text-white">
                  {t('about.experience')}
                </h4>
              </div>
              
              <div className="space-y-4 ml-6">
                {experiences.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 py-1">
                    <h5 className="text-lg font-medium text-gray-800 dark:text-white">
                      {exp.position}
                    </h5>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {exp.company} | {exp.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <BookOpen size={20} className="text-primary-600 dark:text-primary-400 mr-2" />
                <h4 className="text-xl font-medium text-gray-800 dark:text-white">
                  {t('about.education')}
                </h4>
              </div>
              
              <div className="space-y-4 ml-6">
                {education.map((edu) => (
                  <div key={edu.id} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 py-1">
                    <h5 className="text-lg font-medium text-gray-800 dark:text-white">
                      {edu.degree}
                    </h5>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {edu.institution} | {edu.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors duration-300"
            >
              <Download size={16} />
              <span>{t('about.downloadCV')}</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;