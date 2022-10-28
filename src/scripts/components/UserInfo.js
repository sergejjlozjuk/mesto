export default class UserInfo {
    constructor ({userNameSelector, userInfoSelector}, getUserInfo) {
        this._userName = document.querySelector(userNameSelector);
        this._userInfo = document.querySelector(userInfoSelector);
        this._userAvatar = document.querySelector('.user__image');
        this._getUserInfo = getUserInfo
        this.userId 
    }
    getUserInfo () {
        this._form = document.querySelector('.form_user');
        this._userNameForm = this._form.querySelector('.form__input_type_name');
        this._userInfoFrom = this._form.querySelector('.form__input_type_info');
        this._userNameForm.value = this._userName.textContent;
        this._userInfoFrom.value = this._userInfo.textContent;
        return {name: this._userName.textContent, info: this._userInfo.textContent}
    }
    setUserAvatar (res) {
        this._userAvatar.src = res.avatar;
    }
    setUserInfo (data) { 
        if (data !== undefined) {
            this._userName.textContent = data.name;
            this._userInfo.textContent = data.info;
        } else {
            this._getUserInfo
            .then(res => {
                    this._userName.textContent = res.name;
                    this._userInfo.textContent = res.about;
                    this._userAvatar.src = res.avatar;
                    this.userId = res._id;
        }
)
        }

    }
}