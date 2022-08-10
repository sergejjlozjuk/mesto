let change_button = document.querySelector('.user__change-button');
let popup = document.querySelector('.popup');
let close_button = document.querySelector('.popup__close');

function change_name () {
 popup.classList.add('popup_active');
}
change_button.addEventListener('click', change_name);

function close_popup () {
    popup.classList.remove('popup_active');
}
close_button.addEventListener('click', close_popup);
let popup__container = document.querySelector('.popup__container');
let popup__name = document.querySelector('.popup__name');
let popup__info = document.querySelector('.popup__info');
let user__name = document.querySelector('.user__name');
let user__info = document.querySelector('.user__info');



function save_changes (evt) {
    evt.preventDefault();
    user__name.textContent = popup__name.value;
    user__info.textContent = popup__info.value;
    close_popup();
}
popup__container.addEventListener('submit', save_changes);