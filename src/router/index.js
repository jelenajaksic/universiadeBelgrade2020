import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import HomeOrg from "../views/HomeOrg.vue";
import ArenasOrg from "../views/ArenasOrg.vue";
import Profile from "../views/Profile.vue";
import Facilities from "../views/Facilities.vue";
import TouristSites from "../views/TouristSites.vue";
import ProfileStud from "../views/ProfileStud.vue";
import BlogPage from "../views/BlogPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/home-org",
    name: "home-org",
    component: HomeOrg
  },
  {
    path: "/arenas-org",
    name: "arenas-org",
    component: ArenasOrg
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/facilities",
    name: "facilities",
    component: Facilities
  },
  {
    path: "/tourist-sites",
    name: "tourist-sites",
    component: TouristSites
  },
  {
    path: "/profile-stud",
    name: "profile-stud",
    component: ProfileStud
  },
  {
    path: "/blog-page",
    name: "blog-page",
    component: BlogPage,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
