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
    profile
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

const formAddCard = new PopupWithForm({
    popupSelector: popupAddCardSelector, submitForm: (dataForm) => {
        const formInputValue = [{
            name: dataForm.inputTitle,
            link: dataForm.inputUrl
        }];

        const userCard = new Section({
            items: formInputValue, renderer: (item) => {
                const card = new Card(item, '#template-card', () => {
                    popupWithImage.open(item);
                });
                const elementCard = card.createCard();
                userCard.setItem(elementCard);
            }
        }, cardContainerSelector);

        userCard.renderItems();

        formAddCard.close();
    }
});

formAddCard.setEventListeners();

// Открытия формы добавления карточки
buttonAddCard.addEventListener('click', () => {
    formAddCard.open();
});

//Открытие картинки
const popupWithImage = new PopupWithImage('.popup_type_zoom');

popupWithImage.setEventListeners();

const cardContainerSelector = '.elements';

// Инициализация карточка
const defaultCardList = new Section({
    items: initialCards, renderer: (item) => {
        const card = new Card(item, '#template-card', () => {
            popupWithImage.open(item);
        });
        const elementCard = card.createCard();
        defaultCardList.setItem(elementCard);
    }
}, cardContainerSelector);

defaultCardList.renderItems();

