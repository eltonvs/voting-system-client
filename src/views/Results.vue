<template>
  <div class="vote">
    <Header/>
    <div class="content">
      <h1 @click="increaseOne()">Resultados da eleição</h1>
      <ResultsChart :chartData="results" :chartLabels="candidates" :width="400" :height="200"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ResultsChart from '@/components/ResultsChart.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'results',
  components: {
    Header,
    ResultsChart,
    Footer,
  },
  data() {
    return {
      chartData: {
        labels: ['Bolsonaro', 'Haddad', 'Ciro', 'Amoedo', 'Boulos'],
        datasets: [
          {
            backgroundColor: '#596f99',
            data: [40, 20, 10, 50, 10],
          },
        ],
      },
      results: [40, 20, 10, 50, 10],
      candidates: ['Bolsonaro', 'Haddad', 'Ciro', 'Amoedo', 'Boulos'],
    };
  },
  methods: {
    increaseOne() {
      this.results = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * 40));
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
  :flex 1

h1
  :margin-bottom 60px
</style>
