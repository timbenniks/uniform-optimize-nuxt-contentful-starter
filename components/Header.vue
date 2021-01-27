<template>
  <nav id="header" class="sticky w-full z-30 top-0 max-w-6xl bg-bg">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-8"
    >
      <div class="flex flex-col">
        <div class="hi flex">
          <span class="font-sans font-bold hi-word">Hi</span>
          <span class="hi-sep"></span>
          <span class="hi-copy font-sans font-bold"
            >BOOK SECTION<br />NO. 14</span
          >
        </div>
        <div class="font-sans text-accent font-bold tracking-wider">
          <span class="arrow">&crarr;</span> Section Overview
        </div>
      </div>
      <div class="text-center font-bold text-lg">
        The<br />German<br />Unity
      </div>
      <div class="">
        <nuxt-link to="?utm_type=student" class="cta">Student</nuxt-link>
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

.hi {
  position: relative;
  left: -1px;
}

.hi .hi-word {
  font-size: 2.5rem;
  line-height: 1;
}

.hi .hi-sep {
  width: 1.6rem;
  height: 1.6rem;
  border-left: 1px solid #282828;
  transform: skew(-34deg);
  position: relative;
  top: 8px;
  left: 11px;
  margin: 0 10px 0 5px;
}

.hi .hi-copy {
  line-height: 1;
  font-size: 14px;
  margin: 5px 0 0 0;
}
</style>
