import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart() {
  return (
    <Doughnut
      plugins={[
        {
          id: 'doughnutPointer',
          afterDatasetsDraw(chart, args, options) {
            const { ctx, data } = chart
            ctx.save()
            const xCenter = chart.getDatasetMeta(0).data[0].x
            const yCenter = chart.getDatasetMeta(0).data[0].y
            const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius
            const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius
            const doughnutThickness = outerRadius - innerRadius
            
            const pointerColor = options.pointerColor || 'black'
            const pointerValue = options.pointerValue || 1
            const pointerRadius = options.pointerRadius | 5
            const angle = Math.PI / 180

            const sumArray = (arr) => {
              return arr.reduce((acc, current) => acc + current, 0)
            }

            const dataPointArray = data.datasets[0].data.map((datapoint) => {
              return datapoint
            })
            
            const totalSum = sumArray(dataPointArray)
            const targetPointerRotation = pointerValue / totalSum * 360
            console.log("🚀 ~ afterDatasetsDraw ~ targetPointerRotation:", targetPointerRotation)
            
            ctx.font = '600 32px sans-serif'
            ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText(`$6.8k`, xCenter, yCenter)

            ctx.translate(xCenter, yCenter)
            ctx.rotate(angle * targetPointerRotation)

            ctx.beginPath()
            ctx.fillStyle = pointerColor
            ctx.roundRect(0 - 2.5, -outerRadius - 10, 2, doughnutThickness + 20, pointerRadius)
            ctx.fill()

            ctx.restore()
          }
        }
      ]}
      options={{
        layout :{
          padding: 20,
        },
        responsive: true,
        aspectRatio: false,
        rotation: 180,
        plugins: {
          legend: {
            display: false,
          },
          doughnutPointer :{
            pointerValue: 85,
            pointerColor: '#3247F2',
            pointerRadius: 5,
          }
        }
      }}
      data={{
        labels: ["Red", "Blue"],
        datasets: [
          {
            label: "",
            data: [35, 25, 40],
            backgroundColor: [
              "rgba(50, 71, 242, 1)",
              "rgba(50, 71, 242, 0.1)",
              "rgba(50, 71, 242, 0.1)",
            ],
            // borderColor: [
            //   "rgba(255, 99, 132, 1)",
            //   "rgba(54, 162, 235, 1)",
            // ],
            borderWidth: 0,
            cutout: '70%',
          },
        ],
      }}
    />
  );
}
