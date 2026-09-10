import { MapPin, Phone } from 'lucide-react'
import { motion } from 'motion/react'

import { site } from '#/lib/site'
import { CarSilhouette } from '#/components/car-silhouette'

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="absolute inset-x-0 bottom-0 flex justify-center opacity-40">
        <CarSilhouette className="h-40 w-full max-w-3xl" />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 80% at 50% 100%, color-mix(in oklab, var(--color-primary) 20%, transparent) 0%, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
          Έλα να γνωριστούμε.
        </h2>
        <p className="mt-5 max-w-lg text-lg text-muted">
          Το συνεργείο μας είναι εδώ για να φροντίσει το αυτοκίνητό σου με
          εμπειρία, συνέπεια και αγάπη για τη δουλειά.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
            Βρείτε μας στο χάρτη
          </a>
        </div>
      </motion.div>
    </section>
  )
}
