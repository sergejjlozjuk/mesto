
 function enableValidation ({formSelector, ...obj}) {
    const formElements = Array.from(document.querySelectorAll(`${formSelector}`));
    formElements.forEach((form) => setEventListeners(form, obj));
 }
 function setEventListeners (form, { inputSelector, submitButtonSelector, ...obj}) {
    const inputList = Array.from(form.querySelectorAll(`${inputSelector}`));
    const buttonSubmit = form.querySelector(`${submitButtonSelector}`);
    disabledButton(form, {submitButtonSelector, ...obj})
    inputList.forEach(input => input.addEventListener('input', () =>{
        isValid(form, input);
        toggleButtonSubmit(inputList, buttonSubmit ,obj);
    }));
 }
 function disabledButton (popup, {submitButtonSelector, inactiveButtonClass, ...obj}) {
   const buttonSubmit = popup.querySelector(`${submitButtonSelector}`);
   if (buttonSubmit !== null) {
         buttonSubmit.classList.add(`${inactiveButtonClass}`);
   buttonSubmit.disabled = true;
   }
 }
 function toggleButtonSubmit (inputList, buttonSubmit, {inactiveButtonClass, ...obj}) {
    if (hasInvalidInput(inputList)) {
        buttonSubmit.classList.add(`${inactiveButtonClass}`);
        buttonSubmit.disabled = true;
    } else {
        buttonSubmit.classList.remove(`${inactiveButtonClass}`)
        buttonSubmit.disabled = false;
    }
 }
 function hasInvalidInput (inputList) {
    return inputList.some((input) => {
        return !input.validity.valid
    })
 }
 function isValid (form, input) {
    if (!input.validity.valid) {
        showInputError(form, input, input.validationMessage);
    } else {
        hideInputError(form, input, input.validationMessage)
    }
 }
 function showInputError (form, input, errorMessage) {
    const errorElement = form.querySelector(`.form__error${input.id}`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__error_visible');
    input.classList.add('form__input_type_error');
 }
 function hideInputError (form, input, error) {
    const errorElement = form.querySelector(`.form__error${input.id}`);
    errorElement.textContent = '';
    errorElement.classList.remove('form__error_visible');
    input.classList.remove('form__input_type_error');
 }
enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error'
  });