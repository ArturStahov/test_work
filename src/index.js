import './scss/main.scss';
import authHandler from './components/auth/registrationHandlers';
import './components/chart/chart.js';
import showExchangeRates from './components/exchangeRate/exchangeRate';
import markupCurrency from './components/currency/currency';
const formLoginRef = document.querySelector('[data-type="modal-form"]');


formLoginRef.addEventListener('submit', authHandler);

markupCurrency();
showExchangeRates();