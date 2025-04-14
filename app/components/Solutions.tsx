'use client'

import { FaRobot, FaComment, FaImage, FaCode, FaServer, FaShieldAlt, FaChartLine } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const solutions = [
  {
    icon: <FaRobot className="text-4xl text-primary" />,
    title: 'IT Ops',
    description: 'On-board new employees and provision accounts',
    features: ['Automated account creation', 'Access management', 'Resource provisioning'],
  },
  {
    icon: <FaShieldAlt className="text-4xl text-primary" />,
    title: 'Sec Ops',
    description: 'Enrich security incident tickets',
    features: ['Automated threat detection', 'Incident response', 'Security monitoring'],
  },
  {
    icon: <FaServer className="text-4xl text-primary" />,
    title: 'Dev Ops',
    description: 'Convert natural language commands into API calls',
    features: ['CI/CD automation', 'Infrastructure as code', 'Deployment management'],
  },
  {
    icon: <FaChartLine className="text-4xl text-primary" />,
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
    <section className="py-20 bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Use Cases
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 p-4 bg-primary/10 rounded-full"
                >
                  {solution.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <motion.ul
                    variants={containerVariants}
                    className="space-y-2"
                  >
                    {solution.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        variants={featureVariants}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
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
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-2 text-gray-900">Delivery Hero</h4>
              <p className="text-gray-600 mb-4">"We've sped up our integration of data sources by 25X. It takes me 2 hours max to connect up APIs and transform the data we need."</p>
              <p className="text-sm text-gray-500">Dennis Zahrt, Director of Global IT Service Delivery</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-2 text-gray-900">The Stepstone Group</h4>
              <p className="text-gray-600 mb-4">"We have seen drastic efficiency improvements since we started using n8n. It's incredibly powerful, but also simple to use."</p>
              <p className="text-sm text-gray-500">Luka Pilic, Marketplace Tech Lead</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
} 