import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Brain, Rocket, Users, Target } from 'lucide-react'

const About: React.FC = () => {
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

  const features = [
    {
      icon: Code,
      title: 'Desarrollo Full Stack',
      description: 'Manejo completo del stack MERN con React, Node.js, Express y bases de datos.'
    },
    {
      icon: Database,
      title: 'Ciencia de Datos',
      description: 'Formación en Python para análisis de datos, programación y pensamiento lógico.'
    },
    {
      icon: Brain,
      title: 'Resolución de Problemas',
      description: 'Capacidad analítica desarrollada en ingeniería aplicada al desarrollo de software.'
    },
    {
      icon: Rocket,
      title: 'Adaptabilidad',
      description: 'Aprendizaje continuo y adaptación rápida a nuevas tecnologías y metodologías.'
    },
    {
      icon: Users,
      title: 'Trabajo Colaborativo',
      description: 'Experiencia trabajando en equipos multidisciplinarios con enfoque ágil.'
    },
    {
      icon: Target,
      title: 'Orientación a Resultados',
      description: 'Proactividad y enfoque en la entrega de soluciones funcionales y de calidad.'
    }
  ]

  return (
    <section id="about" className="py-20 px-8 bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-dark-900 dark:text-white mb-4"
          >
            Mi Historia.
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-primary-600 mx-auto mb-8"
          ></motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 text-lg text-dark-600 dark:text-dark-300 leading-relaxed"
          >
            <motion.p variants={itemVariants}>
              Comencé como <span className="text-primary-600 font-semibold">estudiante de Ingeniería Mecánica</span> en UTN Córdoba, 
              donde desarrollé una base sólida en pensamiento analítico y resolución de problemas complejos.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              Mi pasión por la tecnología me llevó a certificarme como <span className="text-primary-600 font-semibold">Desarrollador Full Stack Jr.</span> 
              en UTN Buenos Aires, especializándome en React, Node.js y bases de datos.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              Continué mi formación con un <span className="text-primary-600 font-semibold">curso de Ciencia de Datos con Python</span>, 
              expandiendo mis habilidades hacia el análisis de datos y machine learning.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              <span className="text-primary-600 font-semibold">Mi éxito</span> en combinar la precisión de la ingeniería 
              con la creatividad del desarrollo web me ha llevado a crear soluciones innovadoras que aportan valor real a las empresas.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              Ahora busco oportunidades en empresas líderes como <span className="text-primary-600 font-semibold">Globant y MercadoLibre</span>, 
              donde pueda aplicar mis conocimientos y contribuir al desarrollo de proyectos tecnológicos de impacto. ¡Amo lo que hago! ❤️
            </motion.p>
          </motion.div>
        </div>

        {/* Certificaciones Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-4xl font-bold text-dark-900 dark:text-white mb-12 text-center"
          >
            Certificaciones.
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-24 h-24 mr-6 rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="./images/cert-fullstack.jpg" 
                    alt="Certificado Full Stack"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                    Professional Full Stack
                  </h4>
                  <p className="text-primary-600 font-semibold mb-1">UTN Buenos Aires</p>
                  <p className="text-sm text-dark-600 dark:text-dark-300">2025 • 75 horas</p>
                </div>
              </div>
              <p className="text-dark-600 dark:text-dark-300">
                Certificación completa en desarrollo web con React, Node.js, Express y bases de datos. 
                Incluye autenticación, APIs REST y deployment.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-24 h-24 mr-6 rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="./images/cert-datascience.jpg" 
                    alt="Certificado Data Science"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                    Ciencias de Datos con Python
                  </h4>
                  <p className="text-primary-600 font-semibold mb-1">UTN Buenos Aires</p>
                  <p className="text-sm text-dark-600 dark:text-dark-300">2024 • 24 horas</p>
                </div>
              </div>
              <p className="text-dark-600 dark:text-dark-300">
                Formación en análisis de datos, programación con Python, pandas, numpy y 
                fundamentos de machine learning.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 mt-20">
          {/* Left Column - Image/Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white dark:bg-dark-800 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                    Mi Filosofía
                  </h3>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-dark-900 dark:text-white">Carta de Presentación</h4>
                    <p className="text-dark-600 dark:text-dark-300">
                      Como <strong>Desarrollador Full Stack Jr.</strong> con certificaciones de UTN Buenos Aires, 
                      busco integrarme a equipos de desarrollo en empresas tecnológicas líderes. Mi formación 
                      en Ingeniería Mecánica me aporta una perspectiva analítica única, mientras que mis 
                      certificaciones en desarrollo web y ciencia de datos me permiten crear soluciones 
                      innovadoras y escalables.
                    </p>
                    <p className="text-dark-600 dark:text-dark-300">
                      Estoy comprometido con el <strong>aprendizaje continuo</strong> y la excelencia técnica, 
                      buscando oportunidades donde pueda contribuir al crecimiento de la empresa mientras 
                      desarrollo mi carrera profesional en el sector tecnológico.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-1">3+</div>
                      <div className="text-sm text-dark-600 dark:text-dark-300">Proyectos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-1">2</div>
                      <div className="text-sm text-dark-600 dark:text-dark-300">Certificaciones</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-dark-200 dark:border-dark-700"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-3">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-dark-600 dark:text-dark-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Aptitudes y Competencias */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-dark-900 dark:text-white mb-8 text-center"
          >
            Aptitudes y Competencias
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg"
            >
              <h4 className="text-xl font-bold text-dark-900 dark:text-white mb-4 flex items-center">
                <Target className="w-6 h-6 text-primary-600 mr-2" />
                Competencias Técnicas
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center text-dark-600 dark:text-dark-300">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Desarrollo Full Stack con React, Node.js y Express
                </li>
                <li className="flex items-center text-dark-600 dark:text-dark-300">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Bases de datos MySQL y MongoDB
                </li>
                <li className="flex items-center text-dark-600 dark:text-dark-300">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Python para análisis de datos y ciencia de datos
                </li>
                <li className="flex items-center text-dark-600 dark:text-dark-300">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Control de versiones con Git y GitHub
                </li>
                <li className="flex items-center text-dark-600 dark:text-dark-300">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Metodologías ágiles y trabajo en equipo
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg"
            >
              <h4 className="text-xl font-bold text-dark-900 dark:text-white mb-4 flex items-center">
                <Users className="w-6 h-6 text-primary-600 mr-2" />
                Competencias Blandas
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center text-dark-600 dark:text-dark-300">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Resolución de problemas y pensamiento analítico
                </li>
                <li className="flex items-center text-dark-600 dark:text-dark-300">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Adaptabilidad y aprendizaje continuo
                </li>
                <li className="flex items-center text-dark-600 dark:text-dark-300">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Trabajo colaborativo en entornos multidisciplinarios
                </li>
                <li className="flex items-center text-dark-600 dark:text-dark-300">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Proactividad y orientación a resultados
                </li>
                <li className="flex items-center text-dark-600 dark:text-dark-300">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Comunicación efectiva y liderazgo técnico
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para trabajar juntos?
            </h3>
            <p className="text-primary-100 mb-6">
              Busco oportunidades en empresas tecnológicas líderes para aplicar mis conocimientos 
              y contribuir al éxito de proyectos innovadores.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
            >
              Hablemos
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
