import { useState, useEffect } from "react";
import { api } from "../utils/api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import React from "react";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

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
        {props.cards.map((card) => {
          return (
            <Card
              card={card}
              key={card._id}
              onOpenImage={props.onOpenImage}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
