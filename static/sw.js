importScripts('/raghav/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/raghav/_nuxt/18aaebefa1732439c20b.js",
    "revision": "1f597d19cd9af1746606ba6aa948af4a"
  },
  {
    "url": "/raghav/_nuxt/2c22fbd95d3b84e0c9db.js",
    "revision": "9fcdf73d496aaa936fefea85b24f3d7f"
  },
  {
    "url": "/raghav/_nuxt/3a50167dde287b72aac0.js",
    "revision": "600d16b62f06efe68d452696ef0eb4d9"
  },
  {
    "url": "/raghav/_nuxt/5bba30fa5c8a97340964.js",
    "revision": "c600e1bce7b8cfc949582da74775bc37"
  },
  {
    "url": "/raghav/_nuxt/6c3cc37fd1d3ed08f703.js",
    "revision": "2a8facd92ccca4a7b8aa2e1f863f3369"
  },
  {
    "url": "/raghav/_nuxt/7a8d51bdd3a4eb228c52.js",
    "revision": "65d2c2d41dd622b2066470eb07a36418"
  },
  {
    "url": "/raghav/_nuxt/7af3a5f80529c97a5a16.js",
    "revision": "ce41c0cdc034cc2713519e677bd8af81"
  },
  {
    "url": "/raghav/_nuxt/80da58f501e755b2d46f.js",
    "revision": "c15a243020bbd98156359720b5ed0d94"
  },
  {
    "url": "/raghav/_nuxt/840b0f71a84e8422a049.js",
    "revision": "b29e5c8804de0c8f0bd700b7ba8b0050"
  },
  {
    "url": "/raghav/_nuxt/858d382648a0fef60876.js",
    "revision": "31e3d5ed8a84cc518203c088b489c94f"
  },
  {
    "url": "/raghav/_nuxt/87249b9cea87282c869d.js",
    "revision": "c3766c12bd06e2c40fc738937164c6de"
  },
  {
    "url": "/raghav/_nuxt/890760a69f166e566d97.js",
    "revision": "293c3a7377e87abf17d62adfd3ae765d"
  },
  {
    "url": "/raghav/_nuxt/9a73459e18f16e354643.js",
    "revision": "8b2d307d3db73f90cb1bb453a19d38c9"
  },
  {
    "url": "/raghav/_nuxt/9dbeae876906685771c1.js",
    "revision": "5038337a2f4f0bcc5bc909e19e03ae4a"
  },
  {
    "url": "/raghav/_nuxt/ac0272fc17544cd3f769.js",
    "revision": "f2ba3519eb1d68422a28b4e93a5ee3b7"
  },
  {
    "url": "/raghav/_nuxt/b1540fa806361e3bd9be.js",
    "revision": "951cb6cf354a2dba19cff5c7b13c1ccb"
  },
  {
    "url": "/raghav/_nuxt/b33e0ba0fb37d487307f.js",
    "revision": "48488d624d1d8b780b2b9146f173ed78"
  },
  {
    "url": "/raghav/_nuxt/b5941086bcdfd5213d70.js",
    "revision": "fb487b7d7662247584fcba4111527f42"
  },
  {
    "url": "/raghav/_nuxt/b5dd9e7e95c216e1f7f3.js",
    "revision": "5670ffe33376a87b0326f301a2976706"
  },
  {
    "url": "/raghav/_nuxt/c9fa501a0c62d8c82df2.js",
    "revision": "f4394318fe03a96db3c5df06559a0b4c"
  },
  {
    "url": "/raghav/_nuxt/daa4a44b70222771e3d1.js",
    "revision": "5d9ed14eac056ceca8f3ce5a16848497"
  },
  {
    "url": "/raghav/_nuxt/dd0103b26e195067d634.js",
    "revision": "4b88284e18f71d3eb583f9594ba73222"
  },
  {
    "url": "/raghav/_nuxt/e054d4633815430d290c.js",
    "revision": "cc529d4ae8be8ac245452fe9e1ca0e0b"
  },
  {
    "url": "/raghav/_nuxt/e783e73a105ee005bc38.js",
    "revision": "fcdf2d146edb5736e71acfd1da7ddc78"
  },
  {
    "url": "/raghav/_nuxt/ec10a3f72d15c460be19.js",
    "revision": "8daf56e2b01919353083760763ea4ce0"
  },
  {
    "url": "/raghav/_nuxt/ed40c7b22d4eda752caf.js",
    "revision": "25d7e7e9712e45191720e001c03d82d0"
  },
  {
    "url": "/raghav/_nuxt/efa7ecdecf7960e9a12e.js",
    "revision": "d20c85ef30a90c18acf52c245cd5039a"
  },
  {
    "url": "/raghav/_nuxt/f246cc51ffcdd54ddc7f.js",
    "revision": "cf8585da9e35cd8978c05576fdc80ec1"
  },
  {
    "url": "/raghav/_nuxt/fa6d62fd5fbff46b9d6a.js",
    "revision": "e7e66aad324b4220ec8cac9409dc3f29"
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
