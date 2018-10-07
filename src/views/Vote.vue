<template>
  <div class="vote">
    <Header/>
    <div class="content">
      <RequestVoterId v-model="voterId"/>
      <button class="button button-primary" type="button">Continuar</button>
      <p>Voter ID: {{ voterId }}</p>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import RequestVoterId from '@/components/RequestVoterId.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'vote',
  components: {
    Header,
    RequestVoterId,
    Footer,
  },
  data() {
    return { voterId: '' };
  },
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
