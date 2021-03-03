import User from '../models/User.js';
import UserList from '../models/UserList.js';
import Validate from '../utils/Validate.js';
import UserService from '../services/UserService.js';

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

        this._insertUser();

        console.log(this._user.toJSON());
    }

    _insertUser() {
        if (this._list.users().length > 0) {
            this._list.add(this._user);
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

    listUser(){
        this._getList();
        return this._list;
    }

    _getUserListLocalStorage(){
        if(localStorage.getItem('userList')){
            this._list = localStorage.getItem('userList');
        }else{
            const service = new UserService();
            service.fetchUserList().then(data => localStorage.setItem('userList', JSON.stringify(data)));
        }
    }

    removeUser() {

    }

    editUser() {

    }
}

export default UserController;