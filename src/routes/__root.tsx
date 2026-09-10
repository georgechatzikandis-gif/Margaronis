import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'
import { site } from '#/lib/site'

const title = 'Μαργαρώνης Service | Συνεργείο Alfa Romeo, Fiat, Lancia, Jeep στη Ρόδο'
const description =
  'Μαργαρώνης Service — εξειδικευμένο συνεργείο Alfa Romeo, Fiat, Lancia, Jeep στη Ρόδο με 25+ χρόνια εμπειρίας. Service, φρένα, διάγνωση βλαβών, ανταλλακτικά, αξεσουάρ και μεταχειρισμένα ανταλλακτικά με αποστολή σε όλη την Ελλάδα. Δευτέρα–Παρασκευή 9:00–17:00, Σάββατο 9:00–14:00.'
const ogImage = `${site.siteUrl}/images/og-image.jpg`

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: site.brandFull,
  image: ogImage,
  url: site.siteUrl,
  telephone: '+302241074605',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.addressStreet,
    addressLocality: site.addressCity,
    postalCode: site.addressPostalCode,
    addressRegion: site.addressRegion,
    addressCountry: site.addressCountry,
  },
  areaServed: ['Ρόδος', 'Δωδεκάνησα', 'Ελλάδα'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '14:00',
    },
  ],
  brand: ['Alfa Romeo', 'Fiat', 'Lancia', 'Jeep'],
  description,
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title,
      },
      {
        name: 'description',
        content: description,
      },
      {
        name: 'keywords',
        content:
          'συνεργείο Alfa Romeo Ρόδος, συνεργείο Fiat Ρόδος, συνεργείο Lancia, συνεργείο Jeep, service αυτοκινήτου Ρόδος, φρένα, διάγνωση βλαβών, ανταλλακτικά αυτοκινήτων, αξεσουάρ, μεταχειρισμένα ανταλλακτικά, αποστολή ανταλλακτικών σε όλη την Ελλάδα, Μαργαρώνης',
      },
      {
        name: 'theme-color',
        content: '#05070d',
      },
      {
        name: 'geo.region',
        content: 'GR-81',
      },
      {
        name: 'geo.placename',
        content: 'Ρόδος',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:locale',
        content: 'el_GR',
      },
      {
        property: 'og:site_name',
        content: site.brandFull,
      },
      {
        property: 'og:url',
        content: site.siteUrl,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:image',
        content: ogImage,
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        property: 'og:image:alt',
        content: 'Το συνεργείο Μαργαρώνης Service στη Ρόδο',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'twitter:image',
        content: ogImage,
      },
      {
        name: 'google-site-verification',
        content: '9CdCLr62yDvndQIs0AhyemAHdiw-sDHAZg_hweicOaE',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        rel: 'canonical',
        href: site.siteUrl,
      },
      {
        rel: 'sitemap',
        type: 'application/xml',
        href: '/sitemap.xml',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
