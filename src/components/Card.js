export default class Card {
    constructor({ data, cardTemplateSelector, handleCardClick, handleDeleteCard, handelLikeClick }, userId) {
        this._link = data.link;
        this._name = data.name;
        this._imageAlt = data.name;
        this._userId = userId;
        this._cardId = data._id;
        this._likes = data.likes;
        this._owner = data.owner;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCard = handleDeleteCard;
        this._handelLikeClick = handelLikeClick;

        this._cardTemplateSelector = document.querySelector(cardTemplateSelector).content.querySelector('.element');
    }

    generatCard() {
        this._cardElement = this._cardTemplateSelector.cloneNode(true);

        this._image = this._cardElement.querySelector('.element__image');
        this._title = this._cardElement.querySelector('.element__title');
        this._buttonDeleteCard = this._cardElement.querySelector('.element__delete');
        this._buttonLike = this._cardElement.querySelector('.element__like');
        this._countLike = this._cardElement.querySelector('.element__like-counter');

        this._setEventListeners();
        this._hideDeleteButton();
        this._checkMyLike();

        this._image.src = this._link;
        this._image.alt = this._imageAlt;
        this._title.textContent = this._name;
        this._countLike.textContent = this._likes.length;

        return this._cardElement;
    }

    _setEventListeners() {

        this._buttonDeleteCard.addEventListener('click', () => {
            this._handleDeleteCard();
        });

        this._buttonLike.addEventListener('click', () => {
            this._handelLikeClick(this);
        });

        this._image.addEventListener('click', () => {
            this._handleCardClick();
        });
    }

    getCardId() {
        return this._cardId;
    }

    deleteCard = () => {
        this._cardElement.remove();
        this._cardElement = null;
    }

    _toogleLike = () => {
        this._buttonLike.classList.toggle('element__like_active');
    }

    _hideDeleteButton() {
        if (this._owner._id !== this._userId) {
            this._buttonDeleteCard.remove();
        }
    }

    _checkMyLike() {
        if (this.findMyLike()) {
            this._buttonLike.classList.add('element__like_active');
        }
    }

    findMyLike() {
        const isLike = this._likes.some((element) => {
            return element._id === this._userId
        })

        return isLike;
    }

    updateLike(res) {
        this._toogleLike();
        this._likes = res.likes
        this._countLike.textContent = this._likes.length;

    }

}
