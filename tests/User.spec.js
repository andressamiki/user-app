import User from '../src/models/User';

describe('User', () => {
    const userObject = new User(
        'Andressa', 
        '64755998832',
        '13988331220',
        'andressa@gmail.com'
    );
    it('should create', () => {
        expect(userObject).toBeTruthy();
    });
    it('should change the object to plain object', () => {
        const plainObject = {
            name:  'Andressa', 
            cpf: '64755998832',
            phone: '13988331220',
            email: 'andressa@gmail.com'
        };
        expect(userObject.plainObject()).toEqual(plainObject);
    });
    it('should return name', () => {
        expect(userObject.name).toEqual('Andressa');
    });
    it('should return cpf', () => {
        expect(userObject.cpf).toEqual('64755998832');
    });
    it('should return phone', () => {
        expect(userObject.phone).toEqual('13988331220');
    });
    it('should return email', () => {
        expect(userObject.email).toEqual('andressa@gmail.com');
    });
})