import { FormValidator } from "./validation.js";
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
const selectors = {
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
        closePopup();
    }
}
function setEventListener () {
    const popupList = Array.from(document.querySelectorAll('.popup'));
    popupList.forEach(popup => popup.addEventListener('click', (evt) => {
        if (evt.target === popupAddCard || evt.target === popupUser || evt.target === popupMainImage) {
            closePopup()
        }
    }));
}
function openPopup (popup) {
    document.addEventListener('keydown', handlerCloseEscape);
    popup.classList.remove('popup_inactive');
    popup.classList.add('popup_active');
}
function changeName () {
 formName.value = userName.textContent;
 formInfo.value = userInfo.textContent;
}
function closePopup () {
    const popup = document.querySelector('.popup_active');
    popup.classList.add('popup_inactive');
    setTimeout(() => popup.classList.remove('popup_active'), 950) ;
    document.removeEventListener('keydown', handlerCloseEscape);
}
function saveChanges (evt) {
    evt.preventDefault();
    userName.textContent = formName.value;
    userInfo.textContent = formInfo.value;
    closePopup();
}

function renderCards (card) {
    if (card === undefined){
            initialCards.forEach((place) => {
            const card = new Card;
            card.CreateCard(place);
            cards.prepend(card.card);
        });
    } else {
        cards.prepend(card);
    } 
}
function saveCard (evt) {
    evt.preventDefault();
    const card = new Card;
    card.CreateCard();
    renderCards(card.card);
    closePopup();
    formCard.reset()
}
function openImage (card) {
    openedImage.src = card.src;
    openedImage.alt = card.alt
    openedImageTitle.textContent = card.alt;
    openPopup(popupMainImage);
}
buttonEditProfile.addEventListener('click', function () {
    const validation = new FormValidator(popupUser, selectors);
    validation.enableValidation();
    changeName();
    openPopup(popupUser);
});
buttonCloseEditProfile.addEventListener('click', () => closePopup());
buttonCloseCardPopup.addEventListener('click', function() {
    closePopup();
    formCard.reset()
});
buttonAdd.addEventListener('click', () => {
    const validation = new FormValidator(popupAddCard, selectors);
    validation.enableValidation();
    openPopup(popupAddCard);
});
formUser.addEventListener('submit', saveChanges);
formCard.addEventListener('submit', saveCard);
popupMainImage.querySelector('.popup__close_type_card').addEventListener('click', () => closePopup());
setEventListener();
renderCards();

  export{ openImage }