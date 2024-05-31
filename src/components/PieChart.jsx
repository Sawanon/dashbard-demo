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
            
            
            ctx.font = 'bold 50px sans-serif'
            ctx.fillStyle = 'black'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText('5%', xCenter, yCenter)

            ctx.translate(xCenter, yCenter)
            // ctx.rotate()

            ctx.beginPath()
            ctx.fillStyle = 'black'
            ctx.roundRect(0 - 2.5, -outerRadius - 10, 5, doughnutThickness + 20, 5)
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
          }
        }
      }}
      data={{
        labels: ["Red", "Blue"],
        datasets: [
          {
            label: "",
            data: [25, 35, 40],
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
          },
        ],
      }}
    />
  );
}
