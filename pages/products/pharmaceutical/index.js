import cn from 'clsx'
import { Image } from 'components/image'
import { Layout } from 'layouts/default'
import dynamic from 'next/dynamic'
import s from './pharmaceutical.module.scss'

const AppearTitle = dynamic(
  () => import('components/appear-title').then((mod) => mod.AppearTitle),
  { ssr: false }
)

const ScrollReveal = dynamic(
  () => import('components/scroll-reveal').then((mod) => mod.ScrollReveal),
  { ssr: false }
)

export default function Pharmaceutical() {
  const products = [
    {
      number: '01',
      title: 'High-Accuracy Dosing Devices',
      tagline: 'Precision-engineered systems for exact delivery',
      description: 'Reliable dosing ensures your products consistently deliver the intended health benefits with every use.',
      features: [
        'Supports vitamins, minerals, and pharmaceutical compounds',
        'Available in various dosing formats and capacities',
        'Consumer-friendly, safe administration',
        'Customizable packaging and branding',
      ],
      image: '/images/products/pharmaceutical/dosing-devices.png',
    },
    {
      number: '02',
      title: 'Device Formats for Every Application',
      tagline: 'Flexible, scalable, and tailored for your vision',
      description: 'Our design flexibility allows you to differentiate your product line while maintaining compliance and safety.',
      features: [
        'Single-dose and multi-dose devices',
        'Oral, inhalable, and alternative delivery formats',
        'Customizable sizes, shapes, and materials',
        'Compatible with various active compounds',
      ],
      image: '/images/products/pharmaceutical/device-formats.png',
    },
    {
      number: '03',
      title: 'Private-Label & OEM Solutions',
      tagline: 'Bringing pharmaceutical-grade products to market',
      description: 'We work as an extension of your team, helping you deliver safe, effective, and market-ready products.',
      features: [
        'End-to-end manufacturing in classified environments',
        'Custom device mechanics and labeling',
        'Scalable from pilot batches to commercial volumes',
        'Regulatory compliance documentation support',
      ],
      image: '/images/products/pharmaceutical/oem-solutions.png',
    },
    {
      number: '04',
      title: 'Consumer-Friendly Delivery',
      tagline: 'Intuitive, reliable, and convenient devices',
      description: 'We focus on devices that consumers can trust and enjoy using, bridging clinical performance and everyday usability.',
      features: [
        'Easy-to-use, ergonomic designs',
        'Intuitive dosing and operation',
        'Tamper-evident and transport-stable',
        'Adaptable for health and wellness markets',
      ],
      image: '/images/products/pharmaceutical/consumer-delivery.png',
    },
  ]

  const capabilities = [
    'ISO-certified cleanroom manufacturing',
    'Flexible device design and formulation',
    'Full R&D support for product innovation',
    'Rigorous QA/QC and regulatory compliance',
    'Scalable production for global distribution',
  ]

  const partnerBenefits = [
    { title: 'Precision', description: 'High-accuracy dosing systems' },
    { title: 'Compliance', description: 'ISO Class 7 & 8 certified' },
    { title: 'Innovation', description: 'Full R&D support' },
    { title: 'Trust', description: 'Consumer safety focused' },
  ]

  return (
    <Layout
      theme="light"
      seo={{
        title: 'Pharmaceutical Delivery Devices – Concept Vapor Solutions',
        description:
          'Precision delivery. Reliable performance. High-precision systems for safe and effective nutrient and drug delivery.',
      }}
    >
      <main className={s.page}>
        {/* Hero */}
        <section className={s.hero}>
          <div className={s.heroImage}>
            <Image
              src="/images/products/pharmaceutical/pharmaceutical-hero.png"
              alt="Pharmaceutical Delivery Devices"
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
              <div className={s.heroLabel}>Pharmaceutical Delivery Devices</div>
              <h1 className={cn('h1', s.heroTitle)}>
                <AppearTitle>
                  Precision Delivery. Reliable Performance.
                </AppearTitle>
              </h1>
              <p className={cn('p-l', s.heroTagline)}>High-Precision Systems for Safe Delivery</p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className={s.intro}>
          <div className="layout-block">
            <ScrollReveal animation="fade-up">
              <p className={cn('p-l', s.introText)}>
                We understand that pharmaceutical delivery is about more than just dispensing nutrients or
                active compounds—it's about safety, accuracy, and consumer trust.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <p className={cn('p', s.introSubtext)}>
                Our pharmaceutical delivery devices are manufactured in ISO Class 7 and 8 cleanrooms,
                ensuring the highest standards of hygiene, quality, and regulatory compliance. Each device
                is designed to deliver vitamins, minerals, and pharmaceutical actives effectively,
                reliably, and consistently.
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
                  <AppearTitle>Product Offerings</AppearTitle>
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
                  <AppearTitle>Built for Flexibility</AppearTitle>
                </h2>
                <p className={cn('p', s.capabilitiesDescription)}>
                  Our pharmaceutical delivery division is engineered for partner success, combining
                  state-of-the-art engineering, scientific rigor, and flexible design.
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
                We don't just produce pharmaceutical delivery devices—we craft systems that ensure
                efficacy, safety, and satisfaction, empowering your brand and supporting healthier consumers.
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
      id: 'pharmaceutical',
    },
  }
}
