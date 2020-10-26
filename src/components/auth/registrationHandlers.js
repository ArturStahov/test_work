import { ModalWindowPlugin } from '../modal-window/modal-window-plugin'
import { authWithEmailAndPassword, registrationWithEmailAndPassword } from './authApi'
import { success, error } from '../pnonify/pnotify';

const splashRef = document.querySelector('[data-type="splash-screen"]');
const mainScreenRef = document.querySelector('[data-type="main-screen"]');
const pageMainRef = document.querySelector('[data-type="page-main"]');
const marqueeRef = document.querySelector('[data-type="marquee"]');

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
        activeUser = { authorized, email }
        if (authorized) {
          success({
            title: 'You logged in successfully! ',
            text: message,
          });
          localStorage.setItem('isLogin', `${activeUser.authorized}`);
          loginActions();
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
        activeUser = { authorized: registered, email }
        if (registered) {
          success({
            title: 'You signed in successfully! ',
            text: message,
          });
          localStorage.setItem('isLogin', `${activeUser.authorized}`);
          loginActions();
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
  localStorage.setItem('isLogin', `${activeUser.authorized}`);
  logoutActions();
}

export function loginActions() {
  // СЮДА ВСТАВИТЬ ПОСЛЕ УСПЕШНОЙ РЕГИСТРАЦИИ
  splashRef.classList.add('visually-hidden');
  modalWindow.closeModal();
  mainScreenRef.classList.remove('visually-hidden');
  pageMainRef.classList.add('main-screen-bg');
  pageMainRef.classList.remove('splash-screen-bg');
  marqueeRef.classList.remove('visually-hidden');

}

function logoutActions() {
  // СЮДА ВСТАВИТЬ ПОСЛЕ ВЫХОДА
  splashRef.classList.remove('visually-hidden');
  mainScreenRef.classList.add('visually-hidden');
  pageMainRef.classList.remove('main-screen-bg');
  pageMainRef.classList.add('splash-screen-bg');
  marqueeRef.classList.add('visually-hidden');
}