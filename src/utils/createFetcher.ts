import { ServiceError } from '@/services/common/interfaces'
import { modals } from '@mantine/modals'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface FetcherOptions extends AxiosRequestConfig {
  mock?: boolean
  jsonMockup?: string
  delay?: number
  showErrorDialog?: boolean
}

export const defaultOptions: FetcherOptions = {
  mock: true,
  jsonMockup: '',
  delay: 0,
  timeout: 0,
  showErrorDialog: true
}

const shouldUseMockup = (options: FetcherOptions) => {
  if (!options.mock) return false
  if (options.jsonMockup === '') return false

  return true
}

function createFetcher<T>(options: FetcherOptions) {
  const fetchOptions: FetcherOptions = {
    ...defaultOptions,
    ...options
  }

  return new Promise<AxiosResponse<T>['data']>((resolve, reject) => {
    async function callFetch() {
      try {
        if (shouldUseMockup(fetchOptions)) {
          const response = await axios.get<T>(fetchOptions.jsonMockup || '')
          resolve(response.data)
        } else {
          const response = await axios.request<T>(fetchOptions)
          resolve(response.data)
        }
      } catch (error) {
        let title = 'Error'
        let message = 'Service Error'
        console.log(error)

        // check if error is an instance of AxiosError
        if (axios.isAxiosError(error)) {
          title = error.response?.statusText ?? 'Error'
          message = error.response?.data.message || error.message
        } else {
          title = (error as Error).name
          message = (error as Error).message
        }

        const appError: ServiceError = {
          title,
          message
        }

        if (fetchOptions.showErrorDialog) {
          modals.openContextModal({
            modal: 'applicationError',
            withCloseButton: false,
            centered: true,
            innerProps: {
              title: appError.title,
              message: appError.message
            }
          })
        }

        reject(appError)
      }
    }

    setTimeout(() => callFetch(), fetchOptions.delay || 0 * 1000)
  })
}

export default createFetcher
