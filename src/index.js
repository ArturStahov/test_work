import './scss/main.scss';

import { authHandler, logoutHandler, loginActions } from './components/auth/registrationHandlers';
import { chartUSD, chartEUR, chartRUB } from './components/chart/chart.js';
import showExchangeRates from './components/exchangeRate/exchangeRate';
import markupCurrency from './components/currency/currency';
const formLoginRef = document.querySelector('[data-type="modal-form"]');
const btnLogoutRef = document.querySelector('[data-type="button-logout"]');


import calculatorCurrency from './components/calculator/calculator.js'






// login, registration, logout
localStorage.getItem('isLogin') === "true" && loginActions();

formLoginRef.addEventListener('submit', authHandler);





calculatorCurrency();
btnLogoutRef.addEventListener('click', logoutHandler);


markupCurrency();
showExchangeRates();

// charts
chartUSD();
chartEUR();
chartRUB();