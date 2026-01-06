import { useRect } from '@darkroom.engineering/hamo'
import cn from 'clsx'

import { Card } from 'components/card'
import { useScroll } from 'hooks/use-scroll'
import { clamp, mapRange } from 'lib/maths'
import dynamic from 'next/dynamic'
import { useRef, useState } from 'react'
import { useWindowSize } from 'react-use'

const AppearTitle = dynamic(
  () => import('components/appear-title').then((mod) => mod.AppearTitle),
  { ssr: false }
)

import s from './feature-cards.module.scss'

const cards = [
  { text: 'ISO Class 7 & 8 Cleanrooms' },

  {
    text: (
      <>
        GMP-Compliant <br /> Manufacturing
      </>
    ),
  },
  { text: `ESMA & UAE Regulatory Compliance` },
  { text: 'Multi-Format Production Capabilities' },
  {
    text: <>SCIENTIFIC RIGOR & QUALITY ASSURANCE</>,
  },
  { text: 'Integrated R&D & Development' },
  { text: 'End-to-End Supply Chain Solutions' },
  { text: 'Strategic Dubai Location' },
  {
    text: 'Custom Formulation Services',
  },
]

export const FeatureCards = () => {
  const element = useRef()
  const [setRef, rect] = useRect()
  const { height: windowHeight } = useWindowSize()

  const [current, setCurrent] = useState()

  useScroll(
    ({ scroll }) => {
      const start = rect.top - windowHeight * 2
      const end = rect.top + rect.height - windowHeight

      const progress = clamp(0, mapRange(start, end, scroll, 0, 1), 1)

      element.current.style.setProperty(
        '--progress',
        clamp(0, mapRange(rect.top, end, scroll, 0, 1), 1)
      )
      const step = Math.floor(progress * 10)
      setCurrent(step)
    },
    [rect]
  )

  return (
    <div
      ref={(node) => {
        setRef(node)
      }}
      className={s.features}
    >
      <div className={cn('layout-block-inner', s.sticky)}>
        <aside className={s.title}>
          <p className="h3">
            <AppearTitle>
              Our solutions
              <br />
              <span className="grey">deliver excellence</span>
            </AppearTitle>
          </p>
        </aside>
        <div ref={element}>
          {cards.map((card, index) => (
            <SingleCard
              key={index}
              index={index}
              text={card.text}
              number={index + 1}
              current={index <= current - 1}
              total={cards.length}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const SingleCard = ({ text, number, index, current, total }) => {
  // Calculate depth based on index to apply staggered blur and scale
  const depth = total - index

  return (
    <div
      className={cn(s.card, current && s.current)}
      style={{
        '--i': index,
        '--depth': depth,
      }}
    >
      <Card background="rgba(239, 239, 239, 0.8)" number={number} text={text} />
    </div>
  )
}
