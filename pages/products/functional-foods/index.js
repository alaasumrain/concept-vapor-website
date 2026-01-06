import cn from 'clsx'
import { Image } from 'components/image'
import { Layout } from 'layouts/default'
import dynamic from 'next/dynamic'
import s from './functional-foods.module.scss'

const AppearTitle = dynamic(
  () => import('components/appear-title').then((mod) => mod.AppearTitle),
  { ssr: false }
)

const ScrollReveal = dynamic(
  () => import('components/scroll-reveal').then((mod) => mod.ScrollReveal),
  { ssr: false }
)

export default function FunctionalFoods() {
  const products = [
    {
      number: '01',
      title: 'Prebiotic Sodas',
      tagline: 'Gut-friendly fizz that tastes amazing',
      description: 'The source of prebiotic fibers is the acacia tree (gum Arabic) which is nutrient dense and highly tolerable by the digestive system.',
      features: [
        'Flavors: Cola, Orange-Mango, Creamy Lime',
        'Naturally sweetened with dates',
        'Enriched with prebiotic fibers',
        'Customizable packaging & volumes',
      ],
      image: '/images/products/functional-foods/prebiotic-sodas.webp',
    },
    {
      number: '02',
      title: 'Hydration Tonics',
      tagline: 'Refreshing carbonated hydration with a wellness boost',
      description: 'Perfect for staying refreshed and energized with a natural boost of energy from dates.',
      features: [
        'Formulated with electrolytes',
        'Botanical extracts',
        'Flexible flavor options',
        'Convenient packaging',
      ],
      image: '/images/products/functional-foods/hydration-tonics.webp',
    },
    {
      number: '03',
      title: 'Energy Fizz Beverages',
      tagline: 'Clean energy that tastes as good as it works',
      description: 'Invigorating energy without compromising taste or wellness.',
      features: [
        'Natural caffeine from green coffee',
        'Taurine & B-complex vitamins',
        'No insulin spikes',
        'Scalable production',
      ],
      image: '/images/products/functional-foods/energy-fizz.webp',
    },
    {
      number: '04',
      title: 'Carbonated Protein Drinks',
      tagline: 'Protein you actually want to drink',
      description: 'A premium, functional beverage that balances nutrition and enjoyment.',
      features: [
        '20g protein per serving',
        'Carbonated & naturally flavored',
        'Post-workout recovery',
        'Custom branding options',
      ],
      image: '/images/products/functional-foods/protein-drinks.webp',
    },
    {
      number: '05',
      title: 'Vitamin & Mineral Gummies',
      tagline: 'Nutrition made fun and delicious',
      description: 'Simple for consumers to get essential nutrients in a tasty, enjoyable way.',
      features: [
        'Clean-label formulation',
        'Naturally sweetened with dates',
        'Low-glycemic',
        'Flexible shapes & flavors',
      ],
      image: '/images/products/functional-foods/vitamin-gummies.webp',
    },
    {
      number: '06',
      title: 'Dietary Supplement Gummies',
      tagline: 'Functional nutrition you\'ll look forward to',
      description: 'A supplement experience that feels like a treat, not a chore.',
      features: [
        'Made from dates & natural ingredients',
        'Low glycemic impact',
        'Custom nutrients & flavors',
        'Premium positioning',
      ],
      image: '/images/products/functional-foods/supplement-gummies.webp',
    },
  ]

  const capabilities = [
    'Flexible formulations & flavors',
    'Custom packaging options',
    'Pilot to full-scale production',
    'Private-label & OEM/ODM support',
    'Rigorous quality control',
  ]

  const partnerBenefits = [
    { title: 'ISO Class 7 & 8', description: 'Cleanroom manufacturing' },
    { title: 'In-house R&D', description: 'Flavor & formulation innovation' },
    { title: 'QA/QC', description: 'Safety & consistency at every stage' },
    { title: 'Scalable', description: 'Global distribution ready' },
  ]

  return (
    <Layout
      theme="light"
      seo={{
        title: 'Functional Foods & Supplements – Concept Vapor Solutions',
        description:
          'Clean-label nutrition powered by dates. Prebiotic sodas, hydration tonics, energy fizz beverages, carbonated protein drinks, and vitamin gummies.',
      }}
    >
      <main className={s.page}>
        {/* Hero */}
        <section className={s.hero}>
          <div className={s.heroImage}>
            <Image
              src="/images/products/functional-foods/functional-foods-hero.webp"
              alt="Functional Foods & Supplements"
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
              <div className={s.heroLabel}>Functional Foods & Supplements</div>
              <h1 className={cn('h1', s.heroTitle)}>
                <AppearTitle>
                  Nourish. Delight. Energize.
                </AppearTitle>
              </h1>
              <p className={cn('p-l', s.heroTagline)}>With Dates</p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className={s.intro}>
          <div className="layout-block">
            <ScrollReveal animation="fade-up">
              <p className={cn('p-l', s.introText)}>
                We believe that wellness should never compromise taste. That's why all our
                functional foods and supplements are crafted around nature's ancient sweet
                superfood: dates.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <p className={cn('p', s.introSubtext)}>
                By building our products around this nutrient-rich, natural ingredient, we create
                delicious, clean-label nutrition that consumers love while offering our B2B partners
                the flexibility to customize flavors, formats, and packaging for their brands.
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
                <div className={s.sectionLabel}>Manufacturing</div>
                <h2 className={cn('h2', s.sectionTitle)}>
                  <AppearTitle>Made By Nature, Designed for Smart Consumers</AppearTitle>
                </h2>
                <p className={cn('p', s.capabilitiesDescription)}>
                  Our functional foods and supplements are easy to love—and easy to customize
                  for your brand's unique positioning.
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
                <div className={s.sectionLabel}>Partnership</div>
                <h2 className={cn('h2', s.sectionTitle)}>
                  Why Partner With Us
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
                We create functional foods and supplements that nourish, delight, and inspire—products
                that people love and brands can trust.
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
    },
  }
}
