import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

import { pick, reduceObjArr, unwrapObj } from './utils';

Vue.use(Vuex)

const API_URL = 'http://localhost:1337'

export default new Vuex.Store({
    state: {
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
                    el.showDesc = false;
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
                    el.showTeaser = false;
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
                'pubtype',
                'area',
            ].sort();
            const filtersObjArr = state.articleInfo.map(el => pick(el, filters));           
            state.articleFilters = unwrapObj(reduceObjArr(filters, filtersObjArr));
        },
        createDatasetFilters (state) {
            const filters = [
                'agencyName',
                'juvenileAdult',
                'initialCategory'
            ].sort();
            const filtersObjArr = state.datasetInfo.map(el => pick(el, filters));
            state.datasetFilters = unwrapObj(reduceObjArr(filters, filtersObjArr));
            
        },
    },
    actions: {
        async fetchData ({ commit }) {
            commit('fetchApps', await axios.get(`${API_URL}/apps`));
            commit('fetchArticles', await axios.get(`${API_URL}/articles`));
            commit('fetchDatasets', await axios.get(`${API_URL}/datasets`));
        },
        
        createArticleFilters ({ commit }) {
            commit('createArticleFilters');
        },
        createDatasetFilters ({ commit }) {
            commit('createDatasetFilters');
        },
    },
    getters: {
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
