import cn from 'clsx'
import { Button } from 'components/button'
import { Link } from 'components/link'
import dynamic from 'next/dynamic'
import s from './footer.module.scss'

const Message = dynamic(() => import('icons/message.svg'), { ssr: false })

export const Footer = () => {
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
          <Link
            className={cn(s.link, 'p-xs')}
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className={cn(s.link, 'p-xs')}
            href="/about"
          >
            About
          </Link>
          <Link
            className={cn(s.link, 'p-xs')}
            href="/products"
          >
            Products
          </Link>
          <Link className={cn(s.link, 'p-xs')} href="/facility">
            Facility
          </Link>
        </div>
        <p className={cn('p-xs', s.tm)}>
          <span>©</span> {new Date().getFullYear()} Concept Vapor Solutions
        </p>
        <p className={cn('p-xs', s.developer)}>
          Developed by{' '}
          <Link href="https://sumrain.ai" className={s.developerLink}>
            Sumrain Technologies
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
