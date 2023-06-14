import __logo from "../images/__logo.svg";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import PopUpWithForm from "./PopUpWithForm";

import "../App.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <PopUpWithForm title="Editar perfil" name="pop-up">
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
      <PopUpWithForm title="Nuevo Lugar" name="new-place">
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
      <PopUpWithForm title="Cambiar foto de perfil" name="profile-pic">
        <input
          type="text"
          className="profile-pic__input"
          id="new-title"
          name="title"
          placeholder="Título"
          minLength="2"
          maxLength="30"
          required
        />
        <p id="new-title-error" className="profile-pic__error"></p>
        <input
          type="url"
          className="profile-pic__input"
          id="new-url"
          name="url"
          placeholder="Enlace a la imagen"
          required
        />
        <p id="new-url-error" className="profile-pic__error"></p>
      </PopUpWithForm>
      <div className="profile-pic">
        <div className="profile-pic__card">
          <button className="profile-pic__close"></button>
          <h3 className="profile-pic__title">Cambiar foto de perfil</h3>
          <form id="profile-pic__form">
            <fieldset className="profile-pic__container">
              <input
                type="url"
                className="profile-pic__input"
                id="url"
                name="url"
                pattern="https://.*"
                placeholder="https://somewebsite.com/someimage.jpg"
                required
              />
              <p id="url-error" className="profile-pic__error"></p>
            </fieldset>
            <button
              type="submit"
              className="profile-pic__submit profile-pic__submit_disabled"
            >
              Guardar
            </button>
          </form>
        </div>
      </div>
      <div className="delete-card">
        <div className="delete-card__card">
          <button className="delete-card__close"></button>
          <h3 className="delete-card__title">¿Estás seguro/a?</h3>
          <button type="submit" className="delete-card__submit">
            Si
          </button>
        </div>
      </div>
      <div className="image-popup">
        <div className="image-popup__card">
          <img src=" " alt=" " className="image-popup__image" />
          <button
            className="image-popup__close"
            id="image-popup__close"
          ></button>
          <h3 className="image-popup__title"></h3>
        </div>
      </div>
    </>
  );
}

export default App;
