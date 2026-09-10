import { Clock, MapPin, Phone, Wrench } from 'lucide-react'

import { site } from '#/lib/site'

const quickLinks = [
  { href: '#hero', label: 'Αρχική' },
  { href: '#services', label: 'Υπηρεσίες' },
  { href: '#hours', label: 'Ωράριο' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div>
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
              <span className="font-display text-lg font-extrabold tracking-wide text-foreground">
                {site.brand}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Εξειδικευμένο συνεργείο Alfa Romeo, Fiat, Lancia, Jeep — ανταλλακτικά,
              αξεσουάρ και μεταχειρισμένα ανταλλακτικά.
            </p>
          </div>

          <nav>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Σύνδεσμοι
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Επικοινωνία
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-foreground">
                  <Phone className="h-4 w-4 shrink-0" style={{ color: 'var(--color-accent)' }} />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-foreground"
                >
                  <MapPin className="h-4 w-4 shrink-0" style={{ color: 'var(--color-accent)' }} />
                  Οδηγίες
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0" style={{ color: 'var(--color-accent)' }} />
                Δευτ–Παρ {site.hoursWeekday} · Σάβ {site.hoursSaturday}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-2 border-t border-border pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.brandFull}. Με επιφύλαξη παντός δικαιώματος.
          </p>
          <p className="text-xs text-muted-foreground">
            {site.brandFull} · {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
