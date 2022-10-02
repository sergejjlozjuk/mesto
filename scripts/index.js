import { initialCards } from "./cards.js";
import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
const buttonEditProfile = document.querySelector('.user__change-button');
const buttonAdd = document.querySelector('.user__add-button');
const buttonCloseEditProfile = document.querySelector('.popup__close_edit-profile');
const buttonCloseCardPopup = document.querySelector('.popup__close_type_card');
const popupUser = document.querySelector('.popup_type_user');
const popupAddCard = document.querySelector('.popup_type_card');
const popupMainImage = document.querySelector('.popup_type_open-image');
const formCard = document.querySelector('.form_type_card');
const formUser = document.querySelector('.form_user');
const formName = document.querySelector('.form__input_type_name');
const formInfo = document.querySelector('.form__input_type_info');
const userName = document.querySelector('.user__name');
const userInfo = document.querySelector('.user__info');
const cards = document.querySelector('.places');
const openedImage = document.querySelector('.popup__main-image');
const openedImageTitle = document.querySelector('.popup__image-title');
const cardName = popupAddCard.querySelector('.form__input_type_name');
const cardInfo = popupAddCard.querySelector('.form__input_type_info');
const sampleCard = '#tmpl';
const validationObject = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: '.form__error',
    errorClassVisible: 'form__error_visible'
  };

function handlerCloseEscape (evt) {
    if (evt.key === 'Escape'){
        const popup = document.querySelector('.popup_active');
        closePopup(popup);
    }
}
function setPopupsCloseEventListener () {
    const popupList = document.querySelectorAll('.popup');
    popupList.forEach(popup => popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup')) {
            closePopup(evt.target)
        }
    }));
}
function openPopup (popup) {
    document.addEventListener('keydown', handlerCloseEscape);
    popup.classList.add('popup_active');
}
function changeName () {
 formName.value = userName.textContent;
 formInfo.value = userInfo.textContent;
}
function closePopup (popup) {
    popup.classList.remove('popup_active')
    document.removeEventListener('keydown', handlerCloseEscape);
}
function saveUserProfileChanges (evt) {
    evt.preventDefault();
    userName.textContent = formName.value;
    userInfo.textContent = formInfo.value;
    closePopup(evt.target.closest('.popup'));
}
function renderInitialCards () {
    initialCards.forEach((place) => {
    const card = new Card(sampleCard, place.name, place.link, handleOpenPopup);
    cards.prepend(card.createCard());
})}
function renderCard (card) {
    cards.prepend(card);
}

function saveCard (evt) {
    evt.preventDefault();
    const card = new Card(sampleCard, cardName.value, cardInfo.value, handleOpenPopup);
    renderCard(card.createCard());
    closePopup(evt.target.closest('.popup'));
    formCard.reset()
}
function handleOpenPopup(name, link) {
openedImage.src = link;
openedImage.alt = name;
openedImageTitle.textContent = name;
openPopup(popupMainImage)
}
buttonEditProfile.addEventListener('click', function () {
    changeName();
    openPopup(popupUser);
});
buttonCloseEditProfile.addEventListener('click', (e) => closePopup(e.target.closest('.popup')));
buttonCloseCardPopup.addEventListener('click', function(e) {
    closePopup(e.target.closest('.popup'));
    formCard.reset()
});
buttonAdd.addEventListener('click', () => {
    openPopup(popupAddCard);
});
formUser.addEventListener('submit', saveUserProfileChanges);
formCard.addEventListener('submit', saveCard);
popupMainImage.querySelector('.popup__close_type_card').addEventListener('click', (e) => closePopup(e.target.closest('.popup')));
const validationUser = new FormValidator(popupUser, validationObject);
validationUser.enableValidation();
const validationCard = new FormValidator(popupAddCard, validationObject);
validationCard.enableValidation();
setPopupsCloseEventListener();
renderInitialCards();

