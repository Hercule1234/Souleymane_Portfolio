import { motion } from 'framer-motion';

const HomePage = ({ setCurrentPage }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Section Héro */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meite Souleymane Tieba
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-3xl text-gray-600 mb-6"
            variants={itemVariants}
          >
            Développeur Fullstack & UI/UX Designer
          </motion.h2>
        </motion.div>

        {/* Texte d'introduction */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Passionné par la création d'expériences web exceptionnelles, je transforme 
          des idées en applications modernes, interactives et performantes. 
          Spécialisé en React, Django et design responsive.
        </motion.p>

        {/* Boutons CTA */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setCurrentPage('projects')}
            className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Voir mes projets
          </motion.button>
          
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setCurrentPage('contact')}
            className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Me contacter
          </motion.button>
        </motion.div>

        {/* Animation décorative */}
        <motion.div
          className="mt-16 flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-gray-400 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Icônes sociales */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center space-x-6"
        >
          {['GitHub', 'LinkedIn', 'Twitter'].map((platform, index) => (
            <motion.a
              key={platform}
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-xl">
                  {platform === 'GitHub' && '🐙'}
                  {platform === 'LinkedIn' && '💼'}
                  {platform === 'Twitter' && '🐦'}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;