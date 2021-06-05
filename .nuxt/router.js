import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _42e0cf74 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _32cfddd1 = () => interopDefault(import('../pages/Blog/index.vue' /* webpackChunkName: "pages/Blog/index" */))
const _1daed4f9 = () => interopDefault(import('../pages/CodeExperiment/index.vue' /* webpackChunkName: "pages/CodeExperiment/index" */))
const _5fea835e = () => interopDefault(import('../pages/people/index.vue' /* webpackChunkName: "pages/people/index" */))
const _f37dcef8 = () => interopDefault(import('../pages/photography/index.vue' /* webpackChunkName: "pages/photography/index" */))
const _ded61aee = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _b00f4e2a = () => interopDefault(import('../pages/projects/awesome-inc.vue' /* webpackChunkName: "pages/projects/awesome-inc" */))
const _dab6fef6 = () => interopDefault(import('../pages/projects/bharatrohan.vue' /* webpackChunkName: "pages/projects/bharatrohan" */))
const _a576c140 = () => interopDefault(import('../pages/projects/bls.vue' /* webpackChunkName: "pages/projects/bls" */))
const _2518eba5 = () => interopDefault(import('../pages/projects/cricbuzz-app-redesign.vue' /* webpackChunkName: "pages/projects/cricbuzz-app-redesign" */))
const _dcdb5908 = () => interopDefault(import('../pages/projects/dear-zindagi.vue' /* webpackChunkName: "pages/projects/dear-zindagi" */))
const _d985c8a0 = () => interopDefault(import('../pages/projects/dreamz.vue' /* webpackChunkName: "pages/projects/dreamz" */))
const _5aa85703 = () => interopDefault(import('../pages/projects/elevito.vue' /* webpackChunkName: "pages/projects/elevito" */))
const _31d3c8b8 = () => interopDefault(import('../pages/projects/feeding-trends.vue' /* webpackChunkName: "pages/projects/feeding-trends" */))
const _b5f7a428 = () => interopDefault(import('../pages/projects/filmingeye.vue' /* webpackChunkName: "pages/projects/filmingeye" */))
const _66a1fa2f = () => interopDefault(import('../pages/projects/ft-events.vue' /* webpackChunkName: "pages/projects/ft-events" */))
const _1bf88346 = () => interopDefault(import('../pages/projects/GoCorona.vue' /* webpackChunkName: "pages/projects/GoCorona" */))
const _262a80c8 = () => interopDefault(import('../pages/projects/happy-miles.vue' /* webpackChunkName: "pages/projects/happy-miles" */))
const _8d05dbc2 = () => interopDefault(import('../pages/projects/hello-color.vue' /* webpackChunkName: "pages/projects/hello-color" */))
const _04a0d022 = () => interopDefault(import('../pages/projects/hindigiri.vue' /* webpackChunkName: "pages/projects/hindigiri" */))
const _4057dd31 = () => interopDefault(import('../pages/projects/homey.vue' /* webpackChunkName: "pages/projects/homey" */))
const _a3529186 = () => interopDefault(import('../pages/projects/IALSE.vue' /* webpackChunkName: "pages/projects/IALSE" */))
const _1d95dfa9 = () => interopDefault(import('../pages/projects/irctc-redesign-concept.vue' /* webpackChunkName: "pages/projects/irctc-redesign-concept" */))
const _6ba57e95 = () => interopDefault(import('../pages/projects/logofolio.vue' /* webpackChunkName: "pages/projects/logofolio" */))
const _778c319d = () => interopDefault(import('../pages/projects/meeting-rooms.vue' /* webpackChunkName: "pages/projects/meeting-rooms" */))
const _2510014c = () => interopDefault(import('../pages/projects/mr-irritating.vue' /* webpackChunkName: "pages/projects/mr-irritating" */))
const _51682868 = () => interopDefault(import('../pages/projects/my-arts.vue' /* webpackChunkName: "pages/projects/my-arts" */))
const _1fc14d64 = () => interopDefault(import('../pages/projects/my-portfolio-website.vue' /* webpackChunkName: "pages/projects/my-portfolio-website" */))
const _5d1666c0 = () => interopDefault(import('../pages/projects/news-app.vue' /* webpackChunkName: "pages/projects/news-app" */))
const _4d4745ae = () => interopDefault(import('../pages/projects/prepowl.vue' /* webpackChunkName: "pages/projects/prepowl" */))
const _8603bda2 = () => interopDefault(import('../pages/projects/projects-academia.vue' /* webpackChunkName: "pages/projects/projects-academia" */))
const _8aebd74c = () => interopDefault(import('../pages/projects/r3.vue' /* webpackChunkName: "pages/projects/r3" */))
const _314a75d2 = () => interopDefault(import('../pages/projects/salesfactory.vue' /* webpackChunkName: "pages/projects/salesfactory" */))
const _27f414de = () => interopDefault(import('../pages/projects/tbt-app.vue' /* webpackChunkName: "pages/projects/tbt-app" */))
const _3c2c2f0a = () => interopDefault(import('../pages/projects/thebbdtimes.vue' /* webpackChunkName: "pages/projects/thebbdtimes" */))
const _897566fe = () => interopDefault(import('../pages/projects/thebegining.vue' /* webpackChunkName: "pages/projects/thebegining" */))
const _31193c89 = () => interopDefault(import('../pages/Blog/_slug.vue' /* webpackChunkName: "pages/Blog/_slug" */))
const _bba42714 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _42e0cf74,
    name: "about___en"
  }, {
    path: "/Blog",
    component: _32cfddd1,
    name: "Blog___en"
  }, {
    path: "/CodeExperiment",
    component: _1daed4f9,
    name: "CodeExperiment___en"
  }, {
    path: "/people",
    component: _5fea835e,
    name: "people___en"
  }, {
    path: "/photography",
    component: _f37dcef8,
    name: "photography___en"
  }, {
    path: "/projects",
    component: _ded61aee,
    name: "projects___en"
  }, {
    path: "/projects/awesome-inc",
    component: _b00f4e2a,
    name: "projects-awesome-inc___en"
  }, {
    path: "/projects/bharatrohan",
    component: _dab6fef6,
    name: "projects-bharatrohan___en"
  }, {
    path: "/projects/bls",
    component: _a576c140,
    name: "projects-bls___en"
  }, {
    path: "/projects/cricbuzz-app-redesign",
    component: _2518eba5,
    name: "projects-cricbuzz-app-redesign___en"
  }, {
    path: "/projects/dear-zindagi",
    component: _dcdb5908,
    name: "projects-dear-zindagi___en"
  }, {
    path: "/projects/dreamz",
    component: _d985c8a0,
    name: "projects-dreamz___en"
  }, {
    path: "/projects/elevito",
    component: _5aa85703,
    name: "projects-elevito___en"
  }, {
    path: "/projects/feeding-trends",
    component: _31d3c8b8,
    name: "projects-feeding-trends___en"
  }, {
    path: "/projects/filmingeye",
    component: _b5f7a428,
    name: "projects-filmingeye___en"
  }, {
    path: "/projects/ft-events",
    component: _66a1fa2f,
    name: "projects-ft-events___en"
  }, {
    path: "/projects/GoCorona",
    component: _1bf88346,
    name: "projects-GoCorona___en"
  }, {
    path: "/projects/happy-miles",
    component: _262a80c8,
    name: "projects-happy-miles___en"
  }, {
    path: "/projects/hello-color",
    component: _8d05dbc2,
    name: "projects-hello-color___en"
  }, {
    path: "/projects/hindigiri",
    component: _04a0d022,
    name: "projects-hindigiri___en"
  }, {
    path: "/projects/homey",
    component: _4057dd31,
    name: "projects-homey___en"
  }, {
    path: "/projects/IALSE",
    component: _a3529186,
    name: "projects-IALSE___en"
  }, {
    path: "/projects/irctc-redesign-concept",
    component: _1d95dfa9,
    name: "projects-irctc-redesign-concept___en"
  }, {
    path: "/projects/logofolio",
    component: _6ba57e95,
    name: "projects-logofolio___en"
  }, {
    path: "/projects/meeting-rooms",
    component: _778c319d,
    name: "projects-meeting-rooms___en"
  }, {
    path: "/projects/mr-irritating",
    component: _2510014c,
    name: "projects-mr-irritating___en"
  }, {
    path: "/projects/my-arts",
    component: _51682868,
    name: "projects-my-arts___en"
  }, {
    path: "/projects/my-portfolio-website",
    component: _1fc14d64,
    name: "projects-my-portfolio-website___en"
  }, {
    path: "/projects/news-app",
    component: _5d1666c0,
    name: "projects-news-app___en"
  }, {
    path: "/projects/prepowl",
    component: _4d4745ae,
    name: "projects-prepowl___en"
  }, {
    path: "/projects/projects-academia",
    component: _8603bda2,
    name: "projects-projects-academia___en"
  }, {
    path: "/projects/r3",
    component: _8aebd74c,
    name: "projects-r3___en"
  }, {
    path: "/projects/salesfactory",
    component: _314a75d2,
    name: "projects-salesfactory___en"
  }, {
    path: "/projects/tbt-app",
    component: _27f414de,
    name: "projects-tbt-app___en"
  }, {
    path: "/projects/thebbdtimes",
    component: _3c2c2f0a,
    name: "projects-thebbdtimes___en"
  }, {
    path: "/projects/thebegining",
    component: _897566fe,
    name: "projects-thebegining___en"
  }, {
    path: "/Blog/:slug",
    component: _31193c89,
    name: "Blog-slug___en"
  }, {
    path: "/",
    component: _bba42714,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
