import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor (Popup) {
        super(Popup)
        this.mainImage = this._popup.querySelector('.popup__main-image');
        this.mainImageTitle = this._popup.querySelector('.popup__image-title');
    }
    open (name, link) {
        this.mainImage.src = link;
        this.mainImage.alt = name;
        this.mainImageTitle.textContent = name;
        super.open()
    }
}
