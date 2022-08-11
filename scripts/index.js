let changeButton = document.querySelector('.user__change-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let popupContainer = document.querySelector('.popup__container');
let popupName = document.querySelector('.popup__form_name');
let popupInfo = document.querySelector('.popup__form_info');
let userName = document.querySelector('.user__name');
let userInfo = document.querySelector('.user__info');

function change_name () {
 popup.classList.add('popup_active');
 popupName.value = userName.innerText;
 popupInfo.value = userInfo.innerText;
}
changeButton.addEventListener('click', change_name);

function close_popup () {
    popup.classList.remove('popup_active');
}
closeButton.addEventListener('click', close_popup);

function save_changes (evt) {
    evt.preventDefault();
    userName.textContent = popupName.value;
    userInfo.textContent = popupInfo.value;
    close_popup();
}
popupContainer.addEventListener('submit', save_changes);