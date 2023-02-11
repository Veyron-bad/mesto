export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._submitButton = this._popup.querySelector('.popup__button-save');
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

    setButtonText(text) {
        this._submitButton.textContent = text;
    }



    setEventListeners() {
        const closeButtons = this._popup.querySelector('.popup__button-close');

        closeButtons.addEventListener('click', () => {
            this.close();
        });

        this._popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
            }
        })
    }
}