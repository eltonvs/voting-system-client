<template>
  <router-link :to="url" class="button">
    <img :src="path(image)" alt="">
    <p>{{ text }}</p>
  </router-link>
</template>

<script>
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
export default {
  name: 'CardButton',
  props: {
    url: String,
    image: String,
    text: String,
  },
  methods: {
    path: img => require(`@/assets/${img}`),
  },
};
</script>

<style lang="sass" scoped>
:$black #000
:$white #fff
:$green #206a2b
:$orange #e7a908

.button
  :display flex
  :flex-direction row
  :align-items center
  :background-color $white
  :margin 0 20px
  :box-shadow 0 2px 4px 0 rgba($black, 0.2), 0 3px 10px 0 rgba($black, 0.19)
  :border 1px solid rgba($black, 0.125)
  :border-radius 0.25rem
  :padding 15px
  :min-width 220px
  :color $green
  :font-size 18px
  :text-decoration none
  :transition all 0.2s ease-in-out

  &:hover
    :color $orange

  p
    :flex 1
    :margin 0
    :margin-left 25px
    :font-weight bold
</style>
