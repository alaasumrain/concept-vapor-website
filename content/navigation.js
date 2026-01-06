export const navigation = {
  links: [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/facility', label: 'FACILITY' },
    {
      href: '/products',
      label: 'PRODUCTS',
      dropdown: [
        {
          href: '/products/endd',
          label: 'ENDD',
          subtitle: 'Electronic Nicotine Delivery',
        },
        {
          href: '/products/functional-foods',
          label: 'FUNCTIONAL FOODS',
          subtitle: 'Date-Based Nutrition',
        },
        {
          href: '/products/pharmaceutical',
          label: 'PHARMACEUTICAL',
          subtitle: 'Precision Delivery Devices',
        },
      ],
    },
    { href: '/contact', label: 'CONTACT' },
  ],
  footer: {
    text: 'Concept Vapor Solutions',
    developedBy: {
      label: 'Sumrain Technologies',
      href: 'https://sumrain.ai',
    },
    location: 'Jebel Ali Free Zone, Dubai',
    email: 'info@conceptvapor.com',
  },
}




