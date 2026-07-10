import type { Metadata } from 'next'
import React, { ReactNode } from 'react'
import { Navigation } from '@/components'
import { subNavigation } from '@/configuration/navigation'

export const metadata: Metadata = {
  title: 'Client Components',
}

export default function ApiDataRootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <h2>Client Components</h2>
      <Navigation tabs={subNavigation.clientComponent} navType={'secondary'} />
      {children}
    </>
  )
}
