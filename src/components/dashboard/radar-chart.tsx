import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  RadialLinearScale,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  RadialLinearScale
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    r: {
      angleLines: {
        display: false,
      },
      suggestedMin: 0,
      suggestedMax: 100,
    },
  },
};

const data = {
  labels: [
    "Nilai Materi",
    "Penyampaian Materi",
    "Artikulasi",
    "Tingkat Percaya Diri",
    "Laju Bicara",
  ],
  datasets: [
    {
      label: "Nilai Kamu",
      data: [100, 90, 70, 91, 66],
      //   fill: true,
      backgroundColor: "rgba(255, 157, 66, 0.2)",
      borderColor: "rgba(255, 157, 66, 1)",
      pointBackgroundColor: "rgba(255, 157, 66, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255, 157, 66, 1)",
    },
  ],
};

export default function RadarChart() {
  return (
    <div className='w-2/5'>
      <Radar data={data} options={options} />
    </div>
  );
}
