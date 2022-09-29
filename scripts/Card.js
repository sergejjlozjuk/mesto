 export class Card {
    
    constructor (sampleCard, name, link, handleOpenPopup) {
        this._handleOpenPopup = handleOpenPopup
        this._card = sampleCard.content.querySelector('.place').cloneNode(true);
        this._cardName = name;
        this._cardInfo = link;
        this._cardImage = this._card.querySelector('.place__image');
        this._cardLike = this._card.querySelector('.place__like');
    }
    createCard () {
        this._card.querySelector('.place__trash').addEventListener('click', () => this._deleteCard(this._card));
        this._cardLike.addEventListener('click', () => this._handlerLikeClick());
        this._cardImage.addEventListener('click', e =>  this._handleOpenPopup(this._cardName, this._cardInfo));
        this._card.querySelector('.place__title').textContent = this._cardName;
        this._cardImage.src = this._cardInfo;
        this._cardImage.alt = this._cardName;
        this._card.querySelector('.place__title').textContent = this._cardName;
        return this._card;
    }
     _handlerLikeClick () {
        this._cardLike.classList.toggle('place__like_active');
    }
     _deleteCard (card) {
        card.remove();
    }
}
