import { motion } from 'framer-motion';
import SoulTieba from '../assets/SoulTieba.png';

const AboutPage = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
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
            À propos de moi
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gray-900 mx-auto"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Photo */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="relative"
            >
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
                <img
                  src={SoulTieba}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                animate={{
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                MT
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Texte */}
          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Bonjour ! Je suis Meite Souleymane Tieba, un développeur fullstack passionné
              avec  1 ans d'expérience dans la création d'applications web
              modernes et interactives.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Mon parcours m'a permis de travailler sur des projets variés,  en développant des solutions
              innovantes qui allient performance et expérience utilisateur optimale.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Je suis constamment à l'affût des dernières tendances et technologies
              du web, et j'aime partager mes connaissances à travers des articles
              et des contributions open source.
            </motion.p>

            {/* Informations clés */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {[
                { label: 'Localisation', value: 'Abidjan, Cote d ivoire ' },
                { label: 'Expérience', value: '1+ ans' },
                { label: 'Spécialisation', value: 'React & Django' },
                { label: 'Disponibilité', value: 'Freelance' }
              ].map((info, index) => (
                <motion.div
                  key={info.label}
                  className="bg-white p-4 rounded-lg shadow-md"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-sm text-gray-600 font-medium">{info.label}</div>
                  <div className="text-lg font-semibold text-gray-800">{info.value}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bouton CV */}
            <motion.div
              variants={itemVariants}
              className="mt-8"
            >
              <motion.a
                href="/CV_MEITE_SOULEYMANE_TIEBA.pdf"
                download="CV_MEITE_SOULEYMANE_TIEBA.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <span>Télécharger mon CV</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Citations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-20 text-center"
        >
          <motion.blockquote
            variants={itemVariants}
            className="text-2xl md:text-3xl font-light text-gray-700 italic max-w-3xl mx-auto"
          >
            "If you can change your mind, you can change your life."
          </motion.blockquote>
          <motion.cite
            variants={itemVariants}
            className="block mt-4 text-lg text-gray-600"
          >
            — William James
          </motion.cite>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;