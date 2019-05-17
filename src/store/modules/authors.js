import client from '@/services/client.authors'

export const namespaced = true

export const state = {
  data: []
}

export const mutations = {
  FETCH_DATA(state, payload) {
    state.data = payload
  }
}

export const actions = {
  async fetchData({ commit }) {
    commit('FETCH_DATA', await client.getList())
  }
}
