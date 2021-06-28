import Vue from "vue";
import VueRouter from "vue-router";
import VueHead from "vue-head";

// Primary
import Portfolio from "../components/primary/Portfolio.vue";
import AboutMe from "../components/primary/AboutMe.vue";
import Resume from "../components/primary/Resume.vue";

// Portfolio
import MyProcess from "../components/portfolio/my-process.vue";
import K21 from "../components/portfolio/k21.vue";
import Engaging from "../components/portfolio/engaging.vue";
import Doc from "../components/portfolio/doc.vue";
import Dev from "../components/portfolio/dev.vue";

Vue.use(VueHead);
Vue.use(VueRouter);

const routes = [
  // Primary
  {
    path: "/",
    name: "portfolio",
    component: Portfolio
  },

  {
    path: "/aboutme",
    name: "aboutme",
    component: AboutMe
  },
  {
    path: "/resume",
    name: "resume",
    component: Resume
  },

  // Portfolio
  {
    path: "/myprocess",
    name: "myprocess",
    component: MyProcess
  },
  {
    path: "/2k21",
    name: "2k21",
    component: K21
  },
  {
    path: "/engaging",
    name: "engaging",
    component: Engaging
  },
  {
    path: "/pattern-library",
    name: "design",
    component: Doc
  },
  {
    path: "/dev",
    name: "dev",
    component: Dev
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
