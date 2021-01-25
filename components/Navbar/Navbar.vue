<template>
  <nav id="header" class="sticky w-full z-30 top-0 max-w-6xl bg-bg">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-8"
    >
      <div class="flex flex-col">
        <img
          src="/images/header-left.png"
          width="182px"
          class="relative"
          style="left: -8px"
        />
        <div class="font-sans text-accent font-bold tracking-wider mt-1">
          <span class="arrow">&crarr;</span> Section Overview
        </div>
      </div>
      <div class="text-center font-bold text-lg">
        The<br />German<br />Untity
      </div>
      <div class="">
        <nuxt-link to="?utm_type=student" class="cta cta-active"
          >Student</nuxt-link
        >
        <nuxt-link to="?utm_type=teacher" class="cta">Teacher</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style lang="postcss">
.arrow {
  font-size: 2rem;
  line-height: 1;
  position: relative;
  top: 0.25em;
}

.cta {
  @apply bg-bg
    text-dark
    px-4
    py-2
    rounded-3xl
    font-sans
    font-semibold
    tracking-wider
    border-dark
    border-2
    ml-4;
}

.cta-active {
  @apply bg-accent border-accent text-white px-4 py-2 rounded-3xl font-sans font-medium tracking-wider;
}
</style>
