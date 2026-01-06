import cn from 'clsx'
import NextImage from 'next/image'
import { useState } from 'react'
import s from './image.module.scss'

export function Image({ className, onError, transparent = false, ...props }) {
  const [hasError, setHasError] = useState(false)
  
  const handleError = (e) => {
    setHasError(true)
    if (onError) onError(e)
  }

  // If image fails to load, show a placeholder
  if (hasError) {
    return (
      <div 
        className={cn(s.image, s.placeholder, className)}
        style={{ 
          backgroundColor: transparent ? 'transparent' : '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#999',
          fontSize: '14px'
        }}
      >
        Image not found
      </div>
    )
  }

  return (
    <div className={cn(s.container, transparent && s.transparent, className)}>
      <NextImage {...props} className={s.image} onError={handleError} />
    </div>
  )
}
