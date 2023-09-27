import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopUpWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopUp(props) {
  const avatarRef = React.useRef(null);
  const currentUser = React.useContext(CurrentUserContext);
  const [avatar, setAvatar] = React.useState("");

  useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <>
      <PopupWithForm
        title="Cambiar foto de perfil"
        name="profile-pic"
        button="Guardar"
        isOpen={props.isOpen}
        onCloseClick={props.onCloseClick}
        onSubmit={handleSubmit}
      >
        <input
          ref={avatarRef}
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
    </>
  );
}
export default EditAvatarPopUp;
