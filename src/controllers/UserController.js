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
            this._showErrors(validate[1]);
        }

        this._user = new User(
            input.name,
            input.cpf,
            input.phone,
            input.email
        );
        this._list = new UserList();
        this._list.pushUser(this._user);
        setTimeout(() => {
            //button loader and success message
        }, 3000);
    }

    _showErrors(inputName) {
        document.getElementById(inputName).classList.add("invalid");
        document.getElementById('msg-error-' + inputName).classList.add("invalid");
        throw new Error('The form is invalid');
    }

    async userList() {
        this._list = new UserList();
        const list = await this._list.getUsers();
        return list;
    }

    getUserByCPF(cpf) {
        this._list = new UserList();
        const user = this._list.users.filter(user => user.cpf == cpf);
        return user[0];
    }

    editUser(input) {
        this.deleteUser(input.cpf);
        this.createUser(input);
    }

    deleteUser(cpf) {
        this._list = new UserList();
        const list = this._list.users.filter(user => user.cpf != cpf);
        this._list.update(list);
    }

}

export default UserController;