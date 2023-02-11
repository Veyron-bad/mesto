export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    setItem(element) {
        this._container.prepend(element);
    }

    clear() {
        this._container.innerHTML = '';
    }

    renderItems(items) {
        items.forEach((item) => {
            const cardElement = this._renderer(item);

            this.setItem(cardElement)
        })
    }
}