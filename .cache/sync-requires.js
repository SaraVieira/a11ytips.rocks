// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/Users/saravieira/Projects/a11ytips.rocks/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/saravieira/Projects/a11ytips.rocks/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/saravieira/Projects/a11ytips.rocks/src/pages/index.js")),
  "component---src-pages-submit-js": preferDefault(require("/Users/saravieira/Projects/a11ytips.rocks/src/pages/submit.js"))
}

