import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const labels = ["1", "2", "3", "4", "5"];

const LineChartMultiBackground = () => {
  return (
    <Line
      // plugins={[
      //   {
      //     id: 'xScalePadding',
      //     beforeDatasetDraw: (chart, args, pluginOptions) => {
      //       const { ctx, data, scales: { x, y } } = chart
      //       console.log("🚀 ~ scales:", y)
      //       // x._labelItems.forEach((label, index) => {
      //       //   label.textBaseline = 'top'
      //       //   label.textOffset = 5 + 25;
      //       // })
      //     }
      //   }
      // ]}
      options={{
        layout: {
          autoPadding: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            position: "top",
          },
          title: {
            display: false,
            text: "Chart.js Line Chart",
          },
        },
        scales: {
          x: {
            display: false,
            title: {
              display: false,
            },
          },
          y: {
            display: false,
            title: {
              display: false,
              text: "Value",
            },
            // suggestedMin: -10,
            // suggestedMax: 200
          },
        },
      }}
      data={{
        labels,
        datasets: [
          {
            tension: 0.4,
            label: "Test 1",
            // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            data: [3500, 6500, 3000, 4000, 0],
            // borderColor: labels.map(() => 'rgb(255, 99, 132)'),
            // backgroundColor: labels.map(() => '#000'),
            // pointBackgroundColor: labels.map(() => '#000'),
            borderColor: "rgba(50, 71, 242, 1)",
            borderWidth: 2,
            pointBorderColor: "transparent",
            pointBackgroundColor: "transparent",
            backgroundColor: "",
            // fill: true,
          },
          {
            label: "",
            data: [
              { x: "1", y: 0 },
              { x: "2", y: 0 },
            ],
            backgroundColor: "rgba(50, 71, 242, 0.25)",
            borderWidth: 0,
            fill: 0,
            pointRadius: 0,
          },
          {
            label: "",
            data: [
              { x: "2", y: 0 },
              { x: "3", y: 0 },
            ],
            backgroundColor: "rgba(50, 71, 242, 0.2)",
            borderWidth: 0,
            fill: 0,
            pointRadius: 0,
          },
          {
            label: "",
            data: [
              { x: "3", y: 0 },
              { x: "4", y: 0 },
            ],
            backgroundColor: "rgba(50, 71, 242, 0.15)",
            borderWidth: 0,
            fill: 0,
            pointRadius: 0,
          },
          {
            label: "",
            data: [
              { x: "4", y: 0 },
              { x: "5", y: 0 },
            ],
            backgroundColor: "rgba(50, 71, 242, 0.1)",
            borderWidth: 0,
            fill: 0,
            pointRadius: 0,
          },
        ],
      }}
    />
  );
};

export default LineChartMultiBackground;
