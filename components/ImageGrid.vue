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
        <div class="tile mb-4">
          <img
            src="https://i.twic.pics/v1/cover=1:1/resize=478x359/placeholder:282828"
          />
        </div>
        <div class="tile mb-4">
          <img
            src="https://i.twic.pics/v1/cover=1:1/resize=478x359/placeholder:282828"
          />
        </div>
        <div class="tile mb-4">
          <img
            src="https://i.twic.pics/v1/cover=1:1/resize=478x359/placeholder:282828"
          />
        </div>
        <div class="tile mb-4">
          <img
            src="https://i.twic.pics/v1/cover=1:1/resize=478x359/placeholder:282828"
          />
        </div>
        <div class="tile mb-4">
          <img
            src="https://i.twic.pics/v1/cover=1:1/resize=478x359/placeholder:282828"
          />
        </div>
      </div>

      <hr class="mt-12 border-grey" />
      <ul class="flex mt-4">
        <li class="flex font-sans font-bold mr-6 text-accent">
          <svg width="24" height="24" viewBox="0 0 24 24" class="mr-2">
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(-254 -1487) translate(254 1487)">
                <g fill="#282828" fill-rule="nonzero">
                  <path
                    d="M23.76 4.31s-.234-1.646-.954-2.37C21.894.987 20.871.982 20.401.926 17.043.686 12.005.686 12.005.686h-.01s-5.038 0-8.397.241C3.13.983 2.107.987 1.194 1.94.474 2.664.24 4.31.24 4.31S0 6.243 0 8.176v1.812c0 1.933.24 3.866.24 3.866s.234 1.646.954 2.37c.913.952 2.112.922 2.646 1.022 1.92.183 8.16.24 8.16.24s5.043-.008 8.401-.25c.47-.055 1.493-.06 2.405-1.011.72-.725.954-2.371.954-2.371S24 11.92 24 9.988V8.176c0-1.933-.24-3.866-.24-3.866M9.522 12.184V5.473l6.484 3.367-6.484 3.344z"
                    transform="translate(0 3)"
                  />
                </g>
              </g>
            </g>
          </svg>

          Watch on Youtube
        </li>
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

<style lang="postcss">
.carousel-wrapper {
  grid-template-columns: 1fr 9fr;
}
</style>
