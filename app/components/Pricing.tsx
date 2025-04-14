'use client'

import { FaCheck } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const plans = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      features: [
        'Access to AI Agent Platform',
        'Basic Chat Functionality',
        'Standard Response Time',
        'Email Support',
        '5 Projects',
      ],
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$79',
      period: '/month',
      features: [
        'Everything in Basic',
        'Advanced AI Features',
        'Priority Response Time',
        'Priority Support',
        'Unlimited Projects',
        'Custom Integrations',
        'Analytics Dashboard',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Everything in Pro',
        'Dedicated Account Manager',
        'Custom AI Model Training',
        'SLA Agreement',
        'API Access',
        'Advanced Security',
        'Custom Reporting',
      ],
      highlighted: false,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your needs. All plans include our core AI features
            with different levels of support and capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`bg-white rounded-lg shadow-lg p-8 ${
                plan.highlighted
                  ? 'border-2 border-primary relative transform scale-105'
                  : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-white text-sm font-semibold py-1 px-4 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-dark mb-4">{plan.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                    className="flex items-center text-gray-600"
                  >
                    <FaCheck className="text-primary mr-2" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'bg-gray-100 text-primary hover:bg-gray-200'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 