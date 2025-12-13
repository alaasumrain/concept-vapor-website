import cn from 'clsx'
import { Layout } from 'layouts/default'
import dynamic from 'next/dynamic'
import s from './careers.module.scss'

const AppearTitle = dynamic(
  () => import('components/appear-title').then((mod) => mod.AppearTitle),
  { ssr: false }
)

const ScrollReveal = dynamic(
  () => import('components/scroll-reveal').then((mod) => mod.ScrollReveal),
  { ssr: false }
)

export default function Careers() {
  const benefits = [
    {
      title: 'Innovation at Our Core',
      description: 'Work with cutting-edge technology and contribute to next-generation product development in a state-of-the-art facility.',
    },
    {
      title: 'Professional Growth',
      description: 'Access to continuous learning opportunities, professional development programs, and collaboration with industry experts.',
    },
    {
      title: 'Strategic Location',
      description: 'Based in Jebel Ali Free Zone, Dubai—a globally connected logistics hub with access to international markets.',
    },
    {
      title: 'Excellence Culture',
      description: 'Be part of a team that values scientific rigor, precision, and uncompromising quality in everything we do.',
    },
  ]

  const roles = [
    'Chemical & Electrical Engineers',
    'Quality Assurance Specialists',
    'Production Technicians',
    'R&D Scientists',
    'Operations Managers',
    'Supply Chain Professionals',
  ]

  return (
    <Layout theme="light">
      <main className={s.page}>
        {/* Hero */}
        <section className={s.hero}>
          <div className={cn('layout-block', s.heroContent)}>
            <div className={s.heroLabel}>Join Our Team</div>
            <h1 className={cn('h1', s.heroTitle)}>
              <AppearTitle>
                Careers
              </AppearTitle>
            </h1>
            <p className={cn('p-l', s.heroTagline)}>Driven by Excellence</p>
          </div>
        </section>

        {/* Intro */}
        <section className={s.intro}>
          <div className="layout-block">
            <ScrollReveal animation="fade-up">
              <p className={cn('p-l', s.introText)}>
                At Concept Vapor Solutions, we're building the future of clean, high-performance manufacturing.
                We're looking for talented individuals who share our commitment to innovation, precision, and excellence.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <p className={cn('p', s.introSubtext)}>
                Our multidisciplinary team includes chemical and electrical engineers, quality specialists,
                nutrition experts, and product development professionals. Together, we ensure that each concept,
                formulation, ingredient, and finished product meets the highest expectations.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Benefits */}
        <section className={s.benefits}>
          <div className="layout-block">
            <ScrollReveal animation="fade-up">
              <div className={s.sectionHeader}>
                <div className={s.sectionLabel}>Why Join Us</div>
                <h2 className={cn('h2', s.sectionTitle)}>
                  <AppearTitle>Build Your Career Here</AppearTitle>
                </h2>
              </div>
            </ScrollReveal>

            <div className={s.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <ScrollReveal
                  key={index}
                  animation="fade-up"
                  delay={index * 80}
                  className={s.benefitCard}
                >
                  <div className={s.benefitNumber}>{String(index + 1).padStart(2, '0')}</div>
                  <h3 className={s.benefitTitle}>{benefit.title}</h3>
                  <p className={s.benefitDescription}>{benefit.description}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Roles */}
        <section className={s.roles}>
          <div className="layout-block">
            <div className={s.rolesGrid}>
              <ScrollReveal animation="fade-right" className={s.rolesContent}>
                <div className={s.sectionLabel}>Opportunities</div>
                <h2 className={cn('h2', s.sectionTitle)}>
                  <AppearTitle>Who We're Looking For</AppearTitle>
                </h2>
                <p className={cn('p', s.rolesDescription)}>
                  We're always looking for talented individuals who share our passion for innovation and excellence.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={150} className={s.rolesList}>
                {roles.map((role, index) => (
                  <div key={index} className={s.roleItem}>
                    <svg className={s.roleIcon} viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M6 10L9 13L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{role}</span>
                  </div>
                ))}
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className={s.contact}>
          <div className="layout-block">
            <ScrollReveal animation="scale">
              <div className={s.contactContent}>
                <div className={s.sectionLabel}>Get in Touch</div>
                <h2 className={cn('h2', s.contactTitle)}>
                  Interested in Joining?
                </h2>
                <p className={cn('p', s.contactText)}>
                  Send your resume and cover letter to
                </p>
                <a href="mailto:careers@conceptvapor.com" className={s.emailLink}>
                  careers@conceptvapor.com
                </a>
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
      id: 'careers',
      seo: {
        title: 'Careers – Concept Vapor Solutions',
        description:
          'Join our team of experts in manufacturing, R&D, quality control, and operations. Be part of a forward-thinking innovation center.',
      },
    },
  }
}
