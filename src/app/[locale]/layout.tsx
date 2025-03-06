import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import '@/styles/globals.css'

import I18nProvider from '@/plugins/i18n/provider'
import ReactQueryProvider from '@/plugins/reactQuery/provider'
import MantineProvider from '@/plugins/mantine/provider'
import { routing } from '@/plugins/i18n/routing'
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core'

export const metadata: Metadata = {
  title: 'Next 15 Template',
  description: 'Next 15 Template with Mantine, Next Intl, React Query, and Zustand'
}

interface Props {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as typeof routing.defaultLocale)) {
    notFound()
  }

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <I18nProvider>
          <ReactQueryProvider>
            <MantineProvider>{children}</MantineProvider>
          </ReactQueryProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
