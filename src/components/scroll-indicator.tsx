import { ChevronDown } from 'lucide-react'

export function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted">
      <span className="text-xs font-medium uppercase tracking-[0.3em]">Κύλισε</span>
      <ChevronDown className="animate-scroll-bounce h-5 w-5" style={{ color: 'var(--color-accent)' }} />
    </div>
  )
}
