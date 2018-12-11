import Vue from 'vue'
import Vuex from 'vuex'

import articleInfo from '@/assets/articleInfo.json';
import appInfo from '@/assets/appInfo.json';
import datasetInfo from '@/assets/datasetInfo.json';

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
        }
    }
})
