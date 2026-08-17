import { createFileRoute } from '@tanstack/react-router'

import { Navbar } from '#/components/navbar'
import { Hero } from '#/components/hero'
import { StatsStrip } from '#/components/stats-strip'
import { Services } from '#/components/services'
import { Hours } from '#/components/hours'
import { Cta } from '#/components/cta'
import { Footer } from '#/components/footer'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <Hours />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
