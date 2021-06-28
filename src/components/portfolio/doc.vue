<template>
  <div class="doc content-container">
    <div class="portfolio-intro">
      <h1>Designing an effective pattern library</h1>
      <p>
        The client approached us from a development perspective for this work,
        with the problem of inconsistent and difficult to maintain code across
        the front end layer of their public website. After reviewing the code
        involved and assessing the age of the site and long term support given,
        we suggested a pattern library based approach for their UI, for maximum
        consistency and maintainability, which they could see fit their needs
        well.
      </p>
    </div>

    <div class="portfolio-section">
      <h3>Auditing the site</h3>
      <p>
        As the senior designer for this piece, I conducted a full audit of
        elements used on their website, both visually and considering
        functionality and intention. As suggested by the client, we found a lot
        of inappropriate reuse of elements, use of visual styles outside of
        brand guidelines, and custom elements in places that should have used
        pre-built elements.
      </p>
    </div>
    <div class="portfolio-image-container">
      <img
        class="portfolio-image"
        src="../../assets\portfolioassets\atoms.png"
      />
    </div>

    <div class="portfolio-section">
      <h3>Generating the pattern library</h3>
      <p>
        I decided to begin their pattern library using Atmoic design principles,
        beginning with the most basic site elements like colours, spacing, and
        fonts, through to atoms and molecules, working up to blocks and page
        templates. We identified approximately 70 individual pieces to consider
        for the pattern library in some form, and we worked hard to keep the
        pattern library in line with the visual guidelines the client had. The
        client also had key accessibility concerns, and the pattern library
        comfortably reaches WCAG 2.1 AA standards.
      </p>
    </div>
    <div class="portfolio-image-container">
      <img
        class="portfolio-image"
        src="../../assets\portfolioassets\patterns.png"
      />
    </div>

    <div class="portfolio-section">
      <h3>Implementation</h3>
      <p>
        This project is set for implementation in 2022, and the client feels
        very positive about the results that the pattern library will bring to
        their website. Within the constraints given, I designed all elements of
        the pattern library for implementation, and plan to oversee development
        and testing of the final product.
      </p>
    </div>

    <!-- Portfolio menu -->
    <PortfolioMenu />
  </div>
</template>

<script>
import PortfolioMenu from "../micro/PortfolioMenu.vue";
export default {
  name: "Doc",
  components: {
    PortfolioMenu
  }
};
</script>

<style lang="scss" src="../../styles/portfolio/doc.scss"></style>
