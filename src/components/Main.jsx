import { useState, useEffect } from "react";
import { api } from "../utils/api.js";
import Card from "./Card.jsx";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });
  }, []);

  useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <img
            src={userAvatar}
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
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              id="edit-button"
              onClick={props.onEditProfileClick}
            ></button>
          </div>
          <h2 className="profile__profession">{userDescription}</h2>
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
              key={card._id}
              name={card.name}
              link={card.link}
              onOpenImage={props.onOpenImage}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
