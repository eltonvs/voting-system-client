<template>
  <router-link :to="url" class="button"><i :class="'fas fa-' + icon"></i> {{ text }}</router-link>
</template>

<script>
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
export default {
  name: 'LinkButton',
  props: {
    url: String,
    icon: String,
    text: String,
  },
};
</script>

<style lang="sass" scoped>
:$black #000
:$white #fff
:$green #206a2b
:$orange #e7a908

.button
  :display inline-block
  :background-color $white
  :border 1px solid rgba($black, 0.125)
  :border-radius 0.25rem
  :padding 10px 15px
  :color $green
  :font-size 16px
  :text-decoration none
  :transition all 0.2s ease-in-out

  &:hover
    :color $orange
</style>
