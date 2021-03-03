import UserService from '../services/UserService.js';

class UserList {

    constructor() {
        const localUsers = JSON.parse(localStorage.getItem('userList'));
        if (localUsers.length > 0) {
            this._users = localUsers;
            return;
        }
        const service = new UserService();
        service.fetchUserList().then(data => {
            console.log(data);
            this._users = data;
            localStorage.setItem('userList', JSON.stringify(data))
        });

    }

    add(user) {
        this._users.push(user);
    }

    get users() {
        return [].concat(this._users);
    }
}

export default UserList;