import { DemoItem, RequestDemoList } from './interfaces'
import { useMutation, useQuery } from '@tanstack/react-query'
import createFetcher from '@/plugins/createFetcher'
import { BaseResponse } from '../common/interfaces'
import { getQueryClient } from '@/plugins/reactQuery/client'
import { notifications } from '@mantine/notifications'

const host = process.env.NEXT_PUBLIC_API_HOST

const fetchDemoList = (params: RequestDemoList) => {
  return createFetcher<BaseResponse<DemoItem[]>>({
    url: `${host}/api/demo/list`,
    jsonMockup: '/mockup/demo/list.json',
    params
  })
}

const useDemoList = (params: RequestDemoList) => {
  return useQuery({
    queryKey: ['demoList'],
    queryFn: () => fetchDemoList(params),
    select: (data) => data.data
  })
}

const fetchDemoCreate = (params: DemoItem) => {
  return createFetcher<BaseResponse<DemoItem>>({
    method: 'POST',
    url: `${host}/api/demo/create`,
    jsonMockup: '/mockup/demo/create.json',
    params
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
