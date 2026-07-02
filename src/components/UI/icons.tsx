import { SVGAttributes } from 'react'

/**
 * @type size | 'external' is ONLY for Component: External link
 */

type SizeT = 'small' | 'medium' | 'large' | 'external' | 'close'

type IconProps = SVGAttributes<SVGElement> & {
  size: SizeT
  className?: string
  hasTooltip?: boolean
  title?: string
}

const setSize = (size: SizeT) => {
  switch (size) {
    case 'small': {
      return 16
    }
    case 'medium': {
      return 32
    }
    case 'large': {
      return 64
    }
    case 'external': {
      return 22
    }
    case 'close': {
      return 22
    }
    default: {
      return 16
    }
  }
}

export const IconAdd = ({ className, size, hasTooltip = false, title, ...rest }: IconProps) => {
  return (
    <svg width={setSize(size)} height={setSize(size)} viewBox="0 0 512 512" {...rest}>
      {hasTooltip && <title id={title}>{title}</title>}

      <line
        x1="256"
        y1="112"
        x2="256"
        y2="400"
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32px',
        }}
      />
      <line
        x1="400"
        y1="256"
        x2="112"
        y2="256"
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32px',
        }}
      />
    </svg>
  )
}

export const IconArrow = ({ className, size, hasTooltip = false, title, ...rest }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={setSize(size)}
      width={setSize(size)}
      viewBox="0 0 256 256"
      {...rest}
    >
      {hasTooltip && <title id={title}>{title}</title>}

      <g
        style={{
          stroke: 'none',
          strokeWidth: '0',
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: '10',
          fillRule: 'nonzero',
          opacity: '1',
        }}
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <polygon
          points="45,69.52 0,30.25 8.52,20.48 45,52.31 81.48,20.48 90,30.25 "
          style={{
            stroke: 'none',
            strokeWidth: 1,
            strokeDasharray: 'none',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: '10',
            fillRule: 'nonzero',
            opacity: '1',
          }}
          transform="  matrix(1 0 0 1 0 0) "
        />
      </g>
    </svg>
  )
}

export const IconClose = ({ className, size, hasTooltip = false, title, ...rest }: IconProps) => {
  return (
    <svg
      className={className}
      height={setSize(size)}
      width={setSize(size)}
      viewBox="0 0 24 24"
      {...rest}
    >
      {hasTooltip && <title id={title}>{title}</title>}
      <path d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" />
    </svg>
  )
}

export const IconExternal = ({
  className,
  size,
  hasTooltip = false,
  title,
  ...rest
}: IconProps) => {
  return (
    <svg
      className={className}
      fill="#000"
      height={setSize(size)}
      width={setSize(size)}
      viewBox="0 0 32 32"
      aria-labelledby={title}
      {...rest}
    >
      {hasTooltip && <title id={title}>{title}</title>}

      <path d="m18 5v2h5.5625l-12.28125 12.28125 1.4375 1.4375 12.28125-12.28125v5.5625h2v-9zm-13 4v18h18v-13l-2 2v9h-14v-14h9l2-2z" />
    </svg>
  )
}

export const IconBurger = ({ className, hasTooltip = false, title, ...rest }: IconProps) => {
  return (
    <svg className={className} height="80" viewBox="0 0 72 72" width="80">
      {hasTooltip && <title id={title}>{title}</title>}
      <g
        style={{
          fill: 'none',
          stroke: '#fff',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
          strokeWidth: 2,
        }}
      >
        <path d="m16 26h40" />
        <path d="m16 36h40" />
        <path d="m16 46h40" />
      </g>
    </svg>
  )
}
export const IconFilter = ({ className, size, hasTooltip = false, title, ...rest }: IconProps) => {
  return (
    <svg
      className="svg-icon"
      height={setSize(size)}
      width={setSize(size)}
      viewBox="0 0 1024 1024"
      style={{
        verticalAlign: 'middle',
        fill: 'currentColor',
      }}
    >
      {hasTooltip && <title id={title}>{title}</title>}
      <path
        d="M640 288a64 64 0 1 1 0.032-128.032A64 64 0 0 1 640 288z m123.456-96c-14.304-55.04-64-96-123.456-96s-109.152 40.96-123.456 96H128v64h388.544c14.304 55.04 64 96 123.456 96s109.152-40.96 123.456-96H896V192h-132.544zM640 864a64 64 0 1 1 0.032-128.032A64 64 0 0 1 640 864m0-192c-59.456 0-109.152 40.96-123.456 96H128v64h388.544c14.304 55.04 64 96 123.456 96s109.152-40.96 123.456-96H896v-64h-132.544c-14.304-55.04-64-96-123.456-96M384 576a64 64 0 1 1 0.032-128.032A64 64 0 0 1 384 576m0-192c-59.456 0-109.152 40.96-123.456 96H128v64h132.544c14.304 55.04 64 96 123.456 96s109.152-40.96 123.456-96H896v-64H507.456c-14.304-55.04-64-96-123.456-96"
        fill="#181818"
      />
    </svg>
  )
}
