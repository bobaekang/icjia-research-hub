import Vue from 'vue'
import Vuex from 'vuex'

import articleInfo from '@/assets/articleInfo.json';
import appInfo from '@/assets/appInfo.json';
import datasetInfo from '@/assets/datasetInfo.json';

import { pick, reduceObjArr, unwrapObj } from './utils';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        appInfo,
        articleInfo,
        datasetInfo,
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        apps: state => {
            return state.appInfo;
        },
        articles: state => {
            return state.articleInfo;
        },
        datasets: state => {
            return state.datasetInfo;
        },
        appsHome: state => {
            return state.appInfo.slice(0, 3);
        },
        articlesHome: state => {
            return state.articleInfo.slice(0, 5);
        },
        articleFilters: state => {
            const filters = [
                'pubtype',
                'area',
            ].sort();

            const filtersObjArr = state.articleInfo.map(el => pick(el, filters));
            return(unwrapObj(reduceObjArr(filters, filtersObjArr)));
        },
        datasetFilters: state => {
            const filters = [
                'agencyName',
                'juvenileAdult',
                'initialCategory'
            ].sort();
            const filtersObjArr = state.datasetInfo.map(el => pick(el, filters));
            return(unwrapObj(reduceObjArr(filters, filtersObjArr)));
        },
        appSuggestions: () => {
            const suggestions = [
                'app',
                'dashboard',
            ]
            return(suggestions);
        },
        articleSuggestions: () => {
            const suggestions = [
                'arrest',
                'drug',
                'prison',
            ]
            return(suggestions);
        },
        datasetSuggestions: () => {
            const suggestions = [
                'felony',
                'juvenile',
                'UCR',

            ]
            return(suggestions);
        },
    }
})
