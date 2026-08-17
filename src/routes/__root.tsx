import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

const title = 'Μαργαρώνης Service | Συνεργείο Αυτοκινήτων'
const description =
  'Μαργαρώνης Service — συνεργείο αυτοκινήτων με 25+ χρόνια εμπειρίας. Γενικό service, φρένα, ελαστικά, ζυγοστάθμιση και διάγνωση βλαβών. Ανοιχτά καθημερινά 8:00 – 21:00.'

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
          'συνεργείο αυτοκινήτων, service αυτοκινήτου, φρένα, ελαστικά, ζυγοστάθμιση, διάγνωση βλαβών, Μαργαρώνης',
      },
      {
        name: 'theme-color',
        content: '#05070d',
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
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
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
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <head>
        <HeadContent />
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
