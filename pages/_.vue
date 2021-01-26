<!--
  NOTE: this file is named `_.vue` to handle unknown dynamic nested routes:
  https://nuxtjs.org/guide/routing#unknown-dynamic-nested-routes
-->

<template>
  <div>
    <Header />

    <Introduction />
    <RichText />
    <Carousel view="slides" />
    <Carousel view="tiles" />

    <Exercise />

    <template v-for="(componentDefinition, index) in page.components">
      <!-- <pre> {{ componentDefinition }}</pre> -->
      <component
        :is="resolveComponent(componentDefinition)"
        :key="index"
        v-bind="componentDefinition"
      />
    </template>
  </div>
</template>

<script>
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import RichText from "../components/RichText";
import Carousel from "../components/Carousel";
import Exercise from "../components/Exercise";

export default {
  components: {
    Header,
    Introduction,
    RichText,
    Carousel,
    Exercise,
  },
  asyncData(nuxtContext) {
    // eslint-disable-next-line no-unused-vars
    const { route, params, $contentful, $preview } = nuxtContext;

    return Promise.all([
      $contentful.getPageBySlug($preview, route.path),
      $contentful.getEntriesByContentType($preview, "talk"),
    ]).then((results) => {
      const page = results[0];
      const talks = results[1];
      return { talks, page, slug: route.path };
    });
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
      const component = this.$uniformOptimizeContext.componentResolver(
        componentDefinition.sys.contentType.sys.id
      );
      return component;
    },
  },
  head() {
    return {
      title: `${this.page.title}`,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: `${this.page.title}`,
        },
      ],
    };
  },
  provide() {
    return {
      talks: this.talks,
    };
  },
  // https://nuxtjs.org/docs/2.x/components-glossary/pages-watchquery
  // This is a bit of a hack, but we set the `watchQuery` property to a function so
  // that we can call the `reevaluateSignals` method for the Uniform Optimize tracker
  // when a querystring value changes via client-side route change,
  // e.g. clicking on a NuxtLink with a querystring value in the URL
  // Otherwise, Nuxt typically doesn't do anything when querystrings are appended.
  watchQuery() {
    this.reevaluateSignals();
    return true;
  },
};
</script>
