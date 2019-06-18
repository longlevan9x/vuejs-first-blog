import Vue      from "vue";
import Vuex     from "vuex";
import posts    from "./store/post";
import home     from "./store/home";
import category from "./store/category";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        category: category,
        posts:    posts,
        home:     home
    }
});
