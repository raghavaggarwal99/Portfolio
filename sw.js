importScripts('/raghav/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/raghav/_nuxt/11262d0768acdf46a604.js",
    "revision": "71fe72fb020978ca212fa12a7a08529d"
  },
  {
    "url": "/raghav/_nuxt/11d2262281c61636c1ab.js",
    "revision": "0fba13135f21f776237342d335d7c187"
  },
  {
    "url": "/raghav/_nuxt/198e5b9d1dc70c40e1a1.js",
    "revision": "27ad5b3100453e17c607b4ec4d18482a"
  },
  {
    "url": "/raghav/_nuxt/2c70a070b64dd696c50d.js",
    "revision": "dfe1b5024ba2ac9711fd794f1296ee9e"
  },
  {
    "url": "/raghav/_nuxt/2fa569866eb608185ed7.js",
    "revision": "d66c697663d8c5cc7b87a3b704deb798"
  },
  {
    "url": "/raghav/_nuxt/3362fb566c5c91801205.js",
    "revision": "674e8a511f507cdb3d20c1f3bd847837"
  },
  {
    "url": "/raghav/_nuxt/4dc7b776320f58f607dc.js",
    "revision": "f244a8a2e3959f73513f4e593ea98100"
  },
  {
    "url": "/raghav/_nuxt/56252582f2ec60b61c88.js",
    "revision": "99e4a63fa1504961a2ec2da6a5e6203f"
  },
  {
    "url": "/raghav/_nuxt/74ff6fd1daa969d185c0.js",
    "revision": "4ea6139015ea4811773886bde194a5f8"
  },
  {
    "url": "/raghav/_nuxt/7af7f1333484fc79bb37.js",
    "revision": "5fd6cb5d63a3ddf2642a268eb9220acf"
  },
  {
    "url": "/raghav/_nuxt/83f5b9800856a863c8bb.js",
    "revision": "ad9d406891dd7355b0b0fbc774530055"
  },
  {
    "url": "/raghav/_nuxt/840b0f71a84e8422a049.js",
    "revision": "b29e5c8804de0c8f0bd700b7ba8b0050"
  },
  {
    "url": "/raghav/_nuxt/840c2132d28875a5ee33.js",
    "revision": "7a8d1169267d9aabf43d4d5e52718547"
  },
  {
    "url": "/raghav/_nuxt/84e2c2e75ff42768bb88.js",
    "revision": "456dac390518b64a16ae48e346c7d31b"
  },
  {
    "url": "/raghav/_nuxt/9a48df67c715da7fd2fc.js",
    "revision": "e4efb757981e456a6dd5f5be7df2404a"
  },
  {
    "url": "/raghav/_nuxt/9bd05e46bbcfd686d718.js",
    "revision": "f917d0ce8c426202a088e51ef5276865"
  },
  {
    "url": "/raghav/_nuxt/a16cc885bc16bb06f8d4.js",
    "revision": "2e829e85004344791da90e8d560268a6"
  },
  {
    "url": "/raghav/_nuxt/ac0272fc17544cd3f769.js",
    "revision": "f2ba3519eb1d68422a28b4e93a5ee3b7"
  },
  {
    "url": "/raghav/_nuxt/b071ffa03febb984e1c4.js",
    "revision": "447b86fa86b0c6a74977b1bbb5d3aa69"
  },
  {
    "url": "/raghav/_nuxt/b5a6d871fa40133d6b23.js",
    "revision": "0be77a7aae365f3e03f158e470ce99f8"
  },
  {
    "url": "/raghav/_nuxt/b655ce4da021326d2859.js",
    "revision": "7822c46709944e0db78599a5623e5224"
  },
  {
    "url": "/raghav/_nuxt/c0d3660442129827f0fd.js",
    "revision": "389cc41dec0e0fe5341b0b2bced61a1a"
  },
  {
    "url": "/raghav/_nuxt/dd0103b26e195067d634.js",
    "revision": "4b88284e18f71d3eb583f9594ba73222"
  },
  {
    "url": "/raghav/_nuxt/df6919c48efb273642d2.js",
    "revision": "248d7778ea0055d88de96fc0fb5bfc01"
  },
  {
    "url": "/raghav/_nuxt/e30ddccd050f6e4df66d.js",
    "revision": "2ecc1fcb216071251e594bb816f42d6e"
  },
  {
    "url": "/raghav/_nuxt/f246cc51ffcdd54ddc7f.js",
    "revision": "cf8585da9e35cd8978c05576fdc80ec1"
  },
  {
    "url": "/raghav/_nuxt/f370c446eb494606ebad.js",
    "revision": "2e9e58dba379b4ef67ae781f9f5ec1ba"
  },
  {
    "url": "/raghav/_nuxt/f9d5a61589bbf5463e2d.js",
    "revision": "3c313bad52d5c76337cbf76906606558"
  },
  {
    "url": "/raghav/_nuxt/fd0a5d25d211d388784c.js",
    "revision": "49ff92e495870e5fb59c4ddca746f158"
  }
], {
  "cacheId": "raghavaggarwal.com",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/raghav/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/raghav/.*'), workbox.strategies.networkFirst({}), 'GET')
