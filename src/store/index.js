import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);
const config = {
    plugins: [createPersistedState()],
    state: {
        isLogin: false,
        username: '',
        token: '',
        theme: 'theme1',
        crossChain: 'polygon'
        // isPc: (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent))
    },
    getters: {
        isLogin: state => state.isLogin,
        token: state => state.token,
        username: state => state.username
    },
    mutations: {
        updateLogin(state, payload) {
            state.isLogin = payload;
        },
        updateToken(state, payload) {
            state.token = payload;
        },
        updateUsername(state, payload) {
            state.username = payload;
        },
        updateTheme(state, payload) {
            state.theme = payload
        },
        updateCrossChain(state, payload) {
            state.crossChain = payload
        }
    },
    actions: {}
}
const store = new Vuex.Store(config);
export default store;