import cn from 'clsx'
import { Image } from 'components/image'
import { Layout } from 'layouts/default'
import dynamic from 'next/dynamic'
import s from './endd.module.scss'

const AppearTitle = dynamic(
  () => import('components/appear-title').then((mod) => mod.AppearTitle),
  { ssr: false }
)

const ScrollReveal = dynamic(
  () => import('components/scroll-reveal').then((mod) => mod.ScrollReveal),
  { ssr: false }
)

export default function ENDD() {
  const products = [
    {
      number: '01',
      title: 'Bottled E-Liquids',
      tagline: 'Crafted for purity, stability, and exceptional sensory performance',
      description: 'Our e-liquids are developed with careful attention to flavor fidelity, vapor performance, and consumer experience—offering unmatched consistency across batches.',
      features: [
        'Manufactured under strict cleanroom conditions',
        'Wide variety of flavor profiles and nicotine strengths',
        'Freebase and nicotine salt formulations',
        'Customizable bottle sizes and dispensing options',
        'Tamper-evident and child-resistant packaging',
      ],
      image: '/images/products/endd/e-liquids.png',
    },
    {
      number: '02',
      title: 'Disposable Prefilled Devices',
      tagline: 'High-performance all-in-one devices engineered for convenience',
      description: 'Each device is assembled, filled, and sealed with advanced leak-prevention and quality control protocols to ensure superior stability and safety.',
      features: [
        'Multiple battery capacities and coil technologies',
        'Adjustable or fixed airflow options',
        'Various tank volumes and puff counts',
        'Full customization of materials and finishes',
        'Branding options including wraps and custom molds',
      ],
      image: '/images/products/endd/disposable-devices.png',
    },
    {
      number: '03',
      title: 'Disposable Prefilled Pods',
      tagline: 'Precision-engineered pods compatible with a wide range of systems',
      description: 'We provide fully integrated pod manufacturing—from formulation and filling to final assembly and packaging.',
      features: [
        'Leak-resistant pod structures',
        'Coil technologies optimized for flavor delivery',
        'Wide flavor and nicotine strength catalog',
        'Custom pod shapes and capacities',
        'High-speed automated filling and sealing',
      ],
      image: '/images/products/endd/pods.png',
    },
    {
      number: '04',
      title: 'Snus Pouches',
      tagline: 'Modern smokeless alternative for smooth, discreet delivery',
      description: 'Our snus pouches are engineered for consistent release, clean mouthfeel, and stable flavor, offering brands a premium smokeless experience.',
      features: [
        'Multiple nicotine concentrations available',
        'Extensive flavor options including mint and fruit',
        'Moist and dry pouch formats',
        'Customizable pouch size and texture',
        'Private-label and OEM support',
      ],
      image: '/images/products/endd/snus-pouches.png',
    },
    {
      number: '05',
      title: 'Quit-Vaping Assisting Products',
      tagline: 'Supporting wellness-focused alternatives for transition',
      description: 'These solutions help brands serve consumers seeking healthier alternatives while maintaining the sensory familiarity they expect.',
      features: [
        'Nicotine and nicotine-free formulations',
        'Behavior-supportive flavor profiles',
        'Reduced-intensity devices for step-down programs',
        'Custom formulations for non-nicotine products',
      ],
      image: '/images/products/endd/quit-vaping.png',
    },
  ]

  const capabilities = [
    'ISO Class 7 & 8 cleanroom manufacturing',
    'Advanced leak-prevention protocols',
    'High-speed automated production lines',
    'Compliance-driven documentation',
    'Global regulatory alignment',
  ]

  const partnerBenefits = [
    { title: 'Cleanrooms', description: 'ISO Class 7 & 8 certified' },
    { title: 'Flexibility', description: 'Custom formats & flavors' },
    { title: 'Quality', description: 'Rigorous QA/QC protocols' },
    { title: 'Scale', description: 'Pilot to mass production' },
  ]

  return (
    <Layout
      theme="light"
      seo={{
        title: 'Electronic Nicotine Delivery Devices – Concept Vapor Solutions',
        description:
          'High-precision ENDD manufacturing for next-generation nicotine delivery. Single-use devices, pods, bottled e-liquids, and snus pouches.',
      }}
    >
      <main className={s.page}>
        {/* Hero */}
        <section className={s.hero}>
          <div className={s.heroImage}>
            <Image
              src="/images/products/endd/endd-hero.png"
              alt="Electronic Nicotine Delivery Devices"
              fill
              className={s.heroImageBg}
              priority
              sizes="100vw"
              quality={90}
              loading="eager"
            />
          </div>
          <div className={s.heroOverlay}>
            <div className={cn('layout-block', s.heroContent)}>
              <div className={s.heroLabel}>Electronic Nicotine Delivery Devices</div>
              <h1 className={cn('h1', s.heroTitle)}>
                <AppearTitle>
                  Precision. Purity. Performance.
                </AppearTitle>
              </h1>
              <p className={cn('p-l', s.heroTagline)}>Next-Generation Nicotine Delivery</p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className={s.intro}>
          <div className="layout-block">
            <ScrollReveal animation="fade-up">
              <p className={cn('p-l', s.introText)}>
                Our ENDD division is engineered to support brands, distributors, and private-label partners
                seeking world-class manufacturing with uncompromising quality.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <p className={cn('p', s.introSubtext)}>
                Every product is crafted inside ISO Class 7 and 8 cleanrooms, ensuring purity, consistency,
                and regulatory alignment at every stage of production. We deliver the precision, reliability,
                and adaptability required in this dynamic global category.
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
                  <AppearTitle>Product Capabilities</AppearTitle>
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
                  <AppearTitle>Built for Scale & Precision</AppearTitle>
                </h2>
                <p className={cn('p', s.capabilitiesDescription)}>
                  Our ENDD manufacturing combines advanced automation with rigorous quality control,
                  delivering consistent results from pilot batches to full-scale production.
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
                Whether you're launching a new brand, scaling an existing product line, or seeking specialized
                contract manufacturing, we deliver the precision and reliability you need.
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
      id: 'endd',
    },
  }
}
