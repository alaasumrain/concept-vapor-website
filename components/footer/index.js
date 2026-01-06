import cn from 'clsx'
import { Button } from 'components/button'
import { Link } from 'components/link'
import dynamic from 'next/dynamic'
import s from './footer.module.scss'
import { navigation } from 'content/navigation'

const Message = dynamic(() => import('icons/message.svg'), { ssr: false })

export const Footer = () => {
  const { footer } = navigation

  return (
    <footer className={cn('theme-light', s.footer)}>
      <div className={cn(s.top, 'layout-grid hide-on-mobile')}>
        <Button
          className={s.cta}
          arrow
          icon={<Message />}
          href="/contact"
        >
          Get in touch
        </Button>
      </div>
      <div className={cn(s.top, 'layout-block hide-on-desktop')}>
      </div>
      <div className={s.bottom}>
        <div className={s.links}>
          {navigation.links.filter(link => !link.dropdown).map(link => (
            <Link
              key={link.href}
              className={cn(s.link, 'p-xs')}
              href={link.href}
            >
              {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
            </Link>
          ))}
        </div>
        <p className={cn('p-xs', s.tm)}>
          <span>©</span> {new Date().getFullYear()} {footer.text}
        </p>
        <p className={cn('p-xs', s.developer)}>
          Developed by{' '}
          <Link href={footer.developedBy.href} className={s.developerLink}>
            {footer.developedBy.label}
          </Link>
        </p>
        <Button
          className={cn(s.cta, 'hide-on-desktop')}
          arrow
          icon={<Message />}
          href="/contact"
        >
          Get in touch
        </Button>
      </div>
    </footer>
  )
}
