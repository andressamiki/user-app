import UserService from '../services/UserService.js';

class UserList {

    constructor(users = []) {
        this._users = users;
    }

    pushUser(user) {
        /* this._users = this.users();
        if (!this._users) {
            this._users = [];
        }
        console.log(this._users); */
        this._users.push(user.plainObject());
        localStorage.setItem('userList', JSON.stringify(this._users));
    }

    users() {
        const requestMade = localStorage.getItem('requestMade');
        if(!localStorage.getItem('userList') && requestMade){
            return JSON.parse(localStorage.getItem('userList'))
        }else{
            const userService = new UserService();
            return userService.fetchList()
                .then(data => {
                   this._users = data;
                    localStorage.setItem('requestMade', 1);
                    localStorage.setItem('userList', JSON.stringify(this._users));
                    return  data;
                });
        }
    }

    update(list){
        this._users = list;
        localStorage.setItem('userList', JSON.stringify(this._users));
    }

}

export default UserList;