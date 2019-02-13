<template>
    <article class="masonry__brick entry format-standard" data-aos="fade-up" v-for="post in posts">
        <div class="entry__thumb" v-if="post.urlToImage">
            <a href="single-standard.html" class="entry__thumb-link">
                <img :src="post.urlToImage" :srcset="post.urlToImage" alt="" />
            </a>
        </div>
        <div class="entry__text">
            <div class="entry__header">
                <div class="entry__date">
                    <a href="single-standard.html">{{post.publishedAt}}</a>
                </div>
                <h1 class="entry__title">
                    <a href="single-standard.html">{{post.title}}</a>
                </h1>
            </div>
            <div class="entry__excerpt">
                <p>{{post.description}}...
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
</template>

<script>
    export default {
        name: "Article"
    };
</script>
