import { Wrench } from 'lucide-react'

import { site } from '#/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
        <div className="flex items-center gap-2">
          <Wrench className="h-4 w-4" style={{ color: 'var(--color-accent)' }} strokeWidth={2.5} />
          <span className="font-display text-sm font-bold tracking-wide text-foreground">
            {site.brandFull} · {site.tagline}
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.brandFull}. Με επιφύλαξη παντός δικαιώματος.
        </p>
      </div>
    </footer>
  )
}
