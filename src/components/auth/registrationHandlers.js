import { ModalWindowPlugin } from '../modal-window/modal-window-plugin'
import { authWithEmailAndPassword, registrationWithEmailAndPassword } from './authApi'

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

export default function authHandler(event) {
  event.preventDefault();

  const { email, password, button } = event.currentTarget.elements;
  const form = event.currentTarget;

  button.dataset.type === 'login-btn' &&
    authWithEmailAndPassword(email.value, password.value)
      .then(({ message, authorized, email }) => {
        activeUser = { message, authorized, email }
        alert(message);
        if (authorized) {
          activeUser = { message, authorized, email }

          // СЮДА ВСТАВИТЬ ПОСЛЕ УСПЕШНОГО ВХОДА
          splashRef.classList.add('visually-hidden');
          modalWindow.closeModal();
          mainScreenRef.classList.remove('visually-hidden');
          pageMainRef.classList.add('main-screen-bg');
          pageMainRef.classList.remove('splash-screen-bg');
        }
        if (!authorized) {
          form.reset();
        }
      })
      .catch((error) => console.log('error', error))

  button.dataset.type === 'registration-btn' &&
    registrationWithEmailAndPassword(email.value, password.value)
      .then(({ message, registered, email }) => {
        alert(message);
        if (registered) {
          activeUser = { message, authorized: registered, email }

          // СЮДА ВСТАВИТЬ ПОСЛЕ УСПЕШНОЙ РЕГИСТРАЦИИ
          splashRef.classList.add('visually-hidden');
          modalWindow.closeModal();
          mainScreenRef.classList.remove('visually-hidden');
          pageMainRef.classList.add('main-screen-bg');
          pageMainRef.classList.remove('splash-screen-bg');
        }
        if (!registered) {
          form.reset();
        }
      })
      .catch((error) => console.log('error', error))
}






// if (activeUser.authorized) {
//   activeUser = {
//     authorized: false,
//     email: null,
//   };
//   return
// }