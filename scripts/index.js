let profile = document.querySelector('.profile');
let profileButtonEdit = profile.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let buttonFormClose = popup.querySelector('.popup__button-close');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');
let popupForm = popup.querySelector('.popup__form');
let inputFormName = popupForm.querySelector('.popup__input_type_name');
let inputFormProfession = popupForm.querySelector('.popup__input_type_profession');
let buttonSaveForm = popupForm.querySelector('.popup__button-save');


function openEditForm() {
    popup.classList.add('popup_opened');
    inputFormName.value = profileName.textContent;
    inputFormProfession.value = profileProfession.textContent;
}

function closeEditForm() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent = inputFormName.value;
    profileProfession.textContent = inputFormProfession.value;
    
    closeEditForm();
}


profileButtonEdit.addEventListener('click', openEditForm);
buttonFormClose.addEventListener('click', closeEditForm);
popupForm.addEventListener('submit', formSubmitHandler);
