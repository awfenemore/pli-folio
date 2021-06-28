<template>
  <div class="wcc content-container">
    <div class="portfolio-intro">
      <h1>Development work</h1>
      <p>
        I have more than 3 years of experience in full stack development,
        specialising in front end and UI development. I have worked with many
        frameworks including Bootstrap, Tailwind and more, several Single Page
        Application frameworks including Vue and React, and CMS based systems. I
        have built new code and supported legacy UI frameowrks, and feel very
        comfortable with all tasks involving HTML, CSS, and Javascript.
      </p>
    </div>

    <div class="portfolio-section">
      <h3>Toyota NZ</h3>
      <p>
        I have been a part of many different projects for Toyota NZ and have
        contributed significantly to their public facing website as a developer.
        This work is primarily CMS based with EPiServer, and includes Vue as the
        primary front end framework, with Typescript, Bootstrap and jQuery.
      </p>
    </div>

    <div class="portfolio-image-container">
      <img
        class="portfolio-image"
        src="../../assets\portfolioassets\toyota.png"
      />
    </div>

    <div class="portfolio-section">
      <h3>Toyota NZ - Commerce</h3>
      <p>
        This piece was a brand new subsite for the client to sell merchandise
        for the first time through their website. We used Vue with Typescript,
        including Storybook as a pattern library manager, and is built on .NET
        MVC.
      </p>
    </div>

    <div class="portfolio-image-container">
      <img
        class="portfolio-image"
        src="../../assets\portfolioassets\commerce.png"
      />
    </div>

    <div class="portfolio-section">
      <h3>Department of Conservation NZ</h3>
      <p>
        I have completed several pieces of support development and continuous upgrade work
        for DOC on their public facing website. The UI includes Vue, Bootstrap,
        jQuery, Mustache, and Razor, and is built on .NET MVC.
      </p>
    </div>

    <div class="portfolio-image-container">
      <img class="portfolio-image" src="../../assets\portfolioassets\doc.png" />
    </div>

    <div class="portfolio-section">
      <h3>Other development</h3>
      <p>
        I particularly enjoy UI and UX development and have worked with many
        other frameworks and systems, including React and Backbone, as
        well as many other CMS systems and back end systems. I am proficient
        with Microsoft technologies and have developed for Dynamics Portals,
        Sharepoint, .NET web apps, and more. I also enjoy smaller personal
        projects in my own time, using other frameworks or concepts that
        interest me, like HTML Canvas, Vuetify and Material Design, HTML game
        development, and more.
      </p>
    </div>

    <!-- Portfolio menu -->
    <PortfolioMenu />
  </div>
</template>

<script>
import PortfolioMenu from "../micro/PortfolioMenu.vue";
export default {
  name: "Dev",
  components: {
    PortfolioMenu
  }
};
</script>

<style lang="scss" src="../../styles/portfolio/dev.scss"></style>
