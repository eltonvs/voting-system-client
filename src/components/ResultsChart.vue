<script>
import { Bar } from 'vue-chartjs';
/* eslint-disable comma-dangle */
export default {
  extends: Bar,
  props: {
    chartData: { type: Array, required: true },
    chartLabels: { type: Array, required: true },
  },
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{ gridLines: { display: false } }],
          yAxes: [{ display: false, ticks: { beginAtZero: true } }],
        },
        legend: { display: false },
      },
    };
  },
  mounted() {
    this.plot();
  },
  methods: {
    plot() {
      this.renderChart(
        {
          labels: this.chartLabels,
          datasets: [
            {
              backgroundColor: '#596f99',
              data: this.chartData,
            },
          ],
        },
        this.options
      );
    },
  },
  watch: {
    chartLabels() {
      this.plot();
    },
    chartData() {
      this.plot();
    },
  },
};
</script>
