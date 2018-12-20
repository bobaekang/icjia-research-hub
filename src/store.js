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

        appSuggestions: [
            'app',
            'dashboard',
        ],
        articleSuggestions: [
            'arrest',
            'drug',
            'prison',
        ],
        datasetSuggestions: [
            'felony',
            'juvenile',
            'UCR',
        ],
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        apps: state =>  state.appInfo,
        articles: state => state.articleInfo,
        datasets: state => state.datasetInfo,
        
        appsHome: state => state.appInfo.slice(0, 3),
        articlesHome: state => state.articleInfo.slice(0, 5),
        
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
        
        appSuggestions: state => state.appSuggestions,
        articleSuggestions: state => state.articleSuggestions,
        datasetSuggestions: state => state.datasetSuggestions,
    }
})
