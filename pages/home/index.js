import { useRect } from '@darkroom.engineering/hamo'
import cn from 'clsx'

import { Button } from 'components/button'
import { Card } from 'components/card'
import { Image } from 'components/image'
import { Title } from 'components/intro'
import { Link } from 'components/link'
import { ListItem } from 'components/list-item'
import { projects } from 'content/projects'
import { useScroll } from 'hooks/use-scroll'
import { Layout } from 'layouts/default'
import { button, useControls } from 'leva'
import { clamp, mapRange } from 'lib/maths'
import { useStore } from 'lib/store'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { useIntersection, useWindowSize } from 'react-use'
import s from './home.module.scss'

// const SFDR = dynamic(() => import('icons/sfdr.svg'), { ssr: false })
const Sponsor = dynamic(() => import('icons/sponsor.svg'), { ssr: false })
const ArrowRight = dynamic(() => import('icons/arrow-right.svg'), { ssr: false })

const Parallax = dynamic(
  () => import('components/parallax').then((mod) => mod.Parallax),
  { ssr: false }
)

const AppearTitle = dynamic(
  () => import('components/appear-title').then((mod) => mod.AppearTitle),
  { ssr: false }
)

const HorizontalSlides = dynamic(
  () =>
    import('components/horizontal-slides').then((mod) => mod.HorizontalSlides),
  { ssr: false }
)

const FeatureCards = dynamic(
  () => import('components/feature-cards').then((mod) => mod.FeatureCards),
  { ssr: false }
)

const WebGL = dynamic(
  () => import('components/webgl').then(({ WebGL }) => WebGL),
  { ssr: false }
)

const HeroTextIn = ({ children, introOut }) => {
  return (
    <div className={cn(s['hide-text'], introOut && s['show-text'])}>
      {children}
    </div>
  )
}

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
  window.scrollTo(0, 0)
}

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState()
  const zoomRef = useRef(null)
  const [zoomWrapperRectRef, zoomWrapperRect] = useRect()
  const { height: windowHeight } = useWindowSize()
  const introOut = useStore(({ introOut }) => introOut)

  const [theme, setTheme] = useState('dark')
  const lenis = useStore(({ lenis }) => lenis)

  useControls(
    'lenis',
    () => ({
      stop: button(() => {
        lenis.stop()
      }),
      start: button(() => {
        lenis.start()
      }),
    }),
    [lenis]
  )

  useControls(
    'scrollTo',
    () => ({
      immediate: button(() => {
        lenis.scrollTo(30000, { immediate: true })
      }),
      smoothDuration: button(() => {
        lenis.scrollTo(30000, { lock: true, duration: 10 })
      }),
      smooth: button(() => {
        lenis.scrollTo(30000)
      }),
      forceScrollTo: button(() => {
        lenis.scrollTo(30000, { force: true })
      }),
    }),
    [lenis]
  )


  useScroll(({ scroll }) => {
    setHasScrolled(scroll > 10)
    if (!zoomWrapperRect.top) return

    const start = zoomWrapperRect.top + windowHeight * 0.5
    const end = zoomWrapperRect.top + zoomWrapperRect.height - windowHeight

    const progress = clamp(0, mapRange(start, end, scroll, 0, 1), 1)
    const center = 0.6
    const progress1 = clamp(0, mapRange(0, center, progress, 0, 1), 1)
    const progress2 = clamp(0, mapRange(center - 0.055, 1, progress, 0, 1), 1)
    setTheme(progress2 === 1 ? 'light' : 'dark')

    zoomRef.current.style.setProperty('--progress1', progress1)
    zoomRef.current.style.setProperty('--progress2', progress2)

    if (progress === 1) {
      zoomRef.current.style.setProperty('background-color', 'currentColor')
    } else {
      zoomRef.current.style.removeProperty('background-color')
    }
  })

  const [whyRectRef, whyRect] = useRect()
  const [cardsRectRef, cardsRect] = useRect()
  const [whiteRectRef, whiteRect] = useRect()
  const [featuresRectRef, featuresRect] = useRect()
  const [inuseRectRef, inuseRect] = useRect()

  const addThreshold = useStore(({ addThreshold }) => addThreshold)

  useEffect(() => {
    addThreshold({ id: 'top', value: 0 })
  }, [])

  useEffect(() => {
    const top = whyRect.top - windowHeight / 2
    addThreshold({ id: 'why-start', value: top })
    addThreshold({
      id: 'why-end',
      value: top + whyRect.height,
    })
  }, [whyRect])

  useEffect(() => {
    const top = cardsRect.top - windowHeight / 2
    addThreshold({ id: 'cards-start', value: top })
    addThreshold({ id: 'cards-end', value: top + cardsRect.height })
    addThreshold({
      id: 'red-end',
      value: top + cardsRect.height + windowHeight,
    })
  }, [cardsRect])

  useEffect(() => {
    const top = whiteRect.top - windowHeight
    addThreshold({ id: 'light-start', value: top })
  }, [whiteRect])

  useEffect(() => {
    const top = featuresRect.top
    addThreshold({ id: 'features', value: top })
  }, [featuresRect])

  useEffect(() => {
    const top = inuseRect.top
    addThreshold({ id: 'in-use', value: top })
  }, [inuseRect])

  useEffect(() => {
    const top = lenis?.limit
    addThreshold({ id: 'end', value: top })
  }, [lenis?.limit])


  const inUseRef = useRef()

  const [visible, setIsVisible] = useState(false)
  const intersection = useIntersection(inUseRef, {
    threshold: 0.2,
  })
  useEffect(() => {
    if (intersection?.isIntersecting) {
      setIsVisible(true)
    }
  }, [intersection])

  return (
    <Layout
      theme={theme}
      seo={{
        title: 'Concept Vapor Solutions – Next-Generation Manufacturing',
        description:
          'Delivering next-generation vapor technologies, functional nutrition, and advanced supplementation formats from Dubai\'s premier manufacturing hub.',
      }}
      className={s.home}
    >
      <div className={s.canvas}>
        <WebGL />
      </div>

      <section className={s.hero}>
        <div className={s.heroImage}>
          <div className={s.imageWrapper}>
            <Image
              src="/images/hero-image.webp"
              alt="Concept Vapor Solutions"
              fill
              priority
              className={s.backgroundImage}
              style={{ objectFit: 'cover' }}
              sizes="100vw"
              quality={80}
            />
            <div className={s.imageOverlay} />
          </div>
        </div>
        <div className="layout-grid-inner">
          <Title className={s.title} />
          {/* <SFDR className={cn(s.icon, introOut && s.show)} /> */}
          <span className={cn(s.sub)}>
            <HeroTextIn introOut={introOut}>
              <h2 className={cn('h3', s.subtitle)}>Innovation. Precision. Compliance.</h2>
            </HeroTextIn>
            <HeroTextIn introOut={introOut}>
              <h2 className={cn('p-xs', s.tm)}>
                <span>©</span> {new Date().getFullYear()} Concept Vapor Solutions
              </h2>
            </HeroTextIn>
          </span>
        </div>

        <div className={cn(s.bottom, 'layout-grid')}>
          <div
            className={cn(
              'hide-on-mobile',
              s['scroll-hint'],
              hasScrolled && s.hide,
              introOut && s.show
            )}
          >
            <div className={s.text}>
              <HeroTextIn introOut={introOut}>
                <p>scroll</p>
              </HeroTextIn>
              <HeroTextIn introOut={introOut}>
                <p> to discover</p>
              </HeroTextIn>
            </div>
          </div>
          <h1 className={cn(s.description, 'p-s')}>
            <HeroTextIn introOut={introOut}>
              <p className="p-s">Delivering next-generation vapor technologies</p>
            </HeroTextIn>
            <HeroTextIn introOut={introOut}>
              <p className="p-s">functional nutrition, and advanced supplementation</p>
            </HeroTextIn>
            <HeroTextIn introOut={introOut}>
              <p className="p-s">from Dubai's premier manufacturing hub</p>
            </HeroTextIn>
          </h1>
          <Button
            className={cn(s.cta, s.documentation, introOut && s.in)}
            arrow
            icon={<ArrowRight />}
            href="#divisions"
          >
            explore solutions
          </Button>
          <Button
            className={cn(s.cta, s.sponsor, introOut && s.in)}
            arrow
            icon={<Sponsor />}
            href="/contact"
          >
            contact us
          </Button>
        </div>
      </section>

      <section className={s.why} data-lenis-scroll-snap-align="start">
        <div className="layout-grid">
          <h2 className={cn(s.sticky, 'h2')}>
            <AppearTitle>Why choose us?</AppearTitle>
          </h2>
          <aside className={s.features} ref={whyRectRef}>
            <div className={s.feature}>
              <p className="p">
                We've heard all the reasons to be cautious about manufacturing
                partners. Quality concerns. Compliance risks. Supply chain
                delays. Communication gaps. And historically, those were all
                valid concerns. But we like to imagine manufacturing as it could
                be, then build it. So, why should you choose Concept Vapor
                Solutions?
              </p>
            </div>
            <div className={s.feature}>
              <h3 className={cn(s.title, 'h4')}>
                World-class manufacturing standards
              </h3>
              <p className="p">
                Unlock the potential of your product vision with ISO Class 7 and
                8 cleanrooms, GMP-compliant processes, and rigorous quality
                controls. Our facility pulls your products through a manufacturing
                flow so precise that quality becomes second nature.
              </p>
            </div>
            <div className={s.feature}>
              <h3 className={cn(s.title, 'h4')}>
                End-to-end regulatory compliance
              </h3>
              <p className="p">
                Give all your products the same (certified) experience whether
                they're ENDD devices, functional foods, or pharmaceutical
                formats. With our comprehensive compliance framework, you control
                how precise, compliant, and market-ready your products should be
                — no matter the category. Excellence!
              </p>
            </div>
            <div className={s.feature}>
              <h3 className={cn(s.title, 'h4')}>
                Innovation-driven product development
              </h3>
              <p className="p">
                Synchronization between R&D and production is critical. Those
                delays and inconsistencies in product development are caused by
                disconnected processes, where traditional manufacturers run
                development and production separately. Our integrated approach
                fixes this.
              </p>
            </div>
          </aside>
        </div>
      </section>
      <section className={s.rethink}>
        <div className={cn('layout-grid', s.pre)}>
          <div className={s.highlight} data-lenis-scroll-snap-align="start">
            <Parallax speed={-0.5}>
              <p className="h2">
                <AppearTitle>Rethinking manufacturing</AppearTitle>
              </p>
            </Parallax>
          </div>
          <div className={s.comparison}>
            <Parallax speed={0.5}>
              <p className="p">
                We have to give props to traditional manufacturers. They're
                established and experienced – and we've learned from them a lot.
                But they still have limitations that keep them from being truly
                innovative. We've built something different: a manufacturing
                partner that combines precision, compliance, and innovation in
                one integrated facility.
              </p>
            </Parallax>
          </div>
        </div>
        <div className={s.cards} ref={cardsRectRef}>
          <HorizontalSlides>
            <Card
              className={s.card}
              number="01"
              text="ISO Class 7 & 8 cleanrooms ensuring pharmaceutical-grade quality standards"
            />
            <Card
              className={s.card}
              number="02"
              text="Full ESMA & UAE regulatory compliance with dedicated quality assurance teams"
            />
            <Card
              className={s.card}
              number="03"
              text="Integrated R&D capabilities reducing time-to-market by up to 40%"
            />
            <Card
              className={s.card}
              number="04"
              text="Multi-format expertise across ENDD, functional foods, and pharmaceutical delivery"
            />
            <Card
              className={s.card}
              number="05"
              text="Strategic Dubai location providing global logistics access and market reach"
            />
          </HorizontalSlides>
        </div>
      </section>
      <section
        ref={(node) => {
          zoomWrapperRectRef(node)
          zoomRef.current = node
        }}
        className={s.solution}
      >
        <div className={s.inner}>
          <div className={s.mist} />
          <div className={s.zoom}>
            <h2 className={cn(s.first, 'h1 vh')}>
              world-class <br />
              <span className="contrast">manufacturing</span>
            </h2>
            <h2 className={cn(s.enter, 'h3 vh')}>
              <br />
            </h2>
            <h2 className={cn(s.second, 'h1 vh')}>Innovation. Precision. Compliance.</h2>
          </div>
        </div>
      </section>
      <section className={cn('theme-light', s.featuring)} ref={whiteRectRef}>
        <div className={s.inner}>
          <div className={cn('layout-block', s.intro)}>
            <p className="p-l">
              Concept Vapor Solutions is a{' '}
              <Link
                className="contrast semi-bold"
                href="/about"
              >
                world-class manufacturing facility
              </Link>{' '}
              built to deliver next-generation vapor technologies, functional
              nutrition, and advanced supplementation formats. We combine
              scientific rigor with clean manufacturing practices, all while
              maintaining the highest compliance standards.
            </p>
          </div>
        </div>
        <section ref={featuresRectRef}>
          <FeatureCards />
        </section>
      </section>
      <section
        id="divisions"
        ref={(node) => {
          inuseRectRef(node)
          inUseRef.current = node
        }}
        className={cn('theme-light', s['in-use'], visible && s.visible)}
      >
        <div className="layout-grid">
          <aside className={s.title}>
            <p className="h3">
              <AppearTitle>
                <span>Our</span>

                <br />
                <span className="grey">Divisions</span>
              </AppearTitle>
            </p>
          </aside>
          <ul className={s.list}>
            {projects.map(({ title, source, href }, i) => (
              <li key={i}>
                <ListItem
                  title={title}
                  source={source}
                  href={href}
                  index={i}
                  visible={visible}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      id: 'home',
    }, // will be passed to the page component as props
  }
}
