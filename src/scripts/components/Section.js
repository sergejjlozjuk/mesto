export default class Section {
    constructor({getItems, renderer}, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._getItems = getItems;
        this._renderer = renderer;
    }
    renderItem () {
        this._getItems
        .then(res => {
            res.forEach((place) => {
                this.addItem(this._renderer(place).createCard())
            });
        })
    }
    addItem (elem) {
        this._container.prepend(elem)
    }
}