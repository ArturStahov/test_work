export class ModalWindowPlugin {
  constructor({ selectorModal, selectorScreenNav }) {
    this.modalRef = document.querySelector(selectorModal);
    this.screenNavRef = document.querySelector(selectorScreenNav);
    this.modalTitle = this.modalRef.querySelector('[data-type="modal-title"]');
    this.buttonCloseModalRef = this.modalRef.querySelector(
      '[data-type="modal-button-close"]',
    );
    this.buttonSubmit = this.modalRef.querySelector('#modal-form-button');

    this._bindEvent();
  }
  _bindEvent() {
    this.buttonCloseModalRef.addEventListener(
      'click',
      this._handlerButtonCloseModal.bind(this),
    );
    this.screenNavRef.addEventListener(
      'click',
      this._handlerScreenNav.bind(this),
    );
  }

  _handlerScreenNav(event) {
    let type = event.target.dataset.type;

    if (type === 'button-login') {
      this.modalTitle.textContent = 'log in';
      this.buttonSubmit.dataset.type = 'login-btn';
      this.openModal();
    }
    if (type === 'button-signin') {
      this.modalTitle.textContent = 'sign in';
      this.buttonSubmit.dataset.type = 'registration-btn';
      this.openModal();
    }
    return;
  }
  openModal() {
    this.modalRef.classList.remove('modal-close');
    this.modalRef.classList.add('modal-open');
  }
  closeModal() {
    this.modalRef.classList.remove('modal-open');
    this.modalRef.classList.add('modal-close');
  }

  _handlerButtonCloseModal() {
    this.closeModal();
  }
}
