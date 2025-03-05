import { initialState, useCounterStore } from './store'

function decrementCount() {
  useCounterStore.setState((state) => ({ count: state.count - 1 }))
}

function incrementCount() {
  useCounterStore.setState((state) => ({ count: state.count + 1 }))
}

function reset() {
  useCounterStore.setState(initialState)
}

export const actions = {
  decrementCount,
  incrementCount,
  reset
}
