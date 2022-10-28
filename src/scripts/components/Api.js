
export class Api {
    constructor(options) {
      this.baseUrl = options.baseUrl;
      this.headers = options.headers;
    }
    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
        headers: this.headers
    })
    .then(res => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}`)
    })
    .catch(err => console.log(err))
    }
    getUserInfo () {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка ${res.status}`)
        })
        .catch(err => console.log(err))
    }
    editAvatar (formValues) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                avatar: formValues.link
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка ${res.status}`)
        })
        .catch(err => console.log(err))
    }
    setUserInfo (formValues) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: formValues.name,
                about: formValues.info
            })
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка ${res.status}`)
            })
            .catch(err => console.log(err))
    }
    setCard (formValues) {
           return fetch(`${this.baseUrl}/cards`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
            name: formValues.name,
            link: formValues.link
        })
    })
    .then(res => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}`)
    })
    .catch(err => console.log(err))
    }
    deleteCard (card) {
        return fetch(`${this.baseUrl}/cards/${card._cardId}`, {
     method: 'DELETE',
     headers: this.headers
    })
    .then(res => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}`)
    })
    .catch(err => console.log(err))
    }
    setCardLike (card) {
        return fetch(`${this.baseUrl}/cards/${card._cardId}/likes`, {
            method: 'PUT',
            headers: this.headers
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка ${res.status}`)
        })
        .catch(err => console.log(err))
    }
    deleteCardLike (card) {
        return fetch(`${this.baseUrl}/cards/${card._cardId}/likes`, {
            method: 'DELETE',
            headers: this.headers
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка ${res.status}`)
        })
        .catch(err => console.log(err))
    }
  }
  
