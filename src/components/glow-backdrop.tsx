export function GlowBackdrop({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full opacity-40 blur-[120px]"
        style={{ background: 'var(--color-primary)' }}
      />
      <div
        className="absolute -right-32 top-1/3 h-[26rem] w-[26rem] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'var(--color-accent)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  )
}
