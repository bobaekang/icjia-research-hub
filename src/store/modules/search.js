import client from '@/services/client.js'

export const namespaced = true

export const state = {
  apps: [],
  articles: [],
  datasets: [],
  suggestions: ['drug', 'juvenile', 'victims']
}

export const mutations = {
  FETCH_SEARCH_INFO_APPS(state, payload) {
    state.apps = payload.data.data.apps
  },
  FETCH_SEARCH_INFO_ARTICLES(state, payload) {
    state.articles = payload.data.data.articles
  },
  FETCH_SEARCH_INFO_DATASETS(state, payload) {
    state.datasets = payload.data.data.datasets
  }
}

export const actions = {
  async fetchSearchInfo({ commit, state }) {
    if (state.apps.length === 0) {
      commit('FETCH_SEARCH_INFO_APPS', await client.getAppsSearchInfo())
    }

    if (state.articles.length === 0) {
      commit('FETCH_SEARCH_INFO_ARTICLES', await client.getArticlesSearchInfo())
    }

    if (state.datasets.length === 0) {
      commit('FETCH_SEARCH_INFO_DATASETS', await client.getDatasetsSearchInfo())
    }
  }
}
