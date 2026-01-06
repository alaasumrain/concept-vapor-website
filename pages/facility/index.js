import cn from 'clsx'
import { Image } from 'components/image'
import { Layout } from 'layouts/default'
import dynamic from 'next/dynamic'
import s from './facility.module.scss'

const AppearTitle = dynamic(
  () => import('components/appear-title').then((mod) => mod.AppearTitle),
  { ssr: false }
)

const ScrollReveal = dynamic(
  () => import('components/scroll-reveal').then((mod) => mod.ScrollReveal),
  { ssr: false }
)

export default function Facility() {
  const cleanroomFeatures = [
    {
      icon: '01',
      title: 'HEPA-Filtered Air',
      description: 'Ultra-low particulate environments with continuous air circulation',
    },
    {
      icon: '02',
      title: 'Microbial Controls',
      description: 'Strict environmental controls for consistent product quality',
    },
    {
      icon: '03',
      title: 'Climate Control',
      description: 'Precisely controlled temperature and humidity for stability',
    },
    {
      icon: '04',
      title: 'Gowning Protocols',
      description: 'International-standard decontamination procedures',
    },
  ]

  const automationFeatures = [
    {
      title: 'Automated Mixing, Filling & Packaging',
      description: 'Minimizing human contact for maximum purity',
    },
    {
      title: 'Precision Dosing Systems',
      description: 'Ensuring batch-to-batch uniformity',
    },
    {
      title: 'High-Speed Production',
      description: 'Bottling and pod-filling for large-volume production',
    },
    {
      title: 'Integrated Material Handling',
      description: 'Streamlined flow and reduced cross-contamination',
    },
  ]

  const qcCapabilities = [
    'Full analytical testing',
    'Stability studies',
    'Sensory evaluation',
    'Microbial assessments',
    'Chemical analysis',
    'Raw material verification',
    'End-to-end traceability',
  ]

  return (
    <Layout theme="light">
      <main className={s.page}>
        {/* Hero Section with Background Image */}
        <section className={s.hero}>
          <div className={s.heroImage}>
            <Image
              src="/images/facility/facility-hero.webp"
              alt="Concept Vapor Solutions Facility"
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
                <div className={s.heroLabel}>Our Facility</div>
                <h1 className={cn('h1', s.heroTitle)}>
                  <AppearTitle>
                    Built for Precision and Purity
                  </AppearTitle>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className={s.intro}>
          <div className="layout-block">
            <div className={s.introContent}>
              <ScrollReveal animation="fade-up">
                <p className={cn('p-l', s.introText)}>
                  Every detail—from air handling to automation—has been engineered to safeguard
                  product integrity and deliver unmatched consistency at scale.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <p className={cn('p', s.introSubtext)}>
                  Located in the vibrant Jebel Ali Free Zone of Dubai, our site stands at the
                  forefront of cleanroom-based production, blending advanced technology with
                  world-class operational discipline.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Cleanrooms Section */}
        <section className={s.cleanrooms}>
          <div className="layout-block">
            <div className={s.cleanroomsGrid}>
              <ScrollReveal animation="fade-right" className={s.cleanroomsContent}>
                <div className={s.sectionHeader}>
                  <div className={s.sectionLabel}>Cleanroom Environments</div>
                  <h2 className={cn('h2', s.sectionTitle)}>
                    <AppearTitle>ISO Class 7 & 8 Certified</AppearTitle>
                  </h2>
                  <p className={cn('p', s.sectionDescription)}>
                    At the heart of our facility are cleanrooms designed to uphold the highest
                    hygiene and contamination-control standards, supporting sensitive production
                    requirements across all our divisions.
                  </p>
                </div>

                <div className={s.featuresGrid}>
                  {cleanroomFeatures.map((feature, index) => (
                    <ScrollReveal
                      key={feature.icon}
                      animation="fade-up"
                      delay={index * 80}
                      className={s.featureCard}
                    >
                      <div className={s.featureIcon}>{feature.icon}</div>
                      <h3 className={cn('h4', s.featureTitle)}>{feature.title}</h3>
                      <p className={cn('p', s.featureDescription)}>{feature.description}</p>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={150} className={s.cleanroomsImage}>
                <div className={s.cleanroomImageWrapper}>
                  <Image
                    src="/images/facility/clean-room.webp"
                    alt="ISO Class 7 & 8 Cleanroom"
                    fill
                    className={s.cleanroomImage}
                    quality={75}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Automation Section */}
        <section className={s.automation}>
          <div className="layout-block">
            <div className={s.automationGrid}>
              <ScrollReveal animation="fade-right" className={s.automationImage}>
                <div className={s.automationImageWrapper}>
                  <Image
                    src="/images/facility/automation.webp"
                    alt="Advanced Production Automation"
                    fill
                    className={s.automationImageImg}
                    quality={75}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={150} className={s.automationContent}>
                <div className={s.sectionLabel}>Production Lines</div>
                <h2 className={cn('h2', s.sectionTitle)}>
                  <AppearTitle>Advanced Automation</AppearTitle>
                </h2>
                <p className={cn('p', s.sectionDescription)}>
                  Our facility is equipped with intelligent production systems designed for
                  accuracy, efficiency, and scalable output. Automation allows us to maintain
                  exceptional consistency while delivering flexibility for custom formulations.
                </p>

                <div className={s.automationFeatures}>
                  {automationFeatures.map((feature, index) => (
                    <div key={index} className={s.automationFeature}>
                      <h4 className={s.automationFeatureTitle}>{feature.title}</h4>
                      <p className={s.automationFeatureDescription}>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* R&D Section */}
        <section className={s.rd}>
          <div className="layout-block">
            <div className={s.rdGrid}>
              <ScrollReveal animation="fade-right" className={s.rdContent}>
                <div className={s.sectionLabel}>Research & Development</div>
                <h2 className={cn('h2', s.sectionTitle)}>
                  <AppearTitle>Comprehensive R&D Infrastructure</AppearTitle>
                </h2>
                <p className={cn('p', s.sectionDescription)}>
                  Our in-house R&D laboratory works hand-in-hand with production units to
                  support innovation, rapid prototyping, and advanced formulation work.
                  Quality is embedded into every step of our process.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={150} className={s.rdVisual}>
                <div className={s.rdImageWrapper}>
                  <Image
                    src="/images/facility/facility-lab.webp"
                    alt="R&D Laboratory"
                    fill
                    className={s.rdImage}
                    quality={75}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>
                <div className={s.rdCapabilities}>
                  <div className={s.capabilitiesTitle}>QA/QC Capabilities</div>
                  <div className={s.capabilitiesGrid}>
                    {qcCapabilities.map((capability, index) => (
                      <div key={index} className={s.capability}>
                        <svg className={s.capabilityIcon} viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M6 10L9 13L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Logistics Section */}
        <section className={s.logistics}>
          <div className="layout-block">
            <ScrollReveal animation="scale" className={s.logisticsContent}>
              <div className={s.logisticsInner}>
                <div className={s.sectionLabel}>Global Reach</div>
                <h2 className={cn('h2', s.logisticsTitle)}>
                  Strategic Location
                </h2>
                <p className={cn('p-l', s.logisticsText)}>
                  Our presence in the Jebel Ali Free Zone grants unparalleled access to
                  international ports, air freight networks, and regulatory support systems.
                </p>
                <div className={s.logisticsStats}>
                  <div className={s.logisticsStat}>
                    <span className={s.statValue}>180+</span>
                    <span className={s.statLabel}>Countries Accessible</span>
                  </div>
                  <div className={s.logisticsStat}>
                    <span className={s.statValue}>24/7</span>
                    <span className={s.statLabel}>Logistics Support</span>
                  </div>
                  <div className={s.logisticsStat}>
                    <span className={s.statValue}>15</span>
                    <span className={s.statLabel}>Min to Port</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className={s.philosophy}>
          <div className="layout-block">
            <ScrollReveal animation="fade-up" className={s.philosophyContent}>
              <h2 className={cn('h2', s.philosophyTitle)}>
                A Facility That Embodies Our Philosophy
              </h2>
              <div className={s.philosophyPrinciples}>
                <div className={s.principle}>
                  <span className={s.principleText}>Precision</span>
                </div>
                <div className={s.principleDivider}></div>
                <div className={s.principle}>
                  <span className={s.principleText}>Safety</span>
                </div>
                <div className={s.principleDivider}></div>
                <div className={s.principle}>
                  <span className={s.principleText}>Performance</span>
                </div>
              </div>
              <p className={cn('p', s.philosophyText)}>
                From the controlled environments to the advanced technologies that power
                our production lines, our facility is a testament to our pursuit of excellence—and
                our commitment to delivering products that inspire confidence worldwide.
              </p>
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
      id: 'facility',
      seo: {
        title: 'Our Facility – Concept Vapor Solutions',
        description:
          'A state-of-the-art facility built for precision and purity. ISO-certified cleanroom environments, advanced automation, comprehensive R&D and quality control infrastructure.',
      },
    },
  }
}
