import { appGetters } from '@/services/client.js'

export const namespaced = true

export const state = {
  data: [],
  suggestions: ['app', 'dashboard']
}

export const mutations = {
  FETCH_INFO(state, payload) {
    state.data = payload.map(el => {
      el.date = el.date.slice(0, 10)
      return el
    })
  }
}

export const actions = {
  async fetchInfo({ commit }) {
    commit('FETCH_INFO', await appGetters.getList())
  }
}

export const getters = {
  highlights: state => {
    return state.data.slice(0, 3)
  }
}
