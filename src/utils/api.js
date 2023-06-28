class Api {
  _fetchData(url, options) {
    return fetch(`${process.env.REACT_APP_BASE_URL}/${url}`, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`{Error: ${res.status}`);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  getInitialCards() {
    return this._fetchData("cards", {
      headers: {
        authorization: process.env.REACT_APP_API_KEY,
      },
      method: "GET",
    });
  }

  getUserInfo() {
    return this._fetchData("users/me", {
      headers: {
        authorization: process.env.REACT_APP_API_KEY,
      },
      method: "GET",
    });
  }
  editUserInfo(name, about) {
    return this._fetchData("users/me", {
      method: "PATCH",
      headers: {
        authorization: process.env.REACT_APP_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        about,
      }),
    });
  }
  editUserAvatar(avatar) {
    return this._fetchData("users/me/avatar", {
      method: "PATCH",
      headers: {
        authorization: process.env.REACT_APP_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar,
      }),
    });
  }
  addNewCard(name, link) {
    return this._fetchData("cards", {
      method: "POST",
      headers: {
        authorization: process.env.REACT_APP_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    });
  }
  deleteCard(id) {
    return this._fetchData(`cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: process.env.REACT_APP_API_KEY,
      },
    });
  }
  likeAndUnlike(id, action) {
    return this._fetchData(`cards/likes/${id}`, {
      method: action,
      headers: {
        authorization: process.env.REACT_APP_API_KEY,
        "Content-Type": "application/json",
      },
    });
  }
}

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_05",
  headers: {
    authorization: "a35633fc-57a4-481b-b1c4-bb7e5e2ce1c9",
    "Content-Type": "application/json",
  },
});
