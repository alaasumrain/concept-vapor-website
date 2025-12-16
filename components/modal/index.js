import { Button } from 'components/button'
import s from './modal.module.scss'
import cn from 'clsx'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useStore } from 'lib/store'

const Message = dynamic(() => import('icons/message.svg'), { ssr: false })

export function Modal() {
  const [active, setActive] = useState(false)

  const lenis = useStore(({ lenis }) => lenis)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActive(true)
    }, 10000)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (!lenis) return

    if (active) {
      lenis.stop()
    } else {
      lenis.start()
    }
  }, [active])

  return (
    <div
      className={cn(
        s.modal,
        'layout-grid-inner theme-light',
        active && s.active
      )}
      onClick={() => setActive(false)}
    >
      <div className={s.content} onClick={(e) => e.stopPropagation()}>
        <button className={s.close} onClick={() => setActive(false)}></button>
        <div className={cn(s.text, 'p')}>
          <p>
            Concept Vapor Solutions is a leading manufacturer specializing in
            premium vapor products and innovative solutions. 🚀
            <br />
            We're always looking to partner with brands and businesses.
          </p>
          <br />
          <p>
            Interested in manufacturing partnerships, collaborations, or custom
            solutions? Let's discuss how we can work together! 💙
            <br />Get in touch with our team to explore opportunities. 🙌
          </p>
        </div>
        <Button
          className={cn(s.cta)}
          arrow
          icon={<Message />}
          href="/contact"
        >
          Get in touch
        </Button>
      </div>
    </div>
  )
}
