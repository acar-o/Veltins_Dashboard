// Dropdown Menu Start ========================
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// Dropdown Menu End =========================

// Firstline Gesamtzahl start ================
const gesamtTeilnehmer = 19256; //php
const gerubbelterFelder = 38948; //php
const teilnehmerHeute = 565; //php

let _gesamtTeilnehmer = document.getElementById("gesamtTeilnehmer");
_gesamtTeilnehmer.innerHTML = gesamtTeilnehmer;
let _gerubbelterFelder = document.getElementById("gerubbelterFelder");
_gerubbelterFelder.innerHTML = gerubbelterFelder;
let _teilnehmerHeute = document.getElementById("teilnehmerHeute");
_teilnehmerHeute.innerHTML = teilnehmerHeute;

// Firstline Gesamtzahl End ==================

// Fill Aktivity table Start  ================
const activity = [//php
  {
    datum: "20.02.2021",
    userProTag: "123",
    adressdaten: "122",
    anzahlFelder: "1231",
    gesamtFelder: "1250",
    gesamtTeilnehmer: "5000"
  },
  {
    datum: "21.02.2021",
    userProTag: "120",
    adressdaten: "125",
    anzahlFelder: "1235",
    gesamtFelder: "1255",
    gesamtTeilnehmer: "5500"
  },
  {
    datum: "21.02.2021",
    userProTag: "120",
    adressdaten: "125",
    anzahlFelder: "1235",
    gesamtFelder: "1255",
    gesamtTeilnehmer: "5500"
  },
  {
    datum: "21.02.2021",
    userProTag: "120",
    adressdaten: "125",
    anzahlFelder: "1235",
    gesamtFelder: "1255",
    gesamtTeilnehmer: "5500"
  },
  {
    datum: "21.02.2021",
    userProTag: "120",
    adressdaten: "125",
    anzahlFelder: "1235",
    gesamtFelder: "1255",
    gesamtTeilnehmer: "5500"
  },
  {
    datum: "21.02.2021",
    userProTag: "120",
    adressdaten: "125",
    anzahlFelder: "1235",
    gesamtFelder: "1255",
    gesamtTeilnehmer: "5500"
  }
];
function loadTableData(items) {
  const table = document.getElementById("testBody");
  items.forEach(item => {
    let row = table.insertRow();
    let datum = row.insertCell(0);
    let userProTag = row.insertCell(1);
    let adressdaten = row.insertCell(2);
    let anzahlFelder = row.insertCell(3);
    let gesamtFelder = row.insertCell(4);
    let gesamtTeilnehmer = row.insertCell(5);
    datum.innerHTML = item.datum;
    userProTag.innerHTML = item.userProTag;
    adressdaten.innerHTML = item.adressdaten;
    anzahlFelder.innerHTML = item.anzahlFelder;
    gesamtFelder.innerHTML = item.gesamtFelder;
    gesamtTeilnehmer.innerHTML = item.gesamtTeilnehmer;
  });
}
loadTableData(activity);

// Fill table End  ============================

//Doughnut Chart Start ========================
var context = document.getElementById("donutChart");
var barChart = new Chart(context, {
  type: 'doughnut',
  data: {
    labels: ['Männlich', 'Weblich'],
    datasets: [{
      label: [
        'rgba(9, 108, 48, 0.5)',
        'rgba(137, 138, 139, 0.2)'
      ],
      data: [75, 25],//php
      backgroundColor: [
        'rgb(9, 108, 48)',
        'rgb(137, 138, 139)'
      ]
    }]
  },
  options: {
    //cutoutPercentage: 40,
    responsive: false
  }
});
//Doughnut Chart End ========================
//Bar Chart Start ===========================
var ctx = document.getElementById("barChart").getContext("2d");
var data = {
  labels: ["18 - 24", "25 - 34", "35 - 44", "45 - 54", " 55 - 64", "65 +"],
  datasets: [
    {
      label: "%",
      backgroundColor: "rgb(9, 108, 48)",
      data: [10, 50, 11, 7, 6, 2]//php
    }
  ]
};

barChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    responsive: false,
    title: {
      display: false,
      text: 'Verteilung nach Alter'
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 25,
        bottom: 0
      }
    },
    legend: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
          drawTicks: true
        },
        ticks: {
          fontStyle: 'bold',
          fontSize: 14,
          fontColor: "#333333",
          beginAtZero: true
        }
      }],
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
          drawTicks: false,
          tickMarkLength: 15,
          borderDashOffset: 15
        },
        ticks: {
          display: false,
          fontStyle: 'bold',
          fontSize: 10,
          beginAtZero: true
        }
      }]
    }
  }
});

// Chart.plugins.register({
//   afterDatasetsDraw: function (chart) {
//     // To only draw at the end of animation, check for easing === 1
//     var ctx = chart.ctx;

//     chart.data.datasets.forEach(function (dataset, i) {
//       var meta = chart.getDatasetMeta(i);
//       if (!meta.hidden) {
//         meta.data.forEach(function (element, index) {
//           // Draw the text in black, with the specified font
//           ctx.fillStyle = 'rgb(0, 0, 0)';

//           var fontSize = 16;
//           var fontStyle = 'normal';
//           var fontFamily = 'Trebuchet MS';
//           ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

//           // Just naively convert to string for now
//           var dataString = dataset.data[index].toString();
//           dataString = "% " + dataString;

//           // Make sure alignment settings are correct
//           ctx.textAlign = 'center';
//           ctx.textBaseline = 'middle';

//           var padding = 5;
//           var position = element.tooltipPosition();
//           ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
//         });
//       }
//     });
//   }
// });
//Bar Chart End =============================

//Fill Herkunft Table Start ================


// Fill Aktivity table Start  ==========================
const herkunft = [
  "Bayern",
  "Berlin",
  "Brandenburg",
  "Bremen",
  "Baden-Württemberg",
  "Hamburg",
  "Hessen",
  "Mecklenburg-Vorpommern",
  "Niedersachsen",
  "Nordrhein-Westfalen",
  "Rheinland-Pfalz",
  "Saarland",
  "Sachsen",
  "Sachsen-Anhalt",
  "Schleswig-Holstein",
  "Thüringen",
];
const user = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 23, 45, 56, 44, 55, 66]//php

function loadHerkunftTable(herkunft, items) {
  const table1 = document.getElementById("herkunftBody1");
  const table2 = document.getElementById("herkunftBody2");
  for (let i = 0; i < herkunft.length; i++) {
    if (i < 8) {
      let row = table1.insertRow();
      let ort = row.insertCell(0);
      let userWoche = row.insertCell(1);

      ort.innerHTML = herkunft[i];
      userWoche.innerHTML = items[i];

    } else {
      let row = table2.insertRow();
      let ort = row.insertCell(0);
      let userWoche = row.insertCell(1);

      ort.innerHTML = herkunft[i];
      userWoche.innerHTML = items[i];

    }
  }
}

loadHerkunftTable(herkunft, user);


//Fill Herkunft Table End ==================

//Aktion Vergleichen Chart 1 ================
var line = document.getElementById('myChartNutzer')
var lineChart = new Chart(line, {
  type: 'line',
  data: {
    labels: ['01.03', '02.03', '03.03', '04.03', '05.03', '06.03', '07.03'],
    datasets: [{
      label: '2018',
      fill: false,
      lineTension: 0.5,
      data: [25, 33, 45, 19, 15, 35, 15],
      backgroundColor: '#fff',
      borderColor: 'red',
      borderCapStyle: 'round',
      borderDashOffset: 0.5,
      borderjoinStyle: 'round'
    },
    {
      label: '2019',
      fill: false,
      lineTension: 0.5,
      data: [25, 34, 40, 11, 10, 30, 1],
      backgroundColor: '#fff',
      borderColor: 'blue',
      borderCapStyle: 'round',
      borderdash: [],
      borderDashOffset: 0.5,
      borderjoinStyle: 'round'
    }, {
      label: '2020',
      fill: false,
      lineTension: 0.5,
      data: [22, 45, 1, 17, 10, 5, 57], // php               
      backgroundColor: '#fff',
      borderColor: 'green',
      borderCapStyle: 'round',
      borderdash: [],
      borderDashOffset: 0.5,
      borderjoinStyle: 'round'
    }
    ]
  },
  options: {
    scales: {
      xAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      }],
      yAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      }]
    }
  }
});
//Aktion Vergleichen Chart 2 ================

//Aktion Vergleichen Chart 1 ================
var line = document.getElementById('myChartFelder')
var lineChart = new Chart(line, {
  type: 'line',
  data: {
    labels: ['01.03', '02.03', '03.03', '04.03', '05.03', '06.03', '07.03'],
    datasets: [{
      label: '2018',
      fill: false,
      lineTension: 0.5,
      data: [25, 33, 45, 19, 15, 35, 15],
      backgroundColor: '#fff',
      borderColor: 'red',
      borderCapStyle: 'round',
      borderDashOffset: 0.5,
      borderjoinStyle: 'round'
    },
    {
      label: '2019',
      fill: false,
      lineTension: 0.5,
      data: [25, 34, 40, 11, 10, 30, 1],
      backgroundColor: '#fff',
      borderColor: 'blue',
      borderCapStyle: 'round',
      borderdash: [],
      borderDashOffset: 0.5,
      borderjoinStyle: 'round'
    }, {
      label: '2020',
      fill: false,
      lineTension: 0.5,
      data: [22, 45, 1, 17, 10, 5, 57], // php               
      backgroundColor: '#fff',
      borderColor: 'green',
      borderCapStyle: 'round',
      borderdash: [],
      borderDashOffset: 0.5,
      borderjoinStyle: 'round'
    }
    ]
  },
  options: {
    scales: {
      xAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      }],
      yAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      }]
    }
  }


});
//Aktion Vergleichen Chart 2 ================