import { Phone, Wrench } from 'lucide-react'
import { motion } from 'motion/react'

import { site } from '#/lib/site'

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="glass-panel mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:mx-4 sm:px-6 lg:mx-auto">
        <a href="#hero" className="flex items-center gap-2.5">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
              boxShadow: 'var(--shadow-glow)',
            }}
          >
            <Wrench className="h-5 w-5 text-background" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-extrabold tracking-wide text-foreground sm:text-xl">
            {site.brand}
          </span>
        </a>

        <a
          href={site.phoneHref}
          className="flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-105 sm:px-5 sm:text-base"
          style={{
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
            boxShadow: 'var(--shadow-glow)',
          }}
        >
          <Phone className="h-4 w-4" strokeWidth={2.5} />
          <span>Καλέστε</span>
        </a>
      </div>
    </motion.header>
  )
}
