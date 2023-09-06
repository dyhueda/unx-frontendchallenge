"use client";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export default function Charts(props) {
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const values = props.values;
  const data = {
    datasets: [
      {
        label: "Quest Chart",
        data: values,
        fill: false,
        showLine: true,
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 3,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        type: "category",
        labels: values,
      },
      y: {
        min: 0,
        max: 120,
        grid: {
          color: "#33303B",
        },
      },
    },
  };
  return (
    <div className="mt-2 ml-[-33px] bg-[#1D1818] px-9 py-5 mr-7 rounded-xl">
      <h1 className=" font-bold text-base">Quest Chart</h1>
      <div className="">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
