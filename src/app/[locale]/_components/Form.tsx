'use client'

import { useDemoList, useDemoCreate } from '@/services/demo'
import { Button, Checkbox, ComboboxItem, Group, Select, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { zodResolver } from 'mantine-form-zod-resolver'
import { z } from 'zod'

export default function Form() {
  const item = useDemoList({ limit: 10 })
  const create = useDemoCreate()

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
    validateInputOnChange: true,
    validateInputOnBlur: true,
    validate: zodResolver(schema)
  })

  const data: ComboboxItem[] =
    item.data?.map((item) => ({ label: item.name, value: item.id.toString() })) || []

  const handleSubmit = async (values: typeof form.values) => {
    create.mutate({
      id: 0,
      name: values.email
    })
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)} className='w-full max-w-md'>
      {data.length > 0 && (
        <Select
          data-testid='item'
          withAsterisk
          label='Select'
          placeholder='Pick value'
          key={form.key('item')}
          data={data}
          checkIconPosition='right'
          nothingFoundMessage='Nothing found...'
          mb='md'
          {...form.getInputProps('item')}
        />
      )}

      <TextInput
        data-testid='email'
        withAsterisk
        label='Email'
        placeholder='your@email.com'
        key={form.key('email')}
        mb='md'
        {...form.getInputProps('email')}
      />

      <Checkbox
        data-testid='termsOfService'
        label='I agree to sell my privacy'
        key={form.key('termsOfService')}
        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Group mt='md'>
        <Button
          type='submit'
          fullWidth
          disabled={!form.isValid()}
          loading={create.isPending}
          data-testid='submit'
        >
          Submit
        </Button>
      </Group>
    </form>
  )
}
