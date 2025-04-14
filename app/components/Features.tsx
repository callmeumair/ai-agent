'use client'

import { FaRobot, FaBrain, FaChartLine, FaShieldAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    icon: <FaRobot className="text-4xl text-primary" />,
    title: 'Advanced AI Models',
    description: 'Access state-of-the-art AI models for various applications and use cases.',
  },
  {
    icon: <FaBrain className="text-4xl text-primary" />,
    title: 'Custom Solutions',
    description: 'Tailor AI solutions to your specific business needs and requirements.',
  },
  {
    icon: <FaChartLine className="text-4xl text-primary" />,
    title: 'Performance Analytics',
    description: 'Monitor and analyze AI performance with detailed metrics and insights.',
  },
  {
    icon: <FaShieldAlt className="text-4xl text-primary" />,
    title: 'Enterprise Security',
    description: 'Enterprise-grade security and compliance for your AI applications.',
  },
]

export default function Features() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 bg-gray-50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 p-3 bg-primary bg-opacity-10 rounded-full"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 