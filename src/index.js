import './scss/main.scss';
import fetchExchangeRates from './components/serviceApi/fetchExchangeRates';
import authHandler from './components/auth/registrationHandlers';
import './components/chart/chart.js';
import './components/exchangeRate/exchangeRate';
const formLoginRef = document.querySelector('[data-type="modal-form"]');










formLoginRef.addEventListener('submit', authHandler);
btnLogoutRef.addEventListener('click', logoutHandler);





