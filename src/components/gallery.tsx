import { motion } from 'motion/react'

const photos = [
  { src: '/images/garage-alfa-front.jpg', alt: 'Alfa Romeo Spider στο συνεργείο Μαργαρώνης' },
  { src: '/images/garage-alfa-rear.jpg', alt: 'Alfa Romeo Spider στο συνεργείο Μαργαρώνης, πίσω όψη' },
]

export function Gallery() {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
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
            Από το συνεργείο μας
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Κάθε αυτοκίνητο, μια ιστορία.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
              className="glass-panel overflow-hidden rounded-3xl"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
