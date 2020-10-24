import './scss/main.scss';
import fetchExchangeRates from './components/serviceApi/fetchExchangeRates';
import authHandler from './components/auth/registrationHandlers'


const formLoginRef = document.querySelector('[data-type="modal-form"]');



fetchExchangeRates.requestForTheCurrentDate().then(data => console.log(data));
fetchExchangeRates.requestForTheSelectedDate(20201011).then(data => console.log(data));





formLoginRef.addEventListener('submit', authHandler);




