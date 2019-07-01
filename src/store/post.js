import post     from "../api/post";
import category from "../api/category";
import Paginate from "../utils/paginate";

const state = {
    posts:       [],
    isLoading:   false,
    post:        {},
    paginate:    {},
    postTop:     {},
    listTop:     [],
    listPopular: []
};

const actions = {
    getPosts({commit}, params) {
        post.get(params).then(response => {
            let result = response.result;
            commit("setPosts", result);
        });
    },
    getPostsByCategory({commit}, params) {
        post.get(params).then(response => {
            if (response.status === 200) {
                let result = response.result;
                commit("setPosts", result);
            }
        });
    },
    getPostsTop({commit}) {
        post.getListTop().then(response => {
            if (response.status === 200) {
                commit("setListTop", response.result);
            }
        });
    },
    getPostsPopular({commit}, params) {
        if (typeof params === "undefined") {
            params = {};
        }
        params.order_by = "created_at,desc";
        params.limit = 10;
        params.columns = "id,title,slug,image";

        post.getListPopular(params).then(response => {
            if (response.status === 200) {
                commit("setListPopular", response.result);
            }
        });
    },

    getDetail({commit}, slug) {
        post.getBySlug(slug).then(response => {
            commit("setPost", response.result);
        });
    },

    getPostsSearch({commit}, params) {
        post.getPostsSearch(params).then(response => {
            if (response.status === 200) {
                commit("setPosts", response.result);
            }
        });
    }
};

const mutations = {
    setPaginate(state, paginate) {
        state.paginate = paginate;
    },
    // set data & list data
    setPost(state, post) {
        state.post = post;
    },
    setPosts(state, result) {
        state.posts    = result.data;
        state.paginate = new Paginate(result.current_page, result.last_page, result.path, result.per_page, result.from, result.to, result.total);
    },
    setListTop(state, posts) {
        state.postTop = posts[0];
        delete  posts[0];
        state.listTop = posts;
    },
    setListPopular(state, posts) {
        state.listPopular = posts;
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
