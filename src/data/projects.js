import Rumipress from '../assets/Rumipress.png';
import Portfolio from '../assets/Portfolio.png';

export const projects = [
  {
    id: 1,
    title: "Systeme de gestion bancaire",
    description: "Système de gestion bancaire complet permettant la gestion unifiée des clients, comptes, transactions et cartes virtuelles.",
    stack: ["Django", "DjangoRestFramework", "Postgis", "PostgreSQL"],
    githubUrl: "https://github.com/example/ecommerce",
    demoUrl: "https://example-ecommerce.com",
    image: "/api/placeholder/400/300"
  },
  {
    id: 2,
    title: "Systeme de gestion d'etablissement scolaire",
    description: "Plateforme complète de gestion d’établissement scolaire permettant la gestion de tous les processus administratifs..",
    stack: ["Django", "DjangoRestFramework", "PostgreSQL"],
    githubUrl: "https://github.com/example/task-manager",
    demoUrl: "https://example-tasks.com",
    image: "/api/placeholder/400/300"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Tableau de bord météo interactif avec prévisions, cartes et graphiques animés.",
    stack: ["React", "OpenWeather API", "Chart.js", "CSS"],
    githubUrl: "https://github.com/example/weather-dashboard",
    demoUrl: "https://example-weather.com",
    image: "/api/placeholder/400/300"
  },
  {
    id: 4,
    title: "Systeme de gestion de distribution de livre",
    description: "Application de Gestion du suivi de distribution des livres d'une entreprise  avec rapport analytique des depenses par catégorie.",
    stack: ["Django", "TailwindCSS", "Chart.js", "PostgreSQL"],
    githubUrl: "https://github.com/Hercule1234/rumi-press-django",
    demoUrl: "https://example-social.com",
    image: Rumipress
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Site portfolio responsive avec animations modernes et design épuré.",
    stack: ["React", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/Hercule1234/Souleymane_Portfolio",
    demoUrl: "https://meite-souleymane-tieba.netlify.app",
    image: Portfolio
  }
];