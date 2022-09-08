
enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__error'
  });
 function enableValidation (obj) {
    const formElements = Array.from(document.querySelectorAll(`${obj.formSelector}`));
    formElements.forEach((form) => setEventListeners(form, obj))
 }
 function setEventListeners (form, obj) {
    const inputList = Array.from(form.querySelectorAll(`${obj.inputSelector}`));
    const buttonSubmit = form.querySelector('.form__submit');
    inputList.forEach(input => input.addEventListener('input', () =>{
        isValid(form, input);
        toggleButtonSubmit(inputList, buttonSubmit);
    }));
 }
 function toggleButtonSubmit (inputList, buttonSubmit) {
    if (hasInvalidInput(inputList)) {
        buttonSubmit.classList.add('form__submit_inactive')
    } else {
        buttonSubmit.classList.remove('form__submit_inactive')
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
