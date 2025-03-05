import { useQuery } from '@tanstack/react-query'
import { fetchDemoList } from './fetchers'
import { RequestDemoList } from './interfaces'

const useDemoList = (params: RequestDemoList) => {
  return useQuery({
    queryKey: ['demoList', params],
    queryFn: () => fetchDemoList(params)
  })
}

export { useDemoList }
