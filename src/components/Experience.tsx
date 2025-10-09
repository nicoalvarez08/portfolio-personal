import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Building2, Award } from 'lucide-react'

const Experience: React.FC = () => {
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const experiences = [
    {
      title: 'Desarrollador Full Stack Jr.',
      company: 'Freelance / Proyectos Personales',
      location: 'Córdoba, Argentina',
      period: '2024 - Presente',
      type: 'Freelance',
      description: 'Desarrollo aplicaciones web completas utilizando el stack MERN, enfocándome en crear soluciones funcionales y escalables.',
      achievements: [
        'Desarrollé e-commerce completo con carrito de compras y base de datos',
        'Creé aplicación de gestión de tareas con funcionalidades CRUD',
        'Implementé autenticación y autorización de usuarios',
        'Optimicé rendimiento y experiencia de usuario'
      ],
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Git']
    },
    {
      title: 'Estudiante de Ingeniería Mecánica',
      company: 'Universidad Tecnológica Nacional',
      location: 'Córdoba, Argentina',
      period: 'En curso',
      type: 'Educación',
      description: 'Formación en ingeniería que desarrolla habilidades analíticas, resolución de problemas y pensamiento lógico aplicable al desarrollo de software.',
      achievements: [
        'Desarrollo de capacidades analíticas y de resolución de problemas',
        'Aplicación de metodologías de trabajo en equipo',
        'Formación en pensamiento sistémico y lógico',
        'Preparación para entornos multidisciplinarios'
      ],
      technologies: ['Matemáticas', 'Física', 'Análisis', 'Trabajo en Equipo', 'Proyectos']
    }
  ]

  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4"
          >
            Experiencia Profesional
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto"
          >
            Mi trayectoria profesional enfocada en desarrollo full stack y ciencia de datos, 
            con experiencia en empresas de tecnología y startups.
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary-200 dark:bg-primary-800"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900 z-10"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-dark-200 dark:border-dark-700">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-primary-600 mb-2">
                        <Building2 size={16} className="mr-1" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 text-sm font-medium rounded-full">
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center text-sm text-dark-600 dark:text-dark-300 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-dark-600 dark:text-dark-300 mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-dark-900 dark:text-white mb-2 flex items-center">
                      <Award size={16} className="mr-2 text-primary-600" />
                      Logros Principales:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-dark-600 dark:text-dark-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Experience
