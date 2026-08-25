import { Clock } from 'lucide-react'
import { motion } from 'motion/react'

import { GlowBackdrop } from '#/components/glow-backdrop'

export function Hours() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32">
      <GlowBackdrop />

      <div className="relative mx-auto max-w-2xl px-6 text-center" style={{ perspective: '1400px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col items-center"
        >
          <span
            className="flex h-16 w-16 items-center justify-center rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
              boxShadow: 'var(--shadow-glow-strong)',
            }}
          >
            <Clock className="h-8 w-8 text-background" strokeWidth={2} />
          </span>
          <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Ωράριο Λειτουργίας
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotateX: -30, y: 40 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="glass-panel rounded-3xl px-8 py-10 text-left sm:px-14 sm:py-12"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="flex items-center justify-between gap-4 py-4">
            <span className="text-lg font-semibold text-foreground">Δευτέρα – Παρασκευή</span>
            <span className="text-gradient font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              9:00 – 17:00
            </span>
          </div>
          <div
            className="flex items-center justify-between gap-4 border-t py-4"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <span className="text-lg font-semibold text-foreground">Σάββατο</span>
            <span className="text-gradient font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              9:00 – 14:00
            </span>
          </div>
          <div
            className="flex items-center justify-between gap-4 border-t py-4"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <span className="text-lg font-semibold text-foreground">Κυριακή</span>
            <span className="text-base font-semibold text-muted-foreground">Κλειστά</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
