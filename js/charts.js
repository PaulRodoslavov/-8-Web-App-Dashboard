// -----------------------Data for charts----------------------- //

let traffic_labelsTime = ["0:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
let traffic_dataTime= ['100', '200', '300', '400', '450', '500', '750', '700', '860', '1000', '1100', '1000', '1500', '1700', '1000', '750', '1200', '1000', '900', "1900", '1200', '800', '600', '550', '400', '1500', '2000', '1800', '600', '1300', '2150', '900'];

let traffic_labelsDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let traffic_dataDays = ['700', '860', '1000', '1100', '1150', '1500', '1700'];

let traffic_labelsMounth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let traffic_dataMounth = ['100','700', '860', '1000', '1100', '1150', '1500', '1700','1400', '900', '1300', '1900'];

let traffic_labelsWeek = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"];
let traffic_dataWeek = ['100', '200', '300', '400', '450', '500', '750', '700', '860', '1000', '1100', '1000', '1500'];


// ----------------------Chart Traffic----------------------- //

let ctx = document.getElementById("myChart").getContext('2d');
let myChart = new Chart(ctx, {

    type: 'line',
    data: {
        labels: traffic_labelsWeek,
        datasets: [{
            data: ["", 750, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2001],
            backgroundColor: "rgb(115, 120, 186, 0.3)",
            borderColor: "rgb(115, 120, 186)",
            fill: true,
            borderWidth: 2,
            lineTension: 0,
            pointBackgroundColor: '#fff',
        }]
    },
    options: {
      layout: {
            padding: {
                left: 18,
                right: 20,
                top: 0,
                bottom: 0
            }
        },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          gridLines: {
            offsetGridLines: true
          }
        }],
      }
    }
  });
  function addData(chart, label, data) {
      chart.data.labels = label;
      chart.data.datasets.forEach((dataset) => {
          dataset.data = data;
      });
      chart.update();
  };

  function addEvent (elem, labels, data){ //function for changing active chart //
    elem.on('click', () => {
        addData(myChart, labels, data);
  });
};
addEvent( $('#hourly'), traffic_labelsTime, traffic_dataTime);
addEvent( $('#daily'), traffic_labelsDays, traffic_dataDays);
addEvent( $('#mounthly'), traffic_labelsMounth, traffic_dataMounth);
addEvent( $('#weekly'), traffic_labelsWeek, traffic_dataWeek);

  // ----------------------BarChart----------------------- //

new Chart(document.getElementById("barChart"), {
    responsive: true,
    type: 'bar',
    data: {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [
        {
          label: false,
          backgroundColor: "rgb(115, 120, 186)",
          data: [75,100,175,125,225,200, 100]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: { display: false },
    scales: { yAxes: [
      { ticks: {
        beginAtZero: true,
        max: 250}},]
    }
  }
});

// ----------------------PieChart----------------------- //

new Chart(document.getElementById("pieChart"), {
    responsive: true,
    type: 'pie',
    data: {
      labels: ["Phones", "Tablets", "Desktop"],
      datasets: [{
        backgroundColor: ["#80B0BD", "#90C794","#7378BA"],
        data: [14,13,75]
      }]
    },
    options: {
      layout: {
        padding: {
          right: 20,
          top: 0
        }
      },
      legend: {
        display: true,
        position: 'right',
        labels: {
          boxWidth: 20,
          fontSize: 20,
        }
      }
    }
  });
