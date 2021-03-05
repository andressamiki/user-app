class Mask {

    constructor() {
        throw new Error('This class cannot be instantiated, use the methods directly.');
    }

    static maskPhone(value) {
        let phoneFormat = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        phoneFormat = !phoneFormat[2] ? phoneFormat[1] : '(' + phoneFormat[1] + ') ' + phoneFormat[2] + (phoneFormat[3] ? '-' + phoneFormat[3] : '');
        return phoneFormat;
    }

    static maskCpf(value) {
        let cpfFormat = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
        cpfFormat = (!cpfFormat[2] ? cpfFormat[1] : cpfFormat[1] + '.' + cpfFormat[2] + '.') + (cpfFormat[3] ? cpfFormat[3] + '-' + cpfFormat[4] : '');
        return cpfFormat;
    }

    static removeMask(value) {
        return value.replace(/[^0-9]/g, "");
    }
}

export default Mask;