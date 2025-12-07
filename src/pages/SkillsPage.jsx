import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const SkillsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillCardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  // Grouper les compétences par catégorie
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryColors = {
    'Frontend': 'bg-blue-100 text-blue-800',
    'Backend': 'bg-green-100 text-green-800',
    'Database': 'bg-purple-100 text-purple-800',
    'Tools': 'bg-orange-100 text-orange-800',
    'Animation': 'bg-pink-100 text-pink-800'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Mes Compétences
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Un aperçu des technologies et outils que je maîtrise 
            pour créer des applications web modernes et performantes.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gray-900 mx-auto mt-6"
          />
        </motion.div>

        {/* Compétences par catégorie */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <motion.div key={category} variants={itemVariants}>
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3"
              >
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[category] || 'bg-gray-100 text-gray-800'}`}>
                  {category}
                </span>
              </motion.h2>
              
              <motion.div
                variants={containerVariants}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {categorySkills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    variants={skillCardVariants}
                    whileHover="hover"
                    className="bg-white rounded-xl shadow-lg p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <motion.span
                        className="text-2xl"
                        animate={{
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <skill.icon style={{ color: skill.color }} />
                      </motion.span>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {skill.name}
                      </h3>
                    </div>
                    
                    {/* Barre de progression */}
                    <div className="mb-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">Niveau</span>
                        <motion.span
                          className="text-sm font-semibold text-gray-800"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          variants={progressVariants}
                          custom={skill.level}
                          className="h-full bg-gradient-to-r from-gray-700 to-gray-900 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section statistiques */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-gray-800 mb-8 text-center"
            >
              En chiffres
            </motion.h2>
            
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-4 gap-6"
            >
              {[
                { number: '5+', label: 'Projets réalisés', icon: '🚀' },
                { number: '1+', label: 'Années d\'expérience', icon: '📅' },
                { number: '5+', label: 'Technologies maîtrisées', icon: '⚡' },
                { number: '100%', label: 'Satisfaction client', icon: '⭐' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-4xl mb-2"
                    animate={{
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div
                    className="text-3xl font-bold text-gray-800 mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;