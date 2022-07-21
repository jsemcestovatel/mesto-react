function Card(props) {
  function handleClick() {
    props.onCard(props.card);
  }

  return (
    <li className="element">
      <img
        src={props.card.link}
        alt={`Иллюстрация ${props.card.name}`}
        className="element__photo link-opacity"
        onClick={handleClick}
      />
      <button
        aria-label="Удалить"
        className="element__delete link-opacity"
      ></button>
      <div className="element__description">
        <h3 className="element__name">{props.card.name}</h3>
        <div>
          <button
            aria-label="Нравится"
            className="element__like link-opacity"
          ></button>
          <p className="element__count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
