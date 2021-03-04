import User from '../models/User.js';
import UserList from '../models/UserList.js';
import Validate from '../utils/Validate.js';


class UserController {

    constructor() {
        this._user;
        this._list;
    }

    createUser(input) {
        console.log(this._validateForm())
        if (!this._validateForm()) {
            console.log('erro na validação')
            return false;
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
        if (!Validate.validateName(document.getElementById('name').value)) {
            document.getElementById('name').classList.add("invalid");
            document.getElementById('msg-error-name').classList.add("invalid");
            return false;
        }
        if (!Validate.validateCpf( document.getElementById('cpf').value)) {
            document.getElementById('cpf').classList.add("invalid");
            document.getElementById('msg-error-cpf').classList.add("invalid");
            return false;
        }
        if (!Validate.validateEmail( document.getElementById('email').value)) {
            document.getElementById('email').classList.add("invalid");
            document.getElementById('msg-error-email').classList.add("invalid");
            return false;
        }
        if (!Validate.validatePhone( document.getElementById('phone').value)) {
            document.getElementById('phone').classList.add("invalid");
            document.getElementById('msg-error-phone').classList.add("invalid");
            return false;
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