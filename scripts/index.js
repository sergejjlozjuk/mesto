import { initialCards } from "./utils/cards.js";
import { FormValidator } from "./components/FormValidator.js";
import { Card } from "./components/Card.js";
import Section from "./components/Section.js";
import Popup from "./components/Popup.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
// import UserInfo from "./components/UserInfo.js";
const buttonEditProfile = document.querySelector('.user__change-button');
const buttonAdd = document.querySelector('.user__add-button');
// const buttonCloseEditProfile = document.querySelector('.popup__close_edit-profile');
const buttonCloseCardPopup = document.querySelector('.popup__close_type_card');
const popupUser = document.querySelector('.popup_type_user');
const popupAddCard = document.querySelector('.popup_type_card');
// const popupMainImage = document.querySelector('.popup_type_open-image');
const formCard = document.querySelector('.form_type_card');
const formUser = document.querySelector('.form_user');
const formName = document.querySelector('.form__input_type_name');
const formInfo = document.querySelector('.form__input_type_info');
const userName = document.querySelector('.user__name');
const userInfo = document.querySelector('.user__info');
const cardsSelctor = '.places';
// const openedImage = document.querySelector('.popup__main-image');
// const openedImageTitle = document.querySelector('.popup__image-title');
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
  const popupUser1 = new Popup ('.popup_type_user');
  popupUser1.setEventListeners()
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
// console.log(goo._getInputValues())
// function handlerCloseEscape (evt) {
//     if (evt.key === 'Escape'){
//         const popup = document.querySelector('.popup_active');
//         closePopup(popup);
//     }
// }
// function setPopupsCloseEventListener () {
//     const popupList = document.querySelectorAll('.popup');
//     popupList.forEach(popup => popup.addEventListener('click', (evt) => {
//         if (evt.target.classList.contains('popup')) {
//             closePopup(evt.target)
//         }
//     }));
// }
// function openPopup (popup) {
//     document.addEventListener('keydown', handlerCloseEscape);
//     popup.classList.add('popup_active');
// }
function changeName () {
 formName.value = userName.textContent;
 formInfo.value = userInfo.textContent;
}
// function closePopup (popup) {
//     popup.classList.remove('popup_active')
//     document.removeEventListener('keydown', handlerCloseEscape);
// }
function saveUserProfileChanges (evt) {
    evt.preventDefault();
    userName.textContent = formName.value;
    userInfo.textContent = formInfo.value;
    closePopup(evt.target.closest('.popup'));
    closePopup(popupUser)
}

// function saveCard (evt) {
//     evt.preventDefault();
//     const sectionCard = new Section ({items: initialCards,
//         renderer: () => {
//             const card = new Card(sampleCard, cardName.value, cardInfo.value, handleOpenPopup);
//             return card
//         }
//     },
//     cardsSelctor)
//     sectionCard.addItem(sectionCard._renderer().createCard())
//     closePopup(evt.target.closest('.popup'));
//     formCard.reset()
// }
function handleOpenPopup(name, link) {
    boo.open(name, link),
    getInputValues(name, link)
}
buttonEditProfile.addEventListener('click', function () {
    changeName();
    // openPopup(popupUser);
    foo.open()
});
// buttonCloseEditProfile.addEventListener('click', (e) => closePopup(e.target.closest('.popup')));
buttonCloseCardPopup.addEventListener('click', function() {
    goo.close()
    formCard.reset()
});
buttonAdd.addEventListener('click', () => {
    goo.open()
});
formUser.addEventListener('submit', saveUserProfileChanges);
// formCard.addEventListener('submit', saveCard);
// popupMainImage.querySelector('.popup__close_type_card').addEventListener('click', boo.close.bind(this));
const validationUser = new FormValidator(popupUser, validationObject);
validationUser.enableValidation();
const validationCard = new FormValidator(popupAddCard, validationObject);
validationCard.enableValidation();
// setPopupsCloseEventListener();

const cardList = new Section({
    items: initialCards,
     renderer: (place) => {
        const card = new Card(sampleCard, place.name, place.link, handleOpenPopup);
        return card
     }
    }, cardsSelctor);
cardList.renderItem()

