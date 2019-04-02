<template>
    <!-- pageheader
     ================================================== -->
    <section class="s-pageheader s-pageheader--home">
        <header class="header">
            <div class="header__content row">
                <div class="header__logo">
                    <a class="logo" href="index.html">
                        <img src="/assets/images/logo.svg" alt="Homepage" />
                    </a>
                </div>
                <!-- end header__logo -->

                <ul class="header__social">
                    <li>
                        <a href="#0"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#0"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#0"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#0"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                    </li>
                </ul>
                <!-- end header__social -->

                <a class="header__search-trigger" href="#0"></a>

                <div class="header__search">
                    <form role="search" method="get" class="header__search-form" action="#">
                        <label>
                            <span class="hide-content">Search for: {{keyword}}</span>
                            <input type="search" class="search-field" placeholder="Type Keywords" value="" name="s" title="Search for:" autocomplete="off" v-model="keyword" />
                        </label>
                        <input type="button" class="search-submit" value="Search" v-on:click="search()" />
                    </form>
                    <a href="#0" title="Close Search" class="header__overlay-close">Close</a>
                </div>
                <!-- end header__search -->

                <a class="header__toggle-menu" href="#0" title="Menu"><span>Menu</span></a>

                <nav class="header__nav-wrap">
                    <h2 class="header__nav-heading h6">Site Navigation</h2>
                    <ul class="header__nav">
                        <li class="current">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="has-children">
                            <a href="#0" title="">Categories</a>
                            <ul class="sub-menu">
                                <li>
                                    <router-link v-bind:to="category.slug" v-for="category in categories">{{category.name}}</router-link>
                                </li>
                            </ul>
                        </li>
                        <!--<li class="has-children">-->
                        <!--<a href="#0" title="">Blog</a>-->
                        <!--<ul class="sub-menu">-->
                        <!--<li>-->
                        <!--<router-link to="/post-video">Video Post</router-link>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<router-link to="/post-audio">Audio Post</router-link>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<router-link to="/post-gallery">Gallery Post</router-link>-->
                        <!--</li>-->
                        <!--<li>-->
                        <!--<router-link to="/post-standard">Standard Post</router-link>-->
                        <!--</li>-->
                        <!--</ul>-->
                        <!--</li>-->
                        <li>
                            <router-link to="/style-guide">Styles</router-link>
                        </li>
                        <li>
                            <router-link to="/about">About</router-link>
                        </li>
                        <li>
                            <router-link to="/contact">Contact</router-link>
                        </li>
                    </ul>
                    <!-- end header__nav -->

                    <a
                            href="#0"
                            title="Close Menu"
                            class="header__overlay-close close-mobile-menu"
                    >Close</a
                    >
                </nav>
                <!-- end header__nav-wrap -->
            </div>
            <!-- header-content -->
        </header>
        <!-- header -->
    </section>
    <!-- end s-pageheader -->
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name:     "Header",
        data() {
            return {keyword: ""};
        },
        computed: {
            ...mapState({
                categories: state => state.category.list
            })
        },
        created() {
            this.$store.dispatch("category/getCategories");
        },
        methods: {
            search() {
                this.$store.dispatch("posts/getPostsSearch", {keyword : this.keyword});
            }
        }
    };
</script>
