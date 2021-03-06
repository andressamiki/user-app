import User from '../models/User.js';
import UserList from '../models/UserList.js';
import Validate from '../utils/Validate.js';
import Mask from '../utils/Mask.js';


class UserController {

    constructor() {
        this._user;
        this._list;
    }

    createUser(formView) {
        formView.callLoader();
        const input = formView.formInputs;
        const inputWithoutMask = {
            name: input.name,
            cpf: Mask.removeMask(input.cpf),
            phone: Mask.removeMask(input.phone),
            email: input.email
        }

        const validate = Validate.validateForm(inputWithoutMask);
        if (!validate[0]) {
            formView.showErrors(validate[1]);
            throw new Error('The form is invalid');
        }

        if(this.verifyCPF(inputWithoutMask.cpf)){
            alert('Cpf já cadastrado');
            throw new Error('The form is invalid');
        }

        this._user = new User(
            inputWithoutMask.name,
            inputWithoutMask.cpf,
            inputWithoutMask.phone,
            inputWithoutMask.email
        );
        this._list = new UserList();
        this._list.pushUser(this._user);
        formView.showSuccess();
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

    editUser(formView) {
        this.deleteUser(formView.formInputs.cpf);
        this.createUser(formView);
    }

    deleteUser(cpf) {
        this._list = new UserList();
        const list = this._list.users.filter(user => user.cpf != cpf);
        this._list.update(list);
    }

    verifyCPF(cpf){
        this._list = new UserList();
        const hasUser = this._list.users.some(user => user.cpf == cpf);
        return hasUser;
    }

}

export default UserController;