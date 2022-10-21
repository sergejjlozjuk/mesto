// import '../pages/index.css';

import '../pages/index.css'; 
import { initialCards } from "./utils/cards.js";
import { FormValidator } from "./components/FormValidator.js";
import { Card } from "./components/Card.js";
import Section from "./components/Section.js";
import Popup from "./components/Popup.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
const buttonEditProfile = document.querySelector('.user__change-button');
const buttonAdd = document.querySelector('.user__add-button');
const buttonCloseCardPopup = document.querySelector('.popup__close_type_card');
const popupUser = document.querySelector('.popup_type_user');
const popupAddCard = document.querySelector('.popup_type_card');
const cardsSelctor = '.places';
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
  const userInform = new UserInfo({userNameSelector: '.user__name', userInfoSelector: '.user__info'});
  const popup = new Popup ('.popup_type_user');
  popup.setEventListeners()
  const popupImage = new PopupWithImage('.popup_type_open-image');
  popupImage.setEventListeners()
  const popupFormCard = new PopupWithForm('.popup_type_card', 
  {handleInputValues: (formValues) => {
    const sectionCard = new Section ({items: initialCards,
        renderer: () => {
            const card = new Card(sampleCard, formValues.name, formValues.link, handleOpenPopup);
            return card
        }
    },
    cardsSelctor)
    sectionCard.addItem(sectionCard._renderer().createCard())
  }}
  );
  popupFormCard.setEventListeners()
  const popupFormUser = new PopupWithForm('.popup_type_user',{
    handleInputValues: (formValues) => {
        userInform.setUserInfo(formValues)
    }
  })
  popupFormUser.setEventListeners()
function handleOpenPopup(name, link) {
    popupImage.open(name, link)
}

const validationUser = new FormValidator(popupUser, validationObject);
validationUser.enableValidation();

const validationCard = new FormValidator(popupAddCard, validationObject);
validationCard.enableValidation();

const cardList = new Section({
    items: initialCards,
     renderer: (place) => {
        const card = new Card(sampleCard, place.name, place.link, handleOpenPopup);
        return card
     }
    }, cardsSelctor);
cardList.renderItem()

buttonEditProfile.addEventListener('click', function () {
    userInform.getUserInfo()
    popup.open()
});
buttonCloseCardPopup.addEventListener('click', function() {
    popupFormCard.close()
});
buttonAdd.addEventListener('click', () => {
    popupFormCard.open()
});
