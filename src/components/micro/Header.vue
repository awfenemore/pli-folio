<template>
  <div class="header-container">

    <div class="header-logo">
      <img
        src="../../assets/pli-grey-logo.svg"
        alt="Pli Logo"
        height="60"
        width="80"
      />
    </div>

    <div class="header-left">
      <span>
        Welcome to Pli. UX Design, Behavioural Science, Improvement
      </span>
    </div>

    <div class="header-mid">
      <router-link to="/">Portfolio</router-link> /
      <router-link to="/aboutme">About Me</router-link> /
      <router-link to="/resume">Resume</router-link> /
      <a href="mailto:awfenemore@gmail.com">Contact me</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style lang="scss" src="../../styles/micro/Header.scss"></style>
