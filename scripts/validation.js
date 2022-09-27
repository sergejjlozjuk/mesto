  export class FormValidator {
   constructor (formElement, {...obj}) {
    this.formElement = formElement;
    this.selectors = {...obj};
   }
   enableValidation () {
    this._setEventListeners(this.formElement, this.selectors)
 }
  _setEventListeners (form, selectors) {
    const inputList = Array.from(form.querySelectorAll(`${selectors.inputSelector}`));
    const buttonSubmit = form.querySelector(`${selectors.submitButtonSelector}`);
    this._disabledButton(form, selectors)
    inputList.forEach(input => input.addEventListener('input', () =>{
        this._isValid(form, input, selectors);
        this._toggleButtonSubmit(inputList, buttonSubmit ,selectors);
    }));
 }
  _disabledButton (popup, selectors) {
    const buttonSubmit = popup.querySelector(`${selectors.submitButtonSelector}`);
    if (buttonSubmit !== null) {
          buttonSubmit.classList.add(`${selectors.inactiveButtonClass}`);
    buttonSubmit.disabled = true;
    }
  }
  _toggleButtonSubmit (inputList, buttonSubmit, selectors) {
    if (this._hasInvalidInput(inputList)) {
        buttonSubmit.classList.add(`${selectors.inactiveButtonClass}`);
        buttonSubmit.disabled = true;
    } else {
        buttonSubmit.classList.remove(`${selectors.inactiveButtonClass}`)
        buttonSubmit.disabled = false;
    }
 }
  _hasInvalidInput (inputList) {
    return inputList.some((input) => {
        return !input.validity.valid
    })
 }
  _isValid (form, input, selectors) {
    if (!input.validity.valid) {
        this._showInputError(form, input, input.validationMessage, selectors);
    } else {
        this._hideInputError(form, input, selectors)
    }
 }
  _showInputError (form, input, errorMessage, selectors) {
    const errorElement = form.querySelector(`${selectors.errorClass + input.id}`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(`${selectors.errorClassVisible}`);
    input.classList.add(`${selectors.inputErrorClass}`);
 }
   _hideInputError (form, input, selectors) {
    const errorElement = form.querySelector(`${selectors.errorClass + input.id}`);
    errorElement.textContent = '';
    errorElement.classList.remove(`${selectors.errorClassVisible}`);
    input.classList.remove(`${selectors.inputErrorClass}`);
 }
  }
