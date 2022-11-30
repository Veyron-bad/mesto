const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileProfession = profile.querySelector('.profile__profession');
const profileEditButton = profile.querySelector('.profile__button-edit');

const popupEditProfile = document.querySelector('.popup_type_editProfile');
const popupFormEditProfile = popupEditProfile.querySelector('.popup__form');
const inputProfileName = popupEditProfile.querySelector('.popup__input_type_name');
const inputProfileProfession = popupEditProfile.querySelector('.popup__input_type_profession');

// Функция открытия Popup
function openPopup(popup) {
    popup.classList.add('popup_opened');
}

// Функция открытия формы редактирования
function openFormEditProfile() {
    openPopup(popupEditProfile);
    inputProfileName.value = profileName.textContent;
    inputProfileProfession.value = profileProfession.textContent;
}

// Слушатель открытия формы редактирования
profileEditButton.addEventListener('click', openFormEditProfile);

// Функция закрытия Popup
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

const buttonCloseFormEditProfile = popupEditProfile.querySelector('.popup__button-close');

//Функция закрытия формы редактирования профиля
function closeFormEditProfile() {
    closePopup(popupEditProfile);
}

//Слушатель закрытия формы редактирования профиля
buttonCloseFormEditProfile.addEventListener('click', closeFormEditProfile);

// Функция сохранения формы редактирования профиля
function submitEditProfileForm(evt) {
    evt.preventDefault();

    profileName.textContent = inputProfileName.value;
    profileProfession.textContent = inputProfileProfession.value;

closeFormEditProfile();
}

const buttonSaveFormEditProfile = popupEditProfile.querySelector('.popup__form');

//Слушатель сохранения формы редактирования профиля
buttonSaveFormEditProfile.addEventListener('submit', submitEditProfileForm);

const popupAddCard = document.querySelector('.popup_type_addCards');
const popupFormAddCard = popupAddCard.querySelector('.popup__form');
const inputCardTitle = popupAddCard.querySelector('.popup__input_type_title');
const inputCardUrl = popupAddCard.querySelector('.popup__input_type_url');
const buttonAddCard = profile.querySelector('.profile__button-add');
const buttonCloseFormAddCard = popupAddCard.querySelector('.popup__button-close');

// Функция открытия формы добавления карточки
function openFormAddCard() {
    openPopup(popupAddCard);
}

// Функция закрытия формы добавления карточки
function closeFormAddCard() {
    closePopup(popupAddCard);
}

//Cлушатели открытия и закрытия формы добавления карточки
buttonAddCard.addEventListener('click', openFormAddCard);
buttonCloseFormAddCard.addEventListener('click',closeFormAddCard);

const sectionCards = document.querySelector('.elements');
const cardTemplate = document.querySelector('#template-card').content;

// Функция создания карточки

function createCard(element) {
    const card = cardTemplate.querySelector('.element').cloneNode(true);
    const image = card.querySelector('.element__image');
    const title = card.querySelector('.element__title');

    image.src = element.link;
    image.alt = element.name;
    title.textContent = element.name;

    setListenerForButton(card);

    return card;
}

// Функция добавления карточки
function addCard(item, wrapElement) {
    const element = createCard(item);
    wrapElement.prepend(element);
}

function renderingCard () {
    initialCards.forEach(function(item) {

    addCard(item, sectionCards);
});
}

// Навешиваем слушатели
function setListenerForButton(element) {
    //element - это карточка с кнопками
    const buttonDeleteCard = element.querySelector('.element__delete');
    buttonDeleteCard.addEventListener('click', deleteCard);

    const buttonLikeCard = element.querySelector('.element__like');
    buttonLikeCard.addEventListener('click', likeCard);

    const cardImageZoom = element.querySelector('.element__image');
    cardImageZoom.addEventListener('click', zoomImage);
}

// //Функция удаления карточки
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

renderingCard();

const popupTypeImageZoom = document.querySelector('.popup_type_zoom');//получаем popup открытия картинки

//Открытия картинки
const imageZoom = popupTypeImageZoom.querySelector('.popup__image');
const imageTitle = popupTypeImageZoom.querySelector('.popup__caption');

function zoomImage(evt) {
  const cardElement = evt.target.closest('.element');
  const cardImage = cardElement.querySelector('.element__image');
  const titleCard = cardElement.querySelector('.element__title');
  imageZoom.src = cardImage.src;
  imageTitle.textContent = titleCard.textContent;
  imageZoom.alt = titleCard.textContent;

  openPopup(popupTypeImageZoom);
}

//Закрытия картинки

function closePopupImageZoom() {
    closePopup(popupTypeImageZoom);
}

const buttonCloseImageZoom = popupTypeImageZoom.querySelector('.popup__button-close');
// Слушайтель закрытия попап картинки
buttonCloseImageZoom.addEventListener('click', closePopupImageZoom);

const inputTitleFormAddCard = document.querySelector('.popup__input_type_title');
const inputUrlFormmAddCard = document.querySelector('.popup__input_type_url');

function submitAddCardForm(evt) {
    evt.preventDefault();

    const elementCard = {
        name: inputTitleFormAddCard.value,
        link: inputUrlFormmAddCard.value
    };

    addCard(elementCard, sectionCards);
    saveFormAddCard();
}

const buttonSaveFormAddCard = popupAddCard.querySelector('.popup__form');

// Слушатель сохранения формы добавления карточки
buttonSaveFormAddCard.addEventListener('submit', submitAddCardForm);

function saveFormAddCard() {
    closePopup(popupAddCard);

    inputTitleFormAddCard.value = '';
    inputUrlFormmAddCard.value = '';
}
