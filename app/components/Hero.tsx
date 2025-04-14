'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { FaArrowRight, FaGithub } from 'react-icons/fa'
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
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <span className="flex items-center gap-2">
              <FaGithub className="text-lg" />
              <span>80.5k+ stars on GitHub</span>
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Flexible AI workflow automation for{' '}
            <span className="text-primary">technical teams</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
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
                className="group bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
              >
                Go to Dashboard
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight />
                </motion.span>
              </Link>
            ) : (
              <>
                <Link
                  href="/signup"
                  className="group bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
                >
                  Get Started
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </Link>
                <Link
                  href="/demo"
                  className="group border-2 border-primary bg-transparent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Talk to Sales
                </Link>
              </>
            )}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-center gap-4 items-center text-gray-500 text-sm"
          >
            <span>Trusted by leading companies</span>
            <div className="flex items-center gap-6">
              <img src="/cisco.svg" alt="Cisco" className="h-6 opacity-50" />
              <img src="/microsoft.svg" alt="Microsoft" className="h-6 opacity-50" />
              <img src="/twilio.svg" alt="Twilio" className="h-6 opacity-50" />
              <img src="/zendesk.svg" alt="Zendesk" className="h-6 opacity-50" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>
    </section>
  )
} 