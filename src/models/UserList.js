import UserService from '../services/UserService.js';

class UserList {

    constructor() {
        this._users = [];
    }

    pushUser(user) {
        this._users.push(user.plainObject());
        localStorage.setItem('userList', JSON.stringify(this._users));
    }

    get users() {
        this._users = JSON.parse(localStorage.getItem('userList'))
        return this._users;
    }

    // refactor that method
    async getUserAPI() {
        const userService = new UserService();
        const data = await userService.fetchList();
        localStorage.setItem('requestMade', 1);
        localStorage.setItem('userList', JSON.stringify(data));
        return data;
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