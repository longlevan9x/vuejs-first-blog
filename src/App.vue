<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./views/partials/Header";
import Footer from "./views/partials/Footer";
import ExtraBottom from "./views/partials/ExtraBottom";
import LoadScript from "./plugins/load-script";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    ExtraBottom
  }
};
</script>
