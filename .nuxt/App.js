import Vue from 'vue'

import {
  getMatchedComponentsInstances,
  promisify,
  globalHandleError
} from './utils'

import NuxtError from '../layouts/error.vue'
import NuxtLoading from './components/nuxt-loading.vue'
import NuxtBuildIndicator from './components/nuxt-build-indicator'

import '../assets/css/main.css'

import '../node_modules/highlight.js/styles/foundation.css'

import _2d21d098 from '../layouts/blog.vue'
import _6f6c098b from '../layouts/default.vue'
import _5bb9a540 from '../layouts/preloader.vue'
import _1c274e70 from '../layouts/projects.vue'

const layouts = { "_blog": _2d21d098,"_default": _6f6c098b,"_preloader": _5bb9a540,"_projects": _1c274e70 }

export default {
  head: {"title":"Saurabh Chandra Rai - UX Designer and Front-End Developer","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"},{"name":"msapplication-TileColor","content":"#fc3a52"},{"name":"application-name","content":"Saurabhcrai.com"},{"name":"msapplication-TileImage","content":"\u002Ffavicons\u002Fmstile-144x144.png"},{"name":"theme-color","content":"#fc3a52"},{"name":"robots","content":"index, follow"},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:site","content":"@saurabhcrai110"},{"property":"og:type","content":"profile"},{"property":"og:updated_time","content":"2021-06-05T10:53:15.163Z"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"saurabhcrai.com"},{"hid":"og:title","name":"og:title","property":"og:title","content":"saurabhcrai.com"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"saurabhcrai.com"}],"link":[{"iconSrc":"static\u002Ficon.png","rel":"icon","type":"image\u002Fx-icon","href":"favicon.ico"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Ffavicons\u002Ffavicon-16x16.png","sizes":"16x16"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Ffavicons\u002Ffavicon-32x32.png","sizes":"32x32"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Ffavicons\u002Fandroid-chrome-96x96.png","sizes":"96x96"},{"rel":"icon","type":"image\u002Fpng","href":"\u002Ffavicons\u002Fandroid-chrome-192x192.png","sizes":"192x192"},{"rel":"apple-touch-icon","href":"\u002Ffavicons\u002Fapple-touch-icon-57x57.png","sizes":"57x57"},{"rel":"apple-touch-icon","href":"\u002Ffavicons\u002Fapple-touch-icon-60x60.png","sizes":"60x60"},{"rel":"apple-touch-icon","href":"\u002Ffavicons\u002Fapple-touch-icon-72x72.png","sizes":"72x72"},{"rel":"apple-touch-icon","href":"\u002Ffavicons\u002Fapple-touch-icon-76x76.png","sizes":"76x76"},{"rel":"apple-touch-icon","href":"\u002Ffavicons\u002Fapple-touch-icon-114x114.png","sizes":"114x114"},{"rel":"apple-touch-icon","href":"\u002Ffavicons\u002Fapple-touch-icon-120x120.png","sizes":"120x120"},{"rel":"apple-touch-icon","href":"\u002Ffavicons\u002Fapple-touch-icon-144x144.png","sizes":"144x144"},{"rel":"apple-touch-icon","href":"\u002Ffavicons\u002Fapple-touch-icon-152x152.png","sizes":"152x152"},{"rel":"apple-touch-icon","href":"\u002Ffavicons\u002Fapple-touch-icon-180x180.png","sizes":"180x180"},{"rel":"mask-icon","type":"image\u002Fpng","href":"\u002Ffavicons\u002Fsafari-pinned-tab.svg","color":"#fc3a52"},{"rel":"stylesheet","href":"https:\u002F\u002Funpkg.com\u002Fapplause-button\u002Fdist\u002Fapplause-button.css"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.36e0ae33.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.9n09xdrfmGN.png"}],"script":[{"src":" https:\u002F\u002Funpkg.com\u002Fapplause-button\u002Fdist\u002Fapplause-button.js"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fjquery\u002F3.3.1\u002Fjquery.min.js","body":true,"async":true},{"src":"https:\u002F\u002Frawcdn.githack.com\u002Fmburakerman\u002Fprognroll\u002F0feda211643153bce2c69de32ea1b39cdc64ffbe\u002Fsrc\u002Fprognroll.js","body":true,"async":true,"ssr":false},{"src":"\u002Feasescroll.js","body":true,"async":true,"ssr":false},{"src":"\u002Fmain.js","defer":true,"body":true,"async":true}],"style":[],"htmlAttrs":{"lang":"en"}},

  render (h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })

    if (this.nuxt.err && NuxtError.layout) {
      this.setLayout(
        typeof NuxtError.layout === 'function'
          ? NuxtError.layout(this.context)
          : NuxtError.layout
      )
    }

    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter (el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      h(NuxtBuildIndicator),
      transitionEl
    ])
  },

  data: () => ({
    isOnline: true,

    layout: null,
    layoutName: ''
  }),

  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this

      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
    // Add $nuxt.context
    this.context = this.$options.context
  },

  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline () {
      return !this.isOnline
    }
  },

  methods: {
    refreshOnlineStatus () {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    async refresh () {
      const pages = getMatchedComponentsInstances(this.$route)

      if (!pages.length) {
        return
      }
      this.$loading.start()

      const promises = pages.map((page) => {
        const p = []

        if (page.$options.fetch) {
          p.push(promisify(page.$options.fetch, this.context))
        }

        if (page.$options.asyncData) {
          p.push(
            promisify(page.$options.asyncData, this.context)
              .then((newData) => {
                for (const key in newData) {
                  Vue.set(page.$data, key, newData[key])
                }
              })
          )
        }

        return Promise.all(p)
      })
      try {
        await Promise.all(promises)
      } catch (error) {
        this.$loading.fail()
        globalHandleError(error)
        this.error(error)
      }
      this.$loading.finish()
    },

    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail()
        }
        if (this.$loading.finish) {
          this.$loading.finish()
        }
      }
    },

    setLayout (layout) {
      if(layout && typeof layout !== 'string') {
        throw new Error('[nuxt] Avoid using non-string value as layout property.')
      }

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },

  components: {
    NuxtLoading
  }
}
