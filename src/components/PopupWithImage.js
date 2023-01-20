import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupCardImage = this._popup.querySelector('.popup__image');
        this._popupCardTitle = this._popup.querySelector('.popup__caption');
    }

    open(item) {
        this._popupCardImage.src = item.link;
        this._popupCardImage.alt = item.name;
        this._popupCardTitle.textContent = item.name;

        super.open();
    }
}