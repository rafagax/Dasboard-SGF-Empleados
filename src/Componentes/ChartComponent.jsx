import React/*, { useEffect }*/ from 'react';
// import Chart from 'chart.js/auto';
import "./ChartComponent.css";

function ChartComponent({ urbanismos }) {
  /*
  useEffect(() => {
    const generateChart = (urbanismos) => {
      const labels = urbanismos.map(
        (urbanismo, index) =>
          `${urbanismo.urbanismo} - Top ${index + 1} = ${urbanismo.cantidadClientes} - Clientes`
      );
      const data = urbanismos.map((urbanismo) =>
        Math.round(urbanismo.ingresosTotales)
      );

      const existingChart = Chart.getChart('myChart');
      if (existingChart) {
        existingChart.destroy();
      }

      const ctx = document.getElementById('myChart');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Ingreso total por urbanismo',
              data: data,
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 2
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: '#FFFFFF',
                font: {
                  size: 14
                }
              }
            },
            x: {
              ticks: {
                display: false,
                color: 'blue',
                font: {
                  size: 20
                }
              }
            }
          },
          plugins: {
            tooltip: {
              mode: 'index',
              intersect: false,
              bodyFont: {
                size: 14,
                color: 'blue'
              }
            },
            title: {
              display: true,
              text: 'Ranking de Urbanismos',
              font: {
                size: 20
              },
              color: '#FF0000'
            },
            legend: {
              labels: {
                display: false,
                color: '#FFFFFF',
                font: {
                  size: 16
                }
              }
            }
          }
        }
      });
    };

    generateChart(urbanismos);
  }, [urbanismos]);
  */

  return (
    <div>
      {/* Contenedor para el informe de Power BI */}
      <div className="report-container" style={{ marginBottom: '30px' }}>
        <iframe
          title="indicadores con api"
          width="100%"
          height="600"
          src="https://app.powerbi.com/reportEmbed?reportId=78f2bab4-9a26-4984-ba96-87a16624d95a&autoAuth=true&ctid=f4c24cea-686c-4674-8805-f12b558b2133"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>

      {/* 
      <div className="chart-container">
        <canvas id="myChart"></canvas>
      </div> 
      */}
    </div>
  );
}

export default ChartComponent;
