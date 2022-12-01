const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileProfession = profile.querySelector('.profile__profession');
const buttonEditProfile = profile.querySelector('.profile__button-edit');

const popupEditProfile = document.querySelector('.popup_type_editProfile');
const popupFormEditProfile = document.forms['profileFormEditing'];
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
buttonEditProfile.addEventListener('click', openFormEditProfile);

// Функция закрытия Popup
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

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
}

//Слушатель сохранения формы редактирования профиля
popupFormEditProfile.addEventListener('submit', submitEditProfileForm);

const popupAddCard = document.querySelector('.popup_type_addCards');
const popupFormAddCard = document.forms['addCards'];
const inputCardTitle = popupAddCard.querySelector('.popup__input_type_title');
const inputCardUrl = popupAddCard.querySelector('.popup__input_type_url');
const buttonAddCard = profile.querySelector('.profile__button-add');

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

const cardsSection = document.querySelector('.elements');
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

function renderCards() {
    initialCards.forEach(function (item) {

        addCard(item, cardsSection);
    });
}

// Навешиваем слушатели
function setListenerForButton(element) {
    //element - это карточка с кнопками
    const buttonDeleteCard = element.querySelector('.element__delete');
    buttonDeleteCard.addEventListener('click', deleteCard);

    const buttonLikeCard = element.querySelector('.element__like');
    buttonLikeCard.addEventListener('click', toogleLike);

    const cardImageZoom = element.querySelector('.element__image');
    cardImageZoom.addEventListener('click', zoomImage);
}

// //Функция удаления карточки
function deleteCard(evt) {
    const currentDeleteButtonCard = evt.target.closest('.element');
    currentDeleteButtonCard.remove();
}

//Функция лайк карточки
function toogleLike(evt) {
    evt.target.classList.toggle('element__like_active');
}

renderCards();

const popupTypeImageZoom = document.querySelector('.popup_type_zoom');//получаем popup открытия картинки

//Открытия картинки
const imageZoom = popupTypeImageZoom.querySelector('.popup__image');
const imageTitle = popupTypeImageZoom.querySelector('.popup__caption');

function zoomImage(evt) {
    imageZoom.src = evt.target.src;
    imageTitle.textContent = evt.target.alt;
    imageZoom.alt = evt.target.alt;

    openPopup(popupTypeImageZoom);
}

//Закрытия картинки

function closePopupImageZoom() {
    closePopup(popupTypeImageZoom);
}

const inputTitleFormAddCard = document.querySelector('.popup__input_type_title');
const inputUrlFormmAddCard = document.querySelector('.popup__input_type_url');

function submitAddCardForm(evt) {
    evt.preventDefault();

    const elementCard = {
        name: inputTitleFormAddCard.value,
        link: inputUrlFormmAddCard.value
    };

    addCard(elementCard, cardsSection);

    evt.target.reset();

    closePopup(popupAddCard);
}

// Слушатель сохранения формы добавления карточки
popupAddCard.addEventListener('submit', submitAddCardForm);