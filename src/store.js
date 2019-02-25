import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { pick, reduceObjArr, unwrapObj } from './utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: 'http://localhost:1337',
    docs_url: '#',

    apps: [],
    appSuggestions: ['app', 'dashboard'],

    articles: [],
    articleFilters: [],
    articleSuggestions: ['arrest', 'drug', 'prison'],

    authors: [],

    datasets: [],
    datasetFilters: [],
    datasetSuggestions: ['felony', 'juvenile', 'UCR']
  },
  mutations: {
    fetchApps(state, payload) {
      state.apps = payload.data
        .map(el => {
          el.date = el.date.slice(0, 10)
          el.showDescription = false
          return el
        })
        .sort((a, b) => {
          if (a.date < b.date) return 1
          if (a.date > b.date) return -1
          return 0
        })
    },
    fetchArticles(state, payload) {
      state.articles = payload.data
        .map(el => {
          el.date = el.date.slice(0, 10)
          el.showSummary = false
          return el
        })
        .sort((a, b) => {
          if (a.date < b.date) return 1
          if (a.date > b.date) return -1
          return 0
        })
    },
    fetchAuthors(state, payload) {
      state.authors = payload.data.sort((a, b) => {
        if (a.title > b.title) return 1
        if (a.title < b.title) return -1
        return 0
      })
    },
    fetchDatasets(state, payload) {
      state.datasets = payload.data
        .map(el => {
          el.date = el.date.slice(0, 10)
          return el
        })
        .sort((a, b) => {
          if (a.date < b.date) return 1
          if (a.date > b.date) return -1
          return 0
        })
    },

    createArticleFilters(state) {
      const filters = ['type', 'categories'].sort()
      const filtersObjArr = state.articles.map(el => pick(el, filters))
      state.articleFilters = unwrapObj(reduceObjArr(filters, filtersObjArr))
    },
    createDatasetFilters(state) {
      const filters = ['ageGroup', 'categories'].sort()
      const filtersObjArr = state.datasets.map(el => pick(el, filters))
      state.datasetFilters = unwrapObj(reduceObjArr(filters, filtersObjArr))
    }
  },
  actions: {
    async fetchData({ commit, state }) {
      commit('fetchApps', await axios.get(`${state.api_url}/apps`))
      commit('fetchArticles', await axios.get(`${state.api_url}/articles`))
      commit('fetchAuthors', await axios.get(`${state.api_url}/authors`))
      commit('fetchDatasets', await axios.get(`${state.api_url}/datasets`))
    },

    createArticleFilters({ commit }) {
      commit('createArticleFilters')
    },
    createDatasetFilters({ commit }) {
      commit('createDatasetFilters')
    }
  },
  getters: {
    api_url: state => state.api_url,
    docs_url: state => state.docs_url,

    apps: state => state.apps,
    appsHome: state => state.apps.slice(0, 3),
    appSuggestions: state => state.appSuggestions,

    articles: state => state.articles,
    articlesHome: state => state.articles.slice(0, 5),
    articleFilters: state => state.articleFilters,
    articleSuggestions: state => state.articleSuggestions,

    authors: state => state.authors,

    datasets: state => state.datasets,
    datasetFilters: state => state.datasetFilters,
    datasetSuggestions: state => state.datasetSuggestions
  }
})
