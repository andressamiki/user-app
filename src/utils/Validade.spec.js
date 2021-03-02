const Validate = require("./Validate")

describe('Validate', () => {
    let component = new Validate;
    
    it('should validade name', () => {
        const name = component.validateName('andressa');
        expect(name).toBeTrue();
    })
    it('should validade email', () => {
        const email = component.validateEmail('andressamiki@gmail.com');
        expect(email).toBeTrue();
    })
    it('should validade phone', () => {
        const phone = component.validatePhone('(13) 98836-9739');
        expect(phone).toBeTrue();
    })
    it('should validade cpf invalid', () => {
        const cpf = component.validateCpf('413.178.309.98');
        expect(cpf).toBeFalse();
    })

    it('should validade cpf valid', () => {
        const cpf = component.validateCpf('413.478.308.98');
        expect(cpf).toBeTrue();
    })
})