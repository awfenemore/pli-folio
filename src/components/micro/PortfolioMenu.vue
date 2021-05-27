<template>
  <!-- Portfolio menu -->
  <div class="portfolio-menu">
    <router-link to="/2k21" class="portfolio-menu-link"
      >NBA 2K21 Usability Review</router-link
    >
    /
    <router-link to="/myprocess" class="portfolio-menu-link"
      >My Design Process</router-link
    >
    /
    <router-link to="/engaging" class="portfolio-menu-link"
      >Engaging with local council</router-link
    >
  </div>
</template>

<script>
export default {
  name: "PortfolioMenu",
  data() {
    return {};
  },
};
</script>

<style lang="scss" src="../../styles/micro/shared.scss"></style>
