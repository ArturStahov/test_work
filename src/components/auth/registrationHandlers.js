
import markupLogin from './markupLogin.hbs'
import { authWithEmailAndPassword, registrationWithEmailAndPassword } from './authApi'

export const loginBtnRef = document.querySelector('#login-btn');
export const regBtnRef = document.querySelector('#registration-btn');

const rootAuthRef = document.querySelector('#root-auth')
let activeUser = {
  authorized: false,
  email: null,
};

function authHandler(event) {
  event.preventDefault();

  const { email, password, button } = event.currentTarget.elements;
  const form = event.currentTarget;

  button.disabled = true;

  authWithEmailAndPassword(email.value, password.value)
    .then(({ message, authorized, email }) => {
      activeUser = { message, authorized, email }
      console.log(activeUser);
      alert(message);
      if (authorized) {
        activeUser = { message, authorized, email }
        form.removeEventListener('submit', authHandler);
        rootAuthRef.innerHTML = '';
        loginBtnRef.textContent = 'Logout';
        regBtnRef.disabled = true;
        // СЮДА ВСТАВИТЬ ПОСЛЕ УСПЕШНОГО ВХОДА

      }
      if (!authorized) {
        event.currentTarget.reset();
      }
    })
    .catch((error) => console.log('error', error))
    .finally(button.disabled = false);
}

function registrationHandler(event) {
  event.preventDefault();

  const { email, password, button } = event.currentTarget.elements;
  const form = event.currentTarget;

  button.disabled = true;

  registrationWithEmailAndPassword(email.value, password.value)
    .then(({ message, registered, email }) => {
      alert(message);
      if (registered) {
        activeUser = { message, authorized: registered, email }
        console.log(activeUser);
        form.removeEventListener('submit', authHandler);
        rootAuthRef.innerHTML = '';
        loginBtnRef.textContent = 'Logout';
        regBtnRef.disabled = true;
        // СЮДА ВСТАВИТЬ ПОСЛЕ УСПЕШНОЙ РЕГИСТРАЦИИ

      }
      if (!registered) {
        form.reset();
        regBtnRef.disabled = false;
      }
    })
    .catch((error) => console.log('error', error))
    .finally(button.disabled = false);
}

export function loginBtnHolder() {
  if (activeUser.authorized) {
    activeUser = {
      authorized: false,
      email: null,
    };
    loginBtnRef.textContent = 'Login'
    regBtnRef.disabled = false;
    return
  }
  rootAuthRef.innerHTML = markupLogin({ label: 'Login' });
  const formRef = document.querySelector('form');
  formRef.addEventListener('submit', authHandler);
}

export function registrationBtnHolder() {
  rootAuthRef.innerHTML = markupLogin({ label: 'Registration' });
  const formRef = document.querySelector('form');
  formRef.addEventListener('submit', registrationHandler);
}