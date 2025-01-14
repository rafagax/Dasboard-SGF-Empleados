import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import "./ChartComponent.css";

function ChartComponent({ urbanismos }) {
  useEffect(() => {
    const generateChart = (urbanismos) => {
      const labels = urbanismos.map((urbanismo, index) => `${urbanismo.urbanismo} -  Top ${index + 1} = ${urbanismo.cantidadClientes} - Clientes`);
      const data = urbanismos.map((urbanismo) => Math.round(urbanismo.ingresosTotales));

      const existingChart = Chart.getChart('myChart');
      if (existingChart) {
        existingChart.destroy();
      }

      const ctx = document.getElementById('myChart');
      new Chart(ctx, {
       
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Ingreso total por urbanismo',
            data: data,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 10
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                
                color: '#FFFFFF', // Cambia esto al color que prefieras
                font: {
                  size: 14 // Cambia el tamaño de la fuente como desees
                  
                }
              }
            },
            x: {
              ticks: {
                display: false,
                color: 'blue', // Cambia esto al color que prefieras
                font: {
                  size: 20 // Cambia el tamaño de la fuente como desees
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
             
              font: {
                size: 20,
                color: "#FF0000" // Color del título
              }
            },
            legend: {
              labels: {
                display: false,
                color: '#FFFFFF', // Color de texto de la leyenda
                font: {
                  size: 16 // Tamaño del texto de la leyenda
                }
              }
            }
          }
        }
      });
    };

    generateChart(urbanismos);
  }, [urbanismos]);

  return (
    <canvas id="myChart" ></canvas>


  );
}

export default ChartComponent;
