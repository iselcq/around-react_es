import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

const Card = (props) => {
  function handleCardOpen() {
    props.onOpenImage(props);
  }

  const currentUser = React.useContext(CurrentUserContext);
  // Verificando si el usuario actual es el propietario de la tarjeta actual
  const isOwn = props.card.owner._id === currentUser._id;

  // Creando una variable que después establecerás en `className` para el botón eliminar
  const cardDeleteButtonClassName = ` ${
    isOwn ? "cards__remove_enabled" : "cards__remove"
  }`;

  // Verifica si el usuario actual le dio "like" a la tarjeta
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  // Crea una variable que después establecerás en `className` para el botón like
  const cardLikeButtonClassName = ` ${
    isLiked ? "cards__like-button_active" : "cards__like-button"
  }`;

  return (
    <div className="cards__card">
      <button
        className={`${cardDeleteButtonClassName} cards__remove`}
        id="remove-button"
      ></button>
      <img
        src={props.card.link}
        alt={props.card.name}
        className="cards__image"
        onClick={handleCardOpen}
      />
      <div className="cards__info">
        <h3 className="cards__location">{props.card.name}</h3>
        <div className="cards__like">
          <button
            className={`${cardLikeButtonClassName} cards__like-button`}
            id="like-button"
          ></button>
          <p className="cards__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
