import client from '@/services/client.articles'

export const namespaced = true

export const state = {
  info: [],
  carouselInfo: [],
  suggestions: ['arrest', 'drug', 'prison']
}

export const mutations = {
  FETCH_INFO(state, payload) {
    state.info = payload.map(el => {
      el.date = el.date.slice(0, 10)
      return el
    })
  },
  FETCH_CAROUSEL_INFO(state, payload) {
    state.carouselInfo = payload
  }
}

export const actions = {
  async fetchInfo({ commit }) {
    commit('FETCH_INFO', await client.getList())
  },
  async fetchCarouselInfo({ commit }) {
    commit('FETCH_CAROUSEL_INFO', await client.getListCarousel())
  }
}
