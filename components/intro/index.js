import { useMediaQuery } from '@darkroom.engineering/hamo'
import { Image } from 'components/image'
import cn from 'clsx'
import { useStore } from 'lib/store'
import { useEffect, useState } from 'react'
import s from './intro.module.scss'

export const Intro = () => {
  const isMobile = useMediaQuery('(max-width: 800px)')
  const [isLoaded, setIsLoaded] = useState(false)
  const [scroll, setScroll] = useState(false)
  const setIntroOut = useStore(({ setIntroOut }) => setIntroOut)
  const lenis = useStore(({ lenis }) => lenis)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 300)
  }, [])

  useEffect(() => {
    if (isMobile) {
      lenis.start()
      document.documentElement.classList.toggle('intro', false)
      return
    }

    if (!scroll) {
      document.documentElement.classList.toggle('intro', true)
    }

    if (!lenis) return
    if (scroll) {
      lenis.start()
      document.documentElement.classList.toggle('intro', false)
    } else {
      setTimeout(() => {
        lenis.stop()
      }, 0)

      document.documentElement.classList.toggle('intro', true)
    }
  }, [scroll, lenis, isMobile])

  return (
    <div
      className={cn(s.wrapper, isLoaded && s.out)}
      onTransitionEnd={(e) => {
        e.target.classList.forEach((value) => {
          if (value.includes('out')) {
            setScroll(true)
          }
          if (value.includes('show')) {
            setIntroOut(true)
          }
        })
      }}
    >
      <div className={cn(isLoaded && s.relative)}>
        <LNS isLoaded={isLoaded} fill={'var(--black)'} />
      </div>
    </div>
  )
}

export const Title = ({ className }) => {
  return (
    <div className={className}>
      <LNS fill={'var(--pink)'} />
    </div>
  )
}

const LNS = ({ isLoaded, className }) => {
  return (
    <div className={cn(s.lns, className)}>
      <div
        className={cn(s.start, isLoaded && s.show)}
        style={{ '--index': 1, width: '100%', height: '100%', position: 'relative' }}
      >
        <Image
          src="/images/concept-vapor-logo.png"
          alt="Concept Vapor Solutions"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  )
}
