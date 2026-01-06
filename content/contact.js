export const contact = {
  hero: {
    label: 'Get in Touch',
    title: {
      line1: "Let's Build",
      line2: 'Together',
    },
    description:
      "Whether you're exploring manufacturing partnerships, seeking custom formulations, or looking to bring a new product to market, we're here to help turn your vision into reality.",
    image: '/images/contact/contact-hero.webp',
  },
  form: {
    title: 'Business Inquiry',
    subtitle: 'Fill out the form below and our team will get back to you shortly.',
    fields: {
      name: { label: 'Full Name *', placeholder: 'Your name' },
      company: { label: 'Company *', placeholder: 'Company name' },
      email: { label: 'Email Address *', placeholder: 'your@email.com' },
      phone: { label: 'Phone Number', placeholder: '+971 XX XXX XXXX' },
      interest: {
        label: 'Area of Interest *',
        options: [
          { value: '', label: 'Select area of interest' },
          { value: 'endd', label: 'Electronic Nicotine Delivery Devices' },
          { value: 'functional-foods', label: 'Functional Foods & Supplements' },
          { value: 'pharmaceutical', label: 'Pharmaceutical Delivery Devices' },
          { value: 'private-label', label: 'Private Label / OEM Services' },
          { value: 'partnership', label: 'Partnership Opportunities' },
          { value: 'other', label: 'Other Inquiry' },
        ],
      },
      message: {
        label: 'Message *',
        placeholder: 'Tell us about your project, requirements, or questions...',
      },
    },
    submit: 'Send Inquiry',
    success: {
      title: 'Message Sent',
      text: 'Thank you for reaching out. Our team will review your inquiry and respond within 24-48 hours.',
      button: 'Send Another Message',
    },
  },
  info: {
    location: {
      label: 'Location',
      text: ['Jebel Ali Free Zone', 'Dubai, United Arab Emirates'],
    },
    email: {
      label: 'Email',
      value: 'info@conceptvapor.com',
    },
    connect: {
      label: 'Connect',
      links: [{ label: 'LinkedIn', href: 'https://linkedin.com/company/conceptvapor' }],
    },
    highlight: {
      text: 'Ready to discuss your project in detail? Schedule a call with our business development team.',
      cta: { label: 'Schedule a Call', href: 'mailto:info@conceptvapor.com?subject=Schedule%20a%20Call' },
    },
  },
  location: {
    label: 'Our Facility',
    title: 'Strategically Located',
    description:
      'Our state-of-the-art manufacturing facility in Jebel Ali Free Zone provides seamless access to global shipping routes, enabling efficient distribution to markets across the Middle East, Asia, Europe, and beyond.',
    stats: [
      { number: '15', label: 'Minutes to Port' },
      { number: '25', label: 'Minutes to Airport' },
      { number: '180+', label: 'Countries Accessible' },
    ],
    mapLabel: 'Jebel Ali Free Zone, Dubai',
  },
}




