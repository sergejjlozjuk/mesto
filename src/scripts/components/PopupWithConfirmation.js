import Popup from './Popup.js'
export default class PopupWithConfirmation extends Popup {
    constructor (selector, confirmedDelete){
        super(selector)
        this._buttonConfirmDelete = this._popup.querySelector('.popup__button-confirm');
        this.confirmedDelete = confirmedDelete
    }
    setEventListeners () {
        super.setEventListeners()
        if(this._buttonConfirmDelete) {
            this._buttonConfirmDelete.addEventListener('click', () => {
                this.confirmedDelete(this.card)
                this.close()
            })
        }
    }
    setCard (card) {
        this.card = card
    }
}