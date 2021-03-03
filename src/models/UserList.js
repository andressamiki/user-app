import UserService from '../services/UserService.js';

class UserList {

    constructor() {
        this._users = [];
        this._localStorage = JSON.parse(localStorage.getItem('userList'));
    }

    pushUser(user) {
        const previousLength = this._users.length;
        this._users.push(user.plainObject());
        if (previousLength + 1 !== this._users.length) {
            alert('User could not be created');
        }
        this._setlocalStorage();
        //window.location.href = window.location.origin + '/user-list.html';
    }

    get users() {
        return [].concat(this._users);
    }

    localStorage() {
        return this._localStorage;
    }

    _setlocalStorage() {
        if (this._localStorage && this._localStorage.length > 0) {
            this._users = this._localStorage;
            localStorage.setItem('userList', JSON.stringify(this._users));
            return;
        }
        const userService = new UserService();
        userService.fetchList().then(data => {
            this._users = data;
            localStorage.setItem('userList', JSON.stringify(data));
            this._localStorage = JSON.parse(localStorage.getItem('userList'));
        });
    }
}

export default UserList;