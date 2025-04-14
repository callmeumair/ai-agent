import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Agent Platform',
  description: 'A platform for AI-powered solutions to real-world problems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="min-h-screen bg-black">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
} 