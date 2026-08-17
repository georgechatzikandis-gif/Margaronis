import { Disc, Disc3, ScanSearch, Settings2 } from 'lucide-react'
import { motion } from 'motion/react'

const services = [
  {
    icon: Settings2,
    title: 'Γενικό Service',
    description:
      'Πλήρης έλεγχος και συντήρηση σύμφωνα με τις προδιαγραφές του κατασκευαστή, με γνήσια ή ισοδύναμα ανταλλακτικά.',
  },
  {
    icon: Disc,
    title: 'Φρένα',
    description:
      'Έλεγχος, συντήρηση και αντικατάσταση δισκόπλακων και τακακιών για μέγιστη ασφάλεια σε κάθε φρενάρισμα.',
  },
  {
    icon: Disc3,
    title: 'Ελαστικά & Ζυγοστάθμιση',
    description:
      'Αλλαγή ελαστικών, ζυγοστάθμιση και ευθυγράμμιση για σταθερότητα, άνεση και μεγαλύτερη διάρκεια ζωής.',
  },
  {
    icon: ScanSearch,
    title: 'Διάγνωση Βλαβών',
    description:
      'Ηλεκτρονική διάγνωση με σύγχρονο εξοπλισμό για γρήγορο και ακριβή εντοπισμό κάθε βλάβης.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span
            className="text-sm font-semibold uppercase tracking-[0.3em]"
            style={{ color: 'var(--color-accent)' }}
          >
            Υπηρεσίες
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Ό,τι χρειάζεται το αυτοκίνητό σου.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2" style={{ perspective: '1400px' }}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, rotateY: i % 2 === 0 ? -35 : 35, y: 40 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="glass-panel group relative overflow-hidden rounded-3xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className="relative flex h-44 items-center justify-center overflow-hidden sm:h-52"
                style={{
                  background:
                    'radial-gradient(60% 100% at 50% 0%, color-mix(in oklab, var(--color-primary) 35%, transparent) 0%, transparent 70%), linear-gradient(160deg, var(--color-surface-elevated), var(--color-surface))',
                }}
              >
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      'linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                />
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                    boxShadow: 'var(--shadow-glow-strong)',
                  }}
                >
                  <service.icon className="h-9 w-9 text-background" strokeWidth={2} />
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
