<template>
  <personalize :variations="variations">
    <template v-slot:default="{ variations }">
      <section class="w-full relative mb-24">
        <h1 class="text-center font-bold">{{ variations[0].fields.title }}</h1>

        <div class="hero relative w-full">
          <img
            :src="variations[0].fields.heroImage.fields.file.url"
            width="16"
            height="9"
            class="w-full h-auto absolute top-0 left-0 object-cover"
          />
        </div>
        <div class="absolute intro-arrow">
          <svg width="57" height="57" viewBox="0 0 57 57">
            <g transform="translate(-692 -852) translate(692 852)">
              <circle cx="28.5" cy="28.5" r="28.5" fill="#415AC2" />
              <g fill="#FFF">
                <path
                  d="M12 4L10.59 5.41 16.17 11 4 11 4 13 16.17 13 10.59 18.59 12 20 20 12z"
                  transform="rotate(-90 28.5 11.5) matrix(-1 0 0 1 24 0)"
                />
              </g>
            </g>
          </svg>
        </div>
      </section>
    </template>
  </personalize>
</template>

<script>
import { Personalize } from "@uniformdev/optimize-tracker-vue";
import { contentfulOptimizeListReader } from "@uniformdev/optimize-tracker-contentful";

export default {
  components: {
    Personalize,
  },
  props: {
    fields: {
      type: Object,
      default() {
        return {
          unfrmOptP13nList: {},
        };
      },
    },
    sys: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    variations() {
      return contentfulOptimizeListReader(this.fields.unfrmOptP13nList);
    },
  },
  mounted() {
    this.$uniformOptimize.trackBehavior(this.fields.unfrmOptIntentTag);
  },
};
</script>

<style lang="postcss">
.hero {
  height: 0;
  padding-top: 50%;
}

h1 {
  font-size: 80px;
  margin-bottom: 4rem;
}

.intro-arrow {
  animation: MoveUpDown 1s ease infinite;
  bottom: 3rem;
  left: calc(50% - 27px);
}

@keyframes MoveUpDown {
  0%,
  100% {
    bottom: 4rem;
  }
  50% {
    bottom: 3rem;
  }
}
</style>
