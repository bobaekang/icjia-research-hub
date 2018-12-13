import Vue from 'vue'
import Vuex from 'vuex'

import articleInfo from '@/assets/articleInfo.json';
import appInfo from '@/assets/appInfo.json';
import datasetInfo from '@/assets/datasetInfo.json';

import { pick, reduceObjArr, unwrapObj } from './utils';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articleInfo,
        appInfo,
        datasetInfo
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        articles: state => {
            return state.articleInfo;
        },
        apps: state => {
            return state.appInfo;
        },
        datasets: state => {
            return state.datasetInfo;
        },
        articlesHome: state => {
            return state.articleInfo.slice(0, 5);
        },
        appsHome: state => {
            return state.appInfo.slice(0, 3);
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
    }
})
