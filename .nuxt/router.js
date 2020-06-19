import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _06235f68 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _35662230 = () => interopDefault(import('../pages/products/itc-coatings.vue' /* webpackChunkName: "pages/products/itc-coatings" */))
const _c99dac32 = () => interopDefault(import('../pages/products/Products.vue' /* webpackChunkName: "pages/products/Products" */))
const _187f2314 = () => interopDefault(import('../pages/products/quin-global.vue' /* webpackChunkName: "pages/products/quin-global" */))
const _5b709e47 = () => interopDefault(import('../pages/products/sg-refractories.vue' /* webpackChunkName: "pages/products/sg-refractories" */))
const _c4d4c59a = () => interopDefault(import('../pages/products/sg-spyrocor.vue' /* webpackChunkName: "pages/products/sg-spyrocor" */))
const _1b1c59ba = () => interopDefault(import('../pages/products/sg-wrt.vue' /* webpackChunkName: "pages/products/sg-wrt" */))
const _41a6b9f2 = () => interopDefault(import('../pages/products/us-liner.vue' /* webpackChunkName: "pages/products/us-liner" */))
const _6ec8836a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _06235f68,
    name: "about"
  }, {
    path: "/products/itc-coatings",
    component: _35662230,
    name: "products-itc-coatings"
  }, {
    path: "/products/Products",
    component: _c99dac32,
    name: "products-Products"
  }, {
    path: "/products/quin-global",
    component: _187f2314,
    name: "products-quin-global"
  }, {
    path: "/products/sg-refractories",
    component: _5b709e47,
    name: "products-sg-refractories"
  }, {
    path: "/products/sg-spyrocor",
    component: _c4d4c59a,
    name: "products-sg-spyrocor"
  }, {
    path: "/products/sg-wrt",
    component: _1b1c59ba,
    name: "products-sg-wrt"
  }, {
    path: "/products/us-liner",
    component: _41a6b9f2,
    name: "products-us-liner"
  }, {
    path: "/",
    component: _6ec8836a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
