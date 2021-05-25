<template>
  <v-app>
    <Header id="top" />

    <div class="top-border"></div>

    <v-main class="content">
      <router-view></router-view>
    </v-main>

    <div class="bot-border"></div>

    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "./components/micro/Footer.vue";
import Header from "./components/micro/Header.vue";

export default Vue.extend({
  name: "App",
  head: {
    meta: [{ name: "theme-color", content: "#54850A" }]
  },
  components: {
    Footer,
    Header
  },
  data() {
    return {};
  },
  methods: {}
});
</script>

<style lang="scss" src="./styles/App.scss"></style>
<style lang="scss" src="./styles/micro/shared.scss"></style>
