import cn from 'clsx'
import { Image } from 'components/image'
import { Layout } from 'layouts/default'
import dynamic from 'next/dynamic'
import s from './about.module.scss'

const AppearTitle = dynamic(
  () => import('components/appear-title').then((mod) => mod.AppearTitle),
  { ssr: false }
)

const ScrollReveal = dynamic(
  () => import('components/scroll-reveal').then((mod) => mod.ScrollReveal),
  { ssr: false }
)

export default function About() {
  const pillars = [
    {
      number: '01',
      title: 'Scientific Rigor',
      description:
        'Every product is developed using evidence-based formulation principles, analytical testing, and controls that exceed industry norms.',
    },
    {
      number: '02',
      title: 'Clean & Responsible Manufacturing',
      description:
        'Our ISO Class 7 and 8 cleanrooms reflect our commitment to maintaining the strictest hygiene protocols to protect product purity and consumer trust.',
    },
    {
      number: '03',
      title: 'Innovation With Purpose',
      description:
        'We design solutions that address real-world needs—whether in electronic nicotine delivery, functional nutrition, or pharmaceutical applications—focusing on efficacy, safety, and the user experience.',
    },
    {
      number: '04',
      title: 'Partnership & Transparency',
      description:
        'We believe in cultivating long-term relationships built on traceability, consistency, and complete visibility from formulation to final production.',
    },
  ]

  const locationFeatures = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      label: 'Logistics',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M3 12h18M12 3v18" />
        </svg>
      ),
      label: 'Infrastructure',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      ),
      label: 'Regulation',
    },
  ]

  return (
    <Layout theme="light">
      <main className={s.page}>
        {/* Hero Section with Background Image */}
        <section className={s.hero}>
          <div className={s.heroImage}>
            <Image
              src="/images/about-us/cvs-hero.png"
              alt="Concept Vapor Solutions Manufacturing Facility"
              fill
              className={s.heroImageBg}
              priority
              sizes="100vw"
              quality={90}
              loading="eager"
            />
          </div>
          <div className={s.heroOverlay}>
            <div className="layout-block">
              <div className={s.heroContent}>
                <div className={s.heroLabel}>About Us</div>
                <h1 className={cn('h1', s.heroTitle)}>
                  <AppearTitle>
                    Engineering the Future of Clean Manufacturing
                  </AppearTitle>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section - Two Columns */}
        <section className={s.content}>
          <div className="layout-block">
            <div className={s.contentGrid}>
              {/* Left Column */}
              <div className={s.contentLeft}>
                <ScrollReveal animation="fade-up" delay={0}>
                  <p className={cn('p', s.contentText)}>
                    Concept Vapor Solutions was founded with a singular vision: to build a world-class
                    manufacturing ecosystem where scientific precision, responsible innovation, and
                    uncompromising hygiene come together to create products that elevate modern wellness.
                  </p>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={100}>
                  <div className={s.equipmentImage}>
                    <Image
                      src="/images/about-us/cvs-equipment.png"
                      alt="Manufacturing Equipment"
                      width={800}
                      height={600}
                      className={s.equipmentImageImg}
                      quality={90}
                      loading="lazy"
                    />
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column */}
              <div className={s.contentRight}>
                <ScrollReveal animation="fade-up" delay={150}>
                  <div className={s.mapContainer}>
                    <Image
                      src="/images/about-us/cvs-map.png"
                      alt="Jebel Ali Free Zone of Dubai Location"
                      width={800}
                      height={450}
                      className={s.mapImage}
                      quality={90}
                      loading="lazy"
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={200}>
                  <p className={cn('p', s.contentText)}>
                    Located in the dynamic Jebel Ali Free Zone of Dubai, our facility benefits from a
                    globally connected logistics hub, advanced infrastructure, and a regulatory environment
                    designed for international excellence. From this strategic location, we serve partners
                    across the Middle East, Asia, Europe, and beyond.
                  </p>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={250}>
                  <div className={s.locationFeatures}>
                    {locationFeatures.map((feature, index) => (
                      <div key={index} className={s.locationFeature}>
                        <div className={s.locationIcon}>{feature.icon}</div>
                        <span className={s.locationLabel}>{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className={s.missionVision}>
          <div className="layout-block">
            <div className={s.mvContainer}>
              <div className={s.mvGrid}>
                <ScrollReveal animation="fade-right" className={s.mvItem}>
                  <div className={s.mvLabel}>Our Mission</div>
                  <p className={cn('p', s.mvText)}>
                    To craft innovative, clean-label, and high-precision products that enhance consumer
                    well-being while upholding the highest global standards of safety, purity, and performance.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-left" delay={150} className={s.mvItem}>
                  <div className={s.mvLabel}>Our Vision</div>
                  <p className={cn('p', s.mvText)}>
                    To become a global reference point for advanced manufacturing and value adding—leading
                    the evolution of electronic delivery systems, functional foods, and pharmaceutical technologies.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Foundation / Pillars */}
        <section className={s.foundation}>
          <div className="layout-block">
            <ScrollReveal animation="fade-up">
              <div className={s.foundationHeader}>
                <h2 className={cn('h2', s.foundationTitle)}>
                  <AppearTitle>Our Foundation of Excellence</AppearTitle>
                </h2>
                <p className={cn('p', s.foundationSubtitle)}>
                  Our approach is rooted in four core pillars:
                </p>
              </div>
            </ScrollReveal>

            <div className={s.pillarsGrid}>
              {pillars.map((pillar, index) => (
                <ScrollReveal
                  key={pillar.number}
                  animation="fade-up"
                  delay={index * 100}
                  className={s.pillar}
                >
                  <div className={s.pillarNumber}>{pillar.number}</div>
                  <h3 className={cn('h4', s.pillarTitle)}>{pillar.title}</h3>
                  <p className={cn('p', s.pillarText)}>{pillar.description}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={s.team}>
          <div className="layout-block">
            <div className={s.teamGrid}>
              <ScrollReveal animation="fade-right" className={s.teamContent}>
                <div className={s.teamLabel}>Our Team</div>
                <h2 className={cn('h2', s.teamTitle)}>
                  <AppearTitle>Driven by Excellence</AppearTitle>
                </h2>
                <div className={s.teamTextWrapper}>
                  <p className={cn('p', s.teamText)}>
                    Our multidisciplinary team includes chemical and electrical engineers, quality specialists,
                    nutrition experts, and product development professionals.
                  </p>
                  <p className={cn('p', s.teamText)}>
                    Together, they ensure that each concept, formulation, ingredient and finished product meets
                    the highest expectations of performance and reliability.
                  </p>
                  <p className={cn('p', s.teamText)}>
                    Whether developing a new functional beverage, refining a nicotine delivery system, or
                    engineering a pharmaceutical-grade delivery device, our team brings precision, integrity,
                    and craftsmanship to every stage of production.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={200} className={s.teamVisual}>
                <div className={s.teamStats}>
                  <div className={s.stat}>
                    <span className={s.statNumber}>50+</span>
                    <span className={s.statLabel}>Expert Team Members</span>
                  </div>
                  <div className={s.stat}>
                    <span className={s.statNumber}>15+</span>
                    <span className={s.statLabel}>Years Combined Experience</span>
                  </div>
                  <div className={s.stat}>
                    <span className={s.statNumber}>6</span>
                    <span className={s.statLabel}>Core Disciplines</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className={s.standards}>
          <div className="layout-block">
            <ScrollReveal animation="scale" className={s.standardsContent}>
              <h2 className={cn('h2', s.standardsTitle)}>
                Setting New Industry Standards
              </h2>
              <p className={cn('p-l', s.standardsText)}>
                Concept Vapor Solutions is more than a manufacturing facility—we are a forward-thinking
                innovation center.
              </p>
              <div className={s.promise}>
                <span className={s.promiseLabel}>Our Promise</span>
                <p className={cn('h3', s.promiseText)}>
                  Deliver products you can trust, built in an environment designed for excellence.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      id: 'about',
      seo: {
        title: 'About Us – Concept Vapor Solutions',
        description:
          'Engineering the future of clean, high-performance manufacturing. Founded with a vision to build a world-class manufacturing ecosystem where scientific precision, responsible innovation, and uncompromising hygiene come together.',
      },
    },
  }
}
