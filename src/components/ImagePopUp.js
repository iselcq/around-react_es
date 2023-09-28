import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={`image-popup ${props.isOpen ? "image-popup__opened" : " "}`}
    >
      <div className="image-popup__card">
        <img
          src={props.selectedCard.link}
          alt={props.selectedCard.name}
          className="image-popup__image"
        />
        <button
          className="image-popup__close"
          id="image-popup__close"
          onClick={props.onCloseClick}
        ></button>
        <h3 className="image-popup__title">{props.selectedCard.name} </h3>
      </div>
    </div>
  );
}
export default ImagePopup;
