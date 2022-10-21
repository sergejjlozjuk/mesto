export default class UserInfo {
    constructor ({userNameSelector, userInfoSelector}) {
        this._userName = document.querySelector(userNameSelector);
        this._userInfo = document.querySelector(userInfoSelector);
    }
    getUserInfo () {
        this._form = document.querySelector('.form_user');
        this._userNameForm = this._form.querySelector('.form__input_type_name');
        this._userInfoFrom = this._form.querySelector('.form__input_type_info');
        this._userNameForm.value = this._userName.textContent;
        this._userInfoFrom.value = this._userInfo.textContent;
        return {name: this._userName.textContent, info: this._userInfo.textContent}
    }
    setUserInfo (data) {
        this._userName.textContent = data.name;
        this._userInfo.textContent = data.info;
    }
}