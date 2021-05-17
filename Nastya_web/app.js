$.get('./data.json', function(data) {
  myChart(data)
})

function myChart(data) {
  const ctx = $("#myChart")[0].getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data.chartLabels,
        datasets: [
          {
            label: 'Balance',
            data: data.chartData,
            backgroundColor: 'rgb(84,28,169)',
            borderColor: '#CDA8EE',
            borderWidth: 1,
            fill: true,
            tension: 0.4,
        }
      ]
    },
    options: {
      scales: {
        y: {
          display: false,
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  });
}