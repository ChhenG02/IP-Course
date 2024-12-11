<template>
  <div id="app">
    <Header @page-changed="handlePageChanged" />
    <Menu :page="currentPage" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Menu,
  },
  data() {
    return {
      currentPage: 1, 
    };
  },
  methods: {
    handlePageChanged(pageNumber) {
      this.currentPage = pageNumber; 
    }
  }
};
</script>

<style>
</style>
