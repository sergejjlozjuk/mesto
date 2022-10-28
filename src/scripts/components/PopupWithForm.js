import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor (selector, { handleInputValues }) {
        super(selector)
        this._handleInputValues = handleInputValues;
        this._form = this._popup.querySelector('.form');
        this._submitButton = this._form.querySelector('.form__submit')
    }
    
    _getInputValues () {
        this._inputList = this._form.querySelectorAll('.form__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value
        })
        return this._formValues
    }
    setEventListeners () {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleInputValues(this._getInputValues(), this._submitButton);
            this.close()
        })
        super.setEventListeners()
    }
    close () {
        this._form.reset()
        super.close()
    }
}