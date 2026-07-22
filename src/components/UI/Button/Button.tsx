import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import classNames from 'classnames'

type Props = ComponentPropsWithoutRef<'button'> &
  PropsWithChildren<{
    classesNames?: string
    title?: string
    variant?: 'edit' | 'info' | 'primary' | 'remove' | 'submit' | 'outline' | 'toggle' | 'link'
  }>

export const Button = ({
  children,
  classesNames,
  variant,
  title,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <button className={classNames('btn', `btn-${variant}`, classesNames)} {...rest}>
      {title}
      {children}
    </button>
  )
}
