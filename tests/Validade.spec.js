import Validate from '../src/utils/Validate';

describe('Validate', () => {
    it('should create', () => {
        expect(Validate).toBeTruthy();
    });
    it('should validade name invalid', () => {
        const name = Validate.validateName('An');
        expect(name).toBeFalsy();
    });
    it('should validade name', () => {
        const name = Validate.validateName('andressa');
        expect(name).toBeTruthy();
    });
    it('should validade email invalid', () => {
        const email = Validate.validateEmail('andressamiki@');
        expect(email).toBeFalsy();
    });
    it('should validade email', () => {
        const email = Validate.validateEmail('andressamiki@gmail.com');
        expect(email).toBeTruthy();
    });
    it('should validade phone invalid', () => {
        const phone = Validate.validatePhone('33841907');
        expect(phone).toBeFalsy();
    });
    it('should validade phone', () => {
        const phone = Validate.validatePhone('13988369739');
        expect(phone).toBeTruthy();
    });
    it('should validade cpf invalid', () => {
        const cpf = Validate.validateCpf('41317830998');
        expect(cpf).toBeFalsy();
    });
    it('should validade cpf.lenght invalid', () => {
        const cpf = Validate.validateCpf('4131783099');
        expect(cpf).toBeFalsy();
    });
    it('should validade cpf valid', () => {
        const cpf = Validate.validateCpf('41347830898');
        expect(cpf).toBeTruthy();
    });
    it('should method validadeForm invalid', () => {
        const input = {
            name: 'a',
            cpf: '64755998832',
            phone: '13988331220',
            email: 'andressa@gmail.com'
        };
        const validate = Validate.validateForm(input);
        expect(validate[0]).toBeFalsy();
        expect(validate[1]).toEqual('name');
    });
    it('should method validadeForm valid', () => {
        const input = {
            name: 'andressa',
            cpf: '64755998832',
            phone: '13988331220',
            email: 'andressa@gmail.com'
        };
        const validate = Validate.validateForm(input);
        expect(validate[0]).toBeTruthy();
        expect(validate[1]).toEqual('');
    })
})