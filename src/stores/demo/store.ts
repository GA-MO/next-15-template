import { create } from 'zustand'
import { actions } from './actions'
import { DemoState, DemoStore } from './interfaces'

export const initialState: DemoState = {
  count: 0
}

export const useCounterStore = create<DemoStore>()(() => ({
  ...initialState,
  ...actions
}))
