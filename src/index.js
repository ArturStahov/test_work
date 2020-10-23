import './scss/main.scss';
import fetchExchangeRates from './components/serviceApi/fetchExchangeRates';
import { authWithEmailAndPassword, registrationWithEmailAndPassword } from './components/auth/authApi'
import markupLogin from './components/auth/markupLogin'

console.log(authWithEmailAndPassword);
console.log(registrationWithEmailAndPassword);



const loginBtnRef = document.querySelector('#login-btn');
const regBtnRef = document.querySelector('#registration-btn');
const rootAuthRef = document.querySelector('#root-auth')


fetchExchangeRates.requestForTheCurrentDate().then(data => console.log(data));
fetchExchangeRates.requestForTheSelectedDate(20201011).then(data => console.log(data));






function authHandler(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  authWithEmailAndPassword(email.value, password.value)
    .then(({ message, authorized }) => {
      alert(message);
      if (authorized) {
        // formRef.removeEventListener('submit', formHandler);
        rootAuthRef.innerHTML = '';
        // СЮДА ВСТАВИТЬ ПОСЛЕ УСПЕШНОГО ВХОДА
      }
    })
    .catch((error) => console.log('error', error));
}

function registrationHandler(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  registrationWithEmailAndPassword(email.value, password.value)
    .then(({ message, registered }) => {
      alert(message);
      if (registered) {
        // formRef.removeEventListener('submit', formHandler);
        rootAuthRef.innerHTML = '';
        // СЮДА ВСТАВИТЬ ПОСЛЕ УСПЕШНОЙ РЕГИСТРАЦИИ
      }
    })
    .catch((error) => console.log('error', error));
}

function loginBtnHolder() {
  rootAuthRef.innerHTML = markupLogin({ label: 'Login' });
  const formRef = document.querySelector('form');
  formRef.addEventListener('submit', authHandler);
}

function registrationBtnHolder() {
  rootAuthRef.innerHTML = markupLogin({ label: 'Registration' });
  const formRef = document.querySelector('form');
  formRef.addEventListener('submit', registrationHandler);
}

loginBtnRef.addEventListener('click', loginBtnHolder);
regBtnRef.addEventListener('click', registrationBtnHolder);


