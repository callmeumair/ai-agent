'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { FaArrowRight, FaGithub, FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Hero() {
  const { data: session } = useSession()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-primary/20 transition-colors duration-300"
          >
            <FaGithub className="text-lg" />
            <span>80.5k+ stars on GitHub</span>
            <FaStar className="text-yellow-400" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary"
          >
            Flexible AI workflow automation for{' '}
            <span className="relative">
              technical teams
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Build with the precision of code or the speed of drag-n-drop. Host with on-prem control or in-the-cloud convenience.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
          >
            {session ? (
              <Link
                href="/dashboard"
                className="group relative bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center">
                  Go to Dashboard
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ) : (
              <>
                <Link
                  href="/signup"
                  className="group relative bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <motion.span
                      className="inline-block ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  href="/demo"
                  className="group relative border-2 border-primary bg-transparent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <span className="relative z-10">Talk to Sales</span>
                  <div className="absolute inset-0 bg-primary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </>
            )}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col items-center gap-6"
          >
            <span className="text-sm text-gray-500 uppercase tracking-wider">Trusted by leading companies</span>
            <div className="flex items-center gap-8 md:gap-12">
              {['cisco', 'microsoft', 'twilio', 'zendesk'].map((company) => (
                <motion.img
                  key={company}
                  src={`/${company}.svg`}
                  alt={company}
                  className="h-6 opacity-50 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 