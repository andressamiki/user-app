class Validate{

    constructor(){}
    
    validateCpf(value){
        const cpf = value.replace(/\D/g, '');
        if(cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) {
            return false;
        }
        let result = true;
        [9,10].forEach(function(j){
            let sum = 0, r;
            cpf.split(/(?=)/).splice(0,j).forEach(function(e, i){
                sum += parseInt(e) * ((j+2)-(i+1));
            });
            r = sum % 11;
            r = (r <2)?0:11-r;
            if(r != cpf.substring(j, j+1)) {
                result = false;
            }    
        });
        return result;
    }

    validateName(value){
        if (value.length < 5) {
            return false;
        }
            return true;
    }

    validateEmail(value){
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!value.match(regex)) {
            return false;
        }
            return true;
    }

    validatePhone(value){
        const regex = /\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}/
        if (!value.match(regex)) {
            return false;
        }
            return true;
    }
}

module.exports = Validate;