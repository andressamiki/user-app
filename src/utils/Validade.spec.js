import Validate from './Validate';

describe('Validate', () => {
    it('should create', () => {
        expect(Validate).toBeTruthy();
    });
    it('should validade name invalid', () => {
        const name = Validate.validateName('Andy');
        expect(name).toBeFalsy();
    })
    it('should validade name', () => {
        const name = Validate.validateName('andressa');
        expect(name).toBeTruthy();
    })
    it('should validade email invalid', () => {
        const email = Validate.validateEmail('andressamiki@');
        expect(email).toBeFalsy();
    })
    it('should validade email', () => {
        const email = Validate.validateEmail('andressamiki@gmail.com');
        expect(email).toBeTruthy();
    })
    it('should validade phone invalid', () => {
        const phone = Validate.validatePhone('33841907');
        expect(phone).toBeFalsy();
    })
    it('should validade phone', () => {
        const phone = Validate.validatePhone('(13) 98836-9739');
        expect(phone).toBeTruthy();
    })
    it('should validade cpf invalid', () => {
        const cpf = Validate.validateCpf('413.178.309.98');
        expect(cpf).toBeFalsy();
    })
    it('should validade cpf.lenght invalid', () => {
        const cpf = Validate.validateCpf('413.178.309.9');
        expect(cpf).toBeFalsy();
    })
    it('should validade cpf valid', () => {
        const cpf = Validate.validateCpf('413.478.308.98');
        expect(cpf).toBeTruthy();
    })
})