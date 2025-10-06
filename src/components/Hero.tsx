import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import profilePhoto from '../assets/profile-photo.jpg'

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  // const handleDownloadCV = () => {
  //   // Aquí puedes agregar la lógica para descargar tu CV
  //   console.log('Descargando CV...')
  // }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/nicolas-alvarez-dev',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/nicolas-alvarez-bba9592aa',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:nicoalvlu@gmail.com',
      color: 'hover:text-red-500'
    }
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center py-20 px-8 bg-white dark:bg-dark-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-dark-900 dark:text-white mb-6">
                Hola, soy{' '}
                <span className="text-primary-600">Nicolas</span>
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-8">
                Desarrollador Full Stack
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12">
              <p className="text-xl text-dark-600 dark:text-dark-300 leading-relaxed mb-8">
                Soy un desarrollador Full Stack Jr. especializado en React, Node.js y Python. 
                Basado en Córdoba, Argentina, ayudo a empresas a construir aplicaciones web 
                escalables y soluciones de datos que sus usuarios van a amar.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 mb-12"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg"
              >
                Contactame
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200"
              >
                Ver Proyectos
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex space-x-6"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-dark-400 dark:text-dark-500 transition-colors duration-200 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={28} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary-200 dark:border-primary-800">
                <img 
                  src={profilePhoto} 
                  alt="Nicolas Álvarez" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                <span className="text-xl">💻</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
