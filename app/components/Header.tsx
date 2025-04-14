'use client'

import { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import { FaRobot, FaSignInAlt, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FaRobot className="text-primary text-2xl" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-dark"
            >
              AI Agent Platform
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.div className="flex space-x-6">
              {['Solutions', 'Features', 'Pricing', 'Contact'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-4"
            >
              {session ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => signOut()}
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <FaSignOutAlt />
                  <span>Sign Out</span>
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => signIn()}
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <FaSignInAlt />
                  <span>Sign In</span>
                </motion.button>
              )}
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-primary"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden py-4"
            >
              <motion.div className="flex flex-col space-y-4">
                {['Solutions', 'Features', 'Pricing', 'Contact'].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 4 }}
                    whileTap={{ x: 0 }}
                  >
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-primary transition-colors block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <motion.div className="pt-4 border-t border-gray-200">
                  {session ? (
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        signOut()
                        setIsMenuOpen(false)
                      }}
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                    >
                      <FaSignOutAlt />
                      <span>Sign Out</span>
                    </motion.button>
                  ) : (
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        signIn()
                        setIsMenuOpen(false)
                      }}
                      className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                    >
                      <FaSignInAlt />
                      <span>Sign In</span>
                    </motion.button>
                  )}
                </motion.div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
} 