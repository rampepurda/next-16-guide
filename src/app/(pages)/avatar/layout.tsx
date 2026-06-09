import React, { ReactNode } from 'react'
import { Navigation } from '@/components'

const navSecondary = [{ title: 'Avatar-role', href: '/avatar/role' }]

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <hr />
      <Navigation tabs={navSecondary} />

      {children}
    </>
  )
}
