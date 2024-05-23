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
} from 'chart.js';
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };
const labels = ['1', '2', '3', '4', '5', '6', '7'];
// const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

const LineChart = () => {
  return (
    <Line
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value'
            },
            // suggestedMin: -10,
            // suggestedMax: 200
          }
        }
      }}
      data={{
        labels,
        datasets: [
          {
            tension: 0.4,
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            // borderColor: labels.map(() => 'rgb(255, 99, 132)'),
            // backgroundColor: labels.map(() => '#000'),
            // pointBackgroundColor: labels.map(() => '#000'),
            borderColor: '#3CD598',
            borderWidth: 2,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
            backgroundColor: (context) => {
              console.log("context", context.chart.chartArea);
              if(!context.chart.chartArea){
                return
              }
              const { ctx, data, chartArea: {top, bottom} } = context.chart
              const gradienBg = ctx.createLinearGradient(0, top, 0, bottom)
              gradienBg.addColorStop(0, 'rgba(60, 213, 152, 0.5)')
              gradienBg.addColorStop(1, 'rgba(60, 213, 152, 0)')
              return gradienBg
            },
            fill: true,
          },
        ],
      }}
    />
  )
}

export default LineChart