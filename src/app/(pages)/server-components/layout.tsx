import type { Metadata } from 'next'
import React, { ReactNode } from 'react'
import { Navigation } from '@/components'
import { subNavigation } from '@/configuration/navigation'

export const metadata: Metadata = {
  title: 'Server Components',
}

export default function ApiDataRootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <h2>Server Components</h2>
      <Navigation tabs={subNavigation.serverComponent} navType={'secondary'} />
      {children}
    </>
  )
}
