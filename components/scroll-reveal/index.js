import { useEffect, useRef, useState } from 'react'
import { useIntersection } from 'react-use'
import cn from 'clsx'
import s from './scroll-reveal.module.scss'

/**
 * ScrollReveal - A component that reveals its children with an animation when scrolled into view
 *
 * @param {string} animation - The animation type: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale'
 * @param {number} delay - Animation delay in milliseconds
 * @param {number} duration - Animation duration in milliseconds
 * @param {string} threshold - Intersection threshold (0-1)
 * @param {boolean} once - If true, animation only plays once
 * @param {string} className - Additional class names
 */
export function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  threshold = 0.2,
  once = true,
  className,
  style,
  as: Component = 'div',
}) {
  const ref = useRef()
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  const intersection = useIntersection(ref, {
    threshold: threshold,
    rootMargin: '0px 0px -50px 0px',
  })

  useEffect(() => {
    if (intersection?.isIntersecting && (!once || !hasAnimated)) {
      setIsVisible(true)
      if (once) {
        setHasAnimated(true)
      }
    } else if (!once && !intersection?.isIntersecting) {
      setIsVisible(false)
    }
  }, [intersection, once, hasAnimated])

  return (
    <Component
      ref={ref}
      className={cn(s.reveal, s[animation], isVisible && s.visible, className)}
      style={{
        '--delay': `${delay}ms`,
        '--duration': `${duration}ms`,
        ...style,
      }}
    >
      {children}
    </Component>
  )
}

/**
 * ScrollRevealGroup - Automatically staggers animations for children
 */
export function ScrollRevealGroup({
  children,
  animation = 'fade-up',
  stagger = 100,
  duration = 800,
  threshold = 0.1,
  className,
  as: Component = 'div',
}) {
  const ref = useRef()
  const [isVisible, setIsVisible] = useState(false)

  const intersection = useIntersection(ref, {
    threshold: threshold,
    rootMargin: '0px 0px -50px 0px',
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setIsVisible(true)
    }
  }, [intersection])

  return (
    <Component ref={ref} className={cn(s.group, isVisible && s.visible, className)}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn(s.reveal, s[animation], isVisible && s.visible)}
              style={{
                '--delay': `${index * stagger}ms`,
                '--duration': `${duration}ms`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </Component>
  )
}
