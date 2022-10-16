import { Popup } from "./Popup.js";

export default class PopupWithImage extends Popup {
    open (name, link) {
        const mainImage = this._popup.querySelector('.popup__main-image');
        const mainImageTitle = this._popup.querySelector('.popup__image-title');
        mainImage.src = link;
        mainImage.alt = name;
        mainImageTitle.textContent = name;
        super.open()
    }
}
