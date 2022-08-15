let changeButton = document.querySelector('.user__change-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let form = document.querySelector('.form');
let formName = document.querySelector('.form__input_name');
let formInfo = document.querySelector('.form__input_info');
let userName = document.querySelector('.user__name');
let userInfo = document.querySelector('.user__info');

function changeName () {
 popup.classList.add('popup_active');
 formName.value = userName.textContent;
 formInfo.value = userInfo.textContent;
}
changeButton.addEventListener('click', changeName);

function closePopup () {
    popup.classList.remove('popup_active');
}
closeButton.addEventListener('click', closePopup);

function saveChanges (evt) {
    evt.preventDefault();
    userName.textContent = formName.value;
    userInfo.textContent = formInfo.value;
    closePopup();
}
form.addEventListener('submit', saveChanges);