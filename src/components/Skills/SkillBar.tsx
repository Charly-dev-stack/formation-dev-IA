import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from './skillsData';

interface SkillBarProps {
  skill: Skill;
  delay: number;
  isVisible: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay, isVisible }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {skill.icon && (
            <span className="mr-2 text-gray-700 dark:text-gray-300">
              {skill.icon}
            </span>
          )}
          <span className="font-medium text-gray-800 dark:text-gray-200">
            {skill.name}
          </span>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      
      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: 'easeInOut' }}
          className={`h-full rounded-full ${getColorClass(skill.level)}`}
        />
      </div>
    </div>
  );
};

function getColorClass(level: number): string {
  if (level >= 90) {
    return 'bg-green-500';
  } else if (level >= 75) {
    return 'bg-emerald-500';
  } else if (level >= 60) {
    return 'bg-blue-500';
  } else if (level >= 40) {
    return 'bg-yellow-500';
  } else {
    return 'bg-red-500';
  }
}

export default SkillBar;