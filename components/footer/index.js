import cn from 'clsx'
import { Button } from 'components/button'
import { Link } from 'components/link'
import s from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={cn('theme-light', s.footer)} id="contact">
      <div className={cn(s.top, 'layout-grid hide-on-mobile')}>
        <p className={cn(s['first-line'], 'h1')}>
          Let's build <br />
          <span className="contrast">together</span>
        </p>
        <p className={cn(s['last-line'], 'h1')}>
          Your vision, <span className="hide-on-desktop">&nbsp;</span> our{' '}
          <br /> expertise
        </p>
        <Button
          className={s.cta}
          arrow
          href="mailto:info@conceptvapor.com"
        >
          Get in touch
        </Button>
      </div>
      <div className={cn(s.top, 'layout-block hide-on-desktop')}>
        <p className={cn(s['first-line'], 'h1')}>
          Let's build <br />
          <span className="contrast">together</span>
          <br /> Your vision, <br /> our expertise
        </p>
      </div>
      <div className={s.bottom}>
        <div className={s.links}>
          <Link
            className={cn(s.link, 'p-xs')}
            href="mailto:info@conceptvapor.com"
          >
            info@conceptvapor.com
          </Link>
          <Link
            className={cn(s.link, 'p-xs')}
            href="https://www.linkedin.com/company/conceptvapor"
          >
            LinkedIn
          </Link>
          <span className={cn(s.link, 'p-xs')}>
            Jebel Ali Free Zone, Dubai, UAE
          </span>
        </div>
        <p className={cn('p-xs', s.tm)}>
          <span>©</span> {new Date().getFullYear()} Concept Vapor Solutions
        </p>
        <Button
          className={cn(s.cta, 'hide-on-desktop')}
          arrow
          href="mailto:info@conceptvapor.com"
        >
          Get in touch
        </Button>
      </div>
    </footer>
  )
}
