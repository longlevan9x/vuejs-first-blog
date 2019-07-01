import home from "../api/home";
import post from "../api/post";

const state     = {
    listPostIsHome:     [],
    listCategoryIsHome: [],
    postLatest: [],
    listPostPopular: []
};
const actions   = {
    getListPostCategoryIsHome({commit}) {
        home.getListPostCategoryIsHome().then(response => {
            commit("setListPostIsHome", response.result.posts);
            commit("setListCategoryIsHome", response.result.categories);
        });
    },

    getListPostLatest({commit}, params) {
        if (typeof params === "undefined") {
            params = {};
        }
        params.order_by = "created_at,desc";
        params.limit = 8;
        post.get(params).then(response => {
            commit("setPostLatest", {data: response.result.data, current_page: response.result.current_page, last_page: response.result.last_page});
        });
    },
    getListPostPopular({commit}, params) {
        if (typeof params === "undefined") {
            params = {};
        }
        params.order_by = "created_at,desc";
        params.limit = 10;
        params.columns = "id,title,slug,image";

        post.getListPopular(params).then(response => {
            if (response.status === 200) {
                commit("setListPostPopular", response.result);
            }
        });
    }
};
const mutations = {
    setListPostIsHome(state, posts) {
        state.listPostIsHome = posts;
    },
    setListCategoryIsHome(state, categories) {
        state.listCategoryIsHome = categories;
    },
    setPostLatest(state, postLatest) {
        state.postLatest = postLatest;
    },
    setListPostPopular(state, posts) {
        state.listPostPopular = posts;
    },
};
const getters   = {};
export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
