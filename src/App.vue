<template>
  <div id="app">
    <Header @page-changed="onPageChanged" :page="currentPage" />
    <Menu :page="currentPage" :pageMessages="pageMessages" />
    <router-view :key="currentPage" />
  </div>
  <Footer/>
</template>

<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Menu,
    Footer,
  },
  data() {
    return {
      currentPage: 1, 
      pageMessages: {}, 
    };
  },
  methods: {
    onPageChanged(pageNumber) {
      this.currentPage = pageNumber;
    },
    updateMessage(payload) {
      this.pageMessages[payload.page] = payload.message;
    },
  },
};
</script>
