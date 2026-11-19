import Vue from 'vue';
import { Line as LineChartGenerator } from 'vue-chartjs/legacy';
import {
  Chart as ChartJS, Title, Tooltip, LineElement, LinearScale, CategoryScale, PointElement,
} from 'chart.js';

ChartJS.register(Title, Tooltip, LineElement, LinearScale, CategoryScale, PointElement);

Vue.component('LineChartGenerator', LineChartGenerator);
