export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'frontend' | 'backend' | 'fullstack';
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce App",
    description: "Plateforme de commerce électronique complète avec paiement intégré et gestion des commandes.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "fullstack",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/username/ecommerce"
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif pour visualiser et analyser les données en temps réel.",
    image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "frontend",
    technologies: ["React", "D3.js", "Tailwind CSS", "Redux"],
    liveUrl: "https://example.com/dashboard",
    githubUrl: "https://github.com/username/dashboard"
  },
  {
    id: 3,
    title: "API Microservices",
    description: "Architecture de microservices pour traiter les requêtes et gérer les données à grande échelle.",
    image: "https://images.pexels.com/photos/1181629/pexels-photo-1181629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "backend",
    technologies: ["Node.js", "Express", "PostgreSQL", "Docker", "Redis"],
    githubUrl: "https://github.com/username/api-microservices"
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "Réseau social avec messagerie en temps réel et partage de contenu multimédia.",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "fullstack",
    technologies: ["React", "Socket.io", "Express", "MongoDB", "AWS S3"],
    liveUrl: "https://example.com/social",
    githubUrl: "https://github.com/username/social-platform"
  },
  {
    id: 5,
    title: "Task Manager",
    description: "Application de gestion des tâches avec fonctionnalités de collaboration et notifications.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "fullstack",
    technologies: ["React", "Node.js", "GraphQL", "PostgreSQL"],
    liveUrl: "https://example.com/tasks",
    githubUrl: "https://github.com/username/task-manager"
  }
];