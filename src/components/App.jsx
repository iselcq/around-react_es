import React, { useEffect } from "react";
import __logo from "../images/__logo.svg";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import PopupWithForm from "./PopUpWithForm";
import ImagePopup from "./ImagePopUp";
import "../App.css";
import { api } from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopUp from "./EditProfilePopUp";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isImageOpen, setIsImageOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState("");

  useEffect(() => {
    api.getUserInfo().then((res) => {
      setCurrentUser(res);
    });
  }, []);

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
    setIsEditAvatarPopupOpen(false);
    setIsImageOpen(false);
    setIsEditProfilePopupOpen(false);
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
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
        <ImagePopup
          isOpen={isImageOpen}
          onCloseClick={closeAllPopups}
          selectedCard={selectedCard}
        />
        <EditProfilePopUp
          isOpen={isEditProfilePopupOpen}
          onCloseClick={closeAllPopups}
        />
        <PopupWithForm
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
        </PopupWithForm>
        <PopupWithForm
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
        </PopupWithForm>
        <PopupWithForm
          title="¿Estás seguro/a?"
          name="delete-card"
          button="Si"
          onCloseClick={closeAllPopups}
        ></PopupWithForm>
        <div className="delete-card"></div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
