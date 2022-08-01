// константы селекторов и классов в popup-окнах
export const settings = {
  templateSelector: "#element-template",
  cardSelector: ".element",
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  inputErrorClass: "popup__input_type_error",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  errorClass: "popup__error_visible",
  cardContainerSelector: ".elements__items",
  popupShowElementImage: ".popup__image",
  popupShowElementTitle: ".popup__image-title",
};

// прелоадер загрузки
export const spinner = document.querySelector(".spinner");

// переменные каждого popup окна
export const popupUpdateAvatar = document.querySelector(
  ".popup_type_updateavatar"
);
export const popupEditProfile = document.querySelector(
  ".popup_type_editprofile"
);
export const popupConfirmation = document.querySelector(
  ".popup_type_deletecard"
);
export const popupAddElement = document.querySelector(".popup_type_addelement");
export const popupShowElement = document.querySelector(
  ".popup_type_showelement"
);

// поля input в модальных окнах
export const popupProfileName = popupEditProfile.querySelector(
  ".popup__input_type_name"
);
export const popupProfileDescription = popupEditProfile.querySelector(
  ".popup__input_type_description"
);
export const popupImageName = popupAddElement.querySelector(
  ".popup__input_type_imagename"
);
export const popupImageLink = popupAddElement.querySelector(
  ".popup__input_type_imagelink"
);

// элементы из секции profile
const profile = document.querySelector(".profile");
export const profileName = profile.querySelector(".profile__name");
export const profileDescription = profile.querySelector(
  ".profile__description"
);
export const profileAvatar = profile.querySelector(".profile__image");

export const buttonUpdateAvatar = profile.querySelector(
  ".profile__update-button"
);
export const buttonEditProfile = profile.querySelector(".profile__edit-button");
export const buttonAddElement = profile.querySelector(".profile__add-button");

// формы модальных окон
export const formUpdateAvatar = document.forms.popupUpdateAvatar;
export const formEditProfile = document.forms.popupEditProfile;
export const formAddElement = document.forms.popupAddElement;