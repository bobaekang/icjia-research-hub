import Vue from 'vue'
import Vuex from 'vuex'

import articleInfo from '@/assets/articleInfo.json';
import appInfo from '@/assets/appInfo.json';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articleInfo,
        appInfo
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
        articlesHome: state => {
            return state.articleInfo.slice(0, 5);
        },
        appsHome: state => {
            return state.appInfo.slice(0, 3);
        }
    }
})
