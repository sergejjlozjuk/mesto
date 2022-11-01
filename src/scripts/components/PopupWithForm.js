import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor (selector, { handleInputValues }) {
        super(selector)
        this._handleInputValues = handleInputValues;
        this._form = this._popup.querySelector('.form');
        this._submitButton = this._form.querySelector('.form__submit');
        this._inputList = this._form.querySelectorAll('.form__input');
    }
    setInputValues (data) {
        this._inputList.forEach(input => {
            input.value = data[input.name]
        })
    }
    _disabledButton () {
        this._submitButton.classList.add('form__submit_inactive');
        this._submitButton.disabled = true;
      }
    _getInputValues () {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value
        })
        return this._formValues
    }
    setSubmitButtonName (Loading) {
        if (Loading) {
            this._disabledButton()
            this._submitButtonDefaultText = this._submitButton.textContent;
            this._submitButton.textContent = 'Сохранение...'
        } else {
            this._submitButton.textContent = this._submitButtonDefaultText
        }
    }
    setEventListeners () {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleInputValues(this._getInputValues());
        })
        super.setEventListeners()
    }
    close () {
        this._form.reset()
        super.close()
    }
}