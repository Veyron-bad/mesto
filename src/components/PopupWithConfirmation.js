import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
    constructor( { popupSelector, submit } ) {
        super(popupSelector)
        this._form = this._popup.querySelector('.popup__form');
        this._submitForm = submit;
        this._submitButton = this._popup.querySelector('.popup__button-save');
    }

    setHandlerSubmit(submit) {
        this._submitForm = submit;
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            this._submitForm();
        });
    }

    setButtonText(text) {
        this._submitButton.textContent = text;
    }
}