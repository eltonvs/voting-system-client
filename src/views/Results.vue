<template>
  <div class="vote">
    <Header/>
    <div class="content">
      <h1>Resultados da eleição</h1>
      <button class="button" @click="refreshData()"><i class="fas fa-sync"></i> Atualizar</button>
      <ResultsChart :chartData="results" :chartLabels="candidates" :width="400" :height="200"/>
    </div>
    <Footer/>

    <modal
      v-show="isModalVisible"
      @close="closeModal"
      :modalTitle="modalTitle"
      :modalBody="modalBody"
      modalClose="Fechar"
    />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ResultsChart from '@/components/ResultsChart.vue';
import LinkButton from '@/components/LinkButton.vue';
import Modal from '@/components/Modal.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'results',
  components: {
    Header,
    ResultsChart,
    LinkButton,
    Modal,
    Footer,
  },
  created() {
    this.refreshData();
  },
  data() {
    return {
      isModalVisible: false,
      modalTitle: 'Um erro aconteceu!',
      modalBody: 'Tente novamente mais tarde',
      baseUrl: 'http://localhost:8080/voting-system',
      results: [],
      candidates: [],
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
    refreshData() {
      this.$http.get(`${this.baseUrl}/votes`).then(
        (response) => {
          if (response.status === 200) {
            this.candidates = [];
            this.results = [];
            Object.entries(response.body).forEach(([candidate, votes]) => {
              this.candidates.push(candidate);
              this.results.push(votes);
            });
          }
        },
        () => {
          this.showModal(
            'Erro ao se conectar com o servidor',
            'Não foi possível recuperar os resultados da eleição, tente novamente mais tarde.',
          );
        },
      );
    },
  },
};
</script>

<style lang="sass" scoped>
:$black #000
:$white #fff
:$green #206a2b
:$orange #e7a908

.vote
  :flex 1
  :display flex
  :flex-direction column

.content
  :flex 1

h1
  :margin-bottom 60px

.button
  :display inline-block
  :background-color $white
  :border 1px solid rgba($black, 0.125)
  :border-radius 0.25rem
  :padding 10px 15px
  :color $green
  :font-size 16px
  :text-decoration none
  :transition all 0.2s ease-in-out

  &:hover
    :color $orange
</style>
