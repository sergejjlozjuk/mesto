export default class Section {
    constructor({renderer}, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
    }
    renderItem (cards) {
            cards.forEach((place) => {
                this.addItem(this._renderer(place))
            })
    }
    addItem (elem) {
        this._container.prepend(elem)
    }
}