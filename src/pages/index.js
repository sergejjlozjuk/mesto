import './index.css'; 
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Card } from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import Popup from "../scripts/components/Popup.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import { Api } from '../scripts/components/Api';
const buttonEditProfile = document.querySelector('.user__change-button');
const buttonAdd = document.querySelector('.user__add-button');
const buttonCloseCardPopup = document.querySelector('.popup__close_type_card');
const popupUser = document.querySelector('.popup_type_user');
const popupAddCard = document.querySelector('.popup_type_card');
const cardsSelector = '.places';
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
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52',
    headers: {
        authorization: 'dfaf14aa-f273-4bf7-9d80-4b98802a6803',
        'Content-Type': 'application/json'
    }
});
const cardList = new Section({
    getItems: api.getInitialCards(),
        renderer: (place) => {
        const card = new Card(place, userInform.userId, sampleCard, handleOpenPopup, confirmDelete, handlerLikeClick);
        return card
        }
    }, cardsSelector);
cardList.renderItem()


  const userInform = new UserInfo({userNameSelector: '.user__name', userInfoSelector: '.user__info'}, api.getUserInfo());
  userInform.setUserInfo()
  const popup = new Popup ('.popup_type_user');
  popup.setEventListeners();
  const popupEditAvatar = new PopupWithForm ('.popup_type_edit-avatar', {
    handleInputValues: (formValues, submitbutton) => {
        submitbutton.textContent = 'Сохранение...'
        api.editAvatar(formValues)
        .then(res => {
            userInform.setUserAvatar(res)
            console.log(res)
        })
        .finally(() => submitbutton.textContent = 'Сохранить')
    }
  });
  popupEditAvatar.setEventListeners();
  document.querySelector('.user__image-overlay').addEventListener('click', () => popupEditAvatar.open())
  const popupConfirmDelete = new Popup('.popup_type_confirm-delete', confirmedDelete);
  popupConfirmDelete.setEventListeners();
  const popupImage = new PopupWithImage('.popup_type_open-image');
  popupImage.setEventListeners()



  const popupFormCard = new PopupWithForm('.popup_type_card', 
  {handleInputValues: (formValues, submitbutton) => {
    submitbutton.textContent = 'Сохранение...'
    api.setCard(formValues)
    .then(res => {
        const card = new Card(res, userInform.userId, sampleCard, handleOpenPopup, confirmDelete, handlerLikeClick);
        cardList.addItem(card.createCard())
    })
    .finally(() => submitbutton.textContent = 'Сохранить')
  }}
  );
  popupFormCard.setEventListeners()
  const popupFormUser = new PopupWithForm('.popup_type_user',{
    handleInputValues: (formValues, submitbutton) => {
        submitbutton.textContent = 'Сохранение...'
        api.setUserInfo(formValues)
        .then(res => res)
        .finally(() => submitbutton.textContent = 'Сохранить')
        userInform.setUserInfo(formValues)
    }
  })
  popupFormUser.setEventListeners()
function handleOpenPopup(name, link) {
        popupImage.open(name, link)
}

function confirmDelete (card) {
    popupConfirmDelete.card = card
    popupConfirmDelete.open()
}

function confirmedDelete(card) {
api.deleteCard(card)
.then(() => card.deleteCard())
}

function handlerLikeClick () {
    const card = this;
    this._cardLike.classList.toggle('place__like_active');
    if(this._cardLike.classList.contains('place__like_active')) {
        api.setCardLike(card)
        .then(res => {
            this._cardLikeCounter.textContent = res.likes.length
        })
    } else {
        api.deleteCardLike(card)
        .then(res => {
            this._cardLikeCounter.textContent = res.likes.length
        })
    }
}

const validationUser = new FormValidator(popupUser, validationObject);
validationUser.enableValidation();

const validationCard = new FormValidator(popupAddCard, validationObject);
validationCard.enableValidation();

const validationUserAvetar = new FormValidator(document.querySelector('.popup_type_edit-avatar') , validationObject);
validationUserAvetar.enableValidation();


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

