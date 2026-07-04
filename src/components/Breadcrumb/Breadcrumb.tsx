'use client'

import classes from './Breadcrumb.module.scss'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Breadcrumb = () => {
  const path = usePathname()
  const breadCrumbs: string[] = path.split('/')

  return (
    <>
      {breadCrumbs.length > 2 && (
        <nav className={classes.breadcrumbBox} aria-label="breadcrumb">
          <ul>
            {breadCrumbs.map((breadCrumb, idx: number) => (
              <li className="display-inline" key={idx}>
                {breadCrumbs.length !== idx + 1 ? (
                  <Link href={`/${breadCrumbs[idx]}`} role="button">
                    {breadCrumb}/
                  </Link>
                ) : (
                  <span className={classes.breadcrumbBox__isSelected}>{breadCrumb}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}
