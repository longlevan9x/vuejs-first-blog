import home from "../api/home";

const state     = {
    listPostIsHome:     [],
    listCategoryIsHome: []
};
const actions   = {
    getListPostCategoryIsHome({commit}) {
        home.getListPostCategoryIsHome().then(response => {
            commit("setListPostIsHome", response.result.posts);
            commit("setListCategoryIsHome", response.result.categories);
        });
    }
};
const mutations = {
    setListPostIsHome(state, posts) {
        state.listPostIsHome = posts;
    },
    setListCategoryIsHome(state, categories) {
        state.listCategoryIsHome = categories;
    }
};
const getters   = {};
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
