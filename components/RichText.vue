<template>
  <personalize :variations="variations">
    <template v-slot:default="{ variations }">
      <section class="richtext-wrapper w-full grid gap-4 grid-cols-2 mb-24">
        <div class="flex justify-end">
          <svg width="38" height="38" viewBox="0 0 38 38">
            <g transform="translate(-202 -349) translate(202 349)">
              <circle cx="19" cy="19" r="19" fill="#282828" />
              <path
                fill="#F6F4F1"
                fill-rule="nonzero"
                d="M21 24H11v2h10v-2zm6-8H11v2h16v-2zm-16 6h16v-2H11v2zm0-10v2h16v-2H11z"
              />
            </g>
          </svg>
        </div>
        <div class="content-wrapper">
          <div class="title-box mb-8 flex justify-between">
            <h2 class="font-bold text-4xl max-w-2xl">
              {{ variations[0].fields.title }}
            </h2>

            <ul class="flex" v-if="!!variations[0].intentTag.intents.student">
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <g transform="translate(-1020 -367)">
                    <g>
                      <path
                        fill="#282828"
                        d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92 0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
                        transform="translate(1020 367)"
                      />
                    </g>
                  </g>
                </svg>
              </li>
              <li class="ml-4">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" fill-rule="evenodd">
                    <g transform="translate(-1058 -366)">
                      <path
                        d="M0 0L24 0 24 24 0 24z"
                        transform="translate(1058 366)"
                      />
                      <path
                        fill="#000"
                        fill-rule="nonzero"
                        d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"
                        transform="translate(1058 366)"
                      />
                    </g>
                  </g>
                </svg>
              </li>
              <li class="ml-4">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" fill-rule="evenodd">
                    <g transform="translate(-1096 -366)">
                      <path
                        fill="#000"
                        d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"
                        transform="translate(1096 366)"
                      />
                    </g>
                  </g>
                </svg>
              </li>
              <li>
                <nuxt-link to="#" class="cta">Ask anything</nuxt-link>
              </li>
            </ul>

            <ul class="flex" v-if="!!variations[0].intentTag.intents.teacher">
              <li class="mr-4">
                <span class="font-sans text-lg">80%</span>
                <svg width="24" height="25" viewBox="0 0 24 25" class="inline">
                  <g fill="none" fill-rule="evenodd">
                    <g transform="translate(-498 -3093) translate(498 3092)">
                      <g>
                        <path
                          fill="#282828"
                          d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                          transform="translate(0 1.745)"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                <span class="font-sans">Read article</span>
              </li>
              <li class="mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <g fill="#282828">
                    <path
                      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29-.26 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"
                      transform="translate(-1193 -364) translate(1193 364)"
                    />
                    <path
                      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29-.26 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"
                      transform="translate(-1193 -364) translate(1193 364)"
                    />
                  </g>
                </svg>
              </li>
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <g transform="translate(-1020 -367)">
                    <g>
                      <path
                        fill="#282828"
                        d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7 0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92 0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
                        transform="translate(1020 367)"
                      />
                    </g>
                  </g>
                </svg>
              </li>
            </ul>
          </div>
          <h3 class="font-sans font-bold uppercase mb-2">
            {{ variations[0].fields.subTitle }}
          </h3>
          <article class="body-content-wrapper">
            {{ variations[0].fields.text }}
          </article>
          <hr class="mt-8 border-grey" />
          <ul class="flex mt-4">
            <li class="flex font-sans font-bold mr-6">
              <svg width="18" height="19" viewBox="0 0 18 19" class="mr-3">
                <g fill="#415AC2" fill-rule="nonzero">
                  <path
                    d="M9 0C4.03 0 0 4.03 0 9v7c0 1.66 1.34 3 3 3h3v-8H2V9c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3V9c0-4.97-4.03-9-9-9z"
                    transform="translate(-257 -864) translate(257 864)"
                  />
                </g>
              </svg>
              <a
                :href="variations[0].fields.audio.fields.file.url"
                target="_blank"
                >Listen to article</a
              >
            </li>
            <li class="flex font-sans font-bold">
              <svg width="24" height="24" viewBox="0 0 24 24" class="mr-2">
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(-415 -865) translate(415 863)">
                    <path
                      d="M0 0L24 0 24 24 0 24z"
                      transform="translate(0 2)"
                    />
                    <path
                      fill="#000"
                      fill-rule="nonzero"
                      d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                      transform="translate(0 2)"
                    />
                    <path
                      fill="#000"
                      fill-rule="nonzero"
                      d="M12.5 7L11 7 11 13 16.25 16.15 17 14.92 12.5 12.25z"
                      transform="translate(0 2)"
                    />
                  </g>
                </g>
              </svg>

              5 minutes
            </li>
          </ul>
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
.richtext-wrapper {
  grid-template-columns: 1fr 9fr;
}

.content-wrapper h2 {
  font-size: 2.5rem;
  line-height: 1;
}

.body-content-wrapper {
  column-count: 2;
  column-gap: 5em;
  line-height: 27px;
}
</style>
