import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar as LibBar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export function Bar() {
  return (
    <LibBar
      plugins={[
        {
          id: 'xScalePadding',
          beforeDatasetDraw: (chart, args, pluginOptions) => {
            const { ctx, data, scales: {x, y}} = chart
            x._labelItems.forEach((label, index) => {
              label.textBaseline = 'top'
              label.textOffset = 5 + 25;
            })
          }
        }
      ]}
      options={{
        responsive: true,
        maintainAspectRatio :false,
        plugins: {
          legend: {
            position: 'top',
            display: false,
          },
        },
        scales: {
          x: {
            afterFit: (context) => {
              context.height += 25
            },
            grid: {
              drawOnChartArea: false,
              drawTicks: false,
            },
            border: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            border: {
              display: false,
              dash: [2,2],
            },
            grid: {
              color: 'rgba(50, 71, 242, 0.2)',
              drawTicks: false,
              // drawOnChartArea: false,
            },
          }
        }
      }}
      data={{
        labels,
        datasets: [
          {
            test: faker,
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(50, 71, 242, 1)',
            borderRadius: 20,
            borderSkipped: false,
            barThickness: 16,
          },
        ],
      }}
    />
  );
}
