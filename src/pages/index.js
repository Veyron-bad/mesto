import './index.css';
import { FormValidator } from '../components/FormValidator.js';
import {
    configValidation,
    popupFormEditProfile,
    popupFormAddCard,
    popupEditProfileSelector,
    profileNameSelector,
    profileProfessionSelector,
    buttonEditProfile,
    profile,
    popupConfirmDelete,
    buttonChangeAvatar,
    popupEditAvatar,
    userAvatarSelector,
    popupFormEditAvatar
} from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
    headers: {
        authorization: '410c2647-5135-422a-842e-d6b96469b875',
        'Content-Type': 'application/json'
    }
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cardData]) => {
        userId = userData._id;
        userInfo.setUserInfo(userData);
        cardSection.renderItems(cardData);

    })

    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    });

let userId;

const cardContainerSelector = '.elements';

const validationAddCardForm = new FormValidator(configValidation, popupFormAddCard);
validationAddCardForm.enableValidation();

const profileEditingFormValidation = new FormValidator(configValidation, popupFormEditProfile);
profileEditingFormValidation.enableValidation();

const editProfileAvatarFormValidation = new FormValidator(configValidation, popupFormEditAvatar);
editProfileAvatarFormValidation.enableValidation();

const userInfo = new UserInfo({ userNameSelector: profileNameSelector, userInfoSelector: profileProfessionSelector, userAvatarSelector: userAvatarSelector });

const popupWithImage = new PopupWithImage('.popup_type_zoom');
popupWithImage.setEventListeners();

const popupWithConfirmation = new PopupWithConfirmation({ popupSelector: popupConfirmDelete });
popupWithConfirmation.setEventListeners();

const createCard = (item) => {
    const card = new Card({
        data: item,
        cardTemplateSelector: '#template-card',
        handleCardClick: () => {
            popupWithImage.open(item);
        },
        handleDeleteCard: () => {
            popupWithConfirmation.open();
            popupWithConfirmation.setHandlerSubmit(() => {
                popupWithConfirmation.setButtonText('Удаление...');
                api.deleteCard(item._id)
                    .then(() => {
                        card.deleteCard();
                        popupWithConfirmation.close();
                    })

                    .catch((err) => {
                        console.log(`Возникла ошибка при удалении карточки ${err}`);
                    })

                    .finally(() => {
                        popupWithConfirmation.setButtonText('Да');
                    })
            })
            popupWithConfirmation.open();
        },
        handelLikeClick: (card) => {
            const resultFindMyId = card.findMyLike();
            const cardId = card.getCardId();
            if (resultFindMyId) {
                api.deleteLike(cardId)
                    .then((res) => {
                        card.updateLike(res);
                    })

                    .catch((err) => {
                        console.log(`Возникла ошибка с Like: ${err}`);
                    })
            } else {
                api.addLike(cardId)
                    .then((res) => {
                        card.updateLike(res);
                    })

                    .catch((err) => {
                        console.log(`Возникла ошибка с Like: ${err}`);
                    })
            }
        }
    },
        userId
    );

    const cardElement = card.generatCard();

    return cardElement;
}

const cardSection = new Section({ renderer: createCard }, cardContainerSelector);

// //Открытие формы редактирования профиля
const formEditProfile = new PopupWithForm({
    popupSelector: popupEditProfileSelector, submitForm: (dataForm) => {
        formEditProfile.setButtonText('Сохранение...');

        api.editProfileInfo(dataForm)
            .then((res) => {
                userInfo.setUserInfo(res);
                formEditProfile.close();
            })

            .catch((err) => {
                console.log(`Ошибка редактирования профиля ${err}`)
            })

            .finally(() => {
                formEditProfile.setButtonText('Сохранить');
            })
    }
});

formEditProfile.setEventListeners();

buttonEditProfile.addEventListener('click', () => {
    formEditProfile.open();
    profileEditingFormValidation.resetValidation();

    const userItem = userInfo.getUserInfo();

    formEditProfile.setInputValues(userItem);
});

// Открытие формы редактирования аватарки
const formEditAvatar = new PopupWithForm({
    popupSelector: popupEditAvatar,
    submitForm: (dataForm) => {
        formEditAvatar.setButtonText('Загрузка...');

        api.editProfileAvatar(dataForm)
            .then((res) => {
                userInfo.setUserInfo(res);
                formEditAvatar.close();
            })

            .catch((err) => {
                console.log(`Ошибка загрузки аватарки ${err}`)
            })

            .finally(() => {
                formEditAvatar.setButtonText('Сохранить');
            })
    }
});

formEditAvatar.setEventListeners();

buttonChangeAvatar.addEventListener('click', () => {
    formEditAvatar.open();
    editProfileAvatarFormValidation.resetValidation();
});

// Добавление карточек
const popupAddCardSelector = '.popup_type_addCards';
const buttonAddCard = profile.querySelector('.profile__button-add');

const formAddCard = new PopupWithForm({
    popupSelector: popupAddCardSelector, submitForm: (dataForm) => {
        formAddCard.setButtonText('Загрузка...');

        api.addCard(dataForm)
            .then((res) => {
                cardSection.setItem(createCard(res));
                formAddCard.close();
            })

            .catch((err) => {
                console.log(`Ошибка добавления карточки ${err}`)
            })

            .finally(() => {
                formAddCard.setButtonText('Создать');
            })
    }
});

formAddCard.setEventListeners();

// Открытия формы добавления карточки
buttonAddCard.addEventListener('click', () => {
    formAddCard.open();
    validationAddCardForm.resetValidation();
});