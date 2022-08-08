import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({buttonNameAction, buttonNameDefault, isOpen, onClose, onAddPlace}) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");
  const [buttonName, setButtonName] = React.useState(buttonNameDefault);

  React.useEffect(() => {
    setName("");
    setLink("");
    setButtonName(buttonNameDefault);
  }, [isOpen]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    setButtonName(buttonNameAction);
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="addelement"
      buttontext={buttonName}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="image-name"
        name="popupNameImageForm"
        className="popup__input popup__input_type_imagename"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        value={name || ""}
        onChange={handleNameChange}
        required
      />
      <span id="image-name-error" className="popup__error"></span>
      <input
        type="url"
        id="image-link"
        name="popupLinkImageForm"
        className="popup__input popup__input_type_imagelink"
        placeholder="Ссылка на картинку"
        value={link || ""}
        onChange={handleLinkChange}
        required
      />
      <span id="image-link-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
