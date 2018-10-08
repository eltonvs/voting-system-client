<template>
    <div class="voting-machine">
      <div class="voting-machine-container">
        <div class="candidate-info">
          <h2>Presidente</h2>
          <ul class="data unstyled">
            <li>
              <strong>Número</strong>
              <span class="candidate-number">30</span>
            </li>
            <li>
              <strong>Nome</strong>
              <span class="candidate-name">Fulano de Tal</span>
            </li>
            <li>
              <strong>Partido</strong>
              <span class="candidate-party">PPPP</span>
            </li>
          </ul>
        </div>
        <div class="right-area">
          <div class="header">
            <img src="@/assets/logo.png" alt="">
          </div>
          <div class="buttons">
            <div class="numbers">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>0</button>
            </div>
            <div class="actions">
              <button class="action-button action-blank">Branco</button>
              <button class="action-button action-fix">Corrige</button>
              <button class="action-button action-confirm">Confirma</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="sass" scoped>
.voting-machine-container
  :display flex
  :width 800px
  :background-color #ddd
  :border 2px solid #000

.candidate-info
  :flex 1
  :background-color #fff
  :margin 15px
  :text-align left
  :padding 20px

  h2
    :margin 0
    :text-align center

.unstyled
  :padding 0
  :margin 0

  li
    :list-style none

.data
  :margin-top 40px
  :font-size 18px

  .candidate-number
    :font-family 'Roboto Mono', monospace
    :margin 0
    :font-size 32px
    :padding 5px
    :width 60px
    :text-align center
    :border 1px solid #000

.right-area
  :flex .8
  :margin 15px

.header
  :background-color #ccc
  :padding 10px 50px
  :margin-bottom 5px

.buttons
  :background-color #000

.numbers
  :padding 10px
  :display flex
  :flex-flow row wrap
  :justify-content center

  button
    :flex 0 1 calc(30% - 25px)
    :font-size 18px
    :margin 10px 12px
    :border none
    :background-color #333
    :color #fff
    :padding 10px
    :cursor pointer
    :border-radius 2px

.actions
  :padding 20px 10px
  :display flex
  :justify-content center

.action-button
  :flex 1 auto
  :margin 0 10px
  :border none
  :text-transform uppercase
  :cursor pointer
  :padding 10px 5px

.action-blank
  :background-color #fff

.action-fix
  :background-color #fe5404

.action-confirm
  :background-color #61c29b
</style>
