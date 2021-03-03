import User from '../models/User.js';
import Validate from '../utils/Validate.js';

class UserController {

    constructor() {
        /*this._form = {
            name: document.getElementById('name').value,
            cpf: document.getElementById('cpf').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value
        };*/
        this._user;
        this._list;
    }

    addUser() {
        if (!this._validateForm) {
            console.log('erro na validação')
            return;
        }
        this._user = new User(
            this._form.name,
            this._form.cpf,
            this._form.phone,
            this._form.email
        );

        console.log(this._user.toJSON());
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

    _getList(){
        if(localStorage.getItem('userList')){
            this._list = localStorage.getItem('userList');
        }else{
            fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users')
                .then(response => response.json())
                .then(data => {
                    this._list = data;
                    localStorage.setItem('userList', data);
                });
        }
    }
}

export default UserController;