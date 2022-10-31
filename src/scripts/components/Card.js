 export default class Card {
    
    constructor (place, userId, sampleCard, handleOpenPopup, confrimDelete, handlerLikeClick) {
        this._handleOpenPopup = handleOpenPopup
        this._card = document.querySelector(sampleCard).content.querySelector('.place').cloneNode(true);
        this._cardName = place.name;
        this._cardInfo = place.link;
        this._likes = place.likes;
        this._owner = place.owner._id;
        this._cardId = place._id;
        this._cardImage = this._card.querySelector('.place__image');
        this._cardLike = this._card.querySelector('.place__like');
        this._cardLikeCounter = this._card.querySelector('.place__like-counter');
        this.userId = userId;
        this.confrimDelete = confrimDelete
        this.handlerLikeClick = handlerLikeClick
    }
    createCard () {
        if (this._owner !== this.userId) {
            this._card.querySelector('.place__trash').classList.add('place__trash_inactive')
        }
        this._card.querySelector('.place__trash').addEventListener('click', () => {
            this.confrimDelete(this)
        });
        this._cardLike.addEventListener('click', () => this.handlerLikeClick(this));
        if (this._likes) {
            this._likes.forEach(user => {
                if(user._id === this.userId) {
                    this._cardLike.classList.add('place__like_active');
                }
            })
        }
        this._cardImage.addEventListener('click', e =>  this._handleOpenPopup(this._cardName, this._cardInfo));
        this._card.querySelector('.place__title').textContent = this._cardName;
        this._cardLikeCounter.textContent = this._likes.length;
        this._cardImage.src = this._cardInfo;
        this._cardImage.alt = this._cardName;
        return this._card;
    }
     deleteCard () {
        this._card.remove();
    }
}
