import React from "react";
import __logo from "../images/__logo.svg";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import PopUpWithForm from "./PopUpWithForm";
import ImagePopUp from "./ImagePopUp";
import "../App.css";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isImageOpen, setIsImageOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setIsImageOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImageOpen(false);
  }

  return (
    <>
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        isOpen={isImageOpen}
        onOpenImage={handleCardClick}
        selectedCard={selectedCard}
      />
      <Footer />
      <ImagePopUp
        isOpen={isImageOpen}
        onCloseClick={closeAllPopups}
        selectedCard={selectedCard}
      />
      <PopUpWithForm
        title="Editar perfil"
        name="pop-up"
        button="Guardar"
        isOpen={isEditProfilePopupOpen}
        onCloseClick={closeAllPopups}
      >
        <input
          type="text"
          className="pop-up__input"
          id="user-name"
          name="name"
          placeholder="Nombre"
          minLength="2"
          maxLength="40"
          required
        />
        <p id="user-name-error" className="pop-up__error"></p>
        <input
          type="text"
          className="pop-up__input"
          id="user-profession"
          name="profession"
          placeholder="Acerca de mí"
          minLength="2"
          maxLength="200"
          required
        />
        <p id="user-profession-error" className="pop-up__error"></p>
      </PopUpWithForm>
      <PopUpWithForm
        title="Nuevo Lugar"
        name="new-place"
        button="Crear"
        isOpen={isAddPlacePopupOpen}
        onCloseClick={closeAllPopups}
      >
        <input
          type="text"
          className="new-place__input"
          id="new-title"
          name="title"
          placeholder="Título"
          minLength="2"
          maxLength="30"
          required
        />
        <p id="new-title-error" className="new-place__error"></p>
        <input
          type="url"
          className="new-place__input"
          id="new-url"
          name="url"
          placeholder="Enlace a la imagen"
          required
        />
        <p id="new-url-error" className="new-place__error"></p>
      </PopUpWithForm>
      <PopUpWithForm
        title="Cambiar foto de perfil"
        name="profile-pic"
        button="Guardar"
        isOpen={isEditAvatarPopupOpen}
        onCloseClick={closeAllPopups}
      >
        <input
          type="url"
          className="profile-pic__input"
          id="url"
          name="url"
          pattern="https://.*"
          placeholder="https://somewebsite.com/someimage.jpg"
          required
        />
        <p id="new-title-error" className="profile-pic__error"></p>
      </PopUpWithForm>
      <PopUpWithForm
        title="¿Estás seguro/a?"
        name="delete-card"
        button="Si"
        onCloseClick={closeAllPopups}
      ></PopUpWithForm>
      <div className="delete-card"></div>
      <div className="image-popup">
        <div className="image-popup__card">
          <img src=" " alt=" " className="image-popup__image" />
          <button className="image-popup__close" id="image-popup__close">
            ¿Estás Seguro?
          </button>
          <h3 className="image-popup__title"></h3>
        </div>
      </div>
    </>
  );
}

export default App;
