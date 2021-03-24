<!--
  NOTE: this file is named `_.vue` to handle unknown dynamic nested routes:
  https://nuxtjs.org/guide/routing#unknown-dynamic-nested-routes
-->

<template>
  <div>
    <Navbar />
    <div>
      <template v-for="(componentDefinition, index) in page.components">
        <component :is="resolveComponent(componentDefinition)" :key="index" v-bind="componentDefinition" />
      </template>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import { componentResolver } from '../components/componentResolver';

export default {
  components: {
    Navbar,
    Footer,
  },
  provide() {
    return {
      talks: this.talks,
    };
  },
  asyncData(nuxtContext) {
    // eslint-disable-next-line no-unused-vars
    const { route, params, $contentful, $preview } = nuxtContext;

    return Promise.all([
      $contentful.getPageBySlug($preview, route.path),
      $contentful.getEntriesByContentType($preview, 'talk'),
    ]).then((results) => {
      const page = results[0];
      const talks = results[1];
      return { talks, page, slug: route.path };
    });
  },
  head() {
    return {
      title: `${this.page.title} | UniformConf`,
      meta: [{ hid: 'og:title', name: 'og:title', content: `${this.page.title} | UniformConf` }],
    };
  },
  // https://nuxtjs.org/docs/2.x/components-glossary/pages-watchquery
  // Set the `watchQuery` property to true so that the `updated` method is called on querystring change.
  // Then we can call the `reevaluateSignals` method for the Uniform Optimize tracker
  // when a querystring value changes via client-side route change,
  // e.g. clicking on a NuxtLink with a querystring value in the URL
  // Otherwise, Nuxt typically doesn't do anything when querystrings are appended.
  watchQuery: true,
  updated() {
    this.reevaluateSignals();
  },
  mounted() {
    // This is a convenience function to "automatically" evaluate any registered signals
    // after the page has rendered.
    // There's not a great way to do this in Vue because the child components aren't
    // guaranteed to have been rendered when the `mounted` event is called.
    // But `mounted` is the latest-firing event we can subscribe to in the Vue lifecycle
    // and using `$nextTick` is the "recommended" way to attempt to execute code
    // after child components are mounted. Dubious that this technique is reliable.
    this.$nextTick(() => {
      this.reevaluateSignals();
    });
  },
  methods: {
    reevaluateSignals() {
      if (!this.$uniformOptimizeContext.trackerInitializing) {
        this.$uniformOptimizeContext.tracker.reevaluateSignals();
      }
    },
    resolveComponent(componentDefinition) {
      return componentResolver(componentDefinition.sys.contentType.sys.id);
    },
  },
};
</script>
