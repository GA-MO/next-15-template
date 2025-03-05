import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

export default async function Provider(props: { children: React.ReactNode }) {
  const messages = await getMessages()
  return <NextIntlClientProvider messages={messages}>{props.children}</NextIntlClientProvider>
}
