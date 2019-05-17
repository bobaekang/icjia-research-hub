import client from '@/services/client.datasets'

export const namespaced = true

export const state = {
  info: [],
  suggestions: ['felony', 'juvenile', 'UCR']
}

export const mutations = {
  FETCH_INFO(state, payload) {
    state.info = payload.map(el => {
      el.date = el.date.slice(0, 10)
      return el
    })
  }
}

export const actions = {
  async fetchInfo({ commit }) {
    commit('FETCH_INFO', await client.getList())
  }
}
