<template>
  <div class="vote">
    <Header/>
    <div class="content">
      <RequestVoterId v-model="voterId" v-if="firstStep()" @keyup.native.enter="nextStep()"/>
      <button class="button button-primary" type="button" v-if="firstStep()" @click="nextStep()">
        Continuar
      </button>
      <VotingMachine
        v-model="candidateNumber"
        :voterId="voterId"
        v-if="!firstStep()"
        @reset="reset()" />
    </div>
    <Footer/>
    <Modal
      v-show="isModalVisible"
      @close="closeModal"
      :modalTitle="modalTitle"
      :modalBody="modalBody"
      modalClose="Fechar"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import RequestVoterId from '@/components/RequestVoterId.vue';
import VotingMachine from '@/components/VotingMachine.vue';
import Modal from '@/components/Modal.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'vote',
  components: {
    Header,
    RequestVoterId,
    VotingMachine,
    Modal,
    Footer,
  },
  data() {
    return {
      isModalVisible: false,
      modalTitle: 'Um erro aconteceu!',
      modalBody: 'Tente novamente mais tarde',
      voterId: '',
      candidateNumber: '',
      step: 0,
    };
  },
  methods: {
    showModal(title, message) {
      this.modalTitle = title;
      this.modalBody = message;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    reset() {
      this.step = 0;
      this.showModal(
        'Esse usuário já votou!',
        'Um usuário só pode votar uma única vez!',
      );
    },
    nextStep() {
      if (this.voterId.length > 1) {
        this.step += 1;
      }
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
