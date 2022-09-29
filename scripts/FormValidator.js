  export class FormValidator {
   constructor (formElement, selectors) {
    this._formElement = formElement;
    this._selectors = selectors;
    this._inputList = Array.from(this._formElement.querySelectorAll(`${this._selectors.inputSelector}`));
    this._buttonSubmit = this._formElement.querySelector(`${this._selectors.submitButtonSelector}`);
   }
   enableValidation () {
    this._setEventListeners()
 }
  _setEventListeners () {
    this._disabledButton()
    this._inputList.forEach(input => input.addEventListener('input', () =>{
        this._toggleInputErrorState(input);
        this._toggleButtonSubmit();
    }));
 }
  _disabledButton () {
    this._buttonSubmit.classList.add(`${this._selectors.inactiveButtonClass}`);
    this._buttonSubmit.disabled = true;
  }
  _toggleButtonSubmit () {
    if (this._hasInvalidInput()) {
        this._buttonSubmit.classList.add(`${this._selectors.inactiveButtonClass}`);
        this._buttonSubmit.disabled = true;
    } else {
        this._buttonSubmit.classList.remove(`${this._selectors.inactiveButtonClass}`)
        this._buttonSubmit.disabled = false;
    }
 }
  _hasInvalidInput () {
    return  this._inputList.some((input) => {
        return !input.validity.valid
    })
 }
  _toggleInputErrorState(input) {
    if (!input.validity.valid) {
        this._showInputError(input, input.validationMessage);
    } else {
        this._hideInputError(input)
    }
 }
  _showInputError (input, errorMessage) {
    const errorElement = this._formElement.querySelector(`${this._selectors.errorClass + input.id}`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(`${this._selectors.errorClassVisible}`);
    input.classList.add(`${this._selectors.inputErrorClass}`);
 }
   _hideInputError (input) {
    const errorElement = this._formElement.querySelector(`${this._selectors.errorClass + input.id}`);
    errorElement.textContent = '';
    errorElement.classList.remove(`${this._selectors.errorClassVisible}`);
    input.classList.remove(`${this._selectors.inputErrorClass}`);
    }
}
