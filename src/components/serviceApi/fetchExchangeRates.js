const fetchExchangeRates = {
  baseUrl: 'https://bank.gov.ua',
  options: {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  },

  requestForTheCurrentDate() {
    return fetch(
      `${this.baseUrl}/NBUStatService/v1/statdirectory/exchange?json`,
      this.options,
    )
      .then(response => {
        if (!response.ok) {
          throw 'Error!!!';
        }
        return response.json();
      })
      .catch(err => {
        console.log(err);
      });
  },

  requestForTheSelectedDate(date) {
    return fetch(
      `${this.baseUrl}/NBUStatService/v1/statdirectory/exchange?date=${date}&json`,
      this.options,
    )
      .then(response => {
        if (!response.ok) {
          throw 'Error!!!';
        }
        return response.json();
      })
      .catch(err => {
        console.log(err);
      });
  },

  requestPrivatBank() {
    return fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then(response => {
      if (!response.ok) {
        throw 'Error!!!';
      }
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
  },

};

export default fetchExchangeRates;
