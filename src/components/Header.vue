<template>
  <div class="header">
    <router-link to="/" title="Voltar para a Página Inicial">
      <img class="logo" alt="Logo - Tribunal Superior Eleitoral" src="@/assets/logo.png">
    </router-link>
    <Separator/>
  </div>
</template>

<script>
import Separator from '@/components/Separator.vue';

export default {
  name: 'Header',
  components: {
    Separator,
  },
};
</script>


<style lang="sass" scoped>
.logo
  :width 250px
</style>
