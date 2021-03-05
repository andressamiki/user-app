import User from '../models/User.js';
import UserList from '../models/UserList.js';
import Validate from '../utils/Validate.js';


class UserController {

    constructor() {
        this._user;
        this._list;
    }

    createUser(input) {
        const validate = Validate.validateForm(input);
        if (!validate[0]) {
            this._returnError(validate[1]);
            throw new Error('The form is invalid');
        }

        this._user = new User(
            input.name,
            input.cpf,
            input.phone,
            input.email
        );

        this._list = new UserList();
        this._list.users;
        this._list.pushUser(this._user);
        setTimeout(() => {
            //button loader and success message
        }, 3000);
    }

    _returnError(inputName) {
        document.getElementById(inputName).classList.add("invalid");
        document.getElementById('msg-error-' + inputName).classList.add("invalid");
    }

    async listUser() {
        this._list = new UserList();
        if (!localStorage.getItem('requestMade')) {
            const data = await this._list.getUserAPI();
            this._list.users(data);
        }
        return this._list.users;
    }

    returnUser(cpf) {
        const user = this.listUser().filter(user => user.cpf == cpf);
        return user[0];
    }

    editUser(input) {
        this.deleteUser(input.cpf);
        this.createUser(input);
    }

    deleteUser(cpf) {
        const list = this.listUser().filter(user => user.cpf != cpf);
        this._list.update(list);
    }

}

export default UserController;