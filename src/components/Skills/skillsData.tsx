export interface Skill {
  name: string;
  level: number;
  icon?: React.ReactNode;
}

export const skillsData = {
  frontend: [
    { name: 'HTML & CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Vue.js', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'SASS/SCSS', level: 80 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'GraphQL', level: 65 },
    { name: 'Docker', level: 60 },
    { name: 'RESTful APIs', level: 85 },
  ],
  other: [
    { name: 'Git/GitHub', level: 85 },
    { name: 'Agile/Scrum', level: 80 },
    { name: 'Jest/RTL', level: 75 },
    { name: 'CI/CD', level: 70 },
    { name: 'Performance Optimization', level: 75 },
    { name: 'AWS', level: 60 },
  ],
};