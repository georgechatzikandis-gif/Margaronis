import { useRef } from 'react'
import { MapPin, Phone } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'

import { site } from '#/lib/site'
import { CarSilhouette } from '#/components/car-silhouette'
import { ScrollIndicator } from '#/components/scroll-indicator'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const carY = useTransform(scrollYProgress, [0, 1], [0, 220])
  const carScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const carRotate = useTransform(scrollYProgress, [0, 1], [0, -6])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.95])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(80% 60% at 50% 0%, color-mix(in oklab, var(--color-primary) 22%, transparent) 0%, transparent 60%), linear-gradient(180deg, var(--color-background) 0%, var(--color-surface) 55%, var(--color-background) 100%)',
        }}
      />

      <motion.div
        className="absolute inset-x-0 bottom-0 flex justify-center"
        style={{ y: carY, scale: carScale, rotate: carRotate, transformStyle: 'preserve-3d' }}
      >
        <CarSilhouette className="h-[36vh] w-[90vw] max-w-4xl opacity-70 sm:h-[42vh]" />
      </motion.div>

      <motion.div className="absolute inset-0" style={{ opacity: overlayOpacity }}>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, var(--color-background) 92%)',
          }}
        />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground"
        >
          <span
            className="animate-pulse-slow h-2 w-2 rounded-full"
            style={{ background: 'var(--color-accent)', boxShadow: '0 0 10px var(--color-accent)' }}
          />
          {site.hoursOpenBadge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">ΜΑΡΓΑΡΩΝΗΣ</span>
          <br />
          SERVICE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 max-w-xl text-balance text-lg text-muted sm:text-xl"
        >
          Το αυτοκίνητό σου σε έμπειρα χέρια. Service, φρένα, ελαστικά και
          διάγνωση βλαβών με ακρίβεια, ταχύτητα και εγγύηση.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href={site.phoneHref}
            className="flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-semibold text-background transition-transform hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
              boxShadow: 'var(--shadow-glow-strong)',
            }}
          >
            <Phone className="h-5 w-5" strokeWidth={2.5} />
            Κάλεσε τώρα
          </a>
          <a
            href={site.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="glass-panel flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-semibold text-foreground transition-transform hover:scale-105"
          >
            <MapPin className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
            Οδηγίες
          </a>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  )
}
