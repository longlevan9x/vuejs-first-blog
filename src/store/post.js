import post     from "../api/post";
import category from "../api/category";

const state = {
    posts:     [],
    isLoading: false,
    post:      {}
};

const actions = {
    getPosts({commit}) {
        commit("displayLoading", true);
        post.get().then(response => {
            commit("setPosts", response.result.data);
            commit("displayLoading", false);
        });
    },
    getPostsByCategory({commit}, category_id) {
        post.get({category_id: category_id}).then(response => {
            commit("setPosts", response.result.data);
        });
    },
    getDetail({commit}, slug) {
        post.getBySlug(slug).then(response => {
            commit('setPost', response.result)
        })
    }
};

const mutations = {
    setPost(state, post) {
        state.post = post
    },
    setPosts(state, posts) {
        state.posts = posts;
    },
    displayLoading(state, payLoad) {
        state.isLoading = payLoad;
    },
    goDetail(state, post) {
        state.post = {...post};
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
