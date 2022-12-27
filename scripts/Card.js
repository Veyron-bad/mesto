import { openPopup } from './untils.js';
import { popupTypeImageZoom, imageZoom, imageTitle } from './constants.js'

export class Card {
    constructor(data, cardTemplateSelector) {
        this._link = data.link;
        this._name = data.name;
        this._imageAlt = data.name;

        this._cardTemplateSelector = document.querySelector(cardTemplateSelector).content.querySelector('.element');
    }

    createCard() {
        this._cardElement = this._cardTemplateSelector.cloneNode(true);

        this._image = this._cardElement.querySelector('.element__image');
        this._title = this._cardElement.querySelector('.element__title');
        this._buttonDelete = this._cardElement.querySelector('.element__delete');
        this._buttonLike = this._cardElement.querySelector('.element__like');

        this._image.src = this._link;
        this._image.alt = this._imageAlt;
        this._title.textContent = this._name;

        this._setEventListeners();

        return this._cardElement;
    }

    _setEventListeners() {

        this._buttonDelete.addEventListener('click', this._deleteCard);

        this._buttonLike.addEventListener('click', this._toogleLike);

        this._image.addEventListener('click', this._zoomImage);
    }

    _deleteCard = () => {
        this._cardElement.remove();
        this._cardElement = null;
    }

    _toogleLike = () => {
        this._buttonLike.classList.toggle('element__like_active');
    }

    _zoomImage = () => {
        imageZoom.src = this._image.src;
        imageTitle.textContent = this._image.alt;
        imageZoom.alt = this._image.alt;

        openPopup(popupTypeImageZoom);
    }
}
