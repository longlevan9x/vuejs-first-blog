import post from "../../api/post";

const state = {
    posts:     [12312, 12, 12, 21, 2],
    isLoading: false
};

const actions = {
    getPosts: function ({commit}) {
        commit("displayLoading", true);
        post.get().then(response => {
            commit("setPosts", response.articles);
            commit("displayLoading", false);
        });
    }
};

const mutations = {
    setPosts(state, posts) {
        state.posts = posts;
    },
    displayLoading(state, payLoad) {
        state.isLoading = payLoad;
    }
};
export default {
    namespaced: true,
    state,
    actions,
    mutations
};
