import React from "react";
import imgAvatar from "../images/avatar.png";
import Spinner from "./Spinner";
import Card from "./Card";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  // Подписка на глобальный контекст 
  const currentUser = React.useContext(CurrentUserContext);
  
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__data">
          <div className="profile__avatar">
            <img
              src={currentUser.avatar ? currentUser.avatar : imgAvatar}
              alt="Аватар пользователя"
              className="profile__image"
            />
            <button
              aria-label="Редактировать фото"
              type="button"
              className="profile__update-button"
              onClick={props.onEditAvatar}
            ></button>
          </div>

          <div className="profile__info">
            <h1 className="profile__name">
              {currentUser.name ? currentUser.name : "Загрузка..."}
            </h1>
            <p className="profile__description">
              {currentUser.about ? currentUser.about : "Загрузка..."}
            </p>
            <button
              aria-label="Редактировать профиль"
              type="button"
              className="profile__edit-button link-opacity"
              onClick={props.onEditProfile}
            ></button>
          </div>
        </div>
        <button
          aria-label="Добавть"
          type="button"
          className="profile__add-button link-opacity"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <Spinner />

      <section className="elements">
        <ul className="elements__items">
          {props.cards.map((item) => (
            <Card key={item._id} card={item} onCard={props.onCard} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
