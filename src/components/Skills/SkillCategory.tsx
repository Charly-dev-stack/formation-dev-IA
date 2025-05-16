import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from './skillsData';
import SkillBar from './SkillBar';

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  variants: any;
  isVisible: boolean;
  delay?: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  variants,
  isVisible,
  delay = 0,
}) => {
  return (
    <motion.div
      variants={variants}
      transition={{ delay }}
      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3 mb-6">
        {title}
      </h3>
      
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            delay={(index * 0.1) + delay}
            isVisible={isVisible}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;