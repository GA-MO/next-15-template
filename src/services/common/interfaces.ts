export interface BaseResponse<T> {
  code: number
  message: string
  data: T
}

export interface ServiceError {
  title: string
  message: string
}
