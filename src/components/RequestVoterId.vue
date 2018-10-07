<template>
  <div class="request-voter-id">
    <input class="input" v-model="voterId" placeholder="Título de Eleitor">
  </div>
</template>

<script>
export default {
  name: 'RequestVoterId',
  props: {
    value: String,
  },
  data() {
    return { voterId: this.value };
  },
  watch: {
    voterId(val) {
      this.$emit('input', val);
    },
  },
};
</script>
