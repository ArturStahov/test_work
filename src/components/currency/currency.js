import fetchExchangeRates from '../serviceApi/fetchExchangeRates';
import currencyTpl from './currency.hbs';


const currencyRef = document.querySelector('.currency');


export default function markupCurrency() {
    fetchExchangeRates.requestPrivatBank().then(data => {
        const markup = currencyTpl(data.splice(0, 3));
        currencyRef.insertAdjacentHTML('beforeend', markup);
    });
};