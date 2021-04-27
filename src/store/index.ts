import { createStore, useStore as baseUseStore } from 'vuex'

const defaultState = {
  count: 0
}

// Create a new store instance.
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      // eslint-disable-next-line no-plusplus
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
export const key: any = Symbol('vue-store')

export function useStore<T = any>() {
  return baseUseStore<T>(key)
}
