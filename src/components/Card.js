import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  function handleClick() {
    props.onCard(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  // Подписка на глобальный контекст
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;
  
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  // const cardDeleteButtonClassName = `card__delete-button ${isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"}`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__like ${isLiked && "element__like_active"} link-opacity`; 

  return (
    <li className="element">
      <img
        src={props.card.link}
        alt={`Иллюстрация ${props.card.name}`}
        className="element__photo link-opacity"
        onClick={handleClick}
      />
      {isOwn && (
        <button
          aria-label="Удалить"
          className="element__delete link-opacity"
          onClick={handleDeleteClick}
        ></button>
      )}
      <div className="element__description">
        <h3 className="element__name">{props.card.name}</h3>
        <div>
          <button
            aria-label="Нравится"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <p className="element__count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
