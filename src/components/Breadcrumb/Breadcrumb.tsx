'use client'

import classes from './Breadcrumb.module.scss'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Breadcrumb = () => {
  const path = usePathname()
  const pathArray: string[] = path.split('/')
  const breadCrumbs: string[] = pathArray.slice(1, pathArray.length)

  return (
    <>
      {breadCrumbs.length > 1 && (
        <nav className={classes.breadcrumbBox} aria-label="breadcrumb">
          <ul>
            {breadCrumbs.map((breadCrumb, idx: number) => (
              <li className="display-flex-inline" key={idx}>
                {breadCrumbs.length !== idx + 1 ? (
                  <>
                    <Link
                      href={`${idx === 0 ? `/${breadCrumbs[0]}` : `/${breadCrumbs[idx - 1]}/${breadCrumb}`}`}
                      role="button"
                    >
                      {breadCrumb}
                    </Link>
                    <svg
                      className={classes.breadcrumbBox__icoArrowRight}
                      viewBox="0 0 16 16"
                      height="16"
                      width="16"
                    >
                      <path
                        fill="gray"
                        d="m5.5 1.94.53.53 4.82 4.82a1 1 0 0 1 0 1.42l-4.82 4.82-.53.53L4.44 13l.53-.53L9.44 8 4.97 3.53 4.44 3z"
                      ></path>
                    </svg>
                  </>
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
