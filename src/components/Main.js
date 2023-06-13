function Main() {
  function handleEditAvatarClick() {
    const newAvatarModal = document.querySelector(".profile-pic");
    newAvatarModal.classList.add("profile-pic__opened");
  }

  function handleEditProfileClick() {
    const editProfileModal = document.querySelector(".pop-up");
    editProfileModal.classList.add("pop-up__opened");
  }

  function handleAddPlaceClick() {
    const addPlaceModal = document.querySelector(".new-place");
    addPlaceModal.classList.add("new-place__opened");
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <img
            src="https://this-person-does-not-exist.com/img/avatar-gen1142640d28aadadfbc368df8fd496c3c.jpg"
            alt="imagen de usuario"
            className="profile__avatar"
          />
          <button
            className="profile__avatar-edit"
            id="avatar-edit"
            onClick={handleEditAvatarClick}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__user">
            <h1 className="profile__name">Cargando...</h1>
            <button
              className="profile__edit-button"
              id="edit-button"
              onClick={handleEditProfileClick}
            ></button>
          </div>
          <h2 className="profile__profession">Cargando...</h2>
        </div>
        <button
          className="profile__add-button"
          id="add-button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="cards"></section>
      <template id="card-template">
        <div className="cards__card">
          <button className="cards__remove" id="remove-button"></button>
          <img src=" " alt=" " className="cards__image" />
          <div className="cards__info">
            <h3 className="cards__location"></h3>
            <div className="cards__like">
              <button className="cards__like-button" id="like-button"></button>
              <p className="cards__like-count"></p>
            </div>
          </div>
        </div>
      </template>
    </main>
  );
}

export default Main;
