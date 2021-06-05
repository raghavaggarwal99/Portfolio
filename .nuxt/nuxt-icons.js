export default async function (ctx, inject) {
  const moduleOptions = {"accessibleIcons":true,"iconProperty":"$icon","icons":{"64":"\u002F_nuxt\u002Ficons\u002Ficon_64.9n09xdrfmGN.png","120":"\u002F_nuxt\u002Ficons\u002Ficon_120.9n09xdrfmGN.png","144":"\u002F_nuxt\u002Ficons\u002Ficon_144.9n09xdrfmGN.png","152":"\u002F_nuxt\u002Ficons\u002Ficon_152.9n09xdrfmGN.png","192":"\u002F_nuxt\u002Ficons\u002Ficon_192.9n09xdrfmGN.png","384":"\u002F_nuxt\u002Ficons\u002Ficon_384.9n09xdrfmGN.png","512":"\u002F_nuxt\u002Ficons\u002Ficon_512.9n09xdrfmGN.png"}}
  inject(moduleOptions.iconProperty.replace('$', ''), retrieveIcons(moduleOptions.icons))
}

const retrieveIcons = icons => size => icons[size] || ''
