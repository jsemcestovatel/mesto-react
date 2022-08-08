function PopupWithForm({name, title, isOpen, onClose, onSubmit, children, buttontext}) {
  return (
    <section className={`popup popup_type_${name} ${isOpen ? `popup_opened` : ``}`}>
      <div className="popup__container">
        <button
          aria-label="Закрыть окно"
          type="button"
          className="popup__close-button link-opacity"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form
          name={name}
          encType="text/plain"
          className="popup__form"
          onSubmit={onSubmit}
          // noValidate
        >
          {children}
          <button type="submit" className="popup__submit-button link-opacity">
            {buttontext}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
