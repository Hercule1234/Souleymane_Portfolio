import { motion } from 'framer-motion';
import { useState } from 'react';
import { MdEmail, MdLocationOn, MdPhone, MdAccessTime } from 'react-icons/md';
import { SiLinkedin, SiGithub, SiGitlab } from 'react-icons/si';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const formVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const socialVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi (pas de backend réel)
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message envoyé avec succès ! (Simulation)');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: MdEmail,
      url: 'mailto:meitetieba@gmail.com',
      color: '#EA4335',
      bgColor: 'bg-red-100 text-red-600'
    },
    {
      name: 'LinkedIn',
      icon: SiLinkedin,
      url: 'https://linkedin.com/in/souleymanetieba',
      color: '#0077B5',
      bgColor: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'GitHub',
      icon: SiGithub,
      url: 'https://github.com/meitetieba',
      color: '#181717',
      bgColor: 'bg-gray-100 text-gray-800'
    },
    {
      name: 'GitLab',
      icon: SiGitlab,
      url: 'https://gitlab.com/meitetieba',
      color: '#FC6D26',
      bgColor: 'bg-orange-100 text-orange-600'
    }
  ];

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
            Contactez-moi
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Vous avez un projet en tête ou simplement envie d'échanger ? 
            N'hésitez pas à me contacter, je serais ravi de vous répondre.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gray-900 mx-auto mt-6"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold text-gray-800 mb-6"
            >
              Envoyez-moi un message
            </motion.h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                  placeholder="Votre nom et prenom"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                  placeholder="mail@example.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                  placeholder="Projet web, collaboration, etc."
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </motion.div>

              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Envoi en cours...
                  </span>
                ) : (
                  'Envoyer le message'
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Carte d'information */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold text-gray-800 mb-6"
              >
                Informations de contact
              </motion.h2>
              
              <div className="space-y-4">
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MdLocationOn className="text-xl text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Localisation</div>
                    <div className="text-gray-600">Abidjan, Cote d'ivoire</div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MdPhone className="text-xl text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Téléphone</div>
                    <div className="text-gray-600">+225 07 02 02 03 13</div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <MdAccessTime className="text-xl text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Disponibilité</div>
                    <div className="text-gray-600">Lun - Ven: 9h - 18h</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Réseaux sociaux */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold text-gray-800 mb-6"
              >
                Retrouvez-moi sur
              </motion.h2>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={socialVariants}
                    whileHover="hover"
                    className={`${social.bgColor} p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300`}
                  >
                    <motion.div
                      className="text-3xl mb-2"
                      animate={{
                        y: [0, -3, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      <social.icon style={{ color: social.color }} />
                    </motion.div>
                    <div className="font-semibold">{social.name}</div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Message rapide */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl shadow-xl p-8 text-white"
            >
              <motion.h3
                variants={itemVariants}
                className="text-xl font-bold mb-4"
              >
                Réponse rapide garantie
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="text-gray-300"
              >
                Je m'engage à répondre à tous les messages dans un délai de 24h 
                ouvrées. Votre projet mérite une attention immédiate !
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;