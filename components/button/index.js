import cn from 'clsx'
import { Link } from 'components/link'
import dynamic from 'next/dynamic'
import s from './button.module.scss'

const Arrow = dynamic(() => import('icons/arrow-buttons.svg'), { ssr: false })

export const Button = ({
  icon,
  arrow,
  children,
  href,
  onClick,
  className,
  style,
  glossy = false,
}) => {
  const content = (
    <>
      {icon && <span className={s.icon}>{icon}</span>}
      <span className={s.text}>
        <span className={s.visible}>
          {children} {arrow && <Arrow className={s.arrow} />}
        </span>
        <span aria-hidden="true" className={s.hidden}>
          {children} {arrow && <Arrow className={s.arrow} />}
        </span>
      </span>
    </>
  )

  const buttonClass = cn(
    s.button,
    className,
    icon && s['has-icon'],
    glossy && s.glossy
  )

  return href ? (
    <Link href={href} className={buttonClass} style={style}>
      {content}
    </Link>
  ) : (
    <button className={buttonClass} style={style} onClick={onClick}>
      {content}
    </button>
  )
}
