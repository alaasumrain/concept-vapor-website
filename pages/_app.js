import Tempus from '@darkroom.engineering/tempus'
import { RealViewport } from 'components/real-viewport'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useScroll } from 'hooks/use-scroll'
import { GTM_ID } from 'lib/analytics'
import { useStore } from 'lib/store'
import { Anton, Roboto } from 'next/font/google'
import Script from 'next/script'
import { useEffect } from 'react'
import 'styles/global.scss'

// Optimize Google Fonts loading - fonts will be self-hosted and optimized by Next.js
// This prevents font flash by preloading and self-hosting fonts
const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-anton',
  preload: true,
})

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-roboto',
  preload: true,
})

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.defaults({ markers: false }) // Disabled debug markers

  // merge rafs
  gsap.ticker.lagSmoothing(0)
  gsap.ticker.remove(gsap.updateRoot)
  Tempus.add((time) => {
    gsap.updateRoot(time / 1000)
  }, 0)
}

function MyApp({ Component, pageProps }) {
  const lenis = useStore(({ lenis }) => lenis)

  useScroll(ScrollTrigger.update)

  useEffect(() => {
    if (lenis) {
      ScrollTrigger.refresh()
      lenis?.start()
    }
  }, [lenis])

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  ScrollTrigger.defaults({ markers: false }) // Disabled debug markers

  return (
    <div className={`${anton.variable} ${roboto.variable}`}>

      {/* Google Tag Manager - Global base code */}
      {process.env.NODE_ENV !== 'development' && (
        <>
          <Script
            async
            strategy="worker"
            src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
          />
          <Script
            id="gtm-base"
            strategy="worker"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GTM_ID}');`,
            }}
          />
        </>
      )}

      <RealViewport />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
