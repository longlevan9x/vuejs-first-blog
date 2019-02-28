import category from "../api/category";

const state = {
    list:      [],
    isLoading: false,
    detail:    {},
};

const actions = {
    getCategories({commit}) {
        commit("displayLoading", true);
        category.get().then(response => {
            commit("setCategories", response.result);
            commit("displayLoading", false);
        });
    },
    getCategoryBySlug({commit}, slug) {
        return category.detailBySlug(slug).then(response => {
            commit("setCategory", response.result);
            return response.result;
        });
    }
};

const mutations = {
    setCategory(state, category) {
        state.detail = category;
    },
    setCategories(state, categories) {
        state.list = categories;
    },
    displayLoading(state, payLoad) {
        state.isLoading = payLoad;
    }
};

const getters = {};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};