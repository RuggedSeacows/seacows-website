const withLess = require("@zeit/next-less")
const withPlugins = require("next-compose-plugins")
// const withCss = require("@zeit/next-css")
module.exports = withPlugins(
  [
    // withCss({}),
    withLess({
      lessLoaderOptions: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#5377EF",
          "link-color": "#0286F0",
          "border-radius-base": "2px",
        },
      },
    }),
  ],
  {
    webpack5: false
  }
)
