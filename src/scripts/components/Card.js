 export class Card {
    
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
        this._cardLike.addEventListener('click', () => this.handlerLikeClick());
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
    // handlerLikeClick () {
    //     this._cardLike.classList.toggle('place__like_active');
    //     if(this._cardLike.classList.contains('place__like_active')) {
    //         fetch(`https://mesto.nomoreparties.co/v1/cohort-52/cards/${this._cardId}/likes`, {
    //             method: 'PUT',
    //             headers: {
    //                 authorization: 'dfaf14aa-f273-4bf7-9d80-4b98802a6803'
    //             }
    //         })
    //         .then(res => res.json())
    //         .then(res => {
    //             this._cardLikeCounter.textContent = res.likes.length
    //         })
    //         .catch(err => console.log(err))
    //     } else {
    //         fetch(`https://mesto.nomoreparties.co/v1/cohort-52/cards/${this._cardId}/likes`, {
    //             method: 'DELETE',
    //             headers: {
    //                 authorization: 'dfaf14aa-f273-4bf7-9d80-4b98802a6803'
    //             }
    //         })
    //         .then(res => res.json())
    //         .then(res => {
    //             this._cardLikeCounter.textContent = res.likes.length
    //         })
    //         .catch(err => console.log(err))
    //     }
    // }
     deleteCard () {
        this._card.remove();
        this._card = null;
    }
}
