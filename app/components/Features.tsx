'use client'

import { FaRobot, FaBrain, FaChartLine, FaShieldAlt, FaCode, FaServer, FaComments } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    icon: <FaCode className="text-4xl text-primary" />,
    title: 'Code when you need it, UI when you don\'t',
    description: 'Write JavaScript or Python, add libraries from npm or Python, paste cURL requests, and merge workflow branches.',
  },
  {
    icon: <FaServer className="text-4xl text-primary" />,
    title: 'Self-host everything',
    description: 'Protect your data by deploying on-prem. Deploy with Docker, access the entire source code on GitHub.',
  },
  {
    icon: <FaComments className="text-4xl text-primary" />,
    title: 'Chat with your own data',
    description: 'Use Slack, Teams, SMS, voice, or our embedded chat interface to get accurate answers from your data.',
  },
  {
    icon: <FaRobot className="text-4xl text-primary" />,
    title: 'Build multi-step agents',
    description: 'Create agentic systems on a single screen. Integrate any LLM into your workflows as fast as you can drag-n-drop.',
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
    <section className="py-20 bg-gray-50">
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
          The fast way to actually get AI working in your business
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 p-4 bg-primary/10 rounded-full"
                >
                  {feature.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Enterprise-ready</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Secure. Reliable. Collaborative. Remove inefficiencies across your org by rolling out automation as reliably as you deploy code.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-2 text-gray-900">Security</h4>
              <p className="text-gray-600">Fully on-prem option, SSO SAML, and LDAP, encrypted secret stores, version control, advanced RBAC permissions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-2 text-gray-900">Performance</h4>
              <p className="text-gray-600">Audit logs & log streaming to 3rd party, workflow history, custom variables, external storage.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-2 text-gray-900">Collaboration</h4>
              <p className="text-gray-600">Git Control, isolated environments, multi-user workflows.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
} 