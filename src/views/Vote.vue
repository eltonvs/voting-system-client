<template>
  <div class="vote">
    <Header/>
    <div class="content">
      <h1>This is a vote page</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';

export default {
  name: 'vote',
  components: {
    Header,
  },
};
</script>

<style>
.vote {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>
