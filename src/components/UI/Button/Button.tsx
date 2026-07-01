import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import classNames from 'classnames'

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren<{
    classesNames?: string
    title?: string
  }>
/**
 * @param isSearch: Default as false, case true input type='search' get another class attribute
 */

export const Button = ({ children, classesNames, title, ...rest }: PropsWithChildren<Props>) => {
  return (
    <button className={classNames('btn', classesNames)} {...rest}>
      {title}
      {children}
    </button>
  )
}
