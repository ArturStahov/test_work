import './scss/main.scss';
// import fetchExchangeRates from './components/serviceApi/fetchExchangeRates';
import { authHandler, logoutHandler } from './components/auth/registrationHandlers';
import './components/chart/chart.js';
import showExchangeRates from './components/exchangeRate/exchangeRate';
import markupCurrency from './components/currency/currency';
const formLoginRef = document.querySelector('[data-type="modal-form"]');
const btnLogoutRef = document.querySelector('[data-type="button-logout"]');








formLoginRef.addEventListener('submit', authHandler);
btnLogoutRef.addEventListener('click', logoutHandler);


markupCurrency();
showExchangeRates();
