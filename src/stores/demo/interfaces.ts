export interface DemoState {
  count: number
}

export interface DemoActions {
  decrementCount: () => void
  incrementCount: () => void
  reset: () => void
}

export type DemoStore = DemoState & DemoActions
