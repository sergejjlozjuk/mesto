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
const cardName = popupAddCard.querySelector('.form__input_type_name');
const cardInfo = popupAddCard.querySelector('.form__input_type_info');
const userName = document.querySelector('.user__name');
const userInfo = document.querySelector('.user__info');
const cards = document.querySelector('.places');
const openedImage =  popupMainImage.querySelector('.popup__main-image');
const openedImageTitle = popupMainImage.querySelector('.popup__image-title');


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
    // disabledButton(popup);
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
            const card = createCard(place);
            cards.prepend(card);
        });
    } else {
        cards.prepend(card);
    } 
}
function createCard (place) {
    const sampleCard = document.querySelector('#tmpl').content;
    const card = sampleCard.querySelector('.place').cloneNode(true);
    const cardImage = card.querySelector('.place__image');
    card.querySelector('.place__trash').addEventListener('click', () => deleteCard(card));
    card.querySelector('.place__like').addEventListener('click', () => handlerLikeClick(card));
    card.querySelector('.place__image').addEventListener('click', e =>  openImage(e.target));
    card.querySelector('.place__title').textContent = cardName.value;
    card.querySelector('.place__image').src = cardInfo.value;
    card.querySelector('.place__image').alt = cardName.value;
    if (place !== undefined) {
    card.querySelector('.place__title').textContent = place.name;
    cardImage.src = place.link;
    cardImage.alt = place.name;
    return card
    }
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
    renderCards(card);
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
    changeName();
    openPopup(popupUser);
});
buttonCloseEditProfile.addEventListener('click', () => closePopup());
buttonCloseCardPopup.addEventListener('click', function() {
    closePopup();
    formCard.reset()
});
buttonAdd.addEventListener('click', () => openPopup(popupAddCard));
formUser.addEventListener('submit', saveChanges);
formCard.addEventListener('submit', saveCard);
popupMainImage.querySelector('.popup__close_type_card').addEventListener('click', () => closePopup());
setEventListener();
renderCards();