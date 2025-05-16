import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from './projectsData';

interface ProjectCardProps {
  project: Project;
  variants: any;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, variants, index }) => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      variants={variants}
      className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden group"
      style={{ originX: 0.5, originY: 0.5 }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
          <div className="space-x-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 bg-white text-gray-900 rounded-md text-sm font-medium hover:bg-primary-50 transition-colors duration-300"
              >
                <ExternalLink size={14} className="mr-1" />
                {t('projects.viewProject')}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-300"
              >
                <Github size={14} className="mr-1" />
                {t('projects.viewCode')}
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(project.category)}`}>
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

function getCategoryColor(category: string): string {
  switch (category) {
    case 'frontend':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'backend':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'fullstack':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
  }
}

export default ProjectCard;