<template>
  <section class="carousel-wrapper w-full grid gap-4 grid-cols-2">
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

    <carousel-3d
      :controls-visible="true"
      :controls-prev-html="`<svg viewBox='0 0 57 57'><g transform='translate(-257 -1172) rotate(90 -429 743)'><circle cx='28.5' cy='28.5' r='28.5' fill='#415AC2'/><g fill='#FFF'><path transform='rotate(-90 28.5 11.5) matrix(-1 0 0 1 24 0)' d='m12 4-1.41 1.41 5.58 5.59h-12.17v2h12.17l-5.58 5.59 1.41 1.41 8-8z'/></g></g></svg>`"
      :controls-next-html="`<svg viewBox='0 0 57 57'><g transform='translate(-1241 -1172) rotate(-90 1235 -6)'><circle cx='28.5' cy='28.5' r='28.5' fill='#415AC2'/><g fill='#ffffff'><path d='M12 4L10.59 5.41 16.17 11 4 11 4 13 16.17 13 10.59 18.59 12 20 20 12z' transform='rotate(-90 28.5 11.5) matrix(-1 0 0 1 24 0)'/></g></g></svg>`"
      :controls-width="57"
      :controls-height="57"
      :clickable="false"
      :perspective="0"
      :space="450"
      :display="3"
      :loop="false"
      :width="478"
      :height="359"
      :border="1"
    >
      <slide :index="0"><img src="https://placehold.it/478x359" /></slide>
      <slide :index="1"><img src="https://placehold.it/478x359" /></slide>
      <slide :index="2"><img src="https://placehold.it/478x359" /></slide>
      <slide :index="3"><img src="https://placehold.it/478x359" /></slide>
      <slide :index="4"><img src="https://placehold.it/478x359" /></slide>
    </carousel-3d>
  </section>
</template>

<style lang="postcss">
.carousel-wrapper {
  grid-template-columns: 1fr 9fr;
}
</style>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  name: "Carousel",
  components: {
    Carousel3d,
    Slide,
  },
};
</script>
