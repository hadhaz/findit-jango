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

interface TicksObject {
  callback: (val: number, index: number) => string;
  getLabelForValue: (val: number) => string;
}

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
      suggestedMin: 20,
      suggestedMax: 100,
      ticks: {
        stepSize: 25,
      },
    },
  },
  aspectRatio: 2,
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
      data: [70, 90, 70, 71, 66],
      //   cubicInterpolationMode: "monotone",
      //   tension: 0.4,
      fill: true,
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
    <div className='w-full'>
      <Radar data={data} options={options} />
    </div>
  );
}
