import './scss/main.scss';
import fetchExchangeRates from './components/serviceApi/fetchExchangeRates';
import authHandler from './components/auth/registrationHandlers';
import './components/chart/chart.js';
import './components/exchangeRate/exchangeRate';
const formLoginRef = document.querySelector('[data-type="modal-form"]');

import calculator from './components/calculator/calculator.js'


fetchExchangeRates.requestForTheCurrentDate().then(data => console.log(data));
fetchExchangeRates.requestForTheSelectedDate(20201011).then(data => console.log(data));





formLoginRef.addEventListener('submit', authHandler);







calculator();