import { useTranslations } from 'next-intl'
import { Title } from '@mantine/core'
import Form from './_components/Form'

export default function Home() {
  const t = useTranslations('HomePage')

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <Title order={1} c='primary'>
        {t('title')}
      </Title>
      <Form />
    </div>
  )
}
