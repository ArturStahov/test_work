import './scss/main.scss';
import fetchExchangeRates from './components/serviceApi/fetchExchangeRates';


fetchExchangeRates.requestForTheCurrentDate().then(data => console.log(data));
fetchExchangeRates.requestForTheSelectedDate(20201011).then(data => console.log(data));
