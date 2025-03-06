import createFetcher from '@/plugins/createFetcher'
import { BaseResponse } from '../common/interfaces'
import { DemoItem, RequestDemoList } from './interfaces'

const fetchDemoList = (params: RequestDemoList) => {
  const host = process.env.NEXT_PUBLIC_API_HOST

  return createFetcher<BaseResponse<DemoItem[]>>({
    url: `${host}/api/demo/list`,
    params,
    jsonMockup: '/mockup/demo/list.json'
  })
}

const fetchDemoCreate = (params: DemoItem) => {
  const host = process.env.NEXT_PUBLIC_API_HOST

  return createFetcher<BaseResponse<DemoItem>>({
    method: 'POST',
    url: `${host}/api/demo/create`,
    jsonMockup: '/mockup/demo/create.json',
    delay: 3000,
    params
  })
}
export { fetchDemoList, fetchDemoCreate }
