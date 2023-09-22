import { useState, useEffect } from "react";
import { api } from "../utils/api.js";
import Card from "./Card.jsx";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import React from "react";

function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    });
  }, []);

  function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya le han dado like
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    const action = isLiked ? "DELETE" : "PUT";
    // Envía una petición a la API y obtén los datos actualizados de la tarjeta
    api.likeAndUnlike(card._id, action).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(id) {
    console.log(cards);
    const newCards = cards.filter(function (x) {
      return x !== id;
    });
    console.log(newCards);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <img
            src={currentUser.avatar}
            alt="imagen de usuario"
            className="profile__avatar"
          />
          <button
            className="profile__avatar-edit"
            id="avatar-edit"
            onClick={props.onEditAvatarClick}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__user">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              id="edit-button"
              onClick={props.onEditProfileClick}
            ></button>
          </div>
          <h2 className="profile__profession">{currentUser.about}</h2>
        </div>
        <button
          className="profile__add-button"
          id="add-button"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>
      <section className="cards">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              key={card._id}
              onOpenImage={props.onOpenImage}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
