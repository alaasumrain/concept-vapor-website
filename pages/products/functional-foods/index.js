import cn from 'clsx'
import { Image } from 'components/image'
import { Layout } from 'layouts/default'
import dynamic from 'next/dynamic'
import s from './functional-foods.module.scss'
import { functionalFoods } from 'content/products-functional-foods'
import { seoConfig } from 'content/seo'

const AppearTitle = dynamic(
  () => import('components/appear-title').then((mod) => mod.AppearTitle),
  { ssr: false }
)

const ScrollReveal = dynamic(
  () => import('components/scroll-reveal').then((mod) => mod.ScrollReveal),
  { ssr: false }
)

export default function FunctionalFoods() {
  const products = functionalFoods.products
  const capabilities = functionalFoods.capabilities.list
  const partnerBenefits = functionalFoods.partnership.benefits

  return (
    <Layout
      theme="light"
      seo={seoConfig.functionalFoods}
    >
      <main className={s.page}>
        {/* Hero */}
        <section className={s.hero}>
          <div className={s.heroImage}>
            <Image
              src={functionalFoods.hero.image}
              alt={functionalFoods.hero.label}
              fill
              className={s.heroImageBg}
              priority
              sizes="100vw"
              quality={85}
              loading="eager"
            />
          </div>
          <div className={s.heroOverlay}>
            <div className={cn('layout-block', s.heroContent)}>
              <div className={s.heroLabel}>{functionalFoods.hero.label}</div>
              <h1 className={cn('h1', s.heroTitle)}>
                <AppearTitle>
                  {functionalFoods.hero.title}
                </AppearTitle>
              </h1>
              <p className={cn('p-l', s.heroTagline)}>{functionalFoods.hero.tagline}</p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className={s.intro}>
          <div className="layout-block">
            <ScrollReveal animation="fade-up">
              <p className={cn('p-l', s.introText)}>
                {functionalFoods.intro.text}
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <p className={cn('p', s.introSubtext)}>
                {functionalFoods.intro.subtext}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Products Grid */}
        <section className={s.products}>
          <div className="layout-block">
            <ScrollReveal animation="fade-up">
              <div className={s.sectionHeader}>
                <div className={s.sectionLabel}>Our Portfolio</div>
                <h2 className={cn('h2', s.sectionTitle)}>
                  <AppearTitle>Product Range</AppearTitle>
                </h2>
              </div>
            </ScrollReveal>

            <div className={s.productsGrid}>
              {products.map((product, index) => (
                <ScrollReveal
                  key={product.number}
                  animation="fade-up"
                  delay={index * 80}
                  className={s.productCard}
                >
                  {product.image && (
                    <div className={s.productImage}>
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={600}
                        height={400}
                        className={s.productImageImg}
                        quality={90}
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className={s.productNumber}>{product.number}</div>
                  <h3 className={s.productTitle}>{product.title}</h3>
                  <p className={s.productTagline}>{product.tagline}</p>
                  <p className={s.productDescription}>{product.description}</p>
                  <ul className={s.productFeatures}>
                    {product.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className={s.capabilities}>
          <div className="layout-block">
            <div className={s.capabilitiesGrid}>
              <ScrollReveal animation="fade-right" className={s.capabilitiesContent}>
                <div className={s.sectionLabel}>{functionalFoods.capabilities.label}</div>
                <h2 className={cn('h2', s.sectionTitle)}>
                  <AppearTitle>{functionalFoods.capabilities.title}</AppearTitle>
                </h2>
                <p className={cn('p', s.capabilitiesDescription)}>
                  {functionalFoods.capabilities.description}
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={150} className={s.capabilitiesList}>
                {capabilities.map((item, index) => (
                  <div key={index} className={s.capabilityItem}>
                    <svg className={s.capabilityIcon} viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M6 10L9 13L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Partnership */}
        <section className={s.partnership}>
          <div className="layout-block">
            <ScrollReveal animation="fade-up">
              <div className={s.partnershipHeader}>
                <div className={s.sectionLabel}>{functionalFoods.partnership.label}</div>
                <h2 className={cn('h2', s.sectionTitle)}>
                  {functionalFoods.partnership.title}
                </h2>
              </div>
            </ScrollReveal>

            <div className={s.partnershipGrid}>
              {partnerBenefits.map((benefit, index) => (
                <ScrollReveal
                  key={index}
                  animation="fade-up"
                  delay={index * 80}
                  className={s.partnershipCard}
                >
                  <h3 className={s.partnershipCardTitle}>{benefit.title}</h3>
                  <p className={s.partnershipCardDescription}>{benefit.description}</p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal animation="scale" delay={300} className={s.partnershipCta}>
              <p className={cn('p-l', s.partnershipCtaText)}>
                {functionalFoods.partnership.cta}
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
      id: 'functional-foods',
      seo: seoConfig.functionalFoods,
    },
  }
}
