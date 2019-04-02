<template>
    <!-- s-content
      ================================================== -->
    <section class="s-content">
        <div class="row narrow">
            <div class="col-full s-content__header" data-aos="fade-up">
                <div class="masonry" id="img-category">
                    <a href="#" class="entry__thumb-link">
                        <img v-bind:src="category.image" :srcset="category.image" :alt="category.name"/>
                    </a>
                </div>
                <h1>{{category.name}}</h1>

                <p class="lead">
                    {{category.description}}
                </p>
            </div>
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
        name: "Category",
        data() {
            return {
                currentPage: 1
            };
        },
        computed: {
            ...mapState({
                category: state => state.category.detail,
                posts: state => state.posts.posts,
                paginate: state => state.posts.paginate
            })
        },
        beforeMount() {

        },
        created() {
            this.currentPage = parseInt(this.$route.query.page) || 1

            this.$store.dispatch("category/getCategoryBySlug", this.$route.params.slug).then(category => {
                this.getPostByCategory(category.id, this.currentPage);
            });
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
                this.$router.push({path: this.$route.params.slug, query: {page: page}});
                this.getPostByCategory(this.category.id, page)
            },
            getPostByCategory(category_id, page = 1) {
                this.$store.dispatch("posts/getPostsByCategory", {category_id: category_id, page: page});
            }
        },
        watch: {
            "$route.params"(to, from) {
                this.$store.dispatch("category/getCategoryBySlug", this.$route.params.slug).then(category => {
                    this.getPostByCategory(category.id);
                });
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
<!--<article-->
<!--class="masonry__brick entry format-standard"-->
<!--data-aos="fade-up"-->
<!--&gt;-->
<!--<div class="entry__thumb">-->
<!--<a href="single-standard.html" class="entry__thumb-link">-->
<!--<img-->
<!--src="/assets/images/thumbs/masonry/lamp-400.jpg"-->
<!--srcset="-->
<!--/assets/images/thumbs/masonry/lamp-400.jpg 1x,-->
<!--/assets/images/thumbs/masonry/lamp-800.jpg 2x-->
<!--"-->
<!--alt=""-->
<!--/>-->
<!--</a>-->
<!--</div>-->

<!--<div class="entry__text">-->
<!--<div class="entry__header">-->
<!--<div class="entry__date">-->
<!--<a href="single-standard.html">December 15, 2017</a>-->
<!--</div>-->
<!--<h1 class="entry__title">-->
<!--<a href="single-standard.html">Just a Standard Format Post.</a>-->
<!--</h1>-->
<!--</div>-->
<!--<div class="entry__excerpt">-->
<!--<p>-->
<!--Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua-->
<!--incididunt mollit id et sit proident dolor nulla sed commodo est-->
<!--ad minim elit reprehenderit nisi officia aute incididunt velit-->
<!--sint in aliqua...-->
<!--</p>-->
<!--</div>-->
<!--<div class="entry__meta">-->
<!--<span class="entry__meta-links">-->
<!--<a href="category.html">Design</a>-->
<!--<a href="category.html">Photography</a>-->
<!--</span>-->
<!--</div>-->
<!--</div>-->
<!--</article>-->
<!--&lt;!&ndash; end article &ndash;&gt;-->

<!--<article class="masonry__brick entry format-quote" data-aos="fade-up">-->
<!--<div class="entry__thumb">-->
<!--<blockquote>-->
<!--<p>-->
<!--Good design is making something intelligible and memorable.-->
<!--Great design is making something memorable and meaningful.-->
<!--</p>-->

<!--<cite>Dieter Rams</cite>-->
<!--</blockquote>-->
<!--</div>-->
<!--</article>-->
<!--&lt;!&ndash; end article &ndash;&gt;-->

<!--<article class="masonry__brick entry format-standard">-->
<!--<div class="entry__thumb">-->
<!--<a href="single-standard.html" class="entry__thumb-link">-->
<!--<img-->
<!--src="/assets/images/thumbs/masonry/tulips-400.jpg"-->
<!--srcset="-->
<!--/assets/images/thumbs/masonry/tulips-400.jpg 1x,-->
<!--/assets/images/thumbs/masonry/tulips-800.jpg 2x-->
<!--"-->
<!--alt=""-->
<!--/>-->
<!--</a>-->
<!--</div>-->

<!--<div class="entry__text">-->
<!--<div class="entry__header">-->
<!--<div class="entry__date">-->
<!--<a href="single-standard.html">December 15, 2017</a>-->
<!--</div>-->
<!--<h1 class="entry__title">-->
<!--<a href="single-standard.html"-->
<!--&gt;10 Interesting Facts About Caffeine.</a-->
<!--&gt;-->
<!--</h1>-->
<!--</div>-->
<!--<div class="entry__excerpt">-->
<!--<p>-->
<!--Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua-->
<!--incididunt mollit id et sit proident dolor nulla sed commodo est-->
<!--ad minim elit reprehenderit nisi officia aute incididunt velit-->
<!--sint in aliqua...-->
<!--</p>-->
<!--</div>-->
<!--<div class="entry__meta">-->
<!--<span class="entry__meta-links">-->
<!--<a href="category.html">Health</a>-->
<!--</span>-->
<!--</div>-->
<!--</div>-->
<!--</article>-->
<!--&lt;!&ndash; end article &ndash;&gt;-->

<!--<article-->
<!--class="masonry__brick entry format-standard"-->
<!--data-aos="fade-up"-->
<!--&gt;-->
<!--<div class="entry__thumb">-->
<!--<a href="single-standard.html" class="entry__thumb-link">-->
<!--<img-->
<!--src="/assets/images/thumbs/masonry/cookies-400.jpg"-->
<!--srcset="-->
<!--/assets/images/thumbs/masonry/cookies-400.jpg 1x,-->
<!--/assets/images/thumbs/masonry/cookies-800.jpg 2x-->
<!--"-->
<!--alt=""-->
<!--/>-->
<!--</a>-->
<!--</div>-->

<!--<div class="entry__text">-->
<!--<div class="entry__header">-->
<!--<div class="entry__date">-->
<!--<a href="single-standard.html">December 10, 2017</a>-->
<!--</div>-->
<!--<h1 class="entry__title">-->
<!--<a href="single-standard.html">No Sugar Oatmeal Cookies.</a>-->
<!--</h1>-->
<!--</div>-->
<!--<div class="entry__excerpt">-->
<!--<p>-->
<!--Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua-->
<!--incididunt mollit id et sit proident dolor nulla sed commodo est-->
<!--ad minim elit reprehenderit nisi officia aute incididunt velit-->
<!--sint in aliqua...-->
<!--</p>-->
<!--</div>-->
<!--<div class="entry__meta">-->
<!--<span class="entry__meta-links">-->
<!--<a href="category.html">Cooking</a>-->
<!--<a href="category.html">Health</a>-->
<!--</span>-->
<!--</div>-->
<!--</div>-->
<!--</article>-->
<!--&lt;!&ndash; end article &ndash;&gt;-->

<!--<article-->
<!--class="masonry__brick entry format-standard"-->
<!--data-aos="fade-up"-->
<!--&gt;-->
<!--<div class="entry__thumb">-->
<!--<a href="single-standard.html" class="entry__thumb-link">-->
<!--<img-->
<!--src="/assets/images/thumbs/masonry/wheel-400.jpg"-->
<!--srcset="-->
<!--/assets/images/thumbs/masonry/wheel-400.jpg 1x,-->
<!--/assets/images/thumbs/masonry/wheel-800.jpg 2x-->
<!--"-->
<!--alt=""-->
<!--/>-->
<!--</a>-->
<!--</div>-->

<!--<div class="entry__text">-->
<!--<div class="entry__header">-->
<!--<div class="entry__date">-->
<!--<a href="single-standard.html">December 10, 2017</a>-->
<!--</div>-->
<!--<h1 class="entry__title">-->
<!--<a href="single-standard.html"-->
<!--&gt;Visiting Theme Parks Improves Your Health.</a-->
<!--&gt;-->
<!--</h1>-->
<!--</div>-->
<!--<div class="entry__excerpt">-->
<!--<p>-->
<!--Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua-->
<!--incididunt mollit id et sit proident dolor nulla sed commodo est-->
<!--ad minim elit reprehenderit nisi officia aute incididunt velit-->
<!--sint in aliqua...-->
<!--</p>-->
<!--</div>-->
<!--<div class="entry__meta">-->
<!--<span class="entry__meta-links">-->
<!--<a href="#">Health</a>-->
<!--<a href="#">Lifestyle</a>-->
<!--</span>-->
<!--</div>-->
<!--</div>-->
<!--</article>-->
<!--&lt;!&ndash; end article &ndash;&gt;-->

<!--<article class="masonry__brick entry format-video" data-aos="fade-up">-->
<!--<div class="entry__thumb video-image">-->
<!--<a-->
<!--href="https://player.vimeo.com/video/117310401?color=01aef0&title=0&byline=0&portrait=0"-->
<!--data-lity-->
<!--&gt;-->
<!--<img-->
<!--src="/assets/images/thumbs/masonry/shutterbug-400.jpg"-->
<!--srcset="-->
<!--/assets/images/thumbs/masonry/shutterbug-400.jpg 1x,-->
<!--/assets/images/thumbs/masonry/shutterbug-800.jpg 2x-->
<!--"-->
<!--alt=""-->
<!--/>-->
<!--</a>-->
<!--</div>-->

<!--<div class="entry__text">-->
<!--<div class="entry__header">-->
<!--<div class="entry__date">-->
<!--<a href="single-video.html">December 10, 2017</a>-->
<!--</div>-->
<!--<h1 class="entry__title">-->
<!--<a href="single-video.html"-->
<!--&gt;Key Benefits Of Family Photography.</a-->
<!--&gt;-->
<!--</h1>-->
<!--</div>-->
<!--<div class="entry__excerpt">-->
<!--<p>-->
<!--Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua-->
<!--incididunt mollit id et sit proident dolor nulla sed commodo est-->
<!--ad minim elit reprehenderit nisi officia aute incididunt velit-->
<!--sint in aliqua...-->
<!--</p>-->
<!--</div>-->
<!--<div class="entry__meta">-->
<!--<span class="entry__meta-links">-->
<!--<a href="category.html">Family</a>-->
<!--<a href="category.html">Photography</a>-->
<!--</span>-->
<!--</div>-->
<!--</div>-->
<!--</article>-->
<!--&lt;!&ndash; end article &ndash;&gt;-->

<!--<article class="masonry__brick entry format-gallery" data-aos="fade-up">-->
<!--<div class="entry__thumb slider">-->
<!--<div class="slider__slides">-->
<!--<div class="slider__slide">-->
<!--<img-->
<!--src="/assets/images/thumbs/masonry/gallery/gallery-1-400.jpg"-->
<!--srcset="-->
<!--/assets/images/thumbs/masonry/gallery/gallery-1-400.jpg 1x,-->
<!--/assets/images/thumbs/masonry/gallery/gallery-1-800.jpg 2x-->
<!--"-->
<!--alt=""-->
<!--/>-->
<!--</div>-->
<!--<div class="slider__slide">-->
<!--<img-->
<!--src="/assets/images/thumbs/masonry/gallery/gallery-2-400.jpg"-->
<!--srcset="-->
<!--/assets/images/thumbs/masonry/gallery/gallery-2-400.jpg 1x,-->
<!--/assets/images/thumbs/masonry/gallery/gallery-2-800.jpg 2x-->
<!--"-->
<!--alt=""-->
<!--/>-->
<!--</div>-->
<!--<div class="slider__slide">-->
<!--<img-->
<!--src="/assets/images/thumbs/masonry/gallery/gallery-3-400.jpg"-->
<!--srcset="-->
<!--/assets/images/thumbs/masonry/gallery/gallery-3-400.jpg 1x,-->
<!--/assets/images/thumbs/masonry/gallery/gallery-3-800.jpg 2x-->
<!--"-->
<!--alt=""-->
<!--/>-->
<!--</div>-->
<!--</div>-->
<!--</div>-->

<!--<div class="entry__text">-->
<!--<div class="entry__header">-->
<!--<div class="entry__date">-->
<!--<a href="single-gallery.html">December 10, 2017</a>-->
<!--</div>-->
<!--<h1 class="entry__title">-->
<!--<a href="single-gallery.html"-->
<!--&gt;Workspace Design Trends and Ideas.</a-->
<!--&gt;-->
<!--</h1>-->
<!--</div>-->
<!--<div class="entry__excerpt">-->
<!--<p>-->
<!--Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua-->
<!--incididunt mollit id et sit proident dolor nulla sed commodo est-->
<!--ad minim elit reprehenderit nisi officia aute incididunt velit-->
<!--sint in aliqua...-->
<!--</p>-->
<!--</div>-->
<!--<div class="entry__meta">-->
<!--<span class="entry__meta-links">-->
<!--<a href="category.html">Work</a>-->
<!--<a href="category.html">Management</a>-->
<!--</span>-->
<!--</div>-->
<!--</div>-->
<!--</article>-->
<!--&lt;!&ndash; end article &ndash;&gt;-->

<!--<article class="masonry__brick entry format-audio" data-aos="fade-up">-->
<!--<div class="entry__thumb">-->
<!--<a href="single-audio.html" class="entry__thumb-link">-->
<!--<img-->
<!--src="/assets/images/thumbs/masonry/guitarman-400.jpg"-->
<!--srcset="-->
<!--/assets/images/thumbs/masonry/guitarman-400.jpg 1x,-->
<!--/assets/images/thumbs/masonry/guitarman-800.jpg 2x-->
<!--"-->
<!--alt=""-->
<!--/>-->
<!--</a>-->
<!--<div class="audio-wrap">-->
<!--<audio-->
<!--id="player"-->
<!--src="media/AirReview-Landmarks-02-ChasingCorporate.mp3"-->
<!--width="100%"-->
<!--height="42"-->
<!--controls="controls"-->
<!--&gt;</audio>-->
<!--</div>-->
<!--</div>-->

<!--<div class="entry__text">-->
<!--<div class="entry__header">-->
<!--<div class="entry__date">-->
<!--<a href="single-audio.html">December 10, 2017</a>-->
<!--</div>-->
<!--<h1 class="entry__title">-->
<!--<a href="single-audio.html"-->
<!--&gt;What Your Music Preference Says About You and Your-->
<!--Personality.</a-->
<!--&gt;-->
<!--</h1>-->
<!--</div>-->
<!--<div class="entry__excerpt">-->
<!--<p>-->
<!--Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua-->
<!--incididunt mollit id et sit proident dolor nulla sed commodo est-->
<!--ad minim elit reprehenderit nisi officia aute incididunt velit-->
<!--sint in aliqua...-->
<!--</p>-->
<!--</div>-->
<!--<div class="entry__meta">-->
<!--<span class="entry__meta-links">-->
<!--<a href="category.html">Music</a>-->
<!--<a href="category.html">Lifestyle</a>-->
<!--</span>-->
<!--</div>-->
<!--</div>-->
<!--</article>-->
<!--&lt;!&ndash; end article &ndash;&gt;-->

<!--<article class="masonry__brick entry format-link" data-aos="fade-up">-->
<!--<div class="entry__thumb">-->
<!--<div class="link-wrap">-->
<!--<p>-->
<!--The Only Resource You Will Need To Start a Blog Using WordPress.-->
<!--</p>-->
<!--<cite>-->
<!--<a target="_blank" href="https://colorlib.com/"-->
<!--&gt;https://colorlib.com</a-->
<!--&gt;-->
<!--</cite>-->
<!--</div>-->
<!--</div>-->
<!--</article>-->
<!--&lt;!&ndash; end article &ndash;&gt;-->

<!--<article-->
<!--class="masonry__brick entry format-standard"-->
<!--data-aos="fade-up"-->
<!--&gt;-->
<!--<div class="entry__thumb">-->
<!--<a href="single-standard.html" class="entry__thumb-link">-->
<!--<img-->
<!--src="/assets/images/thumbs/masonry/jump-400.jpg"-->
<!--srcset="-->
<!--/assets/images/thumbs/masonry/jump-400.jpg 1x,-->
<!--/assets/images/thumbs/masonry/jump-800.jpg 2x-->
<!--"-->
<!--alt=""-->
<!--/>-->
<!--</a>-->
<!--</div>-->

<!--<div class="entry__text">-->
<!--<div class="entry__header">-->
<!--<div class="entry__date">-->
<!--<a href="single-standard.html">December 10, 2017</a>-->
<!--</div>-->
<!--<h1 class="entry__title">-->
<!--<a href="single-standard.html"-->
<!--&gt;Create Meaningful Family Moments.</a-->
<!--&gt;-->
<!--</h1>-->
<!--</div>-->
<!--<div class="entry__excerpt">-->
<!--<p>-->
<!--Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua-->
<!--incididunt mollit id et sit proident dolor nulla sed commodo est-->
<!--ad minim elit reprehenderit nisi officia aute incididunt velit-->
<!--sint in aliqua...-->
<!--</p>-->
<!--</div>-->
<!--<div class="entry__meta">-->
<!--<span class="entry__meta-links">-->
<!--<a href="category.html">Family</a>-->
<!--<a href="category.html">Relationship</a>-->
<!--</span>-->
<!--</div>-->
<!--</div>-->
<!--</article>-->
<!--&lt;!&ndash; end article &ndash;&gt;-->

<!--<article-->
<!--class="masonry__brick entry format-standard"-->
<!--data-aos="fade-up"-->
<!--&gt;-->
<!--<div class="entry__thumb">-->
<!--<a href="single-standard.html" class="entry__thumb-link">-->
<!--<img-->
<!--src="/assets/images/thumbs/masonry/beetle-400.jpg"-->
<!--srcset="-->
<!--/assets/images/thumbs/masonry/beetle-400.jpg 1x,-->
<!--/assets/images/thumbs/masonry/beetle-800.jpg 2x-->
<!--"-->
<!--alt=""-->
<!--/>-->
<!--</a>-->
<!--</div>-->

<!--<div class="entry__text">-->
<!--<div class="entry__header">-->
<!--<div class="entry__date">-->
<!--<a href="single-standard.html">December 10, 2017</a>-->
<!--</div>-->
<!--<h1 class="entry__title">-->
<!--<a href="single-standard.html"-->
<!--&gt;Throwback To The Good Old Days.</a-->
<!--&gt;-->
<!--</h1>-->
<!--</div>-->
<!--<div class="entry__excerpt">-->
<!--<p>-->
<!--Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua-->
<!--incididunt mollit id et sit proident dolor nulla sed commodo est-->
<!--ad minim elit reprehenderit nisi officia aute incididunt velit-->
<!--sint in aliqua...-->
<!--</p>-->
<!--</div>-->
<!--<div class="entry__meta">-->
<!--<span class="entry__meta-links">-->
<!--<a href="category.html">Lifestyle</a>-->
<!--</span>-->
<!--</div>-->
<!--</div>-->
<!--</article>-->
<!--&lt;!&ndash; end article &ndash;&gt;-->

<!--<article-->
<!--class="masonry__brick entry format-standard"-->
<!--data-aos="fade-up"-->
<!--&gt;-->
<!--<div class="entry__thumb">-->
<!--<a href="single-standard.html" class="entry__thumb-link">-->
<!--<img-->
<!--src="/assets/images/thumbs/masonry/fuji-400.jpg"-->
<!--srcset="-->
<!--/assets/images/thumbs/masonry/fuji-400.jpg 1x,-->
<!--/assets/images/thumbs/masonry/fuji-800.jpg 2x-->
<!--"-->
<!--alt=""-->
<!--/>-->
<!--</a>-->
<!--</div>-->

<!--<div class="entry__text">-->
<!--<div class="entry__header">-->
<!--<div class="entry__date">-->
<!--<a href="single-standard.html">December 10, 2017</a>-->
<!--</div>-->
<!--<h1 class="entry__title">-->
<!--<a href="single-standard.html"-->
<!--&gt;Just Another Standard Format Post.</a-->
<!--&gt;-->
<!--</h1>-->
<!--</div>-->
<!--<div class="entry__excerpt">-->
<!--<p>-->
<!--Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua-->
<!--incididunt mollit id et sit proident dolor nulla sed commodo est-->
<!--ad minim elit reprehenderit nisi officia aute incididunt velit-->
<!--sint in aliqua...-->
<!--</p>-->
<!--</div>-->
<!--<div class="entry__meta">-->
<!--<span class="entry__meta-links">-->
<!--<a href="category.html">Design</a>-->
<!--<a href="category.html">Photography</a>-->
<!--</span>-->
<!--</div>-->
<!--</div>-->
<!--</article>-->
<!--&lt;!&ndash; end article &ndash;&gt;-->

<!--<article-->
<!--class="masonry__brick entry format-standard"-->
<!--data-aos="fade-up"-->
<!--&gt;-->
<!--<div class="entry__thumb">-->
<!--<a href="single-standard.html" class="entry__thumb-link">-->
<!--<img-->
<!--src="/assets/images/thumbs/masonry/sydney-400.jpg"-->
<!--srcset="-->
<!--/assets/images/thumbs/masonry/sydney-400.jpg 1x,-->
<!--/assets/images/thumbs/masonry/sydney-800.jpg 2x-->
<!--"-->
<!--alt=""-->
<!--/>-->
<!--</a>-->
<!--</div>-->

<!--<div class="entry__text">-->
<!--<div class="entry__header">-->
<!--<div class="entry__date">-->
<!--<a href="single-standard.html">December 10, 2017</a>-->
<!--</div>-->
<!--<h1 class="entry__title">-->
<!--<a href="single-standard.html"-->
<!--&gt;Planning Your First Trip to Sydney.</a-->
<!--&gt;-->
<!--</h1>-->
<!--</div>-->
<!--<div class="entry__excerpt">-->
<!--<p>-->
<!--Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua-->
<!--incididunt mollit id et sit proident dolor nulla sed commodo est-->
<!--ad minim elit reprehenderit nisi officia aute incididunt velit-->
<!--sint in aliqua...-->
<!--</p>-->
<!--</div>-->
<!--<div class="entry__meta">-->
<!--<span class="entry__meta-links">-->
<!--<a href="category.html">Travel</a>-->
<!--<a href="category.html">Vacation</a>-->
<!--</span>-->
<!--</div>-->
<!--</div>-->
<!--</article>-->
<!-- end article -->