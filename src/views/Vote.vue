<template>
  <div class="vote">
    <Header/>
    <div class="content">
      <RequestVoterId v-model="voterId" v-if="firstStep()" @keyup.native.enter="nextStep()"/>
      <button class="button button-primary" type="button" v-if="firstStep()" @click="nextStep()">
        Continuar
      </button>
      <VotingMachine v-model="candidateNumber" v-if="!firstStep()"/>
      <p>Voter ID: {{ voterId }}</p>
      <p>Candidate Number: {{ candidateNumber }}</p>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import RequestVoterId from '@/components/RequestVoterId.vue';
import VotingMachine from '@/components/VotingMachine.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'vote',
  components: {
    Header,
    RequestVoterId,
    VotingMachine,
    Footer,
  },
  data() {
    return { voterId: '', candidateNumber: '', step: 0 };
  },
  methods: {
    nextStep() {
      this.step += 1;
    },
    firstStep() {
      return this.step === 0;
    },
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
