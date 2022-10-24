/*Массивы*/

const initialCards = [
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

/* Большие блоки*/
const profile = document.querySelector('.profile');
const popupEditProfile = document.querySelector('.popup_type_editProfile');
const popupAddCard = document.querySelector('.popup_type_addCards');




/*Элементы блока profile*/

const buttonEditProfile = profile.querySelector('.profile__button-edit');
const profileName = profile.querySelector('.profile__name');
const profileProfession = profile.querySelector('.profile__profession');
const buttonAddCard = profile.querySelector('.profile__button-add');


/*Элементы popup редактирования профиля*/

const popupFormEditProfile = popupEditProfile.querySelector('.popup__form');
const inputProfileName = popupEditProfile.querySelector('.popup__input_type_name');
const inputProfileProfession = popupEditProfile.querySelector('.popup__input_type_profession');
const buttonSaveFormEditProfile = popupEditProfile.querySelector('.popup__button-save');
const buttonCloseFormEditProfile = popupEditProfile.querySelector('.popup__button-close');

/*Элементы popup добавление карточки*/

const popupFormAddCard = popupAddCard.querySelector('.popup__form');
const inputCardTitle = popupAddCard.querySelector('.popup__input_type_title');
const inputCardUrl = popupAddCard.querySelector('.popup__input_type_url');


const buttonCloseFormAddCard = popupAddCard.querySelector('.popup__button-close');

/*Элементы карточки

const buttonLikeCard = document.querySelector('.element__like');
const buttonDeleteCard = document.querySelector('.element__delete');*/


/*Функции работы формы редактирования профиля*/

function openFormEditProfile() {
    popupEditProfile.classList.add('popup_opened');
    inputProfileName.value = profileName.textContent;
    inputProfileProfession.value = profileProfession.textContent;
}

function closeFormEditProfile() {
    popupEditProfile.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent = inputProfileName.value;
    profileProfession.textContent = inputProfileProfession.value;

    closeFormEditProfile();
}

/*Добавление карточек при старте*/

const sectionCard = document.querySelector('.elements'); /* Секция карточек*/
const cardTemplate = document.querySelector('#template-card').content; /*Шаблон под карточка*/

function renderingCard() {
  initialCards.forEach(renderItem);
}

function renderItem(element) {
  const Card = cardTemplate.querySelector('.element').cloneNode(true);
  const image = Card.querySelector('.element__image');
  const title = Card.querySelector('.element__title');

  title.textContent = element.name;
  image.src = element.link;

  setListenerForButton(Card);
  sectionCard.append(Card);

}

//Навешываем слушатель
function setListenerForButton(element) {
//element - это карточка с кнопками
  const buttonDeleteCard = element.querySelector('.element__delete');
  buttonDeleteCard.addEventListener('click', deleteCard);

  const buttonLikeCard = element.querySelector('.element__like');
  buttonLikeCard.addEventListener('click', likeCard);

  const cardImageZoom = element.querySelector('.element__image');
  cardImageZoom.addEventListener('click', zoomImage);
}

//Функция удаления карточки
function deleteCard(evt) {
  const currentDeleteButtonCard = evt.target.closest('.element');
  currentDeleteButtonCard.remove();
}

//Функция лайк карточки
function likeCard(evt) {
  const currentLikeButtonCard = evt.target.closest('.element');
  const likeButton = currentLikeButtonCard.querySelector('.element__like');
  likeButton.classList.toggle('element__like_active');
}



const popupTypeImageZoom = document.querySelector('.popup_type_zoom');//получаем popup открытия картинки

//Функция открытия картинки

function zoomImage(evt) {
  const cardElement = evt.target.closest('.element');
  const cardImage = cardElement.querySelector('.element__image');
  const titleCard = cardElement.querySelector('.element__title');
  const imageZoom = popupTypeImageZoom.querySelector('.popup__image');
  const imageTitle = popupTypeImageZoom.querySelector('.popup__caption');
  imageZoom.src = cardImage.src;
  imageTitle.textContent = titleCard.textContent;

  popupTypeImageZoom.classList.add('popup_opened');
  
}

//Закрытия картинки

function closePopupImageZoom() {
  popupTypeImageZoom.classList.remove('popup_opened');
}

const buttonCloseImageZoom = popupTypeImageZoom.querySelector('.popup__button-close');

buttonCloseImageZoom.addEventListener('click', closePopupImageZoom);

renderingCard();

//Функция открытия формы доьавления карточки
function openFormAddCard() {
    popupAddCard.classList.add('popup_opened');
}

//Функция закрытия формы добавления карточки
function closeFormAddCard() {
    popupAddCard.classList.remove('popup_opened');
}

// Добавление карточки

const buttonCreateFormAddCard = popupAddCard.querySelector('.popup__button-save');

buttonCreateFormAddCard.addEventListener('click', formAddCardSubmitHandler);

//Функция добавления карточки
function addCards() {
    
    const newCard = cardTemplate.querySelector('.element').cloneNode(true);

    newCard.querySelector('.element__image').src = inputCardUrl.value;
    newCard.querySelector('.element__title').textContent = inputCardTitle.value;

    setListenerForButton(newCard);    
    return sectionCard.prepend(newCard);
}


function formAddCardSubmitHandler (evt) {
    evt.preventDefault();

    addCards();

    inputCardTitle.value = '';
    inputCardUrl.value = '';

    closeFormAddCard();
}

buttonEditProfile.addEventListener('click', openFormEditProfile);
buttonCloseFormEditProfile.addEventListener('click', closeFormEditProfile);
buttonSaveFormEditProfile.addEventListener('click', formSubmitHandler);

buttonAddCard.addEventListener('click', openFormAddCard);
buttonCloseFormAddCard.addEventListener('click', closeFormAddCard);
buttonCreateFormAddCard.addEventListener('click', formAddCardSubmitHandler);


