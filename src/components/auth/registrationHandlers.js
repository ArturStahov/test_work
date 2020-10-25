import { ModalWindowPlugin } from '../modal-window/modal-window-plugin'
import { authWithEmailAndPassword, registrationWithEmailAndPassword } from './authApi'
import { success, error } from '../pnonify/pnotify';

const splashRef = document.querySelector('[data-type="splash-screen"]');
const mainScreenRef = document.querySelector('[data-type="main-screen"]');
const pageMainRef = document.querySelector('[data-type="page-main"]');

const modalOptions = {
  selectorModal: '[data-type="modal-window"]',
  selectorScreenNav: '[data-type="screen-nav"]'
}
const modalWindow = new ModalWindowPlugin(modalOptions)

let activeUser = {
  authorized: false,
  email: null,
};

export function authHandler(event) {
  event.preventDefault();

  const { email, password, button } = event.currentTarget.elements;
  const form = event.currentTarget;

  button.dataset.type === 'login-btn' &&
    authWithEmailAndPassword(email.value, password.value)
      .then(({ message, authorized, email }) => {
        activeUser = { message, authorized, email }
        if (authorized) {
          activeUser = { message, authorized, email }
          success({
            title: 'You logged in successfully! ',
            text: message,
          });
          // СЮДА ВСТАВИТЬ ПОСЛЕ УСПЕШНОГО ВХОДА
          splashRef.classList.add('visually-hidden');
          modalWindow.closeModal();
          mainScreenRef.classList.remove('visually-hidden');
          pageMainRef.classList.add('main-screen-bg');
          pageMainRef.classList.remove('splash-screen-bg');
        }
        if (!authorized) {
          error({
            title: 'Error! ',
            text: message,
          });
          form.reset();
        }
      })
      .catch(err => {
        error({
          title: 'ERROR!',
          text: err,
        });
      });

  button.dataset.type === 'registration-btn' &&
    registrationWithEmailAndPassword(email.value, password.value)
      .then(({ message, registered, email }) => {
        if (registered) {
          activeUser = { message, authorized: registered, email }
          success({
            title: 'You signed in successfully! ',
            text: message,
          });
          // СЮДА ВСТАВИТЬ ПОСЛЕ УСПЕШНОЙ РЕГИСТРАЦИИ
          splashRef.classList.add('visually-hidden');
          modalWindow.closeModal();
          mainScreenRef.classList.remove('visually-hidden');
          pageMainRef.classList.add('main-screen-bg');
          pageMainRef.classList.remove('splash-screen-bg');
        }
        if (!registered) {
          error({
            title: 'Error! ',
            text: message,
          });
          form.reset();
        }
      })
      .catch(err => {
        error({
          title: 'ERROR!',
          text: err,
        });
      });
}


export function logoutHandler() {
  activeUser = {
    authorized: false,
    email: null,
  };
  // СЮДА ВСТАВИТЬ ПОСЛЕ ВЫХОДА
  splashRef.classList.remove('visually-hidden');
  mainScreenRef.classList.add('visually-hidden');
  pageMainRef.classList.remove('main-screen-bg');
  pageMainRef.classList.add('splash-screen-bg');
}