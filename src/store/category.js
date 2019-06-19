import category from "../api/category";

const state = {
    list:      [],
    detail:    {},
    listByHome: [],
    listCategoryMost: []
};

const actions = {
    getCategories({commit}) {
        category.get().then(response => {
            commit("setCategories", response.result);
        });
    },
    getCategoryBySlug({commit}, slug) {
        return category.detailBySlug(slug).then(response => {
            commit("setCategory", response.result);
            return response.result;
        });
    },
    getCategoriesIsHome({commit}){
        category.getIsHome().then(response => {
            commit('setCategoryIsHome', response.result);
        })
    },
    getCategoriesMost({commit}) {
        let query = {
            columns: "id,name"
        };

        category.get(query).then(response => {
            commit("setCategoryMost", response.result);
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
    setCategoryIsHome(state, list) {
        state.listByHome = list;
    },
    setCategoryMost(state, categories) {
        state.listCategoryMost = categories;
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
