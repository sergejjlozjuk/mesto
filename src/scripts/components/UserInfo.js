export default class UserInfo {
    constructor ({userNameSelector, userInfoSelector, userAvatar}) {
        this._userName = document.querySelector(userNameSelector);
        this._userInfo = document.querySelector(userInfoSelector);
        this._userAvatar = document.querySelector(userAvatar);
    }
    getUserInfo () {
        return {name: this._userName.textContent, info: this._userInfo.textContent}
    }
    setUserAvatar (data) {
        this._userAvatar.src = data.avatar;
    }
    setUserInfo (data) { 
            this._userName.textContent = data.name;
            this._userInfo.textContent = data.about;
            this.setUserAvatar(data);
            this.userId = data._id;
    }
}