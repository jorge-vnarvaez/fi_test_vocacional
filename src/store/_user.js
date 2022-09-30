import { mapGetters, mapMutations } from "vuex";
import * as $cookies from 'vue-cookies'

export const storeUser = {
    state: {
        email: '',
        rut: ''
    },
    getters: {
        getEmail(state) {
            return state.email;
        },
        getRut(state) {
            return state.rut;
        },
    },
    mutations: {
        setEmail(state, email) {
            state.email = email;
        },
        setRut(state, rut) {
            state.rut = rut;
            $cookies.set('rut', rut);
        },
        clearEmail(state) {
            state.email = '';
        },
        clearRut(state) {
            state.rut = '';
            $cookies.remove('rut');
        }
    }
}

export const mixinUser = {
    computed: {
        ...mapGetters(['getEmail', 'getRut'])
    },
    methods: {
        ...mapMutations(['setEmail', 'setRut', 'clearEmail', 'clearRut'])
    }
}