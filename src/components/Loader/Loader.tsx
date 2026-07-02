import IcoLoader from './c-grid-loader.svg'
import classNames from 'classnames'
import { PropsWithChildren } from 'react'
import Image from 'next/image'

type LoaderProps = PropsWithChildren<{
  className?: string
}>

export const Loader = ({ className, children }: LoaderProps) => {
  return (
    <div className={classNames('isLoaderDark', className)}>
      <Image src={IcoLoader} width={50} height={50} alt="loadingcontent" aria-hidden={true} />
      {children}
    </div>
  )
}
