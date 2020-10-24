import fetchExchangeRates from '../serviceApi/fetchExchangeRates';
import markupExchangeRate from './templateExchangeRate.hbs';

const exchangeRateContainer = document.querySelector('.exchangeRate');


const renderExchangeRate = (requestCourses) => {
    const markupCourses = requestCourses.reduce((acc, el) => acc + `${markupExchangeRate(el)}`, '');
    exchangeRateContainer.innerHTML = `<ul class="exchangeRate__list">Курс валют Нацбанка${markupCourses}</ul>`;

}

const showExchangeRates = async () => {
    const requestCourses = await fetchExchangeRates.requestForTheCurrentDate().then(data => {
        const array = [data[18], data[26], data[33]];
        return array;
    })

    try {
        if(requestCourses.length) {
            console.log(requestCourses);
            renderExchangeRate(requestCourses);
        }


    } catch(err) {
        console.log(err);
    }
}

showExchangeRates();

