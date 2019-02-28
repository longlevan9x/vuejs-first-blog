<template>
    <div class="row">
        <div class="col-full">
            <nav class="pgn">
                <ul>
                    <li><a class="pgn__prev" @click="handleChangePage(current_page - 1)">Prev</a></li>
                    <li v-for="page in total_page">
                        <a :class="(page === current_page ? 'current ' : '') + ' ' + 'pgn__num'" @click="handleChangePage(page)">{{page}}</a>
                    </li>
                    <li><a class="pgn__next" @click="handleChangePage(current_page + 1)">Next</a></li>
                    <!--<li>-->
                        <!--<a class="pgn__num" href="#0">1</a>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<span class="pgn__num current">2</span>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<a class="pgn__num" href="#0">3</a>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<a class="pgn__num" href="#0">4</a>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<a class="pgn__num" href="#0">5</a>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<span class="pgn__num dots">…</span>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<a class="pgn__num" href="#0">8</a>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<a class="pgn__next" href="#0">Next</a>-->
                    <!--</li>-->
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            currentPage: Number,
            totalPage : Number
        },
        name: "Pagination",
        data() {
            return {
                current_page: 1,
                total_page: 1
            };
        },
        created() {

        },
        mounted() {
            this.current_page  = this.currentPage;
            this.total_page = this.totalPage;
        },
        methods: {
            handleChangePage(page) {
                if (page <= 0) {
                    page = 1;
                }
                else if(page >= this.total_page) {
                    page = this.total_page;
                }

                this.current_page = page;
                this.$emit('changePage', page)
            }
        }
    };
</script>

<style scoped>

</style>