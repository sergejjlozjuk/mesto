 class Card {
    
    constructor () {
        this.sampleCard = document.querySelector('#tmpl').content;
        this.card = this.sampleCard.querySelector('.place').cloneNode(true);
        this.cardImage = this.card.querySelector('.place__image');
    }
    CreateCard (place) {
        this.card.querySelector('.place__trash').addEventListener('click', () => this._deleteCard(this.card));
        this.card.querySelector('.place__like').addEventListener('click', () => this._handlerLikeClick());
        this.card.querySelector('.place__image').addEventListener('click', e =>  openImage(e.target));
        this.card.querySelector('.place__title').textContent = cardName.value;
        this.card.querySelector('.place__image').src = cardInfo.value;
        this.card.querySelector('.place__image').alt = cardName.value;
        if (place !== undefined) {
        this.card.querySelector('.place__title').textContent = place.name;
        this.cardImage.src = place.link;
        this.cardImage.alt = place.name;
        return this.card
        }
        return this.card
    }
     _handlerLikeClick () {
        this.card.querySelector('.place__like').classList.toggle('place__like_active');
    }
     _deleteCard (card) {
        this.card.remove();
    }
}
