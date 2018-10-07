<template>
  <div class="vote">
    <Header/>
    <div class="content">
      <div>
        <input class="input" v-model="voterId" placeholder="Título de Eleitor">
        <button class="button button-primary" type="button">Continuar</button>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'vote',
  components: {
    Header,
    Footer,
  },
  data: () => ({
    voterId: '',
  }),
};
</script>

<style lang="sass" scoped>
.vote
  :flex 1
  :display flex
  :flex-direction column

.content
  :display flex
  :flex 1
  :flex-direction column
  :justify-content center
  :align-items center
</style>
