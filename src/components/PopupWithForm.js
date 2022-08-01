function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen ? `popup_opened` : ``}`}>
      <div className="popup__container">
        <button
          aria-label="Закрыть окно"
          type="button"
          className="popup__close-button link-opacity"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          name={props.name}
          encType="text/plain"
          className="popup__form"
          onSubmit={props.onSubmit}
          noValidate
        >
          {props.children}
          <button type="submit" className="popup__submit-button link-opacity">
            {props.button}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
