'use client'

import { FaRobot, FaComment, FaImage, FaCode } from 'react-icons/fa'

const solutions = [
  {
    icon: <FaRobot className="text-4xl text-primary" />,
    title: 'AI Chatbots',
    description: 'Intelligent chatbots for customer support and engagement.',
    features: ['Natural Language Processing', '24/7 Availability', 'Multi-language Support'],
  },
  {
    icon: <FaComment className="text-4xl text-primary" />,
    title: 'Text Analysis',
    description: 'Advanced text analysis for sentiment and content understanding.',
    features: ['Sentiment Analysis', 'Content Classification', 'Entity Recognition'],
  },
  {
    icon: <FaImage className="text-4xl text-primary" />,
    title: 'Computer Vision',
    description: 'Image and video analysis for various applications.',
    features: ['Object Detection', 'Facial Recognition', 'Scene Understanding'],
  },
  {
    icon: <FaCode className="text-4xl text-primary" />,
    title: 'Code Generation',
    description: 'AI-powered code generation and assistance.',
    features: ['Code Completion', 'Bug Detection', 'Documentation Generation'],
  },
]

export default function Solutions() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{solution.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 