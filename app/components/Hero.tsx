'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
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
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            AI-Powered Solutions for{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
              Real-World Problems
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto"
          >
            Leverage cutting-edge AI technology to solve complex challenges and transform your business
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
          >
            {session ? (
              <Link
                href="/dashboard"
                className="group bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
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
                  className="group bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
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
                  className="group border-2 border-white bg-transparent px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Request Demo
                </Link>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 0L48 8.875C96 17.75 192 35.5 288 42.375C384 49.25 480 45.125 576 37.875C672 30.625 768 20.25 864 22.75C960 25.25 1056 40.625 1152 45.125C1248 49.625 1344 43.25 1392 40.0625L1440 36.875V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
            fill="white"
            animate={{
              d: [
                "M0 0L48 8.875C96 17.75 192 35.5 288 42.375C384 49.25 480 45.125 576 37.875C672 30.625 768 20.25 864 22.75C960 25.25 1056 40.625 1152 45.125C1248 49.625 1344 43.25 1392 40.0625L1440 36.875V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z",
                "M0 20L48 28.875C96 37.75 192 55.5 288 62.375C384 69.25 480 65.125 576 57.875C672 50.625 768 40.25 864 42.75C960 45.25 1056 60.625 1152 65.125C1248 69.625 1344 63.25 1392 60.0625L1440 56.875V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V20Z",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      </div>
    </section>
  )
} 