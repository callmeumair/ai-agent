'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  const { data: session } = useSession()

  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI-Powered Solutions for Real-World Problems
          </h1>
          <p className="text-xl mb-8">
            Leverage cutting-edge AI technology to solve complex challenges and transform your business
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {session ? (
              <Link
                href="/dashboard"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center"
              >
                Go to Dashboard
                <FaArrowRight className="ml-2" />
              </Link>
            ) : (
              <>
                <Link
                  href="/signup"
                  className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center"
                >
                  Get Started
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link
                  href="/demo"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition flex items-center justify-center"
                >
                  Request Demo
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 