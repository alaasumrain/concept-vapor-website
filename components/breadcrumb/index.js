import { useRouter } from 'next/router'
import { Link } from 'components/link'
import cn from 'clsx'
import s from './breadcrumb.module.scss'

// Map paths to readable names
const pathNames = {
  '': 'Home',
  'home': 'Home',
  'about': 'About',
  'facility': 'Facility',
  'products': 'Products',
  'endd': 'ENDD',
  'functional-foods': 'Functional Foods',
  'pharmaceutical': 'Pharmaceutical',
  'contact': 'Contact',
  'careers': 'Careers',
}

export function Breadcrumb({ className }) {
  const router = useRouter()
  const pathname = router.pathname

  // Don't show breadcrumbs on homepage
  if (pathname === '/' || pathname === '/home') {
    return null
  }

  // Build breadcrumb items from path
  const pathSegments = pathname.split('/').filter(Boolean)
  const breadcrumbs = [
    { href: '/', label: 'Home' },
  ]

  let currentPath = ''
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const isLast = index === pathSegments.length - 1
    breadcrumbs.push({
      href: isLast ? null : currentPath,
      label: pathNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
      isActive: isLast,
    })
  })

  return (
    <nav className={cn(s.breadcrumb, className)} aria-label="Breadcrumb">
      <div className="layout-block">
        <ol className={s.list}>
          {breadcrumbs.map((item, index) => (
            <li key={index} className={s.item}>
              {item.href ? (
                <Link href={item.href} className={s.link}>
                  {item.label}
                </Link>
              ) : (
                <span className={cn(s.link, s.active)} aria-current="page">
                  {item.label}
                </span>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className={s.separator} aria-hidden="true">/</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
