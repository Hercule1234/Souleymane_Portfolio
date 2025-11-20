import { useState } from 'react';
import Navigation from '../components/Navigation';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import SkillsPage from '../pages/SkillsPage';
import ContactPage from '../pages/ContactPage';
import { motion, AnimatePresence } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { SiLinkedin, SiGithub, SiGitlab } from 'react-icons/si';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const footerSocialLinks = [
    {
      icon: SiGithub,
      url: 'https://github.com/Hercule1234',
      color: '#181717'
    },
    {
      icon: SiLinkedin,
      url: 'https://linkedin.com/in/souleymanetieba',
      color: '#0077B5'
    },
    {
      icon: SiGitlab,
      url: 'https://gitlab.com/meitetieba',
      color: '#FC6D26'
    },
    {
      icon: MdEmail,
      url: 'mailto:meitetieba@gmail.com',
      color: '#EA4335'
    }
  ];

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'skills':
        return <SkillsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
          className="pt-16"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gray-900 text-white py-8 mt-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-4 md:mb-0"
            >
              <div className="text-xl font-bold mb-2">Meite Souleymane Tieba</div>
              <div className="text-gray-400">Développeur Fullstack & UI/UX Designer</div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex space-x-6"
            >
              {footerSocialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="text-2xl hover:text-gray-300 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon style={{ color: social.color }} />
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400"
          >
            <p>&copy; 2025 Meite Souleymane Tieba. Tous droits réservés.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default App;