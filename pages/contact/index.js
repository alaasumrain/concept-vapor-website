import { Image } from 'components/image'
import { Layout } from 'layouts/default'
import { useState, useRef } from 'react'
import cn from 'clsx'
import s from './contact.module.scss'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef(null)

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const interests = [
    { value: '', label: 'Select area of interest' },
    { value: 'endd', label: 'Electronic Nicotine Delivery Devices' },
    { value: 'functional-foods', label: 'Functional Foods & Supplements' },
    { value: 'pharmaceutical', label: 'Pharmaceutical Delivery Devices' },
    { value: 'private-label', label: 'Private Label / OEM Services' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'other', label: 'Other Inquiry' },
  ]

  return (
    <Layout theme="light">
      <main className={s.page}>
        {/* Hero Section */}
        <section className={s.hero}>
          <div className={s.heroImage}>
            <Image
              src="/images/contact/contact-hero.webp"
              alt="Get in Touch"
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
              <div className={s.heroText}>
                <p className={s.heroLabel}>Get in Touch</p>
                <h1 className={cn('h1', s.heroTitle)}>
                  Let's Build<br />
                  <span className={s.accent}>Together</span>
                </h1>
                <p className={cn('p', s.heroDescription)}>
                  Whether you're exploring manufacturing partnerships, seeking custom formulations,
                  or looking to bring a new product to market, we're here to help turn your vision into reality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={s.contact}>
          <div className={cn('layout-block', s.contactContent)}>
            <div className={s.contactGrid}>
              {/* Form */}
              <div className={s.formWrapper}>
                {isSubmitted ? (
                  <div className={s.success}>
                    <div className={s.successIcon}>
                      <svg viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2"/>
                        <path d="M14 24L21 31L34 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className={cn('h3', s.successTitle)}>Message Sent</h3>
                    <p className={cn('p', s.successText)}>
                      Thank you for reaching out. Our team will review your inquiry and respond within 24-48 hours.
                    </p>
                    <button
                      className={s.successButton}
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormState({
                          name: '',
                          company: '',
                          email: '',
                          phone: '',
                          interest: '',
                          message: '',
                        })
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} className={s.form} onSubmit={handleSubmit}>
                    <div className={s.formHeader}>
                      <h2 className={cn('h4', s.formTitle)}>Business Inquiry</h2>
                      <p className={cn('p-s', s.formSubtitle)}>
                        Fill out the form below and our team will get back to you shortly.
                      </p>
                    </div>

                    <div className={s.formFields}>
                      <div className={s.formRow}>
                        <div className={s.formGroup}>
                          <label htmlFor="name" className={s.label}>Full Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className={s.input}
                            placeholder="Your name"
                          />
                        </div>
                        <div className={s.formGroup}>
                          <label htmlFor="company" className={s.label}>Company *</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formState.company}
                            onChange={handleChange}
                            required
                            className={s.input}
                            placeholder="Company name"
                          />
                        </div>
                      </div>

                      <div className={s.formRow}>
                        <div className={s.formGroup}>
                          <label htmlFor="email" className={s.label}>Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className={s.input}
                            placeholder="your@email.com"
                          />
                        </div>
                        <div className={s.formGroup}>
                          <label htmlFor="phone" className={s.label}>Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className={s.input}
                            placeholder="+971 XX XXX XXXX"
                          />
                        </div>
                      </div>

                      <div className={s.formGroup}>
                        <label htmlFor="interest" className={s.label}>Area of Interest *</label>
                        <div className={s.selectWrapper}>
                          <select
                            id="interest"
                            name="interest"
                            value={formState.interest}
                            onChange={handleChange}
                            required
                            className={s.select}
                          >
                            {interests.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          <svg className={s.selectArrow} viewBox="0 0 12 12" fill="none">
                            <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </div>
                      </div>

                      <div className={s.formGroup}>
                        <label htmlFor="message" className={s.label}>Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          className={s.textarea}
                          rows={5}
                          placeholder="Tell us about your project, requirements, or questions..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className={cn(s.submitButton, isSubmitting && s.submitting)}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className={s.spinner}></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <svg viewBox="0 0 16 16" fill="none">
                            <path d="M3 8H13M10 5L13 8L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className={s.info}>
                <div className={s.infoSection}>
                  <h3 className={s.infoLabel}>Location</h3>
                  <p className={s.infoText}>
                    Jebel Ali Free Zone<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>

                <div className={s.infoSection}>
                  <h3 className={s.infoLabel}>Email</h3>
                  <a href="mailto:info@conceptvapor.com" className={s.infoLink}>
                    info@conceptvapor.com
                  </a>
                </div>

                <div className={s.infoSection}>
                  <h3 className={s.infoLabel}>Connect</h3>
                  <a
                    href="https://linkedin.com/company/conceptvapor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.infoLink}
                  >
                    LinkedIn
                    <svg viewBox="0 0 12 12" fill="none">
                      <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </a>
                </div>

                <div className={s.infoHighlight}>
                  <p className={s.infoHighlightText}>
                    Ready to discuss your project in detail? Schedule a call with our business development team.
                  </p>
                  <a href="mailto:info@conceptvapor.com?subject=Schedule%20a%20Call" className={s.scheduleLink}>
                    Schedule a Call
                    <svg viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M10 5L13 8L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className={s.location}>
          <div className={cn('layout-block', s.locationContent)}>
            <div className={s.locationGrid}>
              <div className={s.locationText}>
                <p className={s.locationLabel}>Our Facility</p>
                <h2 className={cn('h2', s.locationTitle)}>
                  Strategically Located
                </h2>
                <p className={cn('p', s.locationDescription)}>
                  Our state-of-the-art manufacturing facility in Jebel Ali Free Zone
                  provides seamless access to global shipping routes, enabling efficient
                  distribution to markets across the Middle East, Asia, Europe, and beyond.
                </p>
                <div className={s.locationFeatures}>
                  <div className={s.locationFeature}>
                    <span className={s.featureNumber}>15</span>
                    <span className={s.featureText}>Minutes to Port</span>
                  </div>
                  <div className={s.locationFeature}>
                    <span className={s.featureNumber}>25</span>
                    <span className={s.featureText}>Minutes to Airport</span>
                  </div>
                  <div className={s.locationFeature}>
                    <span className={s.featureNumber}>180+</span>
                    <span className={s.featureText}>Countries Accessible</span>
                  </div>
                </div>
              </div>
              <div className={s.locationMapWrapper}>
                <div className={s.locationMap}>
                  <div className={s.mapPlaceholder}>
                    <svg viewBox="0 0 24 24" fill="none" className={s.mapIcon}>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <p>Jebel Ali Free Zone, Dubai</p>
                  </div>
                </div>
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
      id: 'contact',
      seo: {
        title: 'Contact Us – Concept Vapor Solutions',
        description:
          'Get in touch with Concept Vapor Solutions for manufacturing partnerships, custom formulations, and business inquiries. Located in Jebel Ali Free Zone, Dubai.',
      },
    },
  }
}
