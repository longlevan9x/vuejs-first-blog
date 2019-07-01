import Vue      from "vue";
import Vuex     from "vuex";
import post    from "./store/post";
import home     from "./store/home";
import category from "./store/category";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        category: category,
        post:    post,
        home:     home
    }
});
