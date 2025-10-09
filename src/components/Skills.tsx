import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Server, 
  Database, 
  Brain, 
  GitBranch,
  Shield
} from 'lucide-react'

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  // const skillCategories = [
  //   {
  //     title: 'Frontend Development',
  //     icon: Code,
  //     skills: [
  //       { name: 'HTML', level: 90 },
  //       { name: 'CSS', level: 85 },
  //       { name: 'JavaScript', level: 88 },
  //       { name: 'React', level: 85 },
  //       { name: 'Responsive Design', level: 80 }
  //     ]
  //   },
  //   {
  //     title: 'Backend Development',
  //     icon: Server,
  //     skills: [
  //       { name: 'Node.js', level: 85 },
  //       { name: 'Express.js', level: 80 },
  //       { name: 'JavaScript', level: 88 },
  //       { name: 'REST APIs', level: 75 }
  //     ]
  //   },
  //   {
  //     title: 'Bases de Datos',
  //     icon: Database,
  //     skills: [
  //       { name: 'MySQL', level: 80 },
  //       { name: 'MongoDB', level: 82 },
  //       { name: 'SQL Queries', level: 78 },
  //       { name: 'NoSQL', level: 75 }
  //     ]
  //   },
  //   {
  //     title: 'Data Science',
  //     icon: Brain,
  //     skills: [
  //       { name: 'Python', level: 85 },
  //       { name: 'Análisis de Datos', level: 80 },
  //       { name: 'Pensamiento Lógico', level: 90 },
  //       { name: 'Programación', level: 85 }
  //     ]
  //   },
  //   {
  //     title: 'Herramientas',
  //     icon: GitBranch,
  //     skills: [
  //       { name: 'Git', level: 85 },
  //       { name: 'GitHub', level: 88 },
  //       { name: 'VS Code', level: 90 },
  //       { name: 'Terminal', level: 75 }
  //     ]
  //   },
  //   {
  //     title: 'Metodologías',
  //     icon: Shield,
  //     skills: [
  //       { name: 'Trabajo en Equipo', level: 90 },
  //       { name: 'Enfoque Ágil', level: 80 },
  //       { name: 'Resolución de Problemas', level: 92 },
  //       { name: 'Aprendizaje Continuo', level: 95 }
  //     ]
  //   }
  // ]

  const technologies = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js',
    'Python', 'MySQL', 'MongoDB', 'Git', 'GitHub', 'VS Code',
    'REST APIs', 'Responsive Design', 'Agile', 'Problem Solving', 'Data Analysis'
  ]

  return (
    <section id="skills" className="py-20 px-8 bg-white dark:bg-dark-900">
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
            className="text-5xl md:text-6xl font-bold text-dark-900 dark:text-white mb-4"
          >
            Habilidades.
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-primary-600 mx-auto mb-8"
          ></motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-dark-900 dark:text-white mb-8"
            >
              Frontend
            </motion.h3>
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {['HTML', 'CSS', 'JavaScript', 'React'].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-100 dark:bg-dark-800 px-4 py-2 rounded-lg"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-dark-900 dark:text-white mb-8"
            >
              Backend
            </motion.h3>
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {['Node.js', 'Express.js', 'REST APIs', 'Python'].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-100 dark:bg-dark-800 px-4 py-2 rounded-lg"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-dark-900 dark:text-white mb-8"
            >
              Base de Datos
            </motion.h3>
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {['MySQL', 'MongoDB', 'SQL Queries', 'NoSQL'].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-100 dark:bg-dark-800 px-4 py-2 rounded-lg"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-dark-900 dark:text-white mb-8"
            >
              Herramientas
            </motion.h3>
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {['Git', 'GitHub', 'VS Code', 'Agile'].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-100 dark:bg-dark-800 px-4 py-2 rounded-lg"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Technologies Cloud */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-dark-900 dark:text-white mb-8"
          >
            Tecnologías & Herramientas
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className="px-4 py-2 bg-white dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-200 border border-dark-200 dark:border-dark-700"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
