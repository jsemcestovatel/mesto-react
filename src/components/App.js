import React from "react";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(false);
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCard={handleCardClick}
      />
      <PopupWithForm
        title="Обновить аватар"
        name="updateavatar"
        button="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          id="avatar-link"
          name="popupLinkImageForm"
          className="popup__input popup__input_type_imagelink"
          placeholder="Ссылка на аватар"
          required
        />
        <span id="avatar-link-error" className="popup__error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Редактировать профиль"
        name="editprofile"
        button="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          id="name"
          name="popupNameForm"
          className="popup__input popup__input_type_name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span id="name-error" className="popup__error"></span>
        <input
          type="text"
          id="about"
          name="popupDescriptionForm"
          className="popup__input popup__input_type_description"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span id="about-error" className="popup__error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="addelement"
        button="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          id="image-name"
          name="popupNameImageForm"
          className="popup__input popup__input_type_imagename"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span id="image-name-error" className="popup__error"></span>
        <input
          type="url"
          id="image-link"
          name="popupLinkImageForm"
          className="popup__input popup__input_type_imagelink"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="image-link-error" className="popup__error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Вы уверены?"
        name="deletecard"
        button="Да"
        onClose={closeAllPopups}
      />

      <ImagePopup
        card={selectedCard}
        name="showelement"
        onClose={closeAllPopups}
      />
      <Footer />
    </div>
  );
}

export default App;
