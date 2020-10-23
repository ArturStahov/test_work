
import tickerTpl from './ticker.hbs';

const currencyRef = document.querySelector('.currency');

export default function runTicker() {
    fetchApi().then(data => {
        const markup = tickerTpl(data.splice(0, 3));
        currencyRef.insertAdjacentHTML('beforeend', markup);
    })
}

function fetchApi() {
    return fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(res => res.json())
}