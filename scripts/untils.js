import { esc } from './constants.js';

export function openPopup(popup) {
    popup.classList.add('popup_opened');

    document.addEventListener('keyup', handlerEscUp);
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', handlerEscUp);
}

export const handlerEscUp = (evt) => {
    if (evt.key === esc) {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
    }
};

