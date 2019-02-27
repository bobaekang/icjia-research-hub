import client from '@/services/client.js'
import { pick, reduceObjArr, unwrapObj } from '@/services/utils.js'

export const namespaced = true

export const state = {
  info: [],
  carouselInfo: [],
  suggestions: ['arrest', 'drug', 'prison']
}

export const mutations = {
  FETCH_INFO(state, payload) {
    state.info = payload.data.data.articles.map(el => {
      el.date = el.date.slice(0, 10)
      return el
    })
  },
  FETCH_CAROUSEL_INFO(state, payload) {
    state.carouselInfo = payload.data.data.articles
  }
}

export const actions = {
  async fetchInfo({ commit }) {
    commit('FETCH_INFO', await client.getArticlesInfo())
  },
  async fetchCarouselInfo({ commit }) {
    commit('FETCH_CAROUSEL_INFO', await client.getArticlesCarouselInfo())
  }
}

export const getters = {
  filters: state => {
    const filters = ['type', 'categories'].sort()
    const filtersObjArr = state.info.map(el => pick(el, filters))

    return unwrapObj(reduceObjArr(filters, filtersObjArr))
  }
}
