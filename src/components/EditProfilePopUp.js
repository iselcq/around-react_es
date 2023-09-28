import React, { useEffect } from "react";
import PopupWithForm from "./PopUpWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopUp(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleOnChangeName(e) {
    setName(e.target.value);
  }

  function handleOnChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Evita que el navegador navegue hacia la dirección del formulario
    e.preventDefault();
    // Pasa los valores de los componentes gestionados al controlador externo
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <>
      <PopupWithForm
        title="Editar perfil"
        name="pop-up"
        button="Guardar"
        isOpen={props.isOpen}
        onCloseClick={props.onCloseClick}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="pop-up__input"
          id="user-name"
          name="name"
          value={name ?? ""}
          placeholder="Nombre"
          minLength="2"
          maxLength="40"
          onChange={handleOnChangeName}
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
          value={description ?? ""}
          onChange={handleOnChangeDescription}
          required
        />
        <p id="user-profession-error" className="pop-up__error"></p>
      </PopupWithForm>
    </>
  );
}

export default EditProfilePopUp;
