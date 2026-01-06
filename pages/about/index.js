import cn from 'clsx'
import { Image } from 'components/image'
import { Layout } from 'layouts/default'
import dynamic from 'next/dynamic'
import s from './about.module.scss'
import { about } from 'content/about'
import { seoConfig } from 'content/seo'

const AppearTitle = dynamic(
  () => import('components/appear-title').then((mod) => mod.AppearTitle),
  { ssr: false }
)

const ScrollReveal = dynamic(
  () => import('components/scroll-reveal').then((mod) => mod.ScrollReveal),
  { ssr: false }
)

export default function About() {
  const pillars = about.foundation.pillars

  const locationFeatures = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      label: about.content.right.features[0].label,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 9h6v6H9z" />
          <path d="M3 12h18M12 3v18" />
        </svg>
      ),
      label: about.content.right.features[1].label,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      ),
      label: about.content.right.features[2].label,
    },
  ]

  return (
    <Layout theme="light">
      <main className={s.page}>
        {/* Hero Section with Background Image */}
        <section className={s.hero}>
          <div className={s.heroImage}>
            <Image
              src={about.hero.image}
              alt="Concept Vapor Solutions Manufacturing Facility"
              fill
              className={s.heroImageBg}
              priority
              sizes="100vw"
              quality={80}
              loading="eager"
            />
          </div>
          <div className={s.heroOverlay}>
            <div className="layout-block">
              <div className={s.heroContent}>
                <div className={s.heroLabel}>{about.hero.label}</div>
                <h1 className={cn('h1', s.heroTitle)}>
                  <AppearTitle>
                    {about.hero.title}
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
                    {about.content.left.text}
                  </p>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={100}>
                  <div className={s.equipmentImage}>
                    <Image
                      src={about.content.left.image}
                      alt="Manufacturing Equipment"
                      width={800}
                      height={600}
                      className={s.equipmentImageImg}
                      quality={75}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column */}
              <div className={s.contentRight}>
                <ScrollReveal animation="fade-up" delay={150}>
                  <div className={s.mapContainer}>
                    <Image
                      src={about.content.right.mapImage}
                      alt="Jebel Ali Free Zone of Dubai Location"
                      width={800}
                      height={450}
                      className={s.mapImage}
                      quality={75}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={200}>
                  <p className={cn('p', s.contentText)}>
                    {about.content.right.text}
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
                  <div className={s.mvLabel}>{about.missionVision.mission.label}</div>
                  <p className={cn('p', s.mvText)}>
                    {about.missionVision.mission.text}
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-left" delay={150} className={s.mvItem}>
                  <div className={s.mvLabel}>{about.missionVision.vision.label}</div>
                  <p className={cn('p', s.mvText)}>
                    {about.missionVision.vision.text}
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
                  <AppearTitle>{about.foundation.title}</AppearTitle>
                </h2>
                <p className={cn('p', s.foundationSubtitle)}>
                  {about.foundation.subtitle}
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
                <div className={s.teamLabel}>{about.team.label}</div>
                <h2 className={cn('h2', s.teamTitle)}>
                  <AppearTitle>{about.team.title}</AppearTitle>
                </h2>
                <div className={s.teamTextWrapper}>
                  {about.team.paragraphs.map((text, i) => (
                    <p key={i} className={cn('p', s.teamText)}>
                      {text}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={200} className={s.teamVisual}>
                <div className={s.teamStats}>
                  {about.team.stats.map((stat, i) => (
                    <div key={i} className={s.stat}>
                      <span className={s.statNumber}>{stat.number}</span>
                      <span className={s.statLabel}>{stat.label}</span>
                    </div>
                  ))}
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
                {about.standards.title}
              </h2>
              <p className={cn('p-l', s.standardsText)}>
                {about.standards.text}
              </p>
              <div className={s.promise}>
                <span className={s.promiseLabel}>{about.standards.promise.label}</span>
                <p className={cn('h3', s.promiseText)}>
                  {about.standards.promise.text}
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
      seo: seoConfig.about,
    },
  }
}
