export function CarSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="carStroke" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.15" />
          <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <path
        d="M40 180 C40 150 70 140 100 138 L150 100 C170 84 200 74 232 74 L470 74 C510 74 546 88 574 112 L610 138 C660 140 710 150 750 168 C760 172 764 180 760 190 L748 196 C748 214 734 228 716 228 C698 228 684 214 684 196 L296 196 C296 214 282 228 264 228 C246 228 232 214 232 196 L120 196 C112 210 96 218 80 216 C58 213 42 198 40 180 Z"
        stroke="url(#carStroke)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M182 100 L232 100 L232 74"
        stroke="url(#carStroke)"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <path
        d="M470 74 L470 100 L556 100"
        stroke="url(#carStroke)"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <circle cx="264" cy="196" r="32" stroke="url(#carStroke)" strokeWidth="2.5" />
      <circle cx="264" cy="196" r="14" stroke="url(#carStroke)" strokeWidth="1.5" opacity="0.6" />
      <circle cx="716" cy="196" r="32" stroke="url(#carStroke)" strokeWidth="2.5" />
      <circle cx="716" cy="196" r="14" stroke="url(#carStroke)" strokeWidth="1.5" opacity="0.6" />
    </svg>
  )
}
