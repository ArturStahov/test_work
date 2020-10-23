export class ModalWindowPlugin {

    constructor({ selectorModal, selectorScreenNav }) {
        this.modalRef = document.querySelector(selectorModal)
        this.screenNavRef = document.querySelector(selectorScreenNav)
        this.modalTitle = this.modalRef.querySelector('[data-type="modal-title"]')
        this.buttonCloseModalRef = this.modalRef.querySelector('[data-type="modal-button-close"]')
        this._bindEvent();
    }
    _bindEvent() {
        this.buttonCloseModalRef.addEventListener('click', this._handlerButtonCloseModal.bind(this))
        this.screenNavRef.addEventListener('click', this._handlerScreenNav.bind(this))
    }

    _handlerScreenNav(event) {
        let type = event.target.dataset.type;
        if (event.nodeName !== 'BUTTON') {
            return
        }
        console.log(type)
    }

}