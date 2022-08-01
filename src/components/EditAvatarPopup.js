import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const [buttonName, setButtonName] = React.useState(props.buttonNameDefault);
  const url = React.useRef();

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    setButtonName(props.buttonNameAction);
    // Передаём значения компонента с помощью REF во внешний обработчик
    props.onUpdateAvatar({
      avatar: url.current.value
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="updateavatar"
      button={buttonName}
      isOpen={props.isOpen}
      onClose={props.onClose}
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
