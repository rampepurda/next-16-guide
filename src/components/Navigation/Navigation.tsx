'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classes from './Navigation.module.scss'
import { ReactNode } from 'react'
import classNames from 'classnames'

type NavigationProps = {
  classesName?: string
  navType?: 'primary' | 'secondary'
  children?: ReactNode
  tabs: {
    link: string
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

  return (
    <nav>
      <ul
        className={classNames(
          classesName,
          navType === 'secondary' ? classes.isNavSecondary : classes.isNavPrimary
        )}
      >
        {navType === 'primary' && (
          <li>
            <Link href="/">
              <h4>Next16 Guide</h4>
            </Link>
          </li>
        )}

        {tabs.map((tab, idx: number) => (
          <li key={idx}>
            <Link
              className={classNames(pathname.startsWith(tab.link, 0) && 'isActive')}
              href={tab.link}
            >
              {tab.title}
            </Link>
            {children}
          </li>
        ))}
      </ul>
    </nav>
  )
}
