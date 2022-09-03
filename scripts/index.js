const buttonchange = document.querySelector('.user__change-button');
const buttonAdd = document.querySelector('.user__add-button');
const buttonClose = document.querySelector('.popup__close');
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

function openPopup (popup) {
    popup.classList.remove('popup_inactive');
    popup.classList.add('popup_active');
}
function changeName () {
 formName.value = userName.textContent;
 formInfo.value = userInfo.textContent;
}
function closePopup (popup) {
    popup.classList.add('popup_inactive');
    setTimeout(() => popup.classList.remove('popup_active'), 950) ;
}
function saveChanges (evt) {
    evt.preventDefault();
    userName.textContent = formName.value;
    userInfo.textContent = formInfo.value;
    closePopup(popupUser);
}
function clearInput () {
    popupAddCard.querySelector('.form__input_type_name').value = '';
    popupAddCard.querySelector('.form__input_type_info').value = '';
}
function renderCards (card) {
    if (card === undefined){
            initialCards.forEach((place) => {
            const card = createCard();
            card.querySelector('.place__title').textContent = place.name;
            card.querySelector('.place__image').src = place.link;
            card.querySelector('.place__image').alt = place.name;
            cards.prepend(card);
        });
    } else {
        cards.prepend(card);
    } 

}
function createCard () {
    const sampleCard = document.querySelector('#tmpl').content;
    const card = sampleCard.querySelector('.place').cloneNode(true);
    card.querySelector('.place__trash').addEventListener('click', () => deleteCard(card));
    card.querySelector('.place__like').addEventListener('click', () => handlerLikeClick(card));
    card.querySelector('.place__image').addEventListener('click', e =>  openImage(e.target));
    return card
}
function deleteCard (card) {
    card.remove();
}
function handlerLikeClick (card) {
    card.querySelector('.place__like').classList.toggle('place__like_active');
}
function saveCard (evt) {
    evt.preventDefault();
    const card = createCard();
    card.querySelector('.place__title').textContent = popupAddCard.querySelector('.form__input_type_name').value;
    card.querySelector('.place__image').src = popupAddCard.querySelector('.form__input_type_info').value;
    card.querySelector('.place__image').alt = popupAddCard.querySelector('.form__input_type_name').value;
    renderCards(card);
    closePopup(popupAddCard);
    clearInput();
}
function openImage (card) {
    openPopup(popupMainImage);
    popupMainImage.querySelector('.popup__main-image').src = card.src;
    popupMainImage.querySelector('.popup__image-title').textContent = card.alt;
}
buttonchange.addEventListener('click', function () {
    changeName();
    openPopup(popupUser);
});
buttonClose.addEventListener('click', () => closePopup(popupUser));
buttonCloseCardPopup.addEventListener('click', function() {
    closePopup(popupAddCard);
    clearInput();
});
buttonAdd.addEventListener('click', () => openPopup(popupAddCard));
formUser.addEventListener('submit', saveChanges);
formCard.addEventListener('submit', saveCard);
popupMainImage.querySelector('.popup__close_type_card').addEventListener('click', () => closePopup(popupMainImage));
renderCards();
