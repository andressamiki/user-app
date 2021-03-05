import Mask from '../utils/Mask.js';

class FormView {

    constructor() {
        this._submit = document.getElementById('form-user');
        this._name = document.getElementById('name');
        this._cpf = Mask.removeMask(document.getElementById('cpf'));
        this._phone = Mask.removeMask(document.getElementById('phone'));
        this._email = document.getElementById('email');
    }

    get formInputs() {
        return {
            name: this._name.value,
            cpf: this._cpf.value,
            phone: this._phone.value,
            email: this._email.value
        };
    }

    get cpf() {
        return this._cpf;
    }

    get phone() {
        return this._phone;
    }

    set name(name) {
        this._name.value = name;
    }

    set cpf(cpf) {
        this.cpf.value = cpf;
    }

    set phone(phone) {
        this.phone.value = phone;
    }

    set email(name) {
        this.email.value = email;
    }

}

export default FormView;