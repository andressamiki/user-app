import User from '../models/User.js';
import UserList from '../models/UserList.js';
import Validate from '../utils/Validate.js';


class UserController {

    constructor() {
        this._user;
        this._list;
    }

    createUser(input) {
        if (!this._validateForm()) {
            return false;
        }

        this._user = new User(
            input.name,
            input.cpf,
            input.phone,
            input.email
        );

        this._list = new UserList()
        this._list.pushUser(this._user);
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
        this._list = new UserList();
        return this._list.users();
    }

    returnUser(cpf) {
        const user = this.listUser().filter(user => user.cpf == cpf);
        return user[0];
    }

    editUser(input){
        this.deleteUser(input.cpf);
        this.createUser(input);
    }

    deleteUser(cpf){
        const list = this.listUser().filter(user => user.cpf != cpf);
        this._list.update(list);
    }

}

export default UserController;