export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add('popup_opened');

        document.addEventListener('keyup', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');

        document.removeEventListener('keyup', this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        const esc = 'Escape';
        if (evt.key === esc) {
            this.close();
        }
    }

    setEventListeners() {
        const closeButton = this._popup.querySelector('.popup__button-close');

        closeButton.addEventListener('click', () => {
            this.close();
        });

        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
            }
        })
    }
}