import UserService from '../services/UserService.js';

class UserList {

    constructor(users = []) {
        this._users = users;
    }

    pushUser(user) {
        const requestMade = localStorage.getItem('requestMade');
        if (this._users.length <= 0 && !requestMade) {
            const userService = new UserService();
            userService.fetchList()
                .then(data => {
                    this._users = data;
                    this._users.push(user.plainObject());
                    localStorage.setItem('requestMade', 1);
                    localStorage.setItem('userList', JSON.stringify(this._users));
                    window.location.href = window.location.origin + '/user-list.html';
                });
            return;
        }
        this._users.push(user.plainObject());
        localStorage.setItem('userList', JSON.stringify(this._users));
        window.location.href = window.location.origin + '/user-list.html';
    }

    get users() {
        return [].concat(this._users);
    }

}

export default UserList;