<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="sass">
// Variables
:$black #000
:$white #fff
:$bg-color #eee
:$input-bg-color #ddd

*
  :box-sizing border-box

body
  :margin 0
  :display flex
  :flex-direction column
  :min-height 100vh

#app
  :font-family Roboto, Helvetica, Arial, sans-serif
  :-webkit-font-smoothing antialiased
  :-moz-osx-font-smoothing grayscale
  :text-align center
  :color $black
  :background $bg-color
  :display flex
  :flex 1
  :justify-content center
  :flex-direction column
  :padding 30px

img
  :max-width 100%


.input
  :display block
  :border 1px solid $input-bg-color
  :border-radius 0.25rem
  :background-color $input-bg-color
  :padding 15px 20px
  :margin 15px
  :color $black
  :max-width 100%
  :width 300px
  :font-size 16px
  :text-align center
  :transition all 0.2s ease-in-out

  &:focus
    :border-color darken($input-bg-color, 20%)
    :background-color darken($input-bg-color, 5%)
    :outline none

.button
  :display block
  :border none
  :border-radius 0.25rem
  :padding 15px 20px
  :margin 15px
  :max-width 100%
  :width 300px
  :font-size 16px
  :text-align center
  :transition all 0.2s ease-in-out

  &:hover
    :cursor pointer

.button-primary
  :$bg-color #206a2b
  :background-color $bg-color
  :color #fff

  &:hover
    :background-color darken($bg-color, 10%)

::placeholder
  :color rgba($black, 0.5)
</style>
