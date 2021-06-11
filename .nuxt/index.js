import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_pluginrouting_67028144 from 'nuxt_plugin_pluginrouting_67028144' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_fdc8ce5e from 'nuxt_plugin_pluginmain_fdc8ce5e' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_googleanalytics_0d1dd6be from 'nuxt_plugin_googleanalytics_0d1dd6be' // Source: ./google-analytics.js (mode: 'client')
import nuxt_plugin_moment_928a23a0 from 'nuxt_plugin_moment_928a23a0' // Source: ./moment.js (mode: 'all')
import nuxt_plugin_axios_70c6b068 from 'nuxt_plugin_axios_70c6b068' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_rellax_3f7ebd40 from 'nuxt_plugin_rellax_3f7ebd40' // Source: ../plugins/rellax (mode: 'client')
import nuxt_plugin_aos_5e4622cf from 'nuxt_plugin_aos_5e4622cf' // Source: ../plugins/aos (mode: 'client')
import nuxt_plugin_mediumzoom_110d5416 from 'nuxt_plugin_mediumzoom_110d5416' // Source: ../plugins/medium-zoom (mode: 'client')
import nuxt_plugin_vueagile_726cdbff from 'nuxt_plugin_vueagile_726cdbff' // Source: ../plugins/vue-agile (mode: 'client')
import nuxt_plugin_lazyload_af447860 from 'nuxt_plugin_lazyload_af447860' // Source: ../plugins/lazyload (mode: 'all')
import nuxt_plugin_globalComponents_97da3ae2 from 'nuxt_plugin_globalComponents_97da3ae2' // Source: ../plugins/globalComponents (mode: 'all')
import nuxt_plugin_vimeoplayer_400597e1 from 'nuxt_plugin_vimeoplayer_400597e1' // Source: ../plugins/vimeo-player (mode: 'client')
import nuxt_plugin_vueparallaxjs_f200cd7c from 'nuxt_plugin_vueparallaxjs_f200cd7c' // Source: ../plugins/vue-parallax-js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn(`<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead`)
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>`
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp (ssrContext) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [ defaultTransition ],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [ transitions ]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        const nuxt = this.nuxt || this.$options.nuxt
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  const inject = function (key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error('inject(key, value) has no value provided')
    }

    key = '$' + key
    // Add into app
    app[key] = value

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Vue.prototype.hasOwnProperty(key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Plugin execution

  if (typeof nuxt_plugin_pluginrouting_67028144 === 'function') {
    await nuxt_plugin_pluginrouting_67028144(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_fdc8ce5e === 'function') {
    await nuxt_plugin_pluginmain_fdc8ce5e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_0d1dd6be === 'function') {
    await nuxt_plugin_googleanalytics_0d1dd6be(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_928a23a0 === 'function') {
    await nuxt_plugin_moment_928a23a0(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_70c6b068 === 'function') {
    await nuxt_plugin_axios_70c6b068(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_rellax_3f7ebd40 === 'function') {
    await nuxt_plugin_rellax_3f7ebd40(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_aos_5e4622cf === 'function') {
    await nuxt_plugin_aos_5e4622cf(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_mediumzoom_110d5416 === 'function') {
    await nuxt_plugin_mediumzoom_110d5416(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueagile_726cdbff === 'function') {
    await nuxt_plugin_vueagile_726cdbff(app.context, inject)
  }

  if (typeof nuxt_plugin_lazyload_af447860 === 'function') {
    await nuxt_plugin_lazyload_af447860(app.context, inject)
  }

  if (typeof nuxt_plugin_globalComponents_97da3ae2 === 'function') {
    await nuxt_plugin_globalComponents_97da3ae2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vimeoplayer_400597e1 === 'function') {
    await nuxt_plugin_vimeoplayer_400597e1(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueparallaxjs_f200cd7c === 'function') {
    await nuxt_plugin_vueparallaxjs_f200cd7c(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
