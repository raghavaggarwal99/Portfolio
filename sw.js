importScripts('/raghav/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/raghav/_nuxt/0685393c905495b60933.js",
    "revision": "610d5145e45851607b2e9a9ba74feb74"
  },
  {
    "url": "/raghav/_nuxt/0ac7fd598bb3cad58879.js",
    "revision": "d7a17d2f298b864b4463e0522e1559a6"
  },
  {
    "url": "/raghav/_nuxt/27eeaa2c8a3deb76ebc8.js",
    "revision": "ba020655909ed98f794d9739ba7e8297"
  },
  {
    "url": "/raghav/_nuxt/3cd3a0fa42c2327f84b6.js",
    "revision": "ef30d11847f2dc0af355ff0e198d0467"
  },
  {
    "url": "/raghav/_nuxt/3ea4a24fd6c7bf9f9272.js",
    "revision": "4e8ada87339236335a9e7ed4433d6d80"
  },
  {
    "url": "/raghav/_nuxt/4233e43d80f7b13fb010.js",
    "revision": "46ba21782453683c263fc0cbadc05bf3"
  },
  {
    "url": "/raghav/_nuxt/4ac3ded52bd45111aed5.js",
    "revision": "39ac3255b977b1a2e87574e1178cfc40"
  },
  {
    "url": "/raghav/_nuxt/62e2edc7f4b26659f1d5.js",
    "revision": "31c603dc1111c6b2a95b3cc44c35cb75"
  },
  {
    "url": "/raghav/_nuxt/648d4ef0be8de4225019.js",
    "revision": "24ff8306d78c8a26747a46e4c4fbd49b"
  },
  {
    "url": "/raghav/_nuxt/799fcc4cf932a9d610f5.js",
    "revision": "81e702639e52717c1a45de1b070857ba"
  },
  {
    "url": "/raghav/_nuxt/8650c3ecf131fa5bc09b.js",
    "revision": "fe9fdbe93ef4b35cebe268ea74a2beff"
  },
  {
    "url": "/raghav/_nuxt/871fb4c301cfe738a1d3.js",
    "revision": "db50e48fff4227853dd59b4ee8538522"
  },
  {
    "url": "/raghav/_nuxt/8d13a1bc04a50937bc00.js",
    "revision": "61e9e0a86e24438d37e38dbb1a0baaac"
  },
  {
    "url": "/raghav/_nuxt/91ab73c76c13d2438edb.js",
    "revision": "3085502999176d81bfac3fb9d95a8704"
  },
  {
    "url": "/raghav/_nuxt/9216cecd575a83d49d15.js",
    "revision": "ea47105fc8b3edbb86c89fed14c956dd"
  },
  {
    "url": "/raghav/_nuxt/9663a271c6ca566a9935.js",
    "revision": "a4424600e715e0b908b0fd6837e45d0e"
  },
  {
    "url": "/raghav/_nuxt/9e35ceba543155971722.js",
    "revision": "ebced18ebe51893b19cefd746bbd59ae"
  },
  {
    "url": "/raghav/_nuxt/9ef92d4665205de4b3f5.js",
    "revision": "e84b9fe9d9eb2c0dfada717734826462"
  },
  {
    "url": "/raghav/_nuxt/ab0d2e82d66ca5a74f9e.js",
    "revision": "4caedf315e4946c108cfe0877436298c"
  },
  {
    "url": "/raghav/_nuxt/b238fb9a5417d54ca85a.js",
    "revision": "daa82309e06c9deace4784555695ae10"
  },
  {
    "url": "/raghav/_nuxt/b9d00b1af2b60cc9bb53.js",
    "revision": "ff873fdff1594f1eb26adae9b74e729a"
  },
  {
    "url": "/raghav/_nuxt/bec5cccafaaf3bef1e4e.js",
    "revision": "175410a28810abe4c6e513d5d4b609c9"
  },
  {
    "url": "/raghav/_nuxt/c7d21531e5b23fe43e04.js",
    "revision": "a5ce115722bd32920db2b7b31335abc5"
  },
  {
    "url": "/raghav/_nuxt/c9b877c0a90523081d04.js",
    "revision": "b09c65365d5fc8d6d8b6f69683d85bc0"
  },
  {
    "url": "/raghav/_nuxt/d4371f1fecc021a79140.js",
    "revision": "49abb9ee360fae0a6a36a83692318ac2"
  },
  {
    "url": "/raghav/_nuxt/d852b05115b4e4849d29.js",
    "revision": "5f14f4a38cd8d30a0cae201a0c4dc7b3"
  },
  {
    "url": "/raghav/_nuxt/e124a7ab9f9f91a078e1.js",
    "revision": "adaa405fdaf0d6b1d030744bcc40e24b"
  },
  {
    "url": "/raghav/_nuxt/e6cc7fe9f014e23f1a4c.js",
    "revision": "26dcb49e11aebb5f69ff71fe744c8c52"
  },
  {
    "url": "/raghav/_nuxt/eb99519e4044a1235944.js",
    "revision": "2182080cbc8bb05179c21119057d7ca3"
  },
  {
    "url": "/raghav/_nuxt/ebd54928d2fb98abd7e2.js",
    "revision": "3b2d928ee237615e85dea807de5df24f"
  },
  {
    "url": "/raghav/_nuxt/ff20fbb621a7aa28297a.js",
    "revision": "4c3bfa5e03cfd73042faf96f80169f9c"
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
