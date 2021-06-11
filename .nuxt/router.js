import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _42e0cf74 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _32cfddd1 = () => interopDefault(import('../pages/Blog/index.vue' /* webpackChunkName: "pages/Blog/index" */))
const _3ed65091 = () => interopDefault(import('../pages/Opensource.vue' /* webpackChunkName: "pages/Opensource" */))
const _e7e9b8a6 = () => interopDefault(import('../pages/playcode.vue' /* webpackChunkName: "pages/playcode" */))
const _0e0bf588 = () => interopDefault(import('../pages/playlife.vue' /* webpackChunkName: "pages/playlife" */))
const _ded61aee = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _7ff4d101 = () => interopDefault(import('../pages/projects/automizeapps.vue' /* webpackChunkName: "pages/projects/automizeapps" */))
const _12c2fb66 = () => interopDefault(import('../pages/projects/Blockchain.vue' /* webpackChunkName: "pages/projects/Blockchain" */))
const _1097596a = () => interopDefault(import('../pages/projects/goals101.vue' /* webpackChunkName: "pages/projects/goals101" */))
const _1bf88346 = () => interopDefault(import('../pages/projects/GoCorona.vue' /* webpackChunkName: "pages/projects/GoCorona" */))
const _0e11a878 = () => interopDefault(import('../pages/projects/SocialContour.vue' /* webpackChunkName: "pages/projects/SocialContour" */))
const _454d213a = () => interopDefault(import('../pages/projects/streerides.vue' /* webpackChunkName: "pages/projects/streerides" */))
const _c770524a = () => interopDefault(import('../pages/projects/TravelGo.vue' /* webpackChunkName: "pages/projects/TravelGo" */))
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
    path: "/Opensource",
    component: _3ed65091,
    name: "Opensource___en"
  }, {
    path: "/playcode",
    component: _e7e9b8a6,
    name: "playcode___en"
  }, {
    path: "/playlife",
    component: _0e0bf588,
    name: "playlife___en"
  }, {
    path: "/projects",
    component: _ded61aee,
    name: "projects___en"
  }, {
    path: "/projects/automizeapps",
    component: _7ff4d101,
    name: "projects-automizeapps___en"
  }, {
    path: "/projects/Blockchain",
    component: _12c2fb66,
    name: "projects-Blockchain___en"
  }, {
    path: "/projects/goals101",
    component: _1097596a,
    name: "projects-goals101___en"
  }, {
    path: "/projects/GoCorona",
    component: _1bf88346,
    name: "projects-GoCorona___en"
  }, {
    path: "/projects/SocialContour",
    component: _0e11a878,
    name: "projects-SocialContour___en"
  }, {
    path: "/projects/streerides",
    component: _454d213a,
    name: "projects-streerides___en"
  }, {
    path: "/projects/TravelGo",
    component: _c770524a,
    name: "projects-TravelGo___en"
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
