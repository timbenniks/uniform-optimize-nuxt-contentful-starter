<template>  
  <personalize :variations="variations">
    <template>
      <section class="carousel-wrapper w-full grid gap-4 grid-cols-2 mb-24">
        <div class="flex justify-end">
          <svg width="38" height="38" viewBox="0 0 38 38" class="mt-16">
            <g transform="translate(-202 -1085) translate(202 1085)">
              <circle cx="19" cy="19" r="19" fill="#000" />
              <g>
                <path d="M0 0L18 0 18 18 0 18z" transform="translate(11 10)" />
                <path
                  fill="#fff"
                  fill-rule="nonzero"
                  d="M1.5 4.5H0v3.75h.007L0 15c0 .825.675 1.5 1.5 1.5H15V15H1.5V4.5zm15-1.5h-6L9 1.5H4.5c-.825 0-1.493.675-1.493 1.5L3 12c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5V4.5c0-.825-.675-1.5-1.5-1.5zM5.25 11.25l3.375-4.5 2.625 3.383 1.875-2.258 2.625 3.375H5.25z"
                  transform="translate(11 10)"
                />
              </g>
            </g>
          </svg>
        </div>


        <div class="carousel-wrapper">
          <div class="tiles mt-16 w-full grid gap-2 grid-cols-2">
            <template v-for="(image) in images">
              <div class="tile mb-4" v-bind:key="image">
                
                <img v-if="image.image !== undefined" :src='image.image' width="560" />
                <span v-else class="grid-video">
                  <iframe :src='image.video' width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </span>
                
              </div>
            </template>
          </div>

          <hr class="mt-12 border-grey" />
          <ul class="flex mt-4">
            <li class="flex font-sans font-bold mr-6">
              <svg width="18" height="18" viewBox="0 0 18 18" class="mr-2 mt-1">
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(-436 -1490) translate(437 1491)">
                    <path
                      fill-rule="nonzero"
                      stroke="#282828"
                      stroke-width="2"
                      d="M0 16L6 16 6 10 0 10zM10 16L16 16 16 10 10 10zM0 6L6 6 6 0 0 0zM10 0L10 6 16 6 16 0z"
                    />
                  </g>
                </g>
              </svg>

              Tile View
            </li>
            <li class="flex font-sans font-bold">
              <svg width="18" height="18" viewBox="0 0 18 18" class="mt-1 mr-2">
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(-545 -1490) translate(546 1491)">
                    <path
                      fill-rule="nonzero"
                      stroke="#282828"
                      stroke-width="2"
                      d="M12 13L16 13 16 3 12 3zM0 13L4 13 4 3 0 3zM4 16L12 16 12 0 4 0z"
                    />
                  </g>
                </g>
              </svg>

              Slide View
            </li>
          </ul>
        </div>
      </section>
    </template>
  </personalize>
</template>

<style lang="postcss">
.carousel-wrapper {
  grid-template-columns: 1fr 9fr;
}
</style>

<script>
import { Personalize } from "@uniformdev/optimize-tracker-vue";
import { contentfulOptimizeListReader } from "@uniformdev/optimize-tracker-contentful";

export default {
  name: "ImageGrid",
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
    mounted() {
      this.$uniformOptimize.trackBehavior(this.fields.unfrmOptIntentTag);
    },
    images() {
      let imageArray = [];
      for (let schoolImageType of this.variations[0]?.fields?.items) {
        if (schoolImageType.fields?.image?.fields?.file?.url !== undefined) {
          imageArray.push( {"image": schoolImageType.fields?.image?.fields?.file?.url} );
        } else {
          imageArray.push( {"video": schoolImageType.fields?.videoLink} );
        }
      }
      return imageArray;
    },
  },
};
</script>

