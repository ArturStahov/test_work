import './scss/main.scss';
import fetchExchangeRates from './components/serviceApi/fetchExchangeRates';
import { loginBtnHolder, registrationBtnHolder, loginBtnRef, regBtnRef, activeUser } from './components/auth/registrationHandlers';
import { ModalWindowPlugin } from './components/modal-window/modal-window-plugin.js';

// activeUser - данные о залогиненом пользователе (асинхронные)


fetchExchangeRates.requestForTheCurrentDate().then(data => console.log(data));
fetchExchangeRates.requestForTheSelectedDate(20201011).then(data => console.log(data));



loginBtnRef.addEventListener('click', loginBtnHolder);
regBtnRef.addEventListener('click', registrationBtnHolder);










const modalOptions = {
  selectorModal: '[data-type="modal-window"]',
  selectorScreenNav: '[data-type="screen-nav"]'
}
const modalWindow = new ModalWindowPlugin(modalOptions)
