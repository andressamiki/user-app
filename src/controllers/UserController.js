import User from '../models/User.js';
import UserList from '../models/UserList.js';
import Validate from '../utils/Validate.js';


class UserController {

    constructor() {
        this._user;
        this._list;
    }

    createUser(input) {
        if (!this._validateForm) {
            console.log('erro na validação')
            return;
        }
        this._user = new User(
            input.name,
            input.cpf,
            input.phone,
            input.email
        );

        this._getUsersFromStorage();
        this._list.pushUser(this._user);
    }

    _getUsersFromStorage() {
        const users = JSON.parse(localStorage.getItem('userList'));
        if (!this._list && users && users.length > 0) {
            this._list = new UserList(users);
        } else {
            this._list = new UserList();
        }
    }

    _validateForm() {
        if (!Validate.validateName()) {
            alert('nome inválido');
        }
        if (!Validate.validateCpf()) {
            alert('cpf inválido');
        }
        if (!Validate.validateEmail()) {
            alert('email inválido');
        }
        if (!Validate.validatePhone()) {
            alert('telefone inválido');
        }
        return true;
    }

    listUser() {
        this._getUsersFromStorage();
        return this._list.users;
    }

    editUser() {

    }
}

export default UserController;