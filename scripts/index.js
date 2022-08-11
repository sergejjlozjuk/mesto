let changeButton = document.querySelector('.user__change-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let form = document.querySelector('.form');
let formName = document.querySelector('.form__name');
let formInfo = document.querySelector('.form__info');
let userName = document.querySelector('.user__name');
let userInfo = document.querySelector('.user__info');

function change_name () {
 popup.classList.add('popup_active');
 formName.value = userName.innerText;
 formInfo.value = userInfo.innerText;
}
changeButton.addEventListener('click', change_name);

function close_popup () {
    popup.classList.remove('popup_active');
}
closeButton.addEventListener('click', close_popup);

function save_changes (evt) {
    evt.preventDefault();
    userName.textContent = formName.value;
    userInfo.textContent = formInfo.value;
    close_popup();
}
form.addEventListener('submit', save_changes);