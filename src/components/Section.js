export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._rendererItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    setItem(element) {
        this._container.prepend(element);
    }

    clear() {
        this._container.innerHTML = '';
    }

    renderItems() {
        this._rendererItems.forEach((item) => {
            const cardElement = this._renderer(item);

            this.setItem(cardElement)
        })
    }
}