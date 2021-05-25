<template>
  <v-footer color="#f5eeda" min-height="80">
    <div class="footer-logo">
      <img
        src="../../assets/pli-grey-logo.svg"
        alt="Pli Logo"
        height="60"
        width="80"
      />
    </div>

    <div class="footer-left">
      <!-- <span>
        Pli is about making things better with good design
      </span> -->
    </div>

    <div class="footer-mid">
      <router-link to="/">Portfolio</router-link> /
      <router-link to="/aboutme">About Me</router-link> /
      <router-link to="/resume">Resume</router-link> /
      <a href="mailto:awfenemore@gmail.com">Contact me</a> /
      <a href="#top">Back to Top</a>
    </div>

    <div class="footer-right">
      <span>A Fenemore | {{ new Date().getFullYear() }}</span>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" src="../../styles/micro/Footer.scss"></style>
