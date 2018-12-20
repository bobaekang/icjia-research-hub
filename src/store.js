import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

import articleInfo from '@/assets/articleInfo.json';
import appInfo from '@/assets/appInfo.json';
import datasetInfo from '@/assets/datasetInfo.json';

import { pick, reduceObjArr, unwrapObj } from './utils';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        appInfo,
        appSuggestions: [
            'app',
            'dashboard',
        ],
        
        articleInfo,
        articleFilters: [],
        articleSuggestions: [
            'arrest',
            'drug',
            'prison',
        ],
        
        datasetInfo,
        datasetFilters: [],
        datasetSuggestions: [
            'felony',
            'juvenile',
            'UCR',
        ],
    },
    mutations: {
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
