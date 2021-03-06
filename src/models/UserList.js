import UserService from '../services/UserService.js';

class UserList {

    constructor() {
        this._users = [];
    }

    pushUser(user) {
        this.getUsers();
        this._users.push(user.plainObject());
        localStorage.setItem('userList', JSON.stringify(this._users));
    }

    async getUsers() {
        const requestMade = localStorage.getItem('requestMade');
        if (requestMade != 1) {
            const userService = new UserService();
            const data = await userService.fetchList();
            return data;
        }
        this._users = JSON.parse(localStorage.getItem('userList'));
        console.log(this._users)
        return this._users;
    }

    set users(userList) {
        this._users = userList;
    }

    update(list){
        this._users = list;
        localStorage.setItem('userList', JSON.stringify(this._users));
    }

}

export default UserList;