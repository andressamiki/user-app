class FormView {

    constructor() {
        this._submit = document.getElementById('form-user');
        this._name = document.getElementById('name');
        this._cpf = document.getElementById('cpf');
        this._phone = document.getElementById('phone');
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

    cleanForm() {
        this._name.value = '';
        this._cpf.value = '';
        this._phone.value = '';
        this._email.value = '';
    }

    get cpf() {
        return this._cpf;
    }

    get phone() {
        return this._phone;
    }

    get submit() {
        return this._submit;
    }

    set name(name) {
        this._name.value = name;
    }

    set cpf(cpf) {
        this._cpf.value = cpf;
    }

    set phone(phone) {
        this._phone.value = phone;
    }

    set email(email) {
        this._email.value = email;
    }

}

export default FormView;