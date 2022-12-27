import { openPopup, closePopup } from './untils.js';
import { FormValidator } from './FormValidator.js';
import { initialCards, configValidation } from './constants.js';
import { Card } from './Card.js';

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileProfession = profile.querySelector('.profile__profession');
const buttonEditProfile = profile.querySelector('.profile__button-edit');
const popupEditProfile = document.querySelector('.popup_type_editProfile');

const inputProfileName = popupEditProfile.querySelector('.popup__input_type_name');
const inputProfileProfession = popupEditProfile.querySelector('.popup__input_type_profession');

const popupFormEditProfile = document.forms['profileFormEditing'];
const popupFormAddCard = document.forms['addCards'];

const profileEditingFormValidation = new FormValidator(configValidation, popupFormEditProfile);
const validationAddCardForm = new FormValidator(configValidation, popupFormAddCard);

profileEditingFormValidation.enableValidation();
validationAddCardForm.enableValidation();

// Функция открытия формы редактирования
function openFormEditProfile() {
    profileEditingFormValidation._resetErrorMessage();
    openPopup(popupEditProfile);
    inputProfileName.value = profileName.textContent;
    inputProfileProfession.value = profileProfession.textContent;
}

// Слушатель открытия формы редактирования
buttonEditProfile.addEventListener('click', openFormEditProfile);

const closeButtons = document.querySelectorAll('.popup__button-close');

closeButtons.forEach(function (button) {
    const popup = button.closest('.popup');

    button.addEventListener('click', () => closePopup(popup));
})

//Функция закрытия формы редактирования профиля
function closeFormEditProfile() {
    closePopup(popupEditProfile);
}

// Функция сохранения формы редактирования профиля
function submitEditProfileForm(evt) {
    evt.preventDefault();

    profileName.textContent = inputProfileName.value;
    profileProfession.textContent = inputProfileProfession.value;

    closeFormEditProfile();
};

//Закрытие popup по нажатию за пределами формы
const handlerClickOverlay = (evt) => {
    const activePopup = document.querySelector('.popup_opened');
    if (evt.target === activePopup) {
        closePopup(activePopup);
    }
};

document.addEventListener('mousedown', handlerClickOverlay);

//Слушатель сохранения формы редактирования профиля
popupFormEditProfile.addEventListener('submit', submitEditProfileForm);

const popupAddCard = document.querySelector('.popup_type_addCards');
const buttonAddCard = profile.querySelector('.profile__button-add');

// Функция открытия формы добавления карточки
function openFormAddCard() {
    validationAddCardForm._disabledButton();
    validationAddCardForm._resetErrorMessage();
    openPopup(popupAddCard);
};

//Cлушатели открытия и закрытия формы добавления карточки
buttonAddCard.addEventListener('click', openFormAddCard);

const cardsSection = document.querySelector('.elements');

// Функция добавления карточки
function addCard(data, wrapElement) {
    const card = new Card(data, '#template-card');
    const elementCard = card.createCard();
    wrapElement.prepend(elementCard);
}

function renderCards() {
    initialCards.forEach((data) => {
        addCard(data, cardsSection);
    });
}

renderCards();

const inputTitleFormAddCard = document.querySelector('.popup__input_type_title');
const inputUrlFormmAddCard = document.querySelector('.popup__input_type_url');

function submitAddCardForm(evt) {
    evt.preventDefault();

    const elementCard = {
        name: inputTitleFormAddCard.value,
        link: inputUrlFormmAddCard.value
    };

    addCard(elementCard, cardsSection);

    closePopup(popupAddCard);

    evt.target.reset();
}

// Слушатель сохранения формы добавления карточки
popupAddCard.addEventListener('submit', submitAddCardForm);
