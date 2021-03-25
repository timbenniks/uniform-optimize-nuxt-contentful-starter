export default {
  // Target (https://go.nuxtjs.dev/config-target)
  // default to `server` unless the `NUXT_BUILD_TARGET` var has been defined.
  target: process.env.NUXT_BUILD_TARGET || "server",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "UniformConf",
    description: "UniformConf, a Uniform Optimize demo site",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "UniformConf, a Uniform Optimize demo site",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "UniformConf, a Uniform Optimize demo site",
      },
      { hid: "og:site_name", name: "og:site_name", content: "uniformconf.com" },
      {
        hid: "apple-mobile-web-app-title",
        name: "apple-mobile-web-app-title",
        content: "UniformConf",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/contentful-nuxt-plugin.js",
    "~/plugins/preview.client.js",
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [{ path: "~/components", extensions: ["vue"] }],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "cookie-universal-nuxt",
    "~/modules/uniform/optimize/initialize.js",
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  publicRuntimeConfig: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_CDA_ACCESS_TOKEN: process.env.CONTENTFUL_CDA_ACCESS_TOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
    GA_UA_ID: process.env.GA_UA_ID,
    SEGMENT_ID: process.env.SEGMENT_ID,
  },
  generate: {
    crawler: false,
    routes: ["/", "/developers", "/marketers", "/registration"],
    fallback: true,
    dir: "out",
  },
};
