$(document).ready(function(){
  $.ajax({
    url: "http://api.coindesk.com/v1/bpi/historical/close.json",
    method: "GET",
    success: function (response) {
      var bitCoinData = JSON.parse(response).bpi;
      console.log(bitCoinData);
      var chartData = [];
      var chartLabels = [];
      var ctx = $("#myChart");
      for (var date in bitCoinData) {
        chartData.push(bitCoinData[date]);
        chartLabels.push(date);
      }
      var chart = new Chart(ctx, {
        type: 'line',
        data: {
          datasets: [{
            data: chartData
          }],
          labels: chartLabels
        },
      });
    },
    error: function (err) {
      console.log(err);
    },
  })
});

$('#search').on('click', (event) => {
  startDate = "startDate",
  endDate = "endDate"
  // // const dates = {
  // //   startDate: "startDate",
  // //   endDate: "endDate",
  // // };
  $.ajax({
    url: "http://api.coindesk.com/v1/bpi/historical/close.json?start=startDate&end=endDate",
    method: "GET",
    success: function (response) {
      var bitCoinData = JSON.parse(response).bpi;
      console.log(bitCoinData);
      var chartData = [];
      var chartLabels = [];
      var ctx = $("#myChart");
      for (var date in bitCoinData) {
        chartData.push(bitCoinData[date]);
        chartLabels.push(date);
      }
      var chart = new Chart(ctx, {
        type: 'line',
        data: {
          datasets: [{
            data: chartData
          }],
          labels: chartLabels
        },
      });
    },
    error: function (err) {
      console.log(err);
    },
  })
});
