<template>
  <div class="home">
    <Header/>

    <div class="content">
      <CardButton url="/vote" image="vote.png" text="Votar"/>
      <CardButton url="/results" image="info.png" text="Resultados"/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import CardButton from '@/components/CardButton.vue';

export default {
  name: 'index',
  components: {
    Header,
    CardButton,
  },
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
}
</style>
