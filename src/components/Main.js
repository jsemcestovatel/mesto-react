import React from "react";
import imgAvatar from "../images/avatar.png";
import Spinner from "./Spinner";
import Card from "./Card";
import api from "../utils/Api";

// Идентификатор текущего пользователя
let myID = null;

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    // Вспомогательная функция показа и скрытия прелоадера
    function renderLoading(isLoading) {
      document
        .querySelector(".spinner")
        .classList.toggle("spinner_visible", isLoading);
    }

    console.log("Начало операции. Загрузка начального состояния");
    renderLoading(true);

    // Инициализация первоначального состояния данных пользователя и загрузка карточек
    Promise.all([api.getUserInfoApi(), api.getCardsApi()])
      .then(([data, cards]) => {
        myID = data._id;
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setCards(cards);
        // userInfo.setUserInfo(data);
        // cardsList.renderItems(cards);
      })
      .catch((err) => {
        console.log(`Возникла ошибка. ${err}`);
      })
      .finally(() => {
        renderLoading(false);
        console.log("Конец операции. Загрузка начального состояния");
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__data">
          <div className="profile__avatar">
            <img
              src={userAvatar ? userAvatar : imgAvatar}
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
              {userName ? userName : "Загрузка..."}
            </h1>
            <p className="profile__description">
              {userDescription ? userDescription : "Загрузка..."}
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
          {cards.map((item) => (
            <Card key={item._id} card={item} onCard={props.onCard} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
