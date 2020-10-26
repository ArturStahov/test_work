import './scss/main.scss';

import { authHandler, logoutHandler } from './components/auth/registrationHandlers';
import { chart1, chart2, chart3 } from './components/chart/chart.js';
import showExchangeRates from './components/exchangeRate/exchangeRate';
import markupCurrency from './components/currency/currency';
const formLoginRef = document.querySelector('[data-type="modal-form"]');
const btnLogoutRef = document.querySelector('[data-type="button-logout"]');


import calculatorCurrency from './components/calculator/calculator.js'






// login, registration, logout
formLoginRef.addEventListener('submit', authHandler);







calculatorCurrency();
btnLogoutRef.addEventListener('click', logoutHandler);


markupCurrency();
showExchangeRates();

// charts
chart1();
chart2();
chart3();