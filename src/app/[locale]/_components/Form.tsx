'use client'

import { useDemoList } from '@/services/demo/queries'
import { Button, Checkbox, ComboboxItem, Group, Select, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { zodResolver } from 'mantine-form-zod-resolver'
import { z } from 'zod'

export default function Form() {
  const item = useDemoList({ limit: 10 })

  const schema = z.object({
    email: z.string().email({
      message: 'Invalid email'
    }),
    termsOfService: z.boolean().refine((value) => value === true, {
      message: 'You must agree to sell your privacy'
    }),
    item: z.string().min(1, {
      message: 'You must select an item'
    })
  })

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
      item: '1'
    },
    validateInputOnBlur: true,
    validate: zodResolver(schema)
  })

  const data: ComboboxItem[] =
    item.data?.data?.map((item) => ({ label: item.name, value: item.id.toString() })) || []

  const handleSubmit = async (values: typeof form.values) => {
    await new Promise((resolve) => setTimeout(() => resolve(values), 3000))
    console.log(values)
    notifications.show({
      title: 'Success',
      message: 'Your form has been submitted',
      position: 'bottom-center'
    })
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} className='w-full max-w-md'>
      <Select
        label='Select'
        placeholder='Pick value'
        key={form.key('item')}
        data={data}
        disabled={item.isLoading}
        {...form.getInputProps('item')}
      />

      <TextInput
        withAsterisk
        label='Email'
        placeholder='your@email.com'
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Checkbox
        mt='md'
        label='I agree to sell my privacy'
        key={form.key('termsOfService')}
        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Group mt='md'>
        <Button type='submit' fullWidth disabled={!form.isValid()} loading={form.submitting}>
          Submit
        </Button>
      </Group>
    </form>
  )
}
