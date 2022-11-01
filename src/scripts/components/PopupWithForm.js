import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor (selector, { handleInputValues }) {
        super(selector)
        this._handleInputValues = handleInputValues;
        this._form = this._popup.querySelector('.form');
        this._submitButton = this._form.querySelector('.form__submit')
    }
    setInputValues (data) {
        this._userNameForm = this._form.querySelector('.form__input_type_name');
        this._userInfoForm = this._form.querySelector('.form__input_type_info');
        this._userNameForm.value = data.name;
        this._userInfoForm.value = data.info;
    }
    _disabledButton () {
        this._submitButton.classList.add('form__submit_inactive');
        this._submitButton.disabled = true;
      }
    _getInputValues () {
        this._inputList = this._form.querySelectorAll('.form__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value
        })
        return this._formValues
    }
    setSubmitButtonName (Loading) {
        if (Loading) {
            this._disabledButton()
            this._submitButton.textContent = 'Сохранение...'
        } else {
            this._submitButton.textContent = 'Сохранить'
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