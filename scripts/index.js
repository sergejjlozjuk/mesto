const changeButton = document.querySelector('.user__change-button');
const popupUser = document.querySelector('.popup_type_user');
const closeButton = document.querySelector('.popup__close');
const form = document.querySelector('.form');
const formName = document.querySelector('.form__input_type_name');
const formInfo = document.querySelector('.form__input_type_info');
const userName = document.querySelector('.user__name');
const userInfo = document.querySelector('.user__info');

function openPopup (popup) {
    popup.classList.remove('popup_inactive');
    popup.classList.add('popup_active');
}
function changeName () {
 formName.value = userName.textContent;
 formInfo.value = userInfo.textContent;
}
changeButton.addEventListener('click', function () {
    changeName();
    openPopup(popupUser);
});

function closePopup (popup) {
    popup.classList.add('popup_inactive');
    setTimeout(() => popup.classList.remove('popup_active'), 950) ;
}
closeButton.addEventListener('click', () => closePopup(popupUser));

function saveChanges (evt) {
    evt.preventDefault();
    userName.textContent = formName.value;
    userInfo.textContent = formInfo.value;
    closePopup(popupUser);
}
form.addEventListener('submit', saveChanges);

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
     }
  ];


const cards = document.querySelector('.places');
const popupAddCard = document.querySelector('.popup_type_card');
const formCard = document.querySelector('.form_type_card');
const addButton = document.querySelector('.user__add-button');
const closeCardPopup = document.querySelector('.popup__close_type_card');

function clearInput () {
    popupAddCard.querySelector('.form__input_type_name').value = null;
    popupAddCard.querySelector('.form__input_type_info').value = null;
}
closeCardPopup.addEventListener('click', function() {
    closePopup(popupAddCard);
    clearInput();
});

function renderCards (cardsArray) {
    const sampleCard = document.querySelector('#tmpl').content;
    cardsArray.forEach((place) => {
        const card = sampleCard.querySelector('.place').cloneNode(true);
        card.querySelector('.place__title').textContent = place.name;
        card.querySelector('.place__image').src = place.link;
        cards.append(card);
    });
}
renderCards(initialCards);

addButton.addEventListener('click', () => openPopup(popupAddCard));

function saveCard (evt) {
    evt.preventDefault();
    const sampleCard = document.querySelector('#tmpl').content;
    const card = sampleCard.querySelector('.place').cloneNode(true);
    card.querySelector('.place__title').textContent = popupAddCard.querySelector('.form__input_type_name').value;
    card.querySelector('.place__image').src = popupAddCard.querySelector('.form__input_type_info').value;
    cards.prepend(card);
    closePopup(popupAddCard);
    clearInput();
}
formCard.addEventListener('submit', saveCard);

cards.addEventListener('click', (evt) => liked(evt.target));
function liked (elem) {
   if (elem.classList.contains('place__like')) {
    elem.classList.toggle('place__like_active');
   } else{
    return;
   }
}
cards.addEventListener('click', (evt) => deleteCard(evt.target));
function deleteCard (elem){
   if (elem.classList.contains('place__trash')){
    elem.parentElement.remove();
   } else {
    return;
   }
}
cards.addEventListener('click', (evt) => openImage(evt.target));

function openImage (elem) {
    let popupMainImage = document.querySelector('.popup_type_open-image');
   if (elem.classList.contains('place__image')) {
        openPopup(popupMainImage);
    } else {
        return;
    }
    popupMainImage.querySelector('.popup__main-image').src = elem.src;
    popupMainImage.querySelector('.popup__image-title').textContent = elem.parentElement.querySelector('.place__title').textContent;
    popupMainImage.querySelector('.popup__close_type_card').addEventListener('click', () => closePopup(popupMainImage));
}

