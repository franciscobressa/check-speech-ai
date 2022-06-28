export default {
    namespaced: true,
    state: {
        selectedLanguage: "en",
    },
    getters: {
        // criar apenas quando necessário retornar ordenado, filtrado, etc
    },
    mutations: {
        setLanguage(state, val) {
            state.selectedLanguage = val
        },
    },
    actions: {},
}