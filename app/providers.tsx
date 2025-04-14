'use client'

import { SessionProvider } from 'next-auth/react'
import { LazyMotion, domAnimation, AnimatePresence } from 'framer-motion'
import React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <LazyMotion features={domAnimation} strict>
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </LazyMotion>
    </SessionProvider>
  )
} 