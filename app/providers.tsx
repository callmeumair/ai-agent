'use client'

import { SessionProvider } from 'next-auth/react'
import { LazyMotion, domAnimation } from 'framer-motion'
import React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <LazyMotion features={domAnimation}>
        {children}
      </LazyMotion>
    </SessionProvider>
  )
} 