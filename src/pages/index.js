import './index.css'; 
import FormValidator from "../scripts/components/FormValidator.js";
import Card from "../scripts/components/Card.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Api from '../scripts/components/Api.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation';
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
let cardList

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52',
    headers: {
        authorization: 'dfaf14aa-f273-4bf7-9d80-4b98802a6803',
        'Content-Type': 'application/json'
    }
});
const userInform = new UserInfo({userNameSelector: '.user__name', userInfoSelector: '.user__info', userAvatar: '.user__image'});


const popupFormUser = new PopupWithForm('.popup_type_user',{
    handleInputValues: (formValues) => {
        popupFormUser.setSubmitButtonName(true)
        api.setUserInfo(formValues)
        .then(res => {
            popupFormUser.close()
            userInform.setUserInfo(res)
        })
        .catch(err => console.log(err))
        .finally(() => popupFormUser.setSubmitButtonName(false))
    }
  })

popupFormUser.setEventListeners()  

const popupEditAvatar = new PopupWithForm ('.popup_type_edit-avatar', {
    handleInputValues: (formValues) => {
        popupEditAvatar.setSubmitButtonName(true)
        api.editAvatar(formValues)
        .then(res => {
            popupEditAvatar.close()
            userInform.setUserAvatar(res)
        })
        .catch(err => console.log(err))
        .finally(() => popupEditAvatar.setSubmitButtonName(false))
    }
});

popupEditAvatar.setEventListeners();
document.querySelector('.user__image-overlay').addEventListener('click', () => popupEditAvatar.open());

const popupConfirmDelete = new PopupWithConfirmation('.popup_type_confirm-delete', confirmedDelete);

popupConfirmDelete.setEventListeners();

const popupImage = new PopupWithImage('.popup_type_open-image');
popupImage.setEventListeners();

const popupFormCard = new PopupWithForm('.popup_type_card', 
{handleInputValues: (formValues) => {
popupFormCard.setSubmitButtonName(true)
api.setCard(formValues)
.then(res => {
    popupFormCard.close();
    cardList.addItem(createCard(res));
})
.catch(err => console.log(err))
.finally(() => popupFormCard.setSubmitButtonName(false))
}}
);

popupFormCard.setEventListeners()

const validationUser = new FormValidator(popupUser, validationObject);
validationUser.enableValidation();

const validationCard = new FormValidator(popupAddCard, validationObject);
validationCard.enableValidation();

const validationUserAvetar = new FormValidator(document.querySelector('.popup_type_edit-avatar') , validationObject);
validationUserAvetar.enableValidation();

function createCard (dataCard) {
    return new Card(dataCard, userInform.userId, sampleCard, handleOpenPopup, confirmDelete, handlerLikeClick).createCard()
}

function handleOpenPopup(name, link) {
        popupImage.open(name, link)
}

function confirmDelete (card) {
    popupConfirmDelete.setCard(card);
    popupConfirmDelete.open()
}

function confirmedDelete(card) {
    popupConfirmDelete.close()
    api.deleteCard(card)
    .then(() => card.deleteCard())
    .catch(err => console.log(err))
}

function handlerLikeClick (card) {
    if(card._cardLike.classList.contains('place__like_active')) {
        api.deleteCardLike(card)
        .then(res => {
            this._cardLikeCounter.textContent = res.likes.length;
            card._cardLike.classList.remove('place__like_active');
        })
        .catch(err => console.log(err))
    } else {
        api.setCardLike(card)
        .then(res => {
            this._cardLikeCounter.textContent = res.likes.length;
            card._cardLike.classList.add('place__like_active');
        })
        .catch(err => console.log(err))
    }
}

buttonEditProfile.addEventListener('click', function () {
    popupFormUser.setInputValues(userInform.getUserInfo())
    popupFormUser.open()
});
buttonCloseCardPopup.addEventListener('click', function() {
    popupFormCard.close()
});
buttonAdd.addEventListener('click', () => {
    popupFormCard.open()
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(values => {
    userInform.setUserInfo(values[0]);
    cardList = new Section({
    items: values[1],
        renderer: (place) => {
            return createCard(place)
        }
    }, cardsSelector);
cardList.renderItem();
})
.catch(err => console.log(err))