export default class Popup {
    constructor (selector, confirmedDelete) {
        this._popup = document.querySelector(selector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._buttonConfirmDelete = this._popup.querySelector('.popup__button-confirm');
        this.confirmedDelete = confirmedDelete
        this.card
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
        if(this._buttonConfirmDelete) {
            this._buttonConfirmDelete.addEventListener('click', () => {
                this.confirmedDelete(this.card)
                this.close()
            })
        }
        this._popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup')) {
                this.close()
            }
        })
        const buttonClose = this._popup.querySelector('.popup__close')
        buttonClose.addEventListener('click', this.close.bind(this))
    }
}