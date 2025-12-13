import cn from 'clsx'
import { Link } from 'components/link'
import { useRouter } from 'next/router'
import { forwardRef, useState, useEffect, useRef } from 'react'
import s from './header.module.scss'

export const Header = forwardRef((_, ref) => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false)
  const [isMobileSubnavOpen, setIsMobileSubnavOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef(null)
  const dropdownTimeout = useRef(null)

  // Track scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
    setIsDesktopDropdownOpen(false)
    setIsMobileSubnavOpen(false)
  }, [router.pathname])

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDesktopDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setIsDesktopDropdownOpen(true)
  }

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDesktopDropdownOpen(false)
    }, 150)
  }

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/facility', label: 'FACILITY' },
    {
      href: '/products',
      label: 'PRODUCTS',
      dropdown: [
        { href: '/products/endd', label: 'ENDD', subtitle: 'Electronic Nicotine Delivery' },
        { href: '/products/functional-foods', label: 'FUNCTIONAL FOODS', subtitle: 'Date-Based Nutrition' },
        { href: '/products/pharmaceutical', label: 'PHARMACEUTICAL', subtitle: 'Precision Delivery Devices' },
      ]
    },
    { href: '/contact', label: 'CONTACT' },
  ]

  const isActive = (href) => {
    if (href === '/') {
      return router.pathname === '/home' || router.pathname === '/'
    }
    return router.pathname === href || router.pathname.startsWith(href + '/')
  }

  return (
    <header className={cn(s.header, isScrolled && s.scrolled, isMenuOpen && s.menuOpen)} ref={ref}>
      <div className={cn('layout-block', s.container)}>
        <div className={s.head}>
          {/* Logo */}
          <Link href="/" className={s.logo}>
            <div className={s.logoIcon}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Hexagon outline */}
                <polygon
                  points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Inner molecular structure */}
                <circle cx="50" cy="30" r="5" fill="currentColor"/>
                <circle cx="30" cy="50" r="4" fill="currentColor"/>
                <circle cx="70" cy="50" r="4" fill="currentColor"/>
                <circle cx="50" cy="70" r="5" fill="currentColor"/>
                {/* Connecting lines */}
                <line x1="50" y1="35" x2="50" y2="65" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="34" y1="50" x2="66" y2="50" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="50" y1="30" x2="30" y2="50" stroke="currentColor" strokeWidth="1"/>
                <line x1="50" y1="30" x2="70" y2="50" stroke="currentColor" strokeWidth="1"/>
                <line x1="30" y1="50" x2="50" y2="70" stroke="currentColor" strokeWidth="1"/>
                <line x1="70" y1="50" x2="50" y2="70" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </div>
            <div className={s.logoText}>
              <span className={s.logoPrimary}>CONCEPT VAPOR</span>
              <span className={s.logoSecondary}>SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={s.nav}>
            {navLinks.map((link) => (
              link.dropdown ? (
                <div
                  key={link.href}
                  className={s.dropdownContainer}
                  ref={dropdownRef}
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={link.href}
                    className={cn(s.navLink, isActive(link.href) && s.active, s.hasDropdown)}
                  >
                    {link.label}
                    <svg className={cn(s.dropdownArrow, isDesktopDropdownOpen && s.open)} viewBox="0 0 12 12" fill="none">
                      <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </Link>

                  <div className={cn(s.dropdown, isDesktopDropdownOpen && s.open)}>
                    <div className={s.dropdownInner}>
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(s.dropdownItem, isActive(item.href) && s.active)}
                          style={{ '--delay': `${idx * 50}ms` }}
                        >
                          <span className={s.dropdownLabel}>{item.label}</span>
                          <span className={s.dropdownSubtitle}>{item.subtitle}</span>
                        </Link>
                      ))}
                      <div className={s.dropdownFooter}>
                        <Link href="/products" className={s.dropdownViewAll}>
                          View All Products
                          <svg viewBox="0 0 16 16" fill="none">
                            <path d="M3 8H13M10 5L13 8L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(s.navLink, isActive(link.href) && s.active)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(s.menuToggle, isMenuOpen && s.menuOpen)}
            onClick={() => {
              const newState = !isMenuOpen
              setIsMenuOpen(newState)
              // Reset subnav when closing menu
              if (!newState) {
                setIsMobileSubnavOpen(false)
              }
            }}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(s.mobileNav, isMenuOpen && s.open)}>
          <nav className={s.mobileNavInner}>
            {navLinks.map((link, idx) => (
              link.dropdown ? (
                <div key={link.href} className={s.mobileDropdown}>
                  <div
                    className={cn(s.mobileNavLink, s.mobileDropdownTrigger, isMobileSubnavOpen && s.open)}
                    onClick={() => setIsMobileSubnavOpen(!isMobileSubnavOpen)}
                    style={{ '--delay': `${idx * 80}ms` }}
                  >
                    {link.label}
                    <svg className={s.mobileArrow} viewBox="0 0 12 12" fill="none">
                      <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className={cn(s.mobileSubnav, isMobileSubnavOpen && s.open)}>
                    {link.dropdown.map((item, subIdx) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={s.mobileSubnavLink}
                        onClick={() => setIsMenuOpen(false)}
                        style={{ '--delay': `${(idx * 80) + (subIdx * 50)}ms` }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(s.mobileNavLink, isActive(link.href) && s.active)}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ '--delay': `${idx * 80}ms` }}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          <div className={s.mobileFooter}>
            <a href="mailto:info@conceptvapor.com" className={s.mobileContact}>
              info@conceptvapor.com
            </a>
            <p className={s.mobileLocation}>Jebel Ali Free Zone, Dubai</p>
          </div>
        </div>
      </div>
    </header>
  )
})

Header.displayName = 'Header'
