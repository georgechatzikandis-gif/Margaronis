import { Award, Clock, ShieldCheck } from 'lucide-react'
import { motion } from 'motion/react'

const stats = [
  { icon: Award, value: '25+', label: 'Χρόνια εμπειρίας' },
  { icon: Clock, value: '9–17', label: 'Ωράριο Δευτ–Παρ' },
  { icon: ShieldCheck, value: '100%', label: 'Εγγύηση εργασιών' },
]

export function StatsStrip() {
  return (
    <section className="relative border-y border-border bg-surface">
      <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center gap-2 px-6 py-10 text-center"
          >
            <stat.icon className="mb-1 h-6 w-6" style={{ color: 'var(--color-accent)' }} strokeWidth={2} />
            <span className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              {stat.value}
            </span>
            <span className="text-sm text-muted">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
