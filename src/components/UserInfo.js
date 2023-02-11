export default class UserInfo {
    constructor({ userNameSelector, userInfoSelector, userAvatarSelector }) {
        this._userName = document.querySelector(userNameSelector);
        this._userInfo = document.querySelector(userInfoSelector);
        this._userAvater = document.querySelector(userAvatarSelector);
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            about: this._userInfo.textContent,
        }
    }

    setUserInfo(userInfo) {
        this._userName.textContent = userInfo.name;
        this._userInfo.textContent = userInfo.about;
    }

    setUserAvatar(userInfo) {
        this._userAvater.src = userInfo.avatar;
    }
}