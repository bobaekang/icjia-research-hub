import {
  appGetters,
  articleGetters,
  datasetGetters
} from '@/services/client.js'

export const namespaced = true

export const state = {
  apps: [],
  articles: [],
  datasets: [],
  suggestions: ['drug', 'juvenile', 'victims']
}

export const mutations = {
  FETCH_SEARCH_INFO_APPS(state, payload) {
    state.apps = payload
  },
  FETCH_SEARCH_INFO_ARTICLES(state, payload) {
    state.articles = payload
  },
  FETCH_SEARCH_INFO_DATASETS(state, payload) {
    state.datasets = payload
  }
}

export const actions = {
  async fetchSearchInfo({ commit, state }) {
    if (state.apps.length === 0) {
      commit('FETCH_SEARCH_INFO_APPS', await appGetters.getListSearch())
    }

    if (state.articles.length === 0) {
      commit('FETCH_SEARCH_INFO_ARTICLES', await articleGetters.getListSearch())
    }

    if (state.datasets.length === 0) {
      commit('FETCH_SEARCH_INFO_DATASETS', await datasetGetters.getListSearch())
    }
  }
}
