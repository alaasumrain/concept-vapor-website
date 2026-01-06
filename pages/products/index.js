import cn from 'clsx'
import { Image } from 'components/image'
import { Button } from 'components/button'
import { Layout } from 'layouts/default'
import dynamic from 'next/dynamic'
import s from './products.module.scss'

const ScrollReveal = dynamic(
  () => import('components/scroll-reveal').then((mod) => mod.ScrollReveal),
  { ssr: false }
)

const Parallax = dynamic(
  () => import('components/parallax').then((mod) => mod.Parallax),
  { ssr: false }
)

export default function Products() {
  const divisions = [
    {
      number: '01',
      title: 'Electronic Nicotine Delivery Devices',
      subtitle: 'Precision Engineering for Next-Generation Nicotine Delivery',
      description: 'Our ENDD division specializes in the design and meticulous production of advanced nicotine delivery systems. Every device is engineered to deliver consistent performance, flavor integrity, and exceptional user satisfaction.',
      capabilities: [
        'Single-use prefilled disposable devices',
        'Prefilled single-use pods',
        'Bottled e-liquids under strict controls',
        'High-precision filling and testing',
      ],
      cta: 'Explore ENDD',
      href: '/products/endd',
      image: '/images/products/endd-hero.webp',
    },
    {
      number: '02',
      title: 'Functional Foods & Supplements',
      subtitle: 'Clean-Label Nutrition Powered by Dates',
      description: 'Our functional foods division is built around harnessing the natural goodness of dates as the primary ingredient. We create scientifically formulated products that support gut health, wellness, and energy.',
      capabilities: [
        'Prebiotic sodas and hydration tonics',
        'Energy fizz beverages',
        'Carbonated protein drinks',
        'Vitamin & mineral gummies',
      ],
      cta: 'Explore Foods',
      href: '/products/functional-foods',
      image: '/images/products/functional-foods-hero.webp',
    },
    {
      number: '03',
      title: 'Pharmaceutical Delivery Devices',
      subtitle: 'High-Precision Systems for Safe Delivery',
      description: 'Our pharmaceutical delivery devices are engineered to support reliable, controlled, and safe administration of vitamins, minerals, functional botanicals and pharmaceutical actives.',
      capabilities: [
        'High-accuracy dosing mechanisms',
        'Pharmaceutical compatibility',
        'Cleanroom manufacturing',
        'Full QA/QC and traceability',
      ],
      cta: 'Explore Pharma',
      href: '/products/pharmaceutical',
      image: '/images/products/pharmaceutical-hero.webp',
    },
  ]

  return (
    <Layout theme="light">
      <main className={s.page}>
        {/* Hero */}
        <section className={s.hero}>
          <div className={s.heroContent}>
            <div className={s.heroHeader}>
              <span className={s.heroLabel}>Our Portfolio</span>
            </div>
            <h1 className={s.heroTitle}>
              <span className={s.line}>Precision.</span>
              <span className={s.line}>Performance.</span>
              <span className={s.line}>Purity.</span>
            </h1>
            <p className={s.heroDescription}>
              Concept Vapor Solutions delivers specialized manufacturing excellence across three distinct divisions, 
              each engineered to meet the highest standards of safety and innovation.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className={s.products}>
          <div className="layout-block">
            <div className={s.productsGrid}>
              {divisions.map((division, index) => (
                <ScrollReveal
                  key={division.number}
                  animation="fade-up"
                  delay={index * 100}
                  className={s.productCard}
                >
                  <div className={s.productImage}>
                    <Image
                      src={division.image}
                      alt={division.title}
                      fill
                      className={s.productImageImg}
                      quality={90}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className={s.productContent}>
                    <h2 className={s.productTitle}>{division.title}</h2>
                    <p className={s.productDescription}>{division.subtitle}</p>
                    <Button className={s.productButton} href={division.href}>
                      Learn More
                    </Button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <div className={s.viewAllWrapper}>
              <Button className={s.viewAllButton} href="/products">
                View All Products
              </Button>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className={s.closing}>
          <div className="layout-block">
            <div className={s.closingGrid}>
              <div className={s.closingLabel}>
                <Parallax speed={-0.3}>
                  <div className={s.sectionLabel}>Our Approach</div>
                </Parallax>
              </div>
              <div className={s.closingContent}>
                <ScrollReveal animation="fade-up">
                  <Parallax speed={0.3}>
                    <h2 className={cn('h2', s.closingTitle)}>
                      Specialized Expertise for Every Category
                    </h2>
                    <p className={cn('p', s.closingText)}>
                      Each of our divisions operates with dedicated expertise, tailored production environments,
                      and customized quality protocols to ensure the highest standards of performance and safety.
                    </p>
                  </Parallax>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      id: 'products',
      seo: {
        title: 'Products & Services – Concept Vapor Solutions',
        description:
          'Innovation across three divisions: Electronic Nicotine Delivery Devices, Functional Foods & Supplements, and Pharmaceutical Delivery Devices.',
      },
    },
  }
}
