export default {
    namespaced: true,
    state: {
        selectedScroll: "",
    },
    getters: {
        // criar apenas quando necessário retornar ordenado, filtrado, etc
    },
    mutations: {
        selectScroll(state, val) {
            state.selectedScroll = val
        },
    },
    actions: {},
}