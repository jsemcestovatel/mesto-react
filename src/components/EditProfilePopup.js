import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [buttonName, setButtonName] = React.useState(props.buttonNameDefault);

  // После загрузки текущего пользователя из API его данные будут использованы в управляемых компонентах
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
    setButtonName(props.buttonNameDefault);
  }, [currentUser]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    setButtonName(props.buttonNameAction);
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }
  
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="editprofile"
      button={buttonName}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="name"
        name="popupNameForm"
        className="popup__input popup__input_type_name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        value={name}
        onChange={handleNameChange}
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
        value={description}
        onChange={handleDescriptionChange}
        required
      />
      <span id="about-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
