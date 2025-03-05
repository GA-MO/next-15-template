import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'

import { theme } from './theme'
import { AppErrorModal } from './modal'

export default function Provider(props: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <ModalsProvider modals={{ applicationError: AppErrorModal }}>{props.children}</ModalsProvider>
    </MantineProvider>
  )
}
