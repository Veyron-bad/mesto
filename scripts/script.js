let content = document.querySelector('.content');
let profile = content.querySelector('.profile');
let profileButtonEdit = profile.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let buttonFormClose = popup.querySelector('.popup__button-close');
let profileName = content.querySelector('.profile__name');
let profileProfession = content.querySelector('.profile__profession');
let popupForm = document.querySelector('.popup__form');
let inputFormName = popupForm.querySelector('.popup__input_name');
let inputFormProfession = popupForm.querySelector('.popup__input_profession');
let buttonSaveForm = popupForm.querySelector('.popup__button-save');


function openEditForm() {
    popup.classList.add('popup_opened');
    inputFormName.value = profileName.textContent;
    inputFormProfession.value = profileProfession.textContent;
}

profileButtonEdit.addEventListener('click', openEditForm);

function closeEditForm() {
    popup.classList.remove('popup_opened');
}

buttonFormClose.addEventListener('click', closeEditForm);

function formSubmitHandler (evt) {
    
    evt.preventDefault();

    profileName.textContent = inputFormName.value;
    profileProfession.textContent = inputFormProfession.value;
}

buttonSaveForm.addEventListener('submit', formSubmitHandler);

