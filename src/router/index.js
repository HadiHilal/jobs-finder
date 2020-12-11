import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Find from "../views/Find.vue";
import Job from "../views/Job.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/joblist",
    name: "Find",
    component: Find
  },
  {
    path: "/",
    name: "About",
    component: About
  },
  {
    path: "/job/:id",
    name: "Job",
    component: Job ,
    props: true
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
