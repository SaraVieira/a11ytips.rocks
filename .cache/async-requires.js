// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  'component---cache-dev-404-page-js': () =>
    import('/Users/saravieira/Projects/a11ytips.rocks/.cache/dev-404-page.js' /* webpackChunkName: "component---cache-dev-404-page-js" */),
  'component---src-pages-404-js': () =>
    import('/Users/saravieira/Projects/a11ytips.rocks/src/pages/404.js' /* webpackChunkName: "component---src-pages-404-js" */),
  'component---src-pages-index-js': () =>
    import('/Users/saravieira/Projects/a11ytips.rocks/src/pages/index.js' /* webpackChunkName: "component---src-pages-index-js" */),
  'component---src-pages-submit-js': () =>
    import('/Users/saravieira/Projects/a11ytips.rocks/src/pages/submit.js' /* webpackChunkName: "component---src-pages-submit-js" */)
}

exports.data = () =>
  import('/Users/saravieira/Projects/a11ytips.rocks/.cache/data.json')
