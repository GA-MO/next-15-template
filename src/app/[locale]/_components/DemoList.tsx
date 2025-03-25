'use client'

import { useDemoList } from '@/services/demo'
import { Button, Group } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { useState } from 'react'

export default function DemoList() {
  const [value, setValue] = useState<Date | null>(null)
  const { data, isLoading, refetch } = useDemoList({ limit: 10 })

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {data?.map((item) => <DemoItem key={item.id} name={item.name} />)}
      <Button onClick={() => refetch()}>Refetch</Button>
      <br />
      <br />
      <Group gap='xs'>
        <Button>Filled</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='light'>Light</Button>
      </Group>
      <DatePickerInput
        label='Pick date'
        placeholder='Pick date'
        value={value}
        onChange={setValue}
      />
    </div>
  )
}

function DemoItem({ name }: { name: string }) {
  return <div>{name}</div>
}
