export default class Popup {
    constructor (selector) {
        this._popup = document.querySelector(selector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open () {
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.classList.add('popup_active');
    }
    close () {
        this._popup.classList.remove('popup_active');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose (evt) {
    if (evt.key === 'Escape'){
        this.close()
    }
    }
    setEventListeners () {
        this._popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup')) {
                this.close()
            }
        })
        const buttonClose = this._popup.querySelector('.popup__close')
        buttonClose.addEventListener('click', this.close.bind(this))
    }
}