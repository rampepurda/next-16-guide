'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classes from './Navigation.module.scss'
import { ReactNode, useCallback } from 'react'
import classNames from 'classnames'

type NavigationProps = {
  classesName?: string
  navType?: 'primary' | 'secondary'
  children?: ReactNode
  tabs: {
    href: string
    title: string
  }[]
}

export const Navigation = ({
  classesName,
  navType = 'primary',
  tabs,
  children,
}: NavigationProps) => {
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
      <ul
        className={classNames(
          classesName,
          navType === 'secondary' ? classes.isNavSecondary : classes.isNavPrimary
        )}
      >
        {tabs.map((tab, idx: number) => (
          <li key={idx}>
            <Link className={isActiveLink(tab.href) ? 'isActive' : ''} href={tab.href}>
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
