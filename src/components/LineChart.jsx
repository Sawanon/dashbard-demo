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
import PropTypes from 'prop-types'

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
const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];


const LineChart = ({
  borderColor,
  fromColor,
  toColor,
}) => {
  return (
    <Line
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
        scales: {
          x: {
            display: false,
            title: {
              display: false
            }
          },
          y: {
            display: false,
            title: {
              display: false,
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
            borderColor: borderColor,
            borderWidth: 2,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
            backgroundColor: (context) => {
              console.log("context", context.chart.chartArea);
              if(!context.chart.chartArea){
                return
              }
              const { ctx, chartArea: {top, bottom} } = context.chart
              const gradienBg = ctx.createLinearGradient(0, top, 0, bottom)
              gradienBg.addColorStop(0, fromColor)
              gradienBg.addColorStop(1, toColor)
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

LineChart.propTypes = {
  borderColor: PropTypes.string.isRequired,
  fromColor: PropTypes.string.isRequired,
  toColor: PropTypes.string.isRequired,
}