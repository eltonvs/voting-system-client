<template>
    <div class="voting-machine">
      <div class="voting-machine-container">
        <div class="candidate-info">
          <template v-if="!submitted">
            <h2>Presidente</h2>
            <div class="candidate-photo">
              <img v-if="candidatePhoto !== ''" :src="candidatePhoto" alt="Foto Candidato">
              <img v-if="candidatePhoto === ''" src="@/assets/ghost.jpg" alt="Foto Candidato">
            </div>
            <div class="data">
              <div class="data-item">
                <h3 class="data-item-title">Número</h3>
                <p class="data-item-info">
                  <span class="candidate-number">{{ candidateNumber }}</span>
                </p>
              </div>
              <div class="data-item">
                <h3 class="data-item-title">Nome</h3>
                <p class="data-item-info candidate-name">{{ candidateName }}</p>
              </div>
              <div class="data-item">
                <h3 class="data-item-title">Partido</h3>
                <p class="data-item-info candidate-party">{{ candidateParty }}</p>
              </div>
            </div>
          </template>
          <template v-if="submitted">
            <div class="centered">
              <h2 class="end">FIM</h2>
            </div>
          </template>
        </div>
        <div class="right-area">
          <div class="header">
            <img src="@/assets/logo.png" alt="">
          </div>
          <div class="buttons">
            <div class="numbers">
              <button @click="numberClick(1)">1</button>
              <button @click="numberClick(2)">2</button>
              <button @click="numberClick(3)">3</button>
              <button @click="numberClick(4)">4</button>
              <button @click="numberClick(5)">5</button>
              <button @click="numberClick(6)">6</button>
              <button @click="numberClick(7)">7</button>
              <button @click="numberClick(8)">8</button>
              <button @click="numberClick(9)">9</button>
              <button @click="numberClick(0)">0</button>
            </div>
            <div class="actions">
              <button class="action-button action-blank" @click="blankAction()">Branco</button>
              <button class="action-button action-fix" @click="clearAll()">Corrige</button>
              <button class="action-button action-confirm" @click="submit()">Confirma</button>
            </div>
          </div>
        </div>
      </div>
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
import Modal from '@/components/Modal.vue';

export default {
  name: 'RequestVoterId',
  components: { Modal },
  props: {
    value: String,
    voterId: String,
  },
  data() {
    return {
      isModalVisible: false,
      modalTitle: 'Um erro aconteceu!',
      modalBody: 'Tente novamente mais tarde',
      candidateNumber: this.value,
      candidateName: '-',
      candidateParty: '-',
      candidatePhoto: '',
      isBlank: false,
      submitted: false,
      baseUrl: 'http://localhost:8080/voting-system',
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
    numberClick(number) {
      if (!this.submitted && !this.isValid()) {
        this.candidateNumber += `${number}`;
        if (this.isValid()) {
          this.loadCandidate();
        }
      }
    },
    clearAll() {
      this.clearNumber();
      this.setDefaults();
    },
    clearNumber() {
      if (!this.submitted) {
        this.candidateNumber = '';
      }
    },
    blankAction() {
      if (!this.submitted) {
        this.isBlank = true;
        this.clearAll();
        this.submit();
      }
    },
    submit() {
      if (!this.submitted && this.isValid()) {
        const data = JSON.stringify({
          voterId: this.voterId,
          candidateNumber: this.isBlank ? '-1' : this.candidateNumber,
        });

        this.$http
          .post(`${this.baseUrl}/votes`, data, {
            headers: { 'Content-Type': 'application/json' },
          })
          .then(
            () => {
              this.isBlank = false;
              this.submitted = true;
            },
            (response) => {
              if (response.status === 401) {
                this.clearAll();
                this.$emit('reset');
              } else {
                this.showModal(
                  'Erro ao se conectar com o servidor',
                  'Não foi possível concluir a requisição, tente novamente mais tarde.',
                );
                this.isBlank = false;
                this.submitted = false;
              }
            },
          );
      }
    },
    setDefaults() {
      this.candidateName = '-';
      this.candidateParty = '-';
      this.candidatePhoto = '';
    },
    setNullCandidate() {
      this.candidateName = 'NULO';
      this.candidateParty = 'NULO';
      this.candidatePhoto = '';
    },
    isValid() {
      return this.isBlank || this.candidateNumber.length === 2;
    },
    loadCandidate() {
      this.setDefaults();
      this.$http.get(`${this.baseUrl}/candidates/${this.candidateNumber}`).then(
        (response) => {
          if (response.status === 200) {
            this.candidateName = response.body.name;
            this.candidateParty = response.body.politicalParty;
            this.candidatePhoto = response.body.urlImg;
          } else {
            this.setNullCandidate();
          }
        },
        () => {
          this.showModal(
            'Erro ao se conectar com o servidor',
            'Não foi possível recuperar os dados do candidato, tente novamente mais tarde.',
          );
        },
      );
    },
  },
  watch: {
    candidateNumber(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style lang="sass" scoped>
.voting-machine-container
  :display flex
  :width 800px
  :background-color #ddd
  :border 2px solid #000

.candidate-info
  :display flex
  :flex-direction column
  :flex 1
  :background-color #fff
  :margin 15px
  :text-align left
  :padding 20px

  h2
    :margin 0
    :text-align center
    :font-size 30px

  .end
    :font-size 60px

.candidate-photo
  :margin-top 30px
  :text-align center

  img
    :height 160px
    :width auto
    :outline 2px solid
    :outline-offset 5px

.data
  :margin-top 30px
  :font-size 18px

  .candidate-number
    :display block
    :font-family 'Roboto Mono', monospace
    :margin 0
    :font-size 32px
    :padding 5px
    :width 60px
    :height 60px
    :text-align center
    :border 1px solid #000

.data-item
  :display flex
  :align-items center
  :margin-bottom 20px

.data-item-title
  :flex 1
  :margin 0

.data-item-info
  :flex 1
  :margin 0

.centered
  :display flex
  :align-items center
  :justify-content center
  :flex 1

.right-area
  :display flex
  :flex-direction column
  :flex .8
  :margin 15px

.header
  :background-color #ccc
  :padding 10px 50px
  :margin-bottom 5px

.buttons
  :display flex
  :flex-direction column
  :justify-content space-evenly
  :flex 1
  :background-color #000

.numbers
  :padding 10px
  :display flex
  :flex-flow row wrap
  :justify-content center

  button
    :flex 0 1 calc(30% - 25px)
    :font-size 18px
    :margin 10px 12px
    :border none
    :background-color #333
    :color #fff
    :padding 10px
    :cursor pointer
    :border-radius 2px

.actions
  :padding 20px 10px
  :display flex
  :justify-content center

.action-button
  :flex 1 auto
  :margin 0 10px
  :border none
  :text-transform uppercase
  :cursor pointer
  :padding 10px 5px

.action-blank
  :background-color #fff

.action-fix
  :background-color #fe5404

.action-confirm
  :background-color #61c29b
</style>
