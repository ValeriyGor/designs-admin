import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

const state = () => ({
    designs: [],
    loadedDesignItems: false,
})

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}