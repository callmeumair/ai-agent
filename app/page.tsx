'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Solutions from './components/Solutions'
import Footer from './components/Footer'

export default function Home() {
  const { data: session } = useSession()
  const [activeTab, setActiveTab] = useState('solutions')

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <div className="flex space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'solutions'
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveTab('solutions')}
          >
            AI Solutions
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'features'
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
        </div>
        {activeTab === 'solutions' ? <Solutions /> : <Features />}
      </div>
      <Footer />
    </main>
  )
} 