import React from "react";

function EditProfile() {
  <PopupWithForm
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
  </PopupWithForm>;
}
