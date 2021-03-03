import User from '../models/User.js';
import UserList from '../models/UserList.js';
import Validate from '../utils/Validate.js';


class UserController {

    constructor() {
        this._user;
        this._list = new UserList();
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
        this._list.pushUser(this._user);
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
        this._list.localStorage();
        return this._list;
    }

    editUser() {

    }
}

export default UserController;