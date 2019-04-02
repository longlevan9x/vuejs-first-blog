<template>
    <!-- s-content
      ================================================== -->
    <section class="s-content">
        <div class="row narrow">

        </div>

        <div class="row masonry-wrap">
            <div class="masonry">
                <div class="grid-sizer"></div>
                <div v-masonry transition-duration="0.3s" item-selector=".item">
                    <article v-masonry-tile class="item masonry__brick entry format-standard" data-aos="fade-up"
                             v-for="post in posts">
                        <div class="entry__thumb" v-if="post.image">
                            <router-link :to="getSlugID(post)" class="entry__thumb-link">
                                <img v-bind:src="post.image" :srcset="post.image" alt=""/>
                            </router-link>
                        </div>
                        <div class="entry__text">
                            <div class="entry__header">
                                <div class="entry__date">
                                    <a href="#">{{post.created_at}}</a>
                                </div>
                                <h1 class="entry__title">
                                    <router-link :to="getSlugID(post)" class="entry__thumb-link">{{post.title}}
                                    </router-link>
                                </h1>
                            </div>
                            <div class="entry__excerpt">
                                <p>{{post.overview}}...
                                </p>
                            </div>
                            <div class="entry__meta">
                          <span class="entry__meta-links">
                            <a href="category.html">Design</a>
                            <a href="category.html">Photography</a>
                          </span>
                            </div>
                        </div>
                    </article>
                </div>
                <!-- end article -->
            </div>
            <!-- end masonry -->
        </div>
        <!-- end masonry-wrap -->

        <!-- end masonry-wrap -->
        <div class="row" v-if="paginate.total != null">
            <div class="col-full">
                <nav class="pgn">
                    <ul>
                        <li><a :class="'pgn__prev ' + (currentPage === 1 ? 'hide' : '')"
                               @click="handleChangePage(currentPage - 1)">Prev</a></li>
                        <li v-for="page in paginate.last_page">
                            <a :class="(page === currentPage ? 'current ' : '') + ' ' + 'pgn__num'"
                               @click="handleChangePage(page)">{{page}}</a>
                        </li>
                        <li><a :class="'pgn__next ' + (currentPage === paginate.last_page ? 'hide' : '')"
                               @click="handleChangePage(currentPage + 1)">Next</a></li>
                        <!--<li>-->
                        <!--<span class="pgn__num dots">…</span>-->
                        <!--</li>-->
                    </ul>
                </nav>
            </div>
        </div>
    </section>
    <!-- s-content -->
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Search",
        data() {
            return {
                currentPage: 1,
                keyword: ''
            };
        },
        computed: {
            ...mapState({
                posts: state => state.posts.posts,
                paginate: state => state.posts.paginate
            })
        },
        created() {
            let query = this.$route.query;
            this.currentPage = parseInt(query.page) || 1
            this.keyword = query.keyword || ''
            this.getPosts(this.currentPage);
        },
        methods: {
            goToDetail(post) {
                this.$store.commit("post/goDetail", post);
            },
            getSlugID(post) {
                return this.slug = post.slug + "--" + post.id;
            },
            handleChangePage: function (page) {
                if (page <= 0) {
                    page = 1;
                } else if (page >= this.paginate.last_page) {
                    page = this.paginate.last_page;
                }
                // console.log(page);
                this.currentPage = page;
                this.$router.push({name: "search", query: {keyword: this.keyword, page: page}});
                this.getPosts(page)
            },
            getPosts(page = 1) {
                this.$store.dispatch("posts/getPostsSearch", {keyword: this.keyword, page: page});
            }
        },
        watch: {
            // "$route.params"(to, from) {
            //     console.log(this.$route)
            //     let query = this.$route.query;
            //     this.keyword = query.keyword || this.keyword
            //     this.getPosts();
            // },
            "$route.query.keyword"(to, from) {
                let query = this.$route.query;
                this.keyword = query.keyword || this.keyword
                this.getPosts();
            }
        }
    };
</script>
<style scoped>
    #img-category {
        width: 35%;
        margin: 0 auto;
    }

    .hide {
        display: none;
    }
</style>