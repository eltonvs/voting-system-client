<template>
  <div>
    <Separator class="separator"/>
    <LinkButton url="/" icon="angle-left" text="Voltar"/>
  </div>
</template>

<script>
import Separator from './Separator.vue';
import LinkButton from './LinkButton.vue';

export default {
  name: 'Footer',
  components: {
    Separator,
    LinkButton,
  },
};
</script>

<style lang="sass" scoped>
.separator
  :margin-bottom 30px
</style>
