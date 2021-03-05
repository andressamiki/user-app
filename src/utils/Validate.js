class Validate {

    constructor() {
        throw new Error('This class cannot be instantiated, use the methods directly.');
    }

    static validateCpf(value) {
        const cpf = value;
        if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) {
            return false;
        }
        let result = true;
        [9, 10].forEach(function (j) {
            let sum = 0, r;
            cpf.split(/(?=)/).splice(0, j).forEach(function (e, i) {
                sum += parseInt(e) * ((j + 2) - (i + 1));
            });
            r = sum % 11;
            r = (r < 2) ? 0 : 11 - r;
            if (r != cpf.substring(j, j + 1)) {
                result = false;
            }
        });
        return result;
    }

    static validateName(value) {
        if (value.length < 3) {
            return false;
        }
        return true;
    }

    static validateEmail(value) {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!value.match(regex)) {
            return false;
        }
        return true;
    }

    static validateForm(input) {
        if (!this.validateName(input.name)) {
            return [false, 'name'];
        }
        if (!this.validateCpf(input.cpf)) {
            return [false, 'cpf'];
        }
        if (!this.validateEmail(input.email)) {
            return [false, 'email'];
        }
        if (!this.validatePhone(input.phone)) {
            return [false, 'phone'];
        }
        return [true, ''];
    }

    static validatePhone(value) {
        if (value.length < 10) {
            return false;
        }
        return true;
    }
}

export default Validate;