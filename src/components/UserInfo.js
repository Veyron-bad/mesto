export default class UserInfo {
    constructor({ userNameSelector, userInfoSelector }) {
        this._userName = document.querySelector(userNameSelector);
        this._userInfo = document.querySelector(userInfoSelector);
    }

    getUserInfo() {
        return {
            userName: this._userName.textContent,
            userInfo: this._userInfo.textContent
        }
    }

    setUserInfo(userInfo) {
        this._userName.textContent = userInfo.inputName;
        this._userInfo.textContent = userInfo.inputProfession;
    }
}