'use client'

import { FaRobot, FaComment, FaImage, FaCode, FaServer, FaShieldAlt, FaChartLine } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const solutions = [
  {
    icon: <FaRobot className="text-4xl text-primary-light" />,
    title: 'IT Ops',
    description: 'On-board new employees and provision accounts',
    features: ['Automated account creation', 'Access management', 'Resource provisioning'],
  },
  {
    icon: <FaShieldAlt className="text-4xl text-primary-light" />,
    title: 'Sec Ops',
    description: 'Enrich security incident tickets',
    features: ['Automated threat detection', 'Incident response', 'Security monitoring'],
  },
  {
    icon: <FaServer className="text-4xl text-primary-light" />,
    title: 'Dev Ops',
    description: 'Convert natural language commands into API calls',
    features: ['CI/CD automation', 'Infrastructure as code', 'Deployment management'],
  },
  {
    icon: <FaChartLine className="text-4xl text-primary-light" />,
    title: 'Sales',
    description: 'Generate customer insights from grouped reviews',
    features: ['Customer analytics', 'Review analysis', 'Sales automation'],
  },
]

export default function Solutions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        >
          Use Cases
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-primary/30 shadow-lg hover:shadow-primary/10 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex flex-col md:flex-row gap-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 p-4 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors duration-300"
                >
                  {solution.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary-light transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{solution.description}</p>
                  <motion.ul
                    variants={containerVariants}
                    className="space-y-3"
                  >
                    {solution.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        variants={featureVariants}
                        className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-light rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                company: 'Delivery Hero',
                quote: "We've sped up our integration of data sources by 25X. It takes me 2 hours max to connect up APIs and transform the data we need.",
                author: 'Dennis Zahrt',
                role: 'Director of Global IT Service Delivery',
              },
              {
                company: 'The Stepstone Group',
                quote: "We have seen drastic efficiency improvements since we started using n8n. It's incredibly powerful, but also simple to use.",
                author: 'Luka Pilic',
                role: 'Marketplace Tech Lead',
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-primary/30 shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <h4 className="font-semibold mb-4 text-white group-hover:text-primary-light transition-colors duration-300">
                    {study.company}
                  </h4>
                  <p className="text-gray-400 mb-6 leading-relaxed italic">"{study.quote}"</p>
                  <div className="text-sm text-gray-500">
                    <p className="font-medium text-gray-400">{study.author}</p>
                    <p className="text-gray-500">{study.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
} 