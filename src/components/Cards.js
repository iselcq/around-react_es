import React from "react";

const Cards = (props) => {
  function handleCardOpen() {
    props.onOpenImage(props);
  }

  return (
    <div className="cards__card">
      <button className="cards__remove" id="remove-button"></button>
      <img
        src={props.link}
        alt={props.name}
        className="cards__image"
        onClick={handleCardOpen}
      />
      <div className="cards__info">
        <h3 className="cards__location">{props.name}</h3>
        <div className="cards__like">
          <button className="cards__like-button" id="like-button"></button>
          <p className="cards__like-count">{props.likes}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
