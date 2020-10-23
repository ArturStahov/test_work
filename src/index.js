import './scss/main.scss';
import fetchExchangeRates from './components/serviceApi/fetchExchangeRates';
import authWithEmailAndPassword from './components/auth/authApi'


const email = 'test@email.com';
const password = 'testemail';


fetchExchangeRates.requestForTheCurrentDate().then(data => console.log(data));
fetchExchangeRates.requestForTheSelectedDate(20201011).then(data => console.log(data));




authWithEmailAndPassword(email, password)
  .then(({ message, registered }) => {
    console.log('message', message);
    console.log('registered', registered);
  }).catch((error) => console.log('error', error));







  import './components/calc/calc'