<template>
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div class="container">
            <a class="navbar-brand" href="index.html">Explorer</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="oi oi-menu"></span> Menu
            </button>

            <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <router-link to="home" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item active dropdown">
                        <router-link to="category" class="nav-link">Category</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Archives</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown04">
                            <a class="dropdown-item" href="destination.html">Destination</a>
                            <a class="dropdown-item" href="tag.html">Tag</a>
                            <a class="dropdown-item" href="author-post.html">Authors Post</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown04">
                            <a class="dropdown-item" href="right-sidebar.html">Right Sidebar</a>
                            <a class="dropdown-item" href="left-sidebar.html">Left Sidebar</a>
                            <a class="dropdown-item" href="author.html">Authors Page</a>
                        </div>
                    </li>
                    <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- END nav -->
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Header",
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
                this.$router.push({name: "search", query: {keyword: this.keyword}});
            }
        }
    };
</script>
