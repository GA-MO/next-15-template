'use client'

import { Text, Button, Title, Space } from '@mantine/core'
import { ContextModalProps } from '@mantine/modals'

interface AppErrorModalInnerProps {
  title: string
  message: string
}

export function AppErrorModal({
  context,
  id,
  innerProps
}: ContextModalProps<AppErrorModalInnerProps>) {
  return (
    <div className='text-center'>
      <Title order={3}>{innerProps.title}</Title>
      <Text size='sm'>{innerProps.message}</Text>
      <Space h='md' />
      <Button fullWidth onClick={() => context.closeModal(id)}>
        Close modal
      </Button>
    </div>
  )
}
