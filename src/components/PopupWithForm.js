import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, submitForm }) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._submitForm = submitForm;
        this._submitButton = this._popup.querySelector('.popup__button-save');
    }

    _getInputValues() {
        this._inputValues = {};

        this._inputList.forEach((input) => {
            this._inputValues[input.name] = input.value;
        });

        return this._inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            this._submitForm(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

    setButtonText(text) {
        this._submitButton.textContent = text;
    }

    setInputValues(data) {
        this._inputList.forEach((input) => {
            input.value = data[input.name];
        })
    }
}