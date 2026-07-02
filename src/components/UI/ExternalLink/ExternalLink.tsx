import { IconExternal } from '../icons'
import classes from './ExtLink.module.scss'

type ExternalLinkProps = { url: string; title: string; hasTooltip?: boolean; tooltip?: string }

export const ExternalLink = ({ url, title, hasTooltip = false, tooltip }: ExternalLinkProps) => {
  return (
    <a className={classes.extLinkBox} href={url} rel="noreferrer" target="_blank">
      {title}
      <IconExternal
        size={'external'}
        hasTooltip={hasTooltip}
        title={tooltip}
        aria-hidden={true}
        aria-label="ExternalLink"
      />
    </a>
  )
}
