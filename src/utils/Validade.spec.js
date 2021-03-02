const Validate = require("./Validate")

describe('Validate', () => {
    let component = new Validate;
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should validade name invalid', () => {
        const name = component.validateName('Andy');
        expect(name).toBeFalsy();
    })
    it('should validade name', () => {
        const name = component.validateName('andressa');
        expect(name).toBeTruthy();
    })
    it('should validade email invalid', () => {
        const email = component.validateEmail('andressamiki@');
        expect(email).toBeFalsy();
    })
    it('should validade email', () => {
        const email = component.validateEmail('andressamiki@gmail.com');
        expect(email).toBeTruthy();
    })
    it('should validade phone invalid', () => {
        const phone = component.validatePhone('33841907');
        expect(phone).toBeFalsy();
    })
    it('should validade phone', () => {
        const phone = component.validatePhone('(13) 98836-9739');
        expect(phone).toBeTruthy();
    })
    it('should validade cpf invalid', () => {
        const cpf = component.validateCpf('413.178.309.98');
        expect(cpf).toBeFalsy();
    })
    it('should validade cpf valid', () => {
        const cpf = component.validateCpf('413.478.308.98');
        expect(cpf).toBeTruthy();
    })
})