<template>
    <div>
        <div class="hero-wrap js-fullheight" style="background-image: url('assets/images/bg_3.jpg');" data-stellar-background-ratio="0.5">
            <div class="overlay"></div>
            <div class="container">
                <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
                    <div class="col-md-9 text-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                        <p class="breadcrumbs" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
                            <span class="mr-2"><a href="index.html">Home</a></span>
                            <span>Articles</span>
                        </p>
                        <h1 class="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Post No Sidebar</h1>
                    </div>
                </div>
            </div>
        </div>

        <section class="ftco-section" v-for="categoryIsHome in listCategoryIsHome">
            <div class="container">
                <div class="row">
                    <h4 class="block-title">
                        <span class="block-title-detail">{{categoryIsHome.name}}</span>
                    </h4>
                    <div class="owl-carousel content-main">

                        <div class="col-md-12" v-for="(postIsHome, index) in listPostIsHome[categoryIsHome.id]" :key="checkIndexPostIsHome(categoryIsHome.id, index)">
                            <div class="blog-entry ftco-animate">
                                <a href="#" class="img img-2" :style="{backgroundImage: 'url(' + postIsHome.image + ')'}"></a>
                                <div class="text text-2 pt-2 mt-3">
                                    <h3 class="mb-4">
                                        <a href="#">{{postIsHome.title}}</a>
                                    </h3>
                                    <div class="author mb-4 d-flex align-items-center">
                                        <a href="#" class="img" style="background-image: url(assets/images/person_2.jpg);"></a>
                                        <div class="ml-3 info">
                                            <h3>
                                                <a href="#">Dave Lewis</a>,
                                                <span>October 04, 2018</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <!--<div class="meta-wrap align-items-center">-->
                                    <!--<div class="half order-md-last">-->
                                    <!--<p class="meta">-->
                                    <!--<span><i class="icon-heart"></i>3</span>-->
                                    <!--<span><i class="icon-eye"></i>100</span>-->
                                    <!--<span><i class="icon-comment"></i>5</span>-->
                                    <!--</p>-->
                                    <!--</div>-->
                                    <!--<div class="half">-->
                                    <!--<p><a href="#" class="btn btn-primary px-3 py-2">Continue Reading</a></p>-->
                                    <!--</div>-->
                                    <!--</div>-->
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <section class="ftco-section">
            <div class="container">
                <div class="row">

                    <div class="block-title">
                        <h4>
                            <span class="block-title-detail">MOST POPULAR</span>
                        </h4>
                        <nav>
                            <ul class="nav block-nav justify-content-end" ref="navBlock">
                                <li v-for="item in dataMost">
                                    <span :value="item.value">{{item.text}}</span>
                                </li>
                                <li class="dropdown" :style="((childDataMenuDataMost.length === 0) ? 'display:none;' : '') ">
                                    <!--v else-->
                                    <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
                                    <div class="dropdown-menu" aria-labelledby="dropdown04">
                                        <a class="dropdown-item" href="" v-for="childItem in childDataMenuDataMost">{{childItem.text}}</a>
                                    </div>
                                </li>
                            </ul>
                        </nav>

                    </div>
                    <div class="owl-carousel content-main">

                        <div class="col-md-12">
                            <div class="blog-entry ftco-animate">
                                <a href="#" class="img img-2" style="background-image: url(assets/images/image_1.jpg);"></a>
                                <div class="text text-2 pt-2 mt-3">
                                    <h3 class="mb-4">
                                        <a href="#">What to pack when visiting Philippines in summer time</a>
                                    </h3>
                                    <div class="author mb-4 d-flex align-items-center">
                                        <a href="#" class="img" style="background-image: url(assets/images/person_2.jpg);"></a>
                                        <div class="ml-3 info">
                                            <h3>
                                                <a href="#">Dave Lewis</a>,
                                                <span>October 04, 2018</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <!--<div class="meta-wrap align-items-center">-->
                                    <!--<div class="half order-md-last">-->
                                    <!--<p class="meta">-->
                                    <!--<span><i class="icon-heart"></i>3</span>-->
                                    <!--<span><i class="icon-eye"></i>100</span>-->
                                    <!--<span><i class="icon-comment"></i>5</span>-->
                                    <!--</p>-->
                                    <!--</div>-->
                                    <!--<div class="half">-->
                                    <!--<p><a href="#" class="btn btn-primary px-3 py-2">Continue Reading</a></p>-->
                                    <!--</div>-->
                                    <!--</div>-->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="blog-entry ftco-animate">
                                <a href="#" class="img img-2" style="background-image: url(assets/images/image_1.jpg);"></a>
                                <div class="text text-2 pt-2 mt-3">
                                    <h3 class="mb-4">
                                        <a href="#">What to pack when visiting Philippines in summer time</a>
                                    </h3>
                                    <div class="author mb-4 d-flex align-items-center">
                                        <a href="#" class="img" style="background-image: url(assets/images/person_2.jpg);"></a>
                                        <div class="ml-3 info">
                                            <h3>
                                                <a href="#">Dave Lewis</a>,
                                                <span>October 04, 2018</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <!--<div class="meta-wrap align-items-center">-->
                                    <!--<div class="half order-md-last">-->
                                    <!--<p class="meta">-->
                                    <!--<span><i class="icon-heart"></i>3</span>-->
                                    <!--<span><i class="icon-eye"></i>100</span>-->
                                    <!--<span><i class="icon-comment"></i>5</span>-->
                                    <!--</p>-->
                                    <!--</div>-->
                                    <!--<div class="half">-->
                                    <!--<p><a href="#" class="btn btn-primary px-3 py-2">Continue Reading</a></p>-->
                                    <!--</div>-->
                                    <!--</div>-->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="blog-entry ftco-animate">
                                <a href="#" class="img img-2" style="background-image: url(assets/images/image_1.jpg);"></a>
                                <div class="text text-2 pt-2 mt-3">
                                    <h3 class="mb-4">
                                        <a href="#">What to pack when visiting Philippines in summer time</a>
                                    </h3>
                                    <div class="author mb-4 d-flex align-items-center">
                                        <a href="#" class="img" style="background-image: url(assets/images/person_2.jpg);"></a>
                                        <div class="ml-3 info">
                                            <h3>
                                                <a href="#">Dave Lewis</a>,
                                                <span>October 04, 2018</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <!--<div class="meta-wrap align-items-center">-->
                                    <!--<div class="half order-md-last">-->
                                    <!--<p class="meta">-->
                                    <!--<span><i class="icon-heart"></i>3</span>-->
                                    <!--<span><i class="icon-eye"></i>100</span>-->
                                    <!--<span><i class="icon-comment"></i>5</span>-->
                                    <!--</p>-->
                                    <!--</div>-->
                                    <!--<div class="half">-->
                                    <!--<p><a href="#" class="btn btn-primary px-3 py-2">Continue Reading</a></p>-->
                                    <!--</div>-->
                                    <!--</div>-->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="blog-entry ftco-animate">
                                <a href="#" class="img img-2" style="background-image: url(assets/images/image_1.jpg);"></a>
                                <div class="text text-2 pt-2 mt-3">
                                    <h3 class="mb-4">
                                        <a href="#">What to pack when visiting Philippines in summer time</a>
                                    </h3>
                                    <div class="author mb-4 d-flex align-items-center">
                                        <a href="#" class="img" style="background-image: url(assets/images/person_2.jpg);"></a>
                                        <div class="ml-3 info">
                                            <h3>
                                                <a href="#">Dave Lewis</a>,
                                                <span>October 04, 2018</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <!--<div class="meta-wrap align-items-center">-->
                                    <!--<div class="half order-md-last">-->
                                    <!--<p class="meta">-->
                                    <!--<span><i class="icon-heart"></i>3</span>-->
                                    <!--<span><i class="icon-eye"></i>100</span>-->
                                    <!--<span><i class="icon-comment"></i>5</span>-->
                                    <!--</p>-->
                                    <!--</div>-->
                                    <!--<div class="half">-->
                                    <!--<p><a href="#" class="btn btn-primary px-3 py-2">Continue Reading</a></p>-->
                                    <!--</div>-->
                                    <!--</div>-->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="blog-entry ftco-animate">
                                <a href="#" class="img img-2" style="background-image: url(assets/images/image_1.jpg);"></a>
                                <div class="text text-2 pt-2 mt-3">
                                    <h3 class="mb-4">
                                        <a href="#">What to pack when visiting Philippines in summer time</a>
                                    </h3>
                                    <div class="author mb-4 d-flex align-items-center">
                                        <a href="#" class="img" style="background-image: url(assets/images/person_2.jpg);"></a>
                                        <div class="ml-3 info">
                                            <h3>
                                                <a href="#">Dave Lewis</a>,
                                                <span>October 04, 2018</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <!--<div class="meta-wrap align-items-center">-->
                                    <!--<div class="half order-md-last">-->
                                    <!--<p class="meta">-->
                                    <!--<span><i class="icon-heart"></i>3</span>-->
                                    <!--<span><i class="icon-eye"></i>100</span>-->
                                    <!--<span><i class="icon-comment"></i>5</span>-->
                                    <!--</p>-->
                                    <!--</div>-->
                                    <!--<div class="half">-->
                                    <!--<p><a href="#" class="btn btn-primary px-3 py-2">Continue Reading</a></p>-->
                                    <!--</div>-->
                                    <!--</div>-->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="blog-entry ftco-animate">
                                <a href="#" class="img img-2" style="background-image: url(assets/images/image_1.jpg);"></a>
                                <div class="text text-2 pt-2 mt-3">
                                    <h3 class="mb-4">
                                        <a href="#">What to pack when visiting Philippines in summer time</a>
                                    </h3>
                                    <div class="author mb-4 d-flex align-items-center">
                                        <a href="#" class="img" style="background-image: url(assets/images/person_2.jpg);"></a>
                                        <div class="ml-3 info">
                                            <h3>
                                                <a href="#">Dave Lewis</a>,
                                                <span>October 04, 2018</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <!--<div class="meta-wrap align-items-center">-->
                                    <!--<div class="half order-md-last">-->
                                    <!--<p class="meta">-->
                                    <!--<span><i class="icon-heart"></i>3</span>-->
                                    <!--<span><i class="icon-eye"></i>100</span>-->
                                    <!--<span><i class="icon-comment"></i>5</span>-->
                                    <!--</p>-->
                                    <!--</div>-->
                                    <!--<div class="half">-->
                                    <!--<p><a href="#" class="btn btn-primary px-3 py-2">Continue Reading</a></p>-->
                                    <!--</div>-->
                                    <!--</div>-->
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="blog-entry ftco-animate">
                                <a href="#" class="img img-2" style="background-image: url(assets/images/image_1.jpg);"></a>
                                <div class="text text-2 pt-2 mt-3">
                                    <h3 class="mb-4">
                                        <a href="#">What to pack when visiting Philippines in summer time</a>
                                    </h3>
                                    <div class="author mb-4 d-flex align-items-center">
                                        <a href="#" class="img" style="background-image: url(assets/images/person_2.jpg);"></a>
                                        <div class="ml-3 info">
                                            <h3>
                                                <a href="#">Dave Lewis</a>,
                                                <span>October 04, 2018</span>
                                            </h3>
                                        </div>
                                    </div>
                                    <!--<div class="meta-wrap align-items-center">-->
                                    <!--<div class="half order-md-last">-->
                                    <!--<p class="meta">-->
                                    <!--<span><i class="icon-heart"></i>3</span>-->
                                    <!--<span><i class="icon-eye"></i>100</span>-->
                                    <!--<span><i class="icon-comment"></i>5</span>-->
                                    <!--</p>-->
                                    <!--</div>-->
                                    <!--<div class="half">-->
                                    <!--<p><a href="#" class="btn btn-primary px-3 py-2">Continue Reading</a></p>-->
                                    <!--</div>-->
                                    <!--</div>-->
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <section class="ftco-section">
            <div class="container">
                <div class="row">
                    <h4 class="block-title">
                        <span class="block-title-detail">Bài viết mới nhất</span>
                    </h4>
                    <div class="col-md-3">
                        <div class="blog-entry ftco-animate">
                            <a href="#" class="img img-2" style="background-image: url(assets/images/image_1.jpg);"></a>
                            <div class="text text-2 pt-2 mt-3">
                                <h3 class="mb-4">
                                    <a href="#">What to pack when visiting Philippines in summer time</a>
                                </h3>
                                <div class="author mb-4 d-flex align-items-center">
                                    <a href="#" class="img" style="background-image: url(assets/images/person_2.jpg);"></a>
                                    <div class="ml-3 info">
                                        <h3>
                                            <a href="#">Dave Lewis</a>,
                                            <span>October 04, 2018</span>
                                        </h3>
                                    </div>
                                </div>
                                <div class="meta-wrap align-items-center">
                                    <div class="half order-md-last">
                                        <p class="meta">
                                            <span><i class="icon-heart"></i>3</span>
                                            <span><i class="icon-eye"></i>100</span>
                                            <span><i class="icon-comment"></i>5</span>
                                        </p>
                                    </div>
                                    <div class="half">
                                        <p>
                                            <a href="#" class="btn btn-primary px-3 py-2">Continue Reading</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="blog-entry ftco-animate">
                            <a href="#" class="img img-2" style="background-image: url(assets/images/image_2.jpg);"></a>
                            <div class="text text-2 pt-2 mt-3">
                                <h3 class="mb-4">
                                    <a href="#">What to pack when visiting Philippines in summer time</a>
                                </h3>
                                <div class="author mb-4 d-flex align-items-center">
                                    <a href="#" class="img" style="background-image: url(assets/images/person_1.jpg);"></a>
                                    <div class="ml-3 info">
                                        <h3>
                                            <a href="#">Dave Lewis</a>,
                                            <span>October 04, 2018</span>
                                        </h3>
                                    </div>
                                </div>
                                <div class="meta-wrap align-items-center">
                                    <div class="half order-md-last">
                                        <p class="meta">
                                            <span><i class="icon-heart"></i>3</span>
                                            <span><i class="icon-eye"></i>100</span>
                                            <span><i class="icon-comment"></i>5</span>
                                        </p>
                                    </div>
                                    <div class="half">
                                        <p>
                                            <a href="#" class="btn btn-primary px-3 py-2">Continue Reading</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="blog-entry ftco-animate">
                            <a href="#" class="img img-2" style="background-image: url(assets/images/image_3.jpg);"></a>
                            <div class="text text-2 pt-2 mt-3">
                                <h3 class="mb-4">
                                    <a href="#">What to pack when visiting Philippines in summer time</a>
                                </h3>
                                <div class="author mb-4 d-flex align-items-center">
                                    <a href="#" class="img" style="background-image: url(assets/images/person_3.jpg);"></a>
                                    <div class="ml-3 info">
                                        <h3>
                                            <a href="#">Dave Lewis</a>,
                                            <span>October 04, 2018</span>
                                        </h3>
                                    </div>
                                </div>
                                <div class="meta-wrap align-items-center">
                                    <div class="half order-md-last">
                                        <p class="meta">
                                            <span><i class="icon-heart"></i>3</span>
                                            <span><i class="icon-eye"></i>100</span>
                                            <span><i class="icon-comment"></i>5</span>
                                        </p>
                                    </div>
                                    <div class="half">
                                        <p>
                                            <a href="#" class="btn btn-primary px-3 py-2">Continue Reading</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="blog-entry ftco-animate">
                            <a href="#" class="img img-2" style="background-image: url(assets/images/image_4.jpg);"></a>
                            <div class="text text-2 pt-2 mt-3">
                                <h3 class="mb-4">
                                    <a href="#">What to pack when visiting Philippines in summer time</a>
                                </h3>
                                <div class="author mb-4 d-flex align-items-center">
                                    <a href="#" class="img" style="background-image: url(assets/images/person_1.jpg);"></a>
                                    <div class="ml-3 info">
                                        <h3>
                                            <a href="#">Dave Lewis</a>,
                                            <span>October 04, 2018</span>
                                        </h3>
                                    </div>
                                </div>
                                <div class="meta-wrap align-items-center">
                                    <div class="half order-md-last">
                                        <p class="meta">
                                            <span><i class="icon-heart"></i>3</span>
                                            <span><i class="icon-eye"></i>100</span>
                                            <span><i class="icon-comment"></i>5</span>
                                        </p>
                                    </div>
                                    <div class="half">
                                        <p>
                                            <a href="#" class="btn btn-primary px-3 py-2">Continue Reading</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="blog-entry ftco-animate">
                            <a href="#" class="img img-2" style="background-image: url(assets/images/image_5.jpg);"></a>
                            <div class="text text-2 pt-2 mt-3">
                                <h3 class="mb-4">
                                    <a href="#">What to pack when visiting Philippines in summer time</a>
                                </h3>
                                <div class="author mb-4 d-flex align-items-center">
                                    <a href="#" class="img" style="background-image: url(assets/images/person_2.jpg);"></a>
                                    <div class="ml-3 info">
                                        <h3>
                                            <a href="#">Dave Lewis</a>,
                                            <span>October 04, 2018</span>
                                        </h3>
                                    </div>
                                </div>
                                <div class="meta-wrap align-items-center">
                                    <div class="half order-md-last">
                                        <p class="meta">
                                            <span><i class="icon-heart"></i>3</span>
                                            <span><i class="icon-eye"></i>100</span>
                                            <span><i class="icon-comment"></i>5</span>
                                        </p>
                                    </div>
                                    <div class="half">
                                        <p>
                                            <a href="#" class="btn btn-primary px-3 py-2">Continue Reading</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="blog-entry ftco-animate">
                            <a href="#" class="img img-2" style="background-image: url(assets/images/image_6.jpg);"></a>
                            <div class="text text-2 pt-2 mt-3">
                                <h3 class="mb-4">
                                    <a href="#">What to pack when visiting Philippines in summer time</a>
                                </h3>
                                <div class="author mb-4 d-flex align-items-center">
                                    <a href="#" class="img" style="background-image: url(assets/images/person_3.jpg);"></a>
                                    <div class="ml-3 info">
                                        <h3>
                                            <a href="#">Dave Lewis</a>,
                                            <span>October 04, 2018</span>
                                        </h3>
                                    </div>
                                </div>
                                <div class="meta-wrap align-items-center">
                                    <div class="half order-md-last">
                                        <p class="meta">
                                            <span><i class="icon-heart"></i>3</span>
                                            <span><i class="icon-eye"></i>100</span>
                                            <span><i class="icon-comment"></i>5</span>
                                        </p>
                                    </div>
                                    <div class="half">
                                        <p>
                                            <a href="#" class="btn btn-primary px-3 py-2">Continue Reading</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col text-center">
                        <div class="block-27">
                            <ul>
                                <li>
                                    <a href="#">&lt;</a>
                                </li>
                                <li class="active">
                                    <span>1</span>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <a href="#">4</a>
                                </li>
                                <li>
                                    <a href="#">5</a>
                                </li>
                                <li>
                                    <a href="#">&gt;</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>

import carousel from "vue-owl-carousel";
import {mapState} from "vuex";
import Pagination from "../components/Pagination";
import main from "../utils/main";

export default {
    name: "home",
    components: {
        Pagination,
        carousel
    },
    data() {
        return {
            test : 0,
            currentPage: 1,
            childDataMenuDataMost: [],
            dataMost: [
                {
                    "text": "All",
                    "value": 0
                },
                {
                    "text": "PHP",
                    "value": 0
                },
                {
                    "text": "Javascript",
                    "value": 0
                },
                {
                    "text": "Android",
                    "value": 0
                },
                {
                    "text": "Lập trính IOS",
                    "value": 0
                },
                {
                    "text": "Lập trình nhúng",
                    "value": 0
                },
            ]
        };
    },
    computed: {
        ...mapState({
            posts: state => state.posts.posts,
            paginate: state => state.posts.paginate,
            listPostIsHome: state => state.home.listPostIsHome,
            listCategoryIsHome: state => state.home.listCategoryIsHome
        })
    },
    created() {
        this.$store.dispatch('home/getListPostCategoryIsHome');
        this.$store.dispatch("posts/getPostsTop");
        this.startContent();
    },
    mounted() {
        $(window).bind('resize', this.onResize);

        this.updateNavMostPost();

        this.startContent();
        this.currentPage = parseInt(this.$route.query.page) || 1;
        this.$store.dispatch("posts/getPosts", {page: this.currentPage});
        // console.log(this.postTop);
        // console.log(this.postsTop);
    },
    beforeDestroy() {
        // Unregister the event listener before destroying this Vue instance
        $(window).unbind('resize', this.onResize)
    },
    methods: {
        checkIndexPostIsHome(category_id, index) {
            this.startContent();
            if (index === this.listPostIsHome[category_id].length - 1) {
                this.$nextTick(function () {
                    main.homeContentOwl();
                    main.contentWaypoint();
                });
            }
        },
        updateNavMostPost() {
            let totalWidthItemNav = 0;
            let dropdownWidth = $(this.$refs.navBlock).find('li.dropdown').innerWidth();
            let navWidth = this.$refs.navBlock.clientWidth - dropdownWidth;
            let subMenu = [];
            $(this.$refs.navBlock).find('li').each(function (index, item) {
                totalWidthItemNav += $(item).innerWidth();
                // console.log("dropdownWidth " + dropdownWidth);
                // console.log("navWidth " + navWidth);
                if (totalWidthItemNav > navWidth) {
                    if (!$(item).hasClass("dropdown")) {
                        $(item).hide();
                        subMenu.push({
                            text: $(item).text(),
                            value: $(item).attr('value'),
                        });
                    }
                } else {
                    if (!$(item).hasClass("dropdown")) {
                        $(item).show();
                    }

                }
            });
            this.childDataMenuDataMost = subMenu;
        },
        onResize(event) {
            // console.log('window has been resized', event)
            console.log(this.$refs.navBlock.clientWidth);
            this.updateNavMostPost();

        },
        startContent() {
            main.fullHeight();
            main.homeContentOwl();
            main.contentWaypoint();
            main.homeStellar();
        },
        getSlugID(post) {
            return post.slug + "--" + post.id;
        },
        handleChangePage(page) {
            if (page <= 0) {
                page = 1;
            } else if (page >= this.paginate.last_page) {
                page = this.paginate.last_page;
            }

            this.currentPage = page;
            this.$router.push({
                path: "/",
                query: {page: page}
            });
            this.$store.dispatch("posts/getPosts", {page: page});
        }
    }
};
</script>
<style scoped>
    .block-title {
        width: 100%;
        border-bottom: 3px solid #dd4646;
        margin-left: 17px;
        margin-right: 17px;
        margin-bottom: 5px;
    }

    .block-title h4 {
        float: left;
        margin-bottom: 0;
    }

    .block-title-detail {
        padding: 10px 10px 5px;
        background: #dd4646;
        color: white;
    }

    .block-nav li {
        padding: 0 10px;
        cursor: pointer;
    }

    .block-nav li.active {
        color: #4db2ec;
    }
</style>
