import cn from 'clsx'
import { Image } from 'components/image'
import { Button } from 'components/button'
import { Layout } from 'layouts/default'
import dynamic from 'next/dynamic'
import s from './products.module.scss'
import { productsContent } from 'content/products'
import { seoConfig } from 'content/seo'

const ScrollReveal = dynamic(
  () => import('components/scroll-reveal').then((mod) => mod.ScrollReveal),
  { ssr: false }
)

const Parallax = dynamic(
  () => import('components/parallax').then((mod) => mod.Parallax),
  { ssr: false }
)

export default function Products() {
  const divisions = productsContent.divisions

  return (
    <Layout theme="light">
      <main className={s.page}>
        {/* Hero */}
        <section className={s.hero}>
          <div className={s.heroContent}>
            <div className={s.heroHeader}>
              <span className={s.heroLabel}>{productsContent.hero.label}</span>
            </div>
            <h1 className={s.heroTitle}>
              {productsContent.hero.title.map((line, i) => (
                <span key={i} className={s.line}>{line}</span>
              ))}
            </h1>
            <p className={s.heroDescription}>
              {productsContent.hero.description}
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
                  <div className={s.sectionLabel}>{productsContent.closing.label}</div>
                </Parallax>
              </div>
              <div className={s.closingContent}>
                <ScrollReveal animation="fade-up">
                  <Parallax speed={0.3}>
                    <h2 className={cn('h2', s.closingTitle)}>
                      {productsContent.closing.title}
                    </h2>
                    <p className={cn('p', s.closingText)}>
                      {productsContent.closing.text}
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
      seo: seoConfig.products,
    },
  }
}
