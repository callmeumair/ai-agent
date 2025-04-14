'use client'

import { FaRobot, FaBrain, FaChartLine, FaShieldAlt } from 'react-icons/fa'

const features = [
  {
    icon: <FaRobot className="text-4xl text-primary" />,
    title: 'Advanced AI Models',
    description: 'Access state-of-the-art AI models for various applications and use cases.',
  },
  {
    icon: <FaBrain className="text-4xl text-primary" />,
    title: 'Custom Solutions',
    description: 'Tailor AI solutions to your specific business needs and requirements.',
  },
  {
    icon: <FaChartLine className="text-4xl text-primary" />,
    title: 'Performance Analytics',
    description: 'Monitor and analyze AI performance with detailed metrics and insights.',
  },
  {
    icon: <FaShieldAlt className="text-4xl text-primary" />,
    title: 'Enterprise Security',
    description: 'Enterprise-grade security and compliance for your AI applications.',
  },
]

export default function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 