import { chartSchema, getDataSchema } from "@/lib/jango";
import { Line } from "react-chartjs-2";
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
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function LineChart() {
  return (
    <div className='w-full'>
      <Line data={getDataSchema()} options={options} />
    </div>
  );
}
