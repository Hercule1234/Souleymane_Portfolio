import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ScrollAnimation from '../components/ScrollAnimation';

const ProjectsPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation threshold={0.1}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Mes Projets
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez une sélection de mes réalisations récentes,
              mêlant innovation technique et design moderne.
            </p>
            <div className="w-24 h-1 bg-gray-900 mx-auto mt-6" />
          </div>
        </ScrollAnimation>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.id} threshold={0.1}>
              <motion.div
                whileHover={{ scale: 1.03, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
              {/* Image du projet */}
              <motion.div
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Contenu de la carte */}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold text-gray-800 mb-2"
                  whileHover={{ color: '#1f2937' }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 mb-4 text-sm leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.description}
                </motion.p>

                {/* Stack technique */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: '#1f2937',
                          color: '#ffffff'
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-gray-800 transition-colors duration-300"
                  >
                    GitHub
                  </motion.a>

                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 border-2 border-gray-900 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    Démo
                  </motion.a>
                </div>
              </div>
            </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Section de call-to-action */}
        <ScrollAnimation threshold={0.1}>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto mt-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Vous avez un projet en tête ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Parlons-en ! Je serais ravi de vous aider à concrétiser vos idées
              et à créer une solution sur mesure pour vos besoins.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Discutons ensemble
            </motion.button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default ProjectsPage;