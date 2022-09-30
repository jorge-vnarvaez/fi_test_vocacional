import Vue from 'vue'
import Vuex from 'vuex'
import { storeFI } from './_fi'
import { storeUser } from './_user'


Vue.use(Vuex);

Vue.config.devtools = true

export default new Vuex.Store({
    modules: {
        user: storeUser,
        fi: storeFI,
    }
});