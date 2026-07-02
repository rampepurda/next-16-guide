import type { Metadata } from 'next'
import React, { ReactNode } from 'react'

import { Navigation } from '@/components'

import { subNavigation } from '@/configuration/navigation'

export const metadata: Metadata = {
  title: 'Help and Notes',
}

export default function ApiDataRootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <h2>Poznámky a rady</h2>
      <Navigation tabs={subNavigation.helpNotes} navType={'secondary'} />
      {children}
    </>
  )
}
