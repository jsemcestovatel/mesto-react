class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    // проверка ответа
    if (!res.ok) {return Promise.reject(`Ошибка ${res.status} ${res.statusText}`)}
    return res.json();
  }

  getUserInfoApi() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  setUserInfoApi(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data["name"],
        about: data["about"]
      })
    })
    .then(this._checkResponse);
  }

  updateAvatarApi(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data["avatar-link"]
      })
    })
    .then(this._checkResponse);
  }

  getCardsApi() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  addNewCardApi(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data["name"],
        link: data["link"]
      })
    })
    .then(this._checkResponse);
  }

  deleteCardApi(data) {
    return fetch(`${this._baseUrl}/cards/${data._cardID}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  likeCardApi(data) {
    return fetch(`${this._baseUrl}/cards/${data._cardID}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  dislikeCardApi(data) {
    return fetch(`${this._baseUrl}/cards/${data._cardID}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse);
  }
}
const API_CONFIG = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-44",
  headers: {
    authorization: "6d5a0daf-b4f3-4dd4-ba2b-ffc867278374",
    "Content-Type": "application/json",
  },
};

// Инстанс класса api
const api = new Api(API_CONFIG);

export default api;