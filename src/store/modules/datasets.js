import client from '@/services/client.js'
import { pick, reduceObjArr, unwrapObj } from '@/services/utils.js'

export const namespaced = true

export const state = {
  info: [],
  suggestions: ['felony', 'juvenile', 'UCR']
}

export const mutations = {
  FETCH_INFO(state, payload) {
    state.info = payload.data.data.datasets.map(el => {
      el.date = el.date.slice(0, 10)
      return el
    })
  }
}

export const actions = {
  async fetchInfo({ commit }) {
    commit('FETCH_INFO', await client.getDatasetsInfo())
  }
}

export const getters = {
  filters: state => {
    const filters = ['agegroup', 'categories'].sort()
    const filtersObjArr = state.info.map(el => pick(el, filters))

    return unwrapObj(reduceObjArr(filters, filtersObjArr))
  }
}
