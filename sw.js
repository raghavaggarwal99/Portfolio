importScripts('/raghav/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/raghav/_nuxt/0c3a70b46c0a41852c78.js",
    "revision": "1aa0a3e32609247c5cb7a0a60635a3dc"
  },
  {
    "url": "/raghav/_nuxt/11be99236ef38ac2e47b.js",
    "revision": "b35646c095f8ba4e2b9032ff7724a819"
  },
  {
    "url": "/raghav/_nuxt/2c70a070b64dd696c50d.js",
    "revision": "dfe1b5024ba2ac9711fd794f1296ee9e"
  },
  {
    "url": "/raghav/_nuxt/2eaa2ed8c4038c50b226.js",
    "revision": "c93cf980612c5dfc3bf394674256bb5b"
  },
  {
    "url": "/raghav/_nuxt/2fbdd136521b889b93e4.js",
    "revision": "8ee172a3289ea2e505c74890369ca422"
  },
  {
    "url": "/raghav/_nuxt/54983cf66716b193ae35.js",
    "revision": "5f68a3bfa9fdc1b5f508e05af68488ab"
  },
  {
    "url": "/raghav/_nuxt/59d53a7855a5f02a8d45.js",
    "revision": "65b2c3799234de121a39d24369abac85"
  },
  {
    "url": "/raghav/_nuxt/6005ab27e4bc473727f2.js",
    "revision": "f6ad3d312e8119763dc839f5744c57b6"
  },
  {
    "url": "/raghav/_nuxt/66721cb9f48238180a6c.js",
    "revision": "bfe0cea8036f80f9108bdf6c7eec4820"
  },
  {
    "url": "/raghav/_nuxt/68ee3e868bb16435f9a6.js",
    "revision": "985c3343683630eecc0b59d8bf73b914"
  },
  {
    "url": "/raghav/_nuxt/7af7f1333484fc79bb37.js",
    "revision": "5fd6cb5d63a3ddf2642a268eb9220acf"
  },
  {
    "url": "/raghav/_nuxt/7b71dae4a0595f6aa415.js",
    "revision": "22ddcf0085d782ab5ca92c827a98e051"
  },
  {
    "url": "/raghav/_nuxt/7cffd4a120ca7fd06232.js",
    "revision": "10f42b3868a29e522ea6a34ede1cf9d7"
  },
  {
    "url": "/raghav/_nuxt/840b0f71a84e8422a049.js",
    "revision": "b29e5c8804de0c8f0bd700b7ba8b0050"
  },
  {
    "url": "/raghav/_nuxt/8449100c92421cf08aea.js",
    "revision": "2ce980eb62965235896163aaa6c3f867"
  },
  {
    "url": "/raghav/_nuxt/84e2c2e75ff42768bb88.js",
    "revision": "456dac390518b64a16ae48e346c7d31b"
  },
  {
    "url": "/raghav/_nuxt/8de905392818309c3028.js",
    "revision": "b54b6efb028d15b8d7b543cc4ab37ad9"
  },
  {
    "url": "/raghav/_nuxt/a9f353ec86ea77ee42cc.js",
    "revision": "aed1b614f142d5ad722f8aeecc30de88"
  },
  {
    "url": "/raghav/_nuxt/ac0272fc17544cd3f769.js",
    "revision": "f2ba3519eb1d68422a28b4e93a5ee3b7"
  },
  {
    "url": "/raghav/_nuxt/c2ea275319086044b89e.js",
    "revision": "7a7f1950e8e4651f34466536010e2cad"
  },
  {
    "url": "/raghav/_nuxt/c5e7e67b4359a8b53a88.js",
    "revision": "3b933cee6867b44225a346a1b52ecc59"
  },
  {
    "url": "/raghav/_nuxt/da332b0efc22f7ed3b38.js",
    "revision": "af3bacd603d80cc139071af01ef811b3"
  },
  {
    "url": "/raghav/_nuxt/dd0103b26e195067d634.js",
    "revision": "4b88284e18f71d3eb583f9594ba73222"
  },
  {
    "url": "/raghav/_nuxt/de04182f3c1ffc7ba388.js",
    "revision": "17ad43c8c1edd3ca0fb61040e55f252d"
  },
  {
    "url": "/raghav/_nuxt/e99f22e6ec11d6765d4b.js",
    "revision": "d650ca96990f11df7c13ca5dba9684cf"
  },
  {
    "url": "/raghav/_nuxt/e9eb42fd989c069ed0de.js",
    "revision": "38fdec73707ab881afd9838b3915a9be"
  },
  {
    "url": "/raghav/_nuxt/f246cc51ffcdd54ddc7f.js",
    "revision": "cf8585da9e35cd8978c05576fdc80ec1"
  },
  {
    "url": "/raghav/_nuxt/f505f9b335d675ccfaba.js",
    "revision": "697686359f835ba0d33f2f2f6fc7b8a4"
  },
  {
    "url": "/raghav/_nuxt/f8ec2ab39b2405512456.js",
    "revision": "e22007cc9b4ac5a5f99cf5809f4e2350"
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
