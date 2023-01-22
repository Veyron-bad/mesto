export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export const profile = document.querySelector('.profile');
export const profileNameSelector = '.profile__name';
export const profileProfessionSelector = '.profile__profession';
export const popupEditProfileSelector = '.popup_type_editProfile';
export const buttonEditProfile = profile.querySelector('.profile__button-edit');
export const popupEditProfile = document.querySelector('.popup_type_editProfile');
export const inputProfileName = popupEditProfile.querySelector('.popup__input_type_name');
export const inputProfileProfession = popupEditProfile.querySelector('.popup__input_type_profession');
export const popupFormEditProfile = document.forms['profileFormEditing'];
export const popupFormAddCard = document.forms['addCards'];

