'use client'

import { FaRobot, FaComment, FaImage, FaCode } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const solutions = [
  {
    icon: <FaRobot className="text-4xl text-primary" />,
    title: 'AI Chatbots',
    description: 'Intelligent chatbots for customer support and engagement.',
    features: ['Natural Language Processing', '24/7 Availability', 'Multi-language Support'],
  },
  {
    icon: <FaComment className="text-4xl text-primary" />,
    title: 'Text Analysis',
    description: 'Advanced text analysis for sentiment and content understanding.',
    features: ['Sentiment Analysis', 'Content Classification', 'Entity Recognition'],
  },
  {
    icon: <FaImage className="text-4xl text-primary" />,
    title: 'Computer Vision',
    description: 'Image and video analysis for various applications.',
    features: ['Object Detection', 'Facial Recognition', 'Scene Understanding'],
  },
  {
    icon: <FaCode className="text-4xl text-primary" />,
    title: 'Code Generation',
    description: 'AI-powered code generation and assistance.',
    features: ['Code Completion', 'Bug Detection', 'Documentation Generation'],
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
    <section className="py-16 bg-white">
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
          AI Solutions
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 p-4 bg-primary bg-opacity-10 rounded-full"
                >
                  {solution.icon}
                </motion.div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <motion.ul
                    variants={containerVariants}
                    className="space-y-2"
                  >
                    {solution.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        variants={featureVariants}
                        className="flex items-center text-gray-700"
                      >
                        <motion.span
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 1,
                          }}
                          className="text-primary mr-2 text-lg"
                        >
                          •
                        </motion.span>
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 