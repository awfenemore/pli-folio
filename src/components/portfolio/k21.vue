<template>
  <div class="2k21 content-container">
    <div class="portfolio-intro">
      <h1>NBA 2K21 MyTeam Usability Review</h1>
      <p>
        NBA 2K21 is a video game released September 4th 2020, and has over 8
        million sales as of February 2021. It is a popular game for single
        players, multiple players, streamers, and even the NBA players featured
        in the game, but it is rife with usability issues. This review presents
        a small number of these issues with concept solutions.
      </p>
    </div>

    <div class="portfolio-image-container">
      <img
        class="portfolio-image"
        src="../../assets\portfolioassets\2k21-logo.jpg"
      />
      <!-- https://www.sportingnews.com/us/nba/news/how-to-play-college-basketball-teams-nba-2k21/1zkm7reg9juu1wtwtb0hwnfh2 -->
    </div>

    <div class="portfolio-section">
      <h3>Goals</h3>
      <ul>
        <li>
          Navigation - The user must use a lot of inputs to wayfind and
          navigation is not minimised. We will look to improve this
          significantly
        </li>
        <li>
          Information Architecture - Elements of the hierarchy are not well
          categorised or organised. We will look to improve this architecture
        </li>
        <li>
          Quality of life - There are many opportunities for small changes that
          would greatly improve quality of life for a user, which we will
          highlight
        </li>
      </ul>
    </div>

    <div class="portfolio-section">
      <h3>Considerations</h3>
      <ul>
        <li>
          The primary interface is a game controller – although the game is
          played on PC, the main input method for the majority of users is a
          controller
        </li>
        <li>
          Revenue generation is a key focus for the publisher – we will try to
          manage this constraint while still delivering a user experience focus
        </li>
        <li>
          Content is very dynamic – Much of the content, competitions,
          challenges, cards and players, goals, and many more things change on a
          very regular basis, most on a 1 week cycle, which we will account for
        </li>
        <li>
          Visual style is out of scope – For this review only wireframes will be
          presented, and visual style and colours is not our scope
        </li>
        <li>
          User data is from one user – without full time to user research, the
          review is based on myself as a single user, but any decisions based on
          user research can be easily adapted when better research is available
        </li>
        <li>
          Responsiveness is not needed – As this is a video game, almost all
          users play on a single, similarly oriented device, either a TV or a
          computer monitor, so no device responsive designs are needed
        </li>
      </ul>
    </div>

    <div class="portfolio-image-container">
      <img
        class="portfolio-image"
        src="../../assets\portfolioassets\home.jpg"
      />
    </div>

    <div class="portfolio-section">
      <h3>Current Information Architecture</h3>
      <p>
        From the above screenshot, we can see the information architecture is
        quite flat, through the possible game modes and administration tasks for
        the game and your team. As these are presented linearly to the user,
        they must navigate with extra button presses, even when they are looking
        for often viewed content. This current architecture is presented below:
      </p>
      <ul>
        <li>
          Home
          <ul>
            <li>Agendas</li>
            <li>Weekly competitions carousel</li>
            <li>Current promotion</li>
            <li>MyTeam community hub</li>
          </ul>
        </li>
        <li>
          Single Player
          <ul>
            <li>Triple threat</li>
            <li>Domination</li>
            <li>Challenges</li>
            <li>Freestyle</li>
          </ul>
        </li>
        <li>
          Multiplayer
          <ul>
            <li>Triple threat online</li>
            <li>MyTeam limited</li>
            <li>MyTeam unlimited</li>
            <li>Play with friends</li>
          </ul>
        </li>
        <li>
          Pack Market
          <ul>
            <li>Market</li>
            <li>Unopened packs</li>
            <li>Rewards and tokens</li>
            <li>Virtual currency shop</li>
          </ul>
        </li>
        <li>
          Auctions
          <ul>
            <li>Search for auctions</li>
            <li>My auctions</li>
            <li>Active bids</li>
            <li>Complete auctions</li>
          </ul>
        </li>
        <li>
          MyTeam
          <ul>
            <li>Lineup management</li>
            <li>My collection</li>
            <li>Card exchange</li>
            <li>Card evolution</li>
            <li>Card glossary</li>
          </ul>
        </li>
        <li>
          Extras
          <ul>
            <li>Locker codes</li>
            <li>Controls</li>
            <li>Controller settings</li>
            <li>Coach settings</li>
            <li>Settings</li>
          </ul>
        </li>
      </ul>
      <br />
      <p>
        A key observation here is that not all nodes in this tree are evenly
        used, though they are treated as such in this setup. Many pieces of
        content in this structure are either used once per session, multiple
        times a session, once per day, a few times in the life cycle of the
        product, or others. This is the key to a potential re-ordering of this
        architecture – to make the most used content the most accessible to the
        user, to make daily and often changing content available around once per
        session, and to facilitate the primary goals the user has.
      </p>
    </div>

    <div class="portfolio-section">
      <h3>New Information Architecture</h3>
      <ul>
        <li>
          Home
          <ul>
            <li>Agendas</li>
            <li>Weekly competitions carousel</li>
            <li>Current promotion</li>
            <li>MyTeam community hub</li>
            <li>Unopened packs</li>
            <li>Locker codes</li>
          </ul>
        </li>
        <li>
          Play
          <ul>
            <li>Triple threat</li>
            <li>Triple threat Online</li>
            <li>Domination</li>
            <li>Challenges</li>
            <li>Freestyle</li>
            <li>MyTeam Limited</li>
            <li>MyTeam Unlimited</li>
            <li>Play with friends</li>
          </ul>
        </li>
        <li>
          Pack Market
          <ul>
            <li>Market</li>
            <li>Rewards and tokens</li>
            <li>Virtual currency shop</li>
          </ul>
        </li>
        <li>
          Auctions
          <ul>
            <li>Search for auctions</li>
            <li>My auctions</li>
            <li>Active bids</li>
            <li>Complete auctions</li>
            <li>Sell a card</li>
          </ul>
        </li>
        <li>
          MyTeam
          <ul>
            <li>Lineup management</li>
            <li>My collection</li>
            <li>Card exchange</li>
            <li>Card evolution</li>
            <li>Card glossary</li>
          </ul>
        </li>
        <li>
          Settings
          <ul>
            <li>Controls</li>
            <li>Controller settings</li>
            <li>Coach settings</li>
            <li>Settings</li>
          </ul>
        </li>
      </ul>
      <br />
      <p>
        This IA is organised more by use of content. The Home page is
        essentially a dashboard of content that changes often and that a user
        needs to see or interact with approximately once per session. The play
        menu, Pack market menu, Auctions menu and MyTeam menu will all be
        clearly visible from the Home page, as all of these will be interacted
        with multiple times per session. Settings, which has the least uses per
        session will be available from all menus with a secondary button.
      </p>
    </div>

    <div class="portfolio-section">
      <h3>Implementing this Information Architecture</h3>
      <p>
        To implement this Information Architecture, we simply need to add an
        always accessible button for the Play menu, and add a radial menu for
        the other menu options. This system means every menu option, the entire
        content hierarchy, is available to the user within
        <span class="bold">4 inputs</span>, where the user can currently not
        reach around <span class="bold">half</span> of the content in 4 inputs
        or less.
      </p>
    </div>

    <div class="portfolio-image-container">
      <img
        class="portfolio-image"
        src="../../assets\portfolioassets\home-wire.jpg"
      />
    </div>
    <div class="portfolio-image-container">
      <img
        class="portfolio-image"
        src="../../assets\portfolioassets\play-wire.jpg"
      />
    </div>
    <div class="portfolio-image-container">
      <img
        class="portfolio-image"
        src="../../assets\portfolioassets\menu-wire.jpg"
      />
    </div>

    <div class="portfolio-section">
      <h3>Quality of life changes</h3>
      <p>
        Below I present 4 quality of life changes and their implications for a
        user. If you care for a full list of all quality of life changes I have
        noted from a user experience perspective, please contact me for the full
        report.
      </p>
    </div>

    <div class="qol-section">
      <div class="portfolio-image-container">
        <img
          class="portfolio-image"
          src="../../assets\portfolioassets\auctions.jpg"
        />
      </div>
      <h4>Add 'Sell a card'</h4>
      <p>
        To sell a specific card, the user must currently navigate away from
        Auctions, search manually through their collection to find the card,
        then select 'Send to my auctions', then return to Auctions, select 'My
        Auctions', then start the Auction. Adding a 'Sell a Card' option means
        the user can search their collection, find the card and start an auction
        straight away.
      </p>
    </div>

    <div class="qol-section">
      <div class="portfolio-image-container">
        <img
          class="portfolio-image"
          src="../../assets\portfolioassets\start-auction.jpg"
        />
      </div>
      <h4>Starting an Auction</h4>
      <p>
        When starting an auction, the user must manually scroll left and right
        through prices, and must cancel the process to find information about
        what a suitable price would be. Adding hotkeys for +1,000, -1,000,
        +10,000 and -10,000 currency would save users great frustration, and
        including an 'Average sale price, last 30 days' for this card would save
        the user cancelling the auction to find suitable information.
      </p>
    </div>

    <div class="qol-section">
      <div class="portfolio-image-container">
        <img
          class="portfolio-image"
          src="../../assets\portfolioassets\game-agendas.jpg"
        />
      </div>
      <h4>Agendas in game</h4>
      <p>
        When starting a game, the user sees a non-selected, static number of
        agendas that can earn them progression in MyTeam. This agendas should be
        selected based on which ones the user can complete or make progress on,
        based on the players they are using in the upcoming game. These should
        be clearly visually indicated and salient.
      </p>
    </div>

    <div class="qol-section">
      <div class="portfolio-image-container">
        <img
          class="portfolio-image"
          src="../../assets\portfolioassets\agendas.jpg"
        />
      </div>
      <h4>Agendas menu</h4>
      <p>
        As above, the agendas presented in the agendas menu are sorted by date,
        and the user manually searches through agendas, while trying to remember
        what cards they have in their collection. Agendas should be sortable by
        relevant criteria, and have salient indicators for if the user has
        suitable cards to complete that agenda, and then when viewing that
        agenda, the cards should be shown to the user, with a link to 'Add card
        to lineup'.
      </p>
    </div>

    <!-- Portfolio menu -->
    <PortfolioMenu />
  </div>
</template>

<script>
import PortfolioMenu from "../micro/PortfolioMenu.vue"; export default {
components: { PortfolioMenu }, name: "K21" };
</script>

<style lang="scss" src="../../styles/portfolio/k21.scss"></style>
