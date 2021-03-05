import Maks from '../src/utils/Mask';

describe('Mask', () => {
    it('should create', () => {
        expect(Maks).toBeTruthy();
    });
    it('should mask cpf', () => {
        const cpf = Maks.maskCpf('41347830898');
        expect(cpf).toEqual('413.478.308-98');
    });
    it('should mask phone', () => {
        const phone = Maks.maskPhone('13988369739');
        expect(phone).toEqual('(13) 98836-9739');
    });
    it('should remove maks', () => {
        const phone = Maks.removeMask('(13) 98836-9739');
        expect(phone).toEqual('13988369739');
    });
})