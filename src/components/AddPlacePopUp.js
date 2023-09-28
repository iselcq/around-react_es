import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup(props) {
  const placeNameRef = React.useRef(null);
  const placeLinkRef = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlaceSubmit(
      placeNameRef.current.value,
      placeLinkRef.current.value
    );
  }

  return (
    <>
      <PopupWithForm
        title="Nuevo Lugar"
        name="new-place"
        button="Crear"
        isOpen={props.isOpen}
        onCloseClick={props.onCloseClick}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="new-place__input"
          id="new-title"
          name="title"
          placeholder="Título"
          minLength="2"
          maxLength="30"
          ref={placeNameRef}
          required
        />
        <p id="new-title-error" className="new-place__error"></p>
        <input
          type="url"
          className="new-place__input"
          id="new-url"
          name="url"
          placeholder="Enlace a la imagen"
          ref={placeLinkRef}
          required
        />
        <p id="new-url-error" className="new-place__error"></p>
      </PopupWithForm>
    </>
  );
}

export default AddPlacePopup;
