function ImagePopup(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.card.link !=='' ? `popup_opened ` : ``}popup_dark`}>
      <figure className="popup__image-container">
        <button
          aria-label="Закрыть окно"
          type="button"
          className="popup__close-button link-opacity"
          onClick={props.onClose}
        ></button>
        <img src={props.card.link} alt={`Иллюстрация ${props.card.name}`} className="popup__image" />
        <figcaption className="popup__image-title">{props.card.name}</figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;