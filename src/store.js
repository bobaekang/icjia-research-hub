import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

import { pick, reduceObjArr, unwrapObj } from './utils';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        api_url: 'http://localhost:1337',

        appInfo: [],
        appSuggestions: [
            'app',
            'dashboard',
        ],
        
        articleInfo: [],
        articleFilters: [],
        articleSuggestions: [
            'arrest',
            'drug',
            'prison',
        ],
        
        datasetInfo: [],
        datasetFilters: [],
        datasetSuggestions: [
            'felony',
            'juvenile',
            'UCR',
        ],
    },
    mutations: {
        fetchApps (state, payload) {
            state.appInfo = payload.data
                .map((el) => {
                    el.date = el.date.slice(0, 10);
                    el.showDescription = false;
                    return el;
                }).
                sort((a, b) => {
                    if (a.date < b.date) return 1;
                    if (a.date > b.date) return -1;
                    return 0;
                });
        },
        fetchArticles (state, payload) {
            state.articleInfo = payload.data
                .map((el) => {
                    el.date = el.date.slice(0, 10);
                    el.showSummary = false;
                    return el;
                }).
                sort((a, b) => {
                    if (a.date < b.date) return 1;
                    if (a.date > b.date) return -1;
                    return 0;
                });
        },
        fetchDatasets (state, payload) {
            state.datasetInfo = payload.data
                .map((el) => {
                    el.date = el.date.slice(0, 10);
                    return el;
                }).
                sort((a, b) => {
                    if (a.date < b.date) return 1;
                    if (a.date > b.date) return -1;
                    return 0;
                });
        },
        
        createArticleFilters (state) {
            const filters = [
                'type',
                'categories',
            ].sort();
            const filtersObjArr = state.articleInfo.map(el => pick(el, filters));           
            state.articleFilters = unwrapObj(reduceObjArr(filters, filtersObjArr));
        },
        createDatasetFilters (state) {
            const filters = [
                'ageGroup',
                'categories'
            ].sort();
            const filtersObjArr = state.datasetInfo.map(el => pick(el, filters));
            state.datasetFilters = unwrapObj(reduceObjArr(filters, filtersObjArr));
            
        },
    },
    actions: {
        async fetchData ({ commit, state }) {
            commit('fetchApps', await axios.get(`${state.api_url}/apps`));
            commit('fetchArticles', await axios.get(`${state.api_url}/articles`));
            commit('fetchDatasets', await axios.get(`${state.api_url}/datasets`));
        },
        
        createArticleFilters ({ commit }) {
            commit('createArticleFilters');
        },
        createDatasetFilters ({ commit }) {
            commit('createDatasetFilters');
        },
    },
    getters: {
        api_url: state => state.api_url,
        
        apps: state =>  state.appInfo,
        appsHome: state => state.appInfo.slice(0, 3),
        appSuggestions: state => state.appSuggestions,
        
        articles: state => state.articleInfo,
        articlesHome: state => state.articleInfo.slice(0, 5),
        articleFilters: state => state.articleFilters,
        articleSuggestions: state => state.articleSuggestions,
        
        datasets: state => state.datasetInfo,
        datasetFilters: state => state.datasetFilters,
        datasetSuggestions: state => state.datasetSuggestions,
    }
})
