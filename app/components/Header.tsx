'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import { FaRobot, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <FaRobot className="text-primary text-2xl" />
            <span className="text-xl font-bold text-dark">AI Agent Platform</span>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link href="/solutions" className="text-gray-600 hover:text-primary">
              Solutions
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-primary">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-primary">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {session ? (
              <button
                onClick={() => signOut()}
                className="flex items-center space-x-2 text-gray-600 hover:text-primary"
              >
                <FaSignOutAlt />
                <span>Sign Out</span>
              </button>
            ) : (
              <button
                onClick={() => signIn()}
                className="flex items-center space-x-2 text-gray-600 hover:text-primary"
              >
                <FaSignInAlt />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
} 