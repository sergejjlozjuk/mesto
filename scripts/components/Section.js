export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._items = items;
        this._renderer = renderer;
    }
    renderItem () {
        this._items.forEach((place) => {
            this._addItem(this._renderer(place).createCard())
        });
    }
    _addItem (elem) {
        this._container.append(elem)
    }
}