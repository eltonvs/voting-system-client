<template>
  <div class="vote">
    <Header/>
    <div class="content">
      <h1>This is a results page</h1>
      <router-link to="/">Voltar</router-link>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'results',
  components: {
    Header,
  },
};
</script>

<style lang="sass" scoped>
.vote
  :flex 1
  :display flex
  :flex-direction column

.content
  :flex 1
</style>
