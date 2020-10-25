import fetchExchangeRates from '../serviceApi/fetchExchangeRates';
import markupExchangeRate from './templateExchangeRate.hbs';


const exchangeRateContainer = document.querySelector('.exchange-rate-national-bank');

const renderExchangeRate = (requestCourses) => {
    const markupCourses = requestCourses.reduce((acc, el) => acc + `${markupExchangeRate(el)}`, '');
    exchangeRateContainer.innerHTML = `<ul class="exchange-rate-national-bank__list"><span class="exchange-rate-national-bank__title">Курс валют НБУ</span>${markupCourses}</ul>`;
};

const showExchangeRates = async () => {
    const requestCourses = await fetchExchangeRates.requestForTheCurrentDate().then(data => {
        const array = [data[18], data[26], data[33]];
        return array;
    });

    try {
        if(requestCourses.length) {
            renderExchangeRate(requestCourses);
        };
    } catch(err) {
        console.log(err);
    };
};
showExchangeRates
export default showExchangeRates;