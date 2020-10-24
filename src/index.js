import './scss/main.scss';
import fetchExchangeRates from './components/serviceApi/fetchExchangeRates';

import { loginBtnHolder, registrationBtnHolder, loginBtnRef, regBtnRef, activeUser } from './components/auth/registrationHandlers'




fetchExchangeRates.requestForTheCurrentDate().then(data => console.log(data));
fetchExchangeRates.requestForTheSelectedDate(20201011).then(data => console.log(data));



loginBtnRef.addEventListener('click', loginBtnHolder);
regBtnRef.addEventListener('click', registrationBtnHolder);


