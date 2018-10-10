<template>
    <div class="voting-machine">
      <div class="voting-machine-container">
        <div class="candidate-info">
          <h2>Presidente</h2>
          <div class="candidate-photo">
            <img src="@/assets/ghost.jpg" alt="Foto Candidato">
          </div>
          <div class="data">
            <div class="data-item">
              <h3 class="data-item-title">Número</h3>
              <p class="data-item-info"><span class="candidate-number"></span></p>
            </div>
            <div class="data-item">
              <h3 class="data-item-title">Nome</h3>
              <p class="data-item-info candidate-name">-</p>
            </div>
            <div class="data-item">
              <h3 class="data-item-title">Partido</h3>
              <p class="data-item-info candidate-party">-</p>
            </div>
          </div>
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
    :font-size 30px

.candidate-photo
  :margin-top 30px
  :text-align center

  img
    :height 160px
    :width auto
    :outline 2px solid
    :outline-offset 5px

.data
  :margin-top 30px
  :font-size 18px

  .candidate-number
    :display block
    :font-family 'Roboto Mono', monospace
    :margin 0
    :font-size 32px
    :padding 5px
    :width 60px
    :height 60px
    :text-align center
    :border 1px solid #000

.data-item
  :display flex
  :align-items center
  :margin-bottom 20px

.data-item-title
  :flex 1
  :margin 0

.data-item-info
  :flex 1
  :margin 0

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
