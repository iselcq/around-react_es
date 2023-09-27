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
import EditAvatarPopUp from "./EditAvatarPopUp";

function App() {
  const [cards, setCards] = React.useState([]);
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

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      const newCards = cards.filter(function (x) {
        return x._id !== card._id;
      });
      setCards(newCards);
    });
  }

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

  function handleUpdateUser(updatedUser) {
    api.editUserInfo(updatedUser.name, updatedUser.about).then((res) => {
      setCurrentUser(res);
    });
    closeAllPopups();
  }

  function handleUpdateAvatar(updatedUser) {
    api.editUserAvatar(updatedUser.avatar).then((res) => {
      setCurrentUser(res);
    });
    closeAllPopups();
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
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
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
          onUpdateUser={handleUpdateUser}
          button="Guardar"
        />

        <EditAvatarPopUp
          isOpen={isEditAvatarPopupOpen}
          onCloseClick={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
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
