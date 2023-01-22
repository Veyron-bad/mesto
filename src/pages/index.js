import './index.css';
import { FormValidator } from '../components/FormValidator.js';
import {
    initialCards,
    configValidation,
    popupFormEditProfile,
    popupFormAddCard,
    popupEditProfileSelector,
    profileNameSelector,
    profileProfessionSelector,
    buttonEditProfile,
    profile,
    inputProfileName,
    inputProfileProfession
} from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const profileEditingFormValidation = new FormValidator(configValidation, popupFormEditProfile);
profileEditingFormValidation.enableValidation();

//Открытие формы редактирования
const formEditProfile = new PopupWithForm({
    popupSelector: popupEditProfileSelector, submitForm: (dataForm) => {
        userData.setUserInfo(dataForm);
        formEditProfile.close();
    }
});

formEditProfile.setEventListeners();

const userData = new UserInfo({ userNameSelector: profileNameSelector, userInfoSelector: profileProfessionSelector });

// Открытия формы редактирования
buttonEditProfile.addEventListener('click', () => {
    formEditProfile.open();

    const userInfo = userData.getUserInfo();

    inputProfileName.value = userInfo.userName;
    inputProfileProfession.value = userInfo.userInfo;
});

// Добавление карточек
const popupAddCardSelector = '.popup_type_addCards';
const buttonAddCard = profile.querySelector('.profile__button-add');

const validationAddCardForm = new FormValidator(configValidation, popupFormAddCard);
validationAddCardForm.enableValidation();

const createCard = (item) => {
    const card = new Card({ data: item }, '#template-card', () => {
        popupWithImage.open(item);
    });

    const cardElement = card.generatCard();

    return cardElement;
}

const cardContainerSelector = '.elements';

const cardSection = new Section({ items: initialCards, renderer: createCard }, cardContainerSelector);
cardSection.renderItems();

const formAddCard = new PopupWithForm({
    popupSelector: popupAddCardSelector, submitForm: (dataForm) => {
        const formInputValue = {
            name: dataForm.inputTitle,
            link: dataForm.inputUrl
        };

        cardSection.setItem(createCard(formInputValue));

        formAddCard.close();
    }
});

formAddCard.setEventListeners();

// Открытия формы добавления карточки
buttonAddCard.addEventListener('click', () => {
    formAddCard.open();
    validationAddCardForm.enableValidation();
});

//Открытие картинки
const popupWithImage = new PopupWithImage('.popup_type_zoom');

popupWithImage.setEventListeners();