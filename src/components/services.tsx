import { Disc, Disc3, ScanSearch, Settings2 } from 'lucide-react'
import { motion } from 'motion/react'

const services = [
  {
    icon: Settings2,
    title: 'Γενικό Service',
    description:
      'Πλήρης έλεγχος και συντήρηση σύμφωνα με τις προδιαγραφές του κατασκευαστή, με γνήσια ή ισοδύναμα ανταλλακτικά.',
    image:
      'https://d8j0ntlcm91z4.cloudfront.net/user_3FuCan21Moqq9F87YZSPqZ0TuU7/hf_20260818_101056_18dcbb76-2d9c-420c-bc7a-a9e569d3b822.png',
  },
  {
    icon: Disc,
    title: 'Φρένα',
    description:
      'Έλεγχος, συντήρηση και αντικατάσταση δισκόπλακων και τακακιών για μέγιστη ασφάλεια σε κάθε φρενάρισμα.',
    image:
      'https://d8j0ntlcm91z4.cloudfront.net/user_3FuCan21Moqq9F87YZSPqZ0TuU7/hf_20260818_101056_300f8b43-3296-4913-a86d-7d4419886b71.png',
  },
  {
    icon: Disc3,
    title: 'Ελαστικά & Ζυγοστάθμιση',
    description:
      'Αλλαγή ελαστικών, ζυγοστάθμιση και ευθυγράμμιση για σταθερότητα, άνεση και μεγαλύτερη διάρκεια ζωής.',
    image:
      'https://d8j0ntlcm91z4.cloudfront.net/user_3FuCan21Moqq9F87YZSPqZ0TuU7/hf_20260818_101056_d98a16f2-7e8e-4070-856c-26c126f12fb9.png',
  },
  {
    icon: ScanSearch,
    title: 'Διάγνωση Βλαβών',
    description:
      'Ηλεκτρονική διάγνωση με σύγχρονο εξοπλισμό για γρήγορο και ακριβή εντοπισμό κάθε βλάβης.',
    image:
      'https://d8j0ntlcm91z4.cloudfront.net/user_3FuCan21Moqq9F87YZSPqZ0TuU7/hf_20260818_101056_468e3b50-97ee-48a9-bd1c-bfe34473e43e.png',
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
              <div className="relative h-44 overflow-hidden sm:h-52">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, color-mix(in oklab, var(--color-background) 15%, transparent) 0%, color-mix(in oklab, var(--color-background) 55%, transparent) 65%, var(--color-background) 100%)',
                  }}
                />
                <div
                  className="absolute bottom-4 left-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                    boxShadow: 'var(--shadow-glow-strong)',
                  }}
                >
                  <service.icon className="h-7 w-7 text-background" strokeWidth={2} />
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
