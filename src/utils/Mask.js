class Mask {

    constructor() {
        throw new Error('This class cannot be instantiated, use the methods directly.');
    }

    static maskPhone(value) {
        let phoneFormat = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        phoneFormat = !phone[2] ? phone[1] : '(' + phone[1] + ') ' + phone[2] + (phone[3] ? '-' + phone[3] : '');
        return phoneFormat;
    }

    static maskCpf(value) {
        let cpfFormat = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
        cpfFormat = (!cpf[2] ? cpf[1] : cpf[1] + '.' + cpf[2] + '.') + (cpf[3] ? cpf[3] + '-' + cpf[4] : '');
        return cpfFormat;
    }
}

export default Mask;