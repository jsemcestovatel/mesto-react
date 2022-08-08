import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({buttonNameDefault, buttonNameAction, isOpen, onClose, onUpdateAvatar}) {
  const [buttonName, setButtonName] = React.useState(buttonNameDefault);
  const url = React.useRef();

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    setButtonName(buttonNameAction);
    // Передаём значения компонента с помощью REF во внешний обработчик
    onUpdateAvatar({
      avatar: url.current.value
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="updateavatar"
      buttontext={buttonName}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        ref={url}
        id="avatar-link"
        name="popupLinkImageForm"
        className="popup__input popup__input_type_imagelink"
        placeholder="Ссылка на аватар"
        required
      />
      <span id="avatar-link-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
