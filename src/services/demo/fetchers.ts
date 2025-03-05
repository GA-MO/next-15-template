import createFetcher from '@/utils/createFetcher'
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

export { fetchDemoList }
