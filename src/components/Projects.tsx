import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Star, Play, Code, BookOpen } from 'lucide-react'

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: 'Tienda de Ropa Infantil - E-commerce Completo',
      description: 'Plataforma de comercio electrónico desarrollada para negocio familiar especializado en ropa para niños, niñas y bebés.',
      longDescription: 'Desarrollé una tienda online completa utilizando React y tecnologías modernas, implementando funcionalidades como catálogo de productos, carrito de compras, sistema de filtros, diseño responsive y optimización para móviles. La aplicación está optimizada para conversión y experiencia de usuario.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Responsive Design', 'E-commerce'],
      category: 'Frontend + E-commerce',
      features: [
        'Catálogo completo de productos con filtros avanzados',
        'Carrito de compras funcional y persistente',
        'Diseño responsive optimizado para móviles',
        'Interfaz intuitiva y atractiva para familias',
        'Sistema de categorías (niños, niñas, bebés)',
        'Optimización para conversión y ventas'
      ],
      github: 'https://github.com/nicoalvarez08/tienda-ropa-infantil',
      demo: 'https://golden-dasik-af0931.netlify.app/',
      status: 'En Producción',
      impact: 'Tienda online funcional para negocio familiar'
    },
    {
      title: 'Dashboard de Analytics Empresarial',
      description: 'Panel de control completo con visualización de datos en tiempo real, métricas empresariales y gráficos interactivos.',
      longDescription: 'Desarrollé un dashboard de analytics profesional utilizando React y librerías de visualización de datos, implementando funcionalidades como gráficos interactivos, métricas en tiempo real, filtros avanzados y diseño responsive. El dashboard permite análisis profundo de datos empresariales con una interfaz intuitiva.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Chart.js', 'JavaScript', 'CSS3', 'Data Visualization', 'Analytics'],
      category: 'Frontend + Analytics',
      features: [
        'Gráficos interactivos y visualizaciones en tiempo real',
        'Métricas y KPIs empresariales',
        'Filtros avanzados por fecha y categorías',
        'Dashboard responsive y optimizado',
        'Interfaz intuitiva para toma de decisiones',
        'Exportación de reportes y datos'
      ],
      github: 'https://github.com/nicoalvarez08/dashboard-analytics',
      demo: 'https://dashboard-analytics-nicoalvarez08.netlify.app/dashboard/analytics',
      status: 'Funcional',
      impact: 'Dashboard profesional para análisis de datos'
    },
    {
      title: 'Plataforma de Análisis de Datos Financieros',
      description: 'Herramienta especializada para análisis de mercados financieros con visualizaciones interactivas y predicciones.',
      longDescription: 'Desarrollé una plataforma completa para análisis de datos financieros que integra múltiples fuentes de datos, implementa algoritmos de análisis técnico y proporciona visualizaciones interactivas. Incluye sistema de alertas personalizadas y reportes automatizados.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'Pandas', 'NumPy', 'D3.js', 'FastAPI', 'PostgreSQL'],
      category: 'Data Science + Frontend',
      features: [
        'Análisis técnico avanzado con indicadores personalizados',
        'Visualizaciones interactivas con D3.js',
        'Sistema de alertas basado en ML',
        'API para integración con brokers',
        'Dashboard de riesgo en tiempo real',
        'Reportes automatizados en PDF'
      ],
      github: 'https://github.com/nicolas-alvarez-dev/financial-analytics-platform',
      demo: 'https://financial-analytics-demo.vercel.app',
      status: 'Beta Testing',
      impact: 'Precisión del 94% en predicciones de mercado'
    }
  ]

  // const categories = ['Todos', 'Full Stack', 'Full Stack + Data Science', 'Data Science', 'Backend', 'Frontend']

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-dark-50 to-white dark:from-dark-800 dark:to-dark-900">
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
            Proyectos Destacados
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto"
          >
            Proyectos que demuestran mi experiencia en desarrollo full stack y ciencia de datos, 
            combinando tecnologías modernas para crear soluciones innovadoras.
          </motion.p>
        </motion.div>

        {/* Project Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { number: '3+', label: 'Proyectos Enterprise' },
            { number: '95%', label: 'Satisfacción Técnica' },
            { number: '35%', label: 'Mejora de Performance' },
            { number: 'MERN+AI', label: 'Stack Avanzado' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
              <div className="text-sm text-dark-600 dark:text-dark-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{project.title.split(' ')[0]}</div>
                    <div className="text-sm opacity-90">{project.category}</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Production' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-yellow-500 ml-2">
                    <Star size={16} className="fill-current" />
                    <span className="ml-1 text-sm font-medium">4.9</span>
                  </div>
                </div>

                <p className="text-dark-600 dark:text-dark-300 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-dark-900 dark:text-white mb-2">Características:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-dark-600 dark:text-dark-300 flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-sm text-primary-600 font-medium">
                        +{project.features.length - 3} más...
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 text-xs font-medium rounded">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-sm font-medium text-green-800 dark:text-green-400">
                    💡 Impacto: {project.impact}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 min-w-[120px] bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Play size={16} className="mr-2" />
                    Ver Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 min-w-[120px] bg-dark-100 dark:bg-dark-700 hover:bg-dark-200 dark:hover:bg-dark-600 text-dark-700 dark:text-dark-300 py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Code size={16} className="mr-2" />
                    Ver Código
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 min-w-[120px] bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 text-green-700 dark:text-green-300 py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <BookOpen size={16} className="mr-2" />
                    Documentación
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">
              ¿Te interesa ver más proyectos?
            </h3>
            <p className="text-primary-100 mb-6">
              Visita mi GitHub para explorar todos mis proyectos y contribuciones.
            </p>
            <a
              href="https://github.com/nicoalvarez08"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Github size={20} className="mr-2" />
              Ver en GitHub
              <ArrowRight size={20} className="ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
