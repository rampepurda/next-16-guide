'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classes from './Navigation.module.scss'
import { ReactNode, useCallback } from 'react'

type NavigationProps = {
  children?: ReactNode
  tabs: {
    href: string
    title: string
  }[]
}

export const Navigation = ({ tabs, children }: NavigationProps) => {
  const pathname = usePathname()

  const isActiveLink = useCallback(
    (href: string) => {
      if (pathname === href) {
        return true
      }
    },
    [pathname]
  )

  return (
    <nav>
      <ul>
        {tabs.map((tab, idx: number) => (
          <li key={idx}>
            <Link className={isActiveLink(tab.href) ? classes.isActive : ''} href={tab.href}>
              {tab.title}
            </Link>
            {children}
          </li>
        ))}
      </ul>
    </nav>
  )
}

/*
export const isNavLinkActive = (currentPath: string, url: string, isMain: boolean): boolean => {
  const urlPath = url.split(RegExp(/^\/([a-zA-Z0-9]+)/)).filter(Boolean)
  // Check between Main and Sub navigation
  if (!isMain) return currentPath === url

  return currentPath.startsWith(`/${urlPath[0]}`)
}
 */
