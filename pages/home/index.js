import { useFrame, useRect } from '@darkroom.engineering/hamo'
import cn from 'clsx'

import { Button } from 'components/button'
import { Card } from 'components/card'
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
const GitHub = dynamic(() => import('icons/github.svg'), { ssr: false })
const Sponsor = dynamic(() => import('icons/sponsor.svg'), { ssr: false })

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

  useEffect(() => {
    if (!lenis) return

    function onClassNameChange(lenis) {
      console.log(lenis.className)
    }

    lenis.on('className change', onClassNameChange)

    return () => {
      lenis.off('className change', onClassNameChange)
    }
  }, [lenis])

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

  useScroll((e) => {
    console.log(window.scrollY, e.scroll, e.isScrolling, e.velocity, e.isLocked)
  })

  useFrame(() => {
    console.log('frame', window.scrollY, lenis?.scroll, lenis?.isScrolling)
  }, 1)

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
            icon={<GitHub />}
            href="#divisions"
          >
            explore solutions
          </Button>
          <Button
            className={cn(s.cta, s.sponsor, introOut && s.in)}
            arrow
            icon={<Sponsor />}
            href="#contact"
          >
            contact us
          </Button>
        </div>
      </section>

      <section className={s.why} data-lenis-scroll-snap-align="start">
        <div className="layout-grid">
          <h2 className={cn(s.sticky, 'h2')}>
            <AppearTitle>Who We Are</AppearTitle>
          </h2>
          <aside className={s.features} ref={whyRectRef}>
            <div className={s.feature}>
              <p className="p">
                Concept Vapor Solutions is a next-generation manufacturing company 
                located in the Jebel Ali Free Zone of Dubai, UAE. We specialize in 
                Electronic Nicotine Delivery Systems (ENDS), functional foods & 
                nutritional supplements, and alternative delivery solutions for 
                modern wellness and performance.
              </p>
            </div>
            <div className={s.feature}>
              <h3 className={cn(s.title, 'h4')}>
                Innovation
              </h3>
              <p className="p">
                We invest heavily in R&D to bring high-performance solutions to 
                market in ENDS, functional foods, and advanced delivery systems. 
                Our commitment to innovation drives everything we do.
              </p>
            </div>
            <div className={s.feature}>
              <h3 className={cn(s.title, 'h4')}>
                Precision
              </h3>
              <p className="p">
                World-class facility with ISO Class 7 & 8 cleanrooms, GMP-compliant 
                processing lines, and automated systems. Every product meets the 
                highest standards of quality and precision.
              </p>
            </div>
            <div className={s.feature}>
              <h3 className={cn(s.title, 'h4')}>
                Compliance
              </h3>
              <p className="p">
                ISO 9001, ISO 22000, GMP & HACCP certified. Full ESMA and UAE 
                compliance. We maintain the highest regulatory standards across 
                all our divisions.
              </p>
            </div>
          </aside>
        </div>
      </section>
      <section className={s.rethink} id="divisions">
        <div className={cn('layout-grid', s.pre)}>
          <div className={s.highlight} data-lenis-scroll-snap-align="start">
            <Parallax speed={-0.5}>
              <p className="h2">
                <AppearTitle>Our Divisions</AppearTitle>
              </p>
            </Parallax>
          </div>
          <div className={s.comparison}>
            <Parallax speed={0.5}>
              <p className="p">
                We operate three specialized divisions, each delivering cutting-edge 
                solutions in their respective fields. From ENDS devices to functional 
                nutrition and advanced delivery systems, we bring innovation and 
                precision to every product we manufacture.
              </p>
            </Parallax>
          </div>
        </div>
        <div className={s.cards} ref={cardsRectRef}>
          <HorizontalSlides>
            <Card
              className={s.card}
              number="01"
              text="Electronic Nicotine Delivery Systems – Manufacturing ENDS devices and e-liquids under strict regulatory frameworks"
            />
            <Card
              className={s.card}
              number="02"
              text="Functional Foods & Supplements – High-protein foods, prebiotic formulations, and wellness-focused nutritional products"
            />
            <Card
              className={s.card}
              number="03"
              text="Advanced Delivery Solutions – Oral thin films, chewable formats, sprays, and micro-encapsulated actives"
            />
            <Card
              className={s.card}
              number="04"
              text="World-Class Facility – ISO Class 7 & 8 cleanrooms with GMP-compliant processing and automated systems"
            />
            <Card
              className={s.card}
              number="05"
              text="Certified Excellence – ISO 9001, ISO 22000, GMP, HACCP, and full ESMA compliance"
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
          <div className={s.zoom}>
            <h2 className={cn(s.first, 'h1 vh')}>
              world-class <br />
              <span className="contrast">manufacturing</span>
            </h2>
            <h2 className={cn(s.enter, 'h3 vh')}>
              Concept <br /> Vapor Solutions
            </h2>
            <h2 className={cn(s.second, 'h1 vh')}>Innovation. Precision. Compliance.</h2>
          </div>
        </div>
      </section>
      <section className={cn('theme-light', s.featuring)} ref={whiteRectRef}>
        <div className={s.inner}>
          <div className={cn('layout-block', s.intro)}>
            <p className="p-l">
              Built for precision.<br />
              Certified for excellence.
            </p>
            <div className={s.facilityDetails}>
              <div className={s.facilityFact}>
                <span className={s.factLabel}>Location</span>
                <span className={s.factValue}>Jebel Ali Free Zone, Dubai</span>
              </div>
              <div className={s.facilityFact}>
                <span className={s.factLabel}>Cleanrooms</span>
                <span className={s.factValue}>ISO Class 7 & 8</span>
              </div>
              <div className={s.facilityFact}>
                <span className={s.factLabel}>Standards</span>
                <span className={s.factValue}>GMP-compliant</span>
              </div>
              <div className={s.facilityFact}>
                <span className={s.factLabel}>Air Quality</span>
                <span className={s.factValue}>HEPA filtration</span>
              </div>
              <div className={s.facilityFact}>
                <span className={s.factLabel}>Systems</span>
                <span className={s.factValue}>Automated filling, packaging & batching</span>
              </div>
              <div className={s.facilityFact}>
                <span className={s.factLabel}>Operations</span>
                <span className={s.factValue}>Segregated nicotine, food & supplement zones</span>
              </div>
            </div>
          </div>
        </div>
        <section ref={featuresRectRef}>
          <FeatureCards />
        </section>
      </section>
      <section
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
            <li>
              <ListItem
                title="Electronic Nicotine Delivery Systems"
                source="ENDS Manufacturing"
                href="#ends"
                index={0}
                visible={visible}
              />
            </li>
            <li>
              <ListItem
                title="Functional Foods & Supplements"
                source="Nutritional Products"
                href="#functional-foods"
                index={1}
                visible={visible}
              />
            </li>
            <li>
              <ListItem
                title="Advanced Delivery Solutions"
                source="Innovation Formats"
                href="#delivery-solutions"
                index={2}
                visible={visible}
              />
            </li>
          </ul>
        </div>
      </section>
      <section className={cn('theme-light', s.partnership)}>
        <div className="layout-grid">
          <aside className={s.partnershipTitle}>
            <p className="h3">
              <AppearTitle>
                <span>Why</span>
                <br />
                <span className="grey">Partner With Us</span>
              </AppearTitle>
            </p>
          </aside>
          <div className={s.partnershipGrid}>
            <div className={s.partnershipItem}>
              <h4 className="h4">Speed to Market</h4>
              <p className="p">
                From concept to shelf-ready product. Our integrated facility
                and experienced team accelerate your timeline.
              </p>
            </div>
            <div className={s.partnershipItem}>
              <h4 className="h4">White-Label Ready</h4>
              <p className="p">
                Full private label and contract manufacturing services.
                Your brand, our expertise.
              </p>
            </div>
            <div className={s.partnershipItem}>
              <h4 className="h4">Regulatory Navigation</h4>
              <p className="p">
                We handle the complexity of ESMA, GMP, and international
                compliance so you can focus on growth.
              </p>
            </div>
            <div className={s.partnershipItem}>
              <h4 className="h4">Scalable Production</h4>
              <p className="p">
                From pilot batches to full-scale manufacturing.
                Grow with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={cn('theme-light', s.stats)}>
        <div className="layout-grid">
          <div className={s.statItem}>
            <span className={cn('h1', s.statNumber)}>3</span>
            <span className={cn('p-s', s.statLabel)}>Specialized Divisions</span>
          </div>
          <div className={s.statItem}>
            <span className={cn('h1', s.statNumber)}>ISO 7&8</span>
            <span className={cn('p-s', s.statLabel)}>Cleanroom Classes</span>
          </div>
          <div className={s.statItem}>
            <span className={cn('h1', s.statNumber)}>5+</span>
            <span className={cn('p-s', s.statLabel)}>Certifications</span>
          </div>
          <div className={s.statItem}>
            <span className={cn('h1', s.statNumber)}>UAE</span>
            <span className={cn('p-s', s.statLabel)}>Strategic Location</span>
          </div>
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
