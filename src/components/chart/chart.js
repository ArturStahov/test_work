import Chart from 'chart.js';
import fetchExchangeRates from '../serviceApi/fetchExchangeRates.js';

const ctx = document.getElementById('myChart').getContext('2d');
const ctx2 = document.getElementById('myChart2').getContext('2d');
const ctx3 = document.getElementById('myChart3').getContext('2d');

Date.prototype.yyyymmdd = function () {
  let yyyy = this.getFullYear();
  let mm =
    this.getMonth() < 9 ? '0' + (this.getMonth() + 1) : this.getMonth() + 1; // getMonth() is zero-based
  let dd = this.getDate() < 10 ? '0' + this.getDate() : this.getDate();
  return ''.concat(yyyy).concat(mm).concat(dd);
};
const d = new Date();

let yesterday = new Date(new Date() - 24 * 3600 * 1000);
let yesterday1 = new Date(new Date() - 48 * 3600 * 1000);
let yesterday2 = new Date(new Date() - 72 * 3600 * 1000);
let yesterday3 = new Date(new Date() - 96 * 3600 * 1000);
let yesterday4 = new Date(new Date() - 120 * 3600 * 1000);
let yesterday5 = new Date(new Date() - 144 * 3600 * 1000);
let yesterday6 = new Date(new Date() - 168 * 3600 * 1000);
let now = d.yyyymmdd();
let yes = yesterday.yyyymmdd();
let yes1 = yesterday1.yyyymmdd();
let yes2 = yesterday2.yyyymmdd();
let yes3 = yesterday3.yyyymmdd();
let yes4 = yesterday4.yyyymmdd();
let yes5 = yesterday5.yyyymmdd();
let yes6 = yesterday6.yyyymmdd();

export const chartUSD = async () => {
  let fullDataUsd = [];
  const data1 = await fetchExchangeRates.requestForTheSelectedDate(yes6);
  // const data1 = await fetch1.json();
  data1.filter(el => {
    if (el.cc === 'USD') {
      fullDataUsd.push(el.rate);
    }
  });

  const data2 = await fetchExchangeRates.requestForTheSelectedDate(yes5);
  // const data2 = await fetch2.json();
  data2.filter(el => {
    if (el.cc === 'USD') {
      fullDataUsd.push(el.rate);
    }
  });

  const data3 = await fetchExchangeRates.requestForTheSelectedDate(yes4);
  // const data3 = await fetch3.json();
  data3.filter(el => {
    if (el.cc === 'USD') {
      fullDataUsd.push(el.rate);
    }
  });
  const data4 = await fetchExchangeRates.requestForTheSelectedDate(yes3);
  // const data4 = await fetch4.json();
  data4.filter(el => {
    if (el.cc === 'USD') {
      fullDataUsd.push(el.rate);
    }
  });
  const data5 = await fetchExchangeRates.requestForTheSelectedDate(yes2);
  // const data5 = await fetch5.json();
  data5.filter(el => {
    if (el.cc === 'USD') {
      fullDataUsd.push(el.rate);
    }
  });
  const data6 = await fetchExchangeRates.requestForTheSelectedDate(yes1);
  // const data6 = await fetch6.json();
  data6.filter(el => {
    if (el.cc === 'USD') {
      fullDataUsd.push(el.rate);
    }
  });
  const data7 = await fetchExchangeRates.requestForTheSelectedDate(yes);
  // const data7 = await fetch7.json();
  data7.filter(el => {
    if (el.cc === 'USD') {
      fullDataUsd.push(el.rate);
    }
  });
  const data8 = await fetchExchangeRates.requestForTheSelectedDate(now);
  // const data8 = await fetch8.json();
  data8.filter(el => {
    if (el.cc === 'USD') {
      fullDataUsd.push(el.rate);
    }
  });

  renderChartUsd(fullDataUsd);
};

// chart1();

function renderChartUsd(arrUsd) {
  const myChart1 = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [yes6, yes5, yes4, yes3, yes2, yes1, yes, now],
      datasets: [
        {
          label: 'USD',
          data: arrUsd,
          backgroundColor: ['rgba(255, 99, 132, 0 )'],
          borderColor: ['rgba(255, 99, 132, 1)'],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
    },
  });
}

export const chartEUR = async () => {
  let fullDataEur = [];
  const data1 = await fetchExchangeRates.requestForTheSelectedDate(yes6);
  // const data1 = await fetch1.json();
  data1.filter(el => {
    if (el.cc === 'EUR') {
      fullDataEur.push(el.rate);
    }
  });

  const data2 = await fetchExchangeRates.requestForTheSelectedDate(yes5);
  // const data2 = await fetch2.json();
  data2.filter(el => {
    if (el.cc === 'EUR') {
      fullDataEur.push(el.rate);
    }
  });

  const data3 = await fetchExchangeRates.requestForTheSelectedDate(yes4);
  // const data3 = await fetch3.json();
  data3.filter(el => {
    if (el.cc === 'EUR') {
      fullDataEur.push(el.rate);
    }
  });
  const data4 = await fetchExchangeRates.requestForTheSelectedDate(yes3);
  // const data4 = await fetch4.json();
  data4.filter(el => {
    if (el.cc === 'EUR') {
      fullDataEur.push(el.rate);
    }
  });
  const data5 = await fetchExchangeRates.requestForTheSelectedDate(yes2);
  // const data5 = await fetch5.json();
  data5.filter(el => {
    if (el.cc === 'EUR') {
      fullDataEur.push(el.rate);
    }
  });
  const data6 = await fetchExchangeRates.requestForTheSelectedDate(yes1);
  // const data6 = await fetch6.json();
  data6.filter(el => {
    if (el.cc === 'EUR') {
      fullDataEur.push(el.rate);
    }
  });
  const data7 = await fetchExchangeRates.requestForTheSelectedDate(yes);
  // const data7 = await fetch7.json();
  data7.filter(el => {
    if (el.cc === 'EUR') {
      fullDataEur.push(el.rate);
    }
  });
  const data8 = await fetchExchangeRates.requestForTheSelectedDate(now);
  // const data8 = await fetch8.json();
  data8.filter(el => {
    if (el.cc === 'EUR') {
      fullDataEur.push(el.rate);
    }
  });

  renderChartEur(fullDataEur);
};
// chart2();

function renderChartEur(arrEur) {
  const myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: [yes6, yes5, yes4, yes3, yes2, yes1, yes, now],
      datasets: [
        {
          label: 'EUR',
          data: arrEur,
          backgroundColor: ['rgba(255, 99, 132, 0 )'],
          borderColor: ['rgba(0,0,204,1)'],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
    },
  });
}

export const chartRUB = async () => {
  let fullDataRub = [];
  const data1 = await fetchExchangeRates.requestForTheSelectedDate(yes6);
  // const data1 = await fetch1.json();
  data1.filter(el => {
    if (el.cc === 'RUB') {
      fullDataRub.push(el.rate);
    }
  });

  const data2 = await fetchExchangeRates.requestForTheSelectedDate(yes5);
  // const data2 = await fetch2.json();
  data2.filter(el => {
    if (el.cc === 'RUB') {
      fullDataRub.push(el.rate);
    }
  });

  const data3 = await fetchExchangeRates.requestForTheSelectedDate(yes4);
  // const data3 = await fetch3.json();
  data3.filter(el => {
    if (el.cc === 'RUB') {
      fullDataRub.push(el.rate);
    }
  });
  const data4 = await fetchExchangeRates.requestForTheSelectedDate(yes3);
  // const data4 = await fetch4.json();
  data4.filter(el => {
    if (el.cc === 'RUB') {
      fullDataRub.push(el.rate);
    }
  });
  const data5 = await fetchExchangeRates.requestForTheSelectedDate(yes2);
  // const data5 = await fetch5.json();
  data5.filter(el => {
    if (el.cc === 'RUB') {
      fullDataRub.push(el.rate);
    }
  });
  const data6 = await fetchExchangeRates.requestForTheSelectedDate(yes1);
  // const data6 = await fetch6.json();
  data6.filter(el => {
    if (el.cc === 'RUB') {
      fullDataRub.push(el.rate);
    }
  });
  const data7 = await fetchExchangeRates.requestForTheSelectedDate(yes);
  // const data7 = await fetch7.json();
  data7.filter(el => {
    if (el.cc === 'RUB') {
      fullDataRub.push(el.rate);
    }
  });
  const data8 = await fetchExchangeRates.requestForTheSelectedDate(now);
  // const data8 = await fetch8.json();
  data8.filter(el => {
    if (el.cc === 'RUB') {
      fullDataRub.push(el.rate);
    }
  });

  renderChartRub(fullDataRub);
};
// chart3();

function renderChartRub(arrRub) {
  const myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
      labels: [yes6, yes5, yes4, yes3, yes2, yes1, yes, now],
      datasets: [
        {
          label: 'RUB',
          data: arrRub,
          backgroundColor: ['rgba(255, 99, 132, 0 )'],
          borderColor: ['rgba(0,204,51,1)'],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
    },
  });
}

