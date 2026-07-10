import type { Metadata } from 'next'
import React, { ReactNode } from 'react'

import { Navigation } from '@/components'

import { subNavigation } from '@/configuration/navigation'

export const metadata: Metadata = {
  title: 'Next JS Functions',
}

export default function ApiDataRootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <h2>Api Reference - functions</h2>
      <Navigation tabs={subNavigation.functions} navType={'secondary'} />
      {children}
    </>
  )
}
