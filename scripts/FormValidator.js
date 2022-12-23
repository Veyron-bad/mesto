export class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);

        inputElement.classList.add(this._config.inputErrorClass);
        errorElement.classList.add(this._config.errorClass);
        errorElement.textContent = errorMessage;
    };

    _hideInputError(inputElement) {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);

        inputElement.classList.remove(this._config.inputErrorClass);
        errorElement.classList.remove(this._config.errorClass);
        errorElement.textContent = '';
    };

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._config.inactiveButtonClass);
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove(this._config.inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        }
    };

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _setEventListeners() {
        const inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        const buttonElement = this._form.querySelector(this._config.submitButtonSelector);

        this._toggleButtonState(inputList, buttonElement);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, buttonElement, this._config.inactiveButtonClass);
            });
        });
    };

    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    };

    disabledButton() {
        const buttonElement = this._form.querySelector(this._config.submitButtonSelector);
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add(this._config.inactiveButtonClass);
    }
}