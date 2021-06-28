<template>
  <div class="my-process content-container">
    <div class="portfolio-intro">
      <h1>My design process</h1>
      <p>
        I work to design solutions that fit the classic Venn diagram of design:
        fulfilling user needs, business goals, and technical contraints, but I
        also identify opportunities to improve in each of these areas. I work to
        become an expert in all 3 of these areas to solve problems in ways that
        will work for users and organisations.
      </p>
      <p>
        Although design is not just about finding the intersection of the
        diagram at all times, it is typically the best way to progress a design
        and improve a system. An effective user experience is mostly driven by
        promoting the user's needs, and in many cases this can unlock new
        organisational desires or gives a reason to push technical constraints
        to a better place.
      </p>
      <p>
        I am very familiar with Design Thinking, design sprints, Lean UX, and
        many other design frameworks, but I am intentionally agnostic in my
        approach to solving a problem and adapt my process to the situation. I
        believe effective design cannot be achieved by applying the same strict
        set of rules to different situations, so I work hard to achieve the best
        outcomes no matter the frameworks in place.
      </p>
    </div>

    <div class="portfolio-image-container">
      <img
        class="portfolio-image"
        src="../../assets\portfolioassets\venn.png"
      />
      <!-- https://www.designernews.co/comments/203504 -->
    </div>

    <div class="portfolio-section">
      <h3>User experience fundamentals</h3>
      <ul>
        <li>
          Make the key actions as easy as possible for the user as often as
          possible
        </li>
        <li>
          Bad design is much easier to notice. Great design is almost never
          noticed by a user
        </li>
        <li>
          Facilitate good user behaviour, rather than regulating or punishing
          other behaviours
        </li>
        <li>
          Thinking outside the box is not always best, but pushing to the very
          edge of the box usually reveals good insights
        </li>
        <li>
          User data should guide the whole process, and it can only come from
          the user themselves
        </li>
      </ul>
    </div>

    <div class="portfolio-image-container">
      <img
        class="portfolio-image"
        src="../../assets\portfolioassets\teapots.png"
      />
      <!-- https://www.nngroup.com/articles/ten-usability-heuristics/ -->
    </div>

    <div class="portfolio-section">
      <h3>Innovation and ideation</h3>
      <p>
        I have formal training in innovation and ideation methodologies, and I
        bring this in to my work as a designer whenever I can. There is almost
        always a different way to accomplish a goal with design, and I try to
        actively think differently and bring these alternatives to the surface
        so they can be analysed with other designs. I have several ideation
        methods for individuals or for groups that I have found to be very
        effective in many design tasks.
      </p>
    </div>

    <div class="portfolio-image-container">
      <img
        class="portfolio-image"
        src="../../assets\portfolioassets\innovation-union.jpg"
      />
      <!-- https://www.workstars.com/recognition-and-engagement-blog/2017/06/07/4-examples-nurture-innovation/ -->
    </div>

    <div class="portfolio-section">
      <h3>Behavioural analysis</h3>
      <p>
        With a background in psychology, I impart as much behavioural analysis
        in to my designs as possible. This includes heuristic analysis and bias
        and judgement analysis, but also qualitative and quantitative research
        methods like journey maps and value mapping. Good design is about
        understanding that the user is still a person and that person has a
        subjective view of the product, but also that the user is subject to the
        biases and heuristic reasoning processes that humans use.
      </p>
    </div>

    <div class="portfolio-image-container">
      <img
        class="portfolio-image"
        src="../../assets\portfolioassets\behaviour.png"
      />
      <!-- https://blog.walkingthetalk.com/how-to-measure-behaviour-change -->
    </div>

    <!-- Portfolio menu -->
    <PortfolioMenu />
  </div>
</template>

<script>
import PortfolioMenu from "../micro/PortfolioMenu.vue"; export default {
components: { PortfolioMenu }, name: "MyProcess" };
</script>

<style lang="scss" src="../../styles/portfolio/my-process.scss"></style>
