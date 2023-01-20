export class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        this._buttonElement = this._form.querySelector(this._config.submitButtonSelector);
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

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._config.inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', true);
        } else {
            this._buttonElement.classList.remove(this._config.inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
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
        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(this._config.inactiveButtonClass);
            });
        });
    };

    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    };

    _disabledButton() {
        this._buttonElement.setAttribute('disabled', true);
        this._buttonElement.classList.add(this._config.inactiveButtonClass);
    }

    _resetErrorMessage() {
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
    }
}