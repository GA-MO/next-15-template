import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchDemoList, fetchDemoCreate } from './fetchers'
import { DemoItem, RequestDemoList } from './interfaces'
import { getQueryClient } from '@/plugins/reactQuery/client'
import { notifications } from '@mantine/notifications'

const useDemoList = (params: RequestDemoList) => {
  return useQuery({
    queryKey: ['demoList', params],
    queryFn: () => fetchDemoList(params)
  })
}

const useDemoCreate = () => {
  return useMutation({
    mutationFn: (params: DemoItem) => fetchDemoCreate(params),
    onSuccess: () => {
      getQueryClient().invalidateQueries({ queryKey: ['demoList'] })

      notifications.show({
        title: 'Success',
        message: 'Your form has been submitted',
        position: 'bottom-center'
      })
    }
  })
}

export { useDemoList, useDemoCreate }
