import type { Metadata } from 'next'
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core'

import I18nProvider from '@/plugins/i18n/provider'
import ReactQueryProvider from '@/plugins/reactQuery/provider'
import MantineProvider from '@/plugins/mantine/provider'

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

  return (
    <html lang={locale} {...mantineHtmlProps} suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body suppressHydrationWarning>
        <I18nProvider>
          <ReactQueryProvider>
            <MantineProvider>{children}</MantineProvider>
          </ReactQueryProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
