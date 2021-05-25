<template>
  <div class="portfolio">
    <!-- Intro statement -->
    <div class="statement">
      <h3>My name is Adam Fenemore</h3>
      <p>
        I am a UX designer and behaviour specialist. I love to solve problems,
        improve things, and make the world a better place. Pli is a set of work
        examples in UX/UI design, behavioural science, innovation and more.
      </p>
    </div>
    <!-- Portfolio -->
    <router-link to="/2k21" class="portfolio-link">
      <div class="portfolio-link-container">
        <img
          class="portfolio-link-image"
          src="../../assets\portfolioassets\2k21-logo.jpg"
        />
        <div class="portfolio-link-text">
          <h4>NBA 2K21 Usability Changes</h4>
          <div class="tags">
            <span class="tag navigation">Navigation</span>
            <span class="tag redesign">Redesign</span>
            <span class="tag qol">Quality of life</span>
          </div>
          <p class="description">
            An unsolicited redesign of a few features, I present a new method of
            wayfinding in NBA 2K21 and demonstrate a large number of usability
            and quality of life changes.
          </p>
        </div>
      </div>
    </router-link>

    <router-link to="/myprocess" class="portfolio-link">
      <div class="portfolio-link-container">
        <img
          class="portfolio-link-image whitebg"
          src="../../assets\portfolioassets\venn.png"
        />
        <div class="portfolio-link-text">
          <h4>My Design Process</h4>
          <div class="tags">
            <span class="tag process">Process</span>
          </div>
          <p class="description">
            My design process involves a lot of user interaction, ideation and
            innovation methodologies, and UX focused behavioural reviews at each
            step. Understanding people is the key to the process.
          </p>
        </div>
      </div>
    </router-link>

    <!-- Portfolio menu -->
  </div>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>

<style lang="scss" src="../../styles/primary/portfolio.scss"></style>
