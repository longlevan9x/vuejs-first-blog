import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import StyleGuide from "./views/StyleGuide.vue";
import Contact from "./views/Contact.vue";
import About from "./views/About.vue";
import Category from "./views/Category.vue";
import PostVideo from "./views/post/Video.vue";
import PostAudio from "./views/post/Audio.vue";
import PostGallery from "./views/post/Gallery.vue";
import PostStandard from "./views/post/Standard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "/home",
          component: Home
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: "/style-guide",
      name: "styleGuide",
      component: StyleGuide
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/category",
      name: "category",
      component: Category
    },
    {
      path: "/post-video",
      name: "video",
      component: PostVideo
    },
    {
      path: "/post-audio",
      name: "audio",
      component: PostAudio
    },
    {
      path: "/post-gallery",
      name: "gallery",
      component: PostGallery
    },
    {
      path: "/post-standard",
      name: "standard",
      component: PostStandard
    },
    {
      path: "/:slug",
      name: "post",
      component: PostStandard
    }
  ]
});
