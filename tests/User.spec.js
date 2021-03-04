import User from '../src/models/User';

describe('User', () => {
    const userObject = new User(
        'Andressa', 
        '647.559.988-32',
        '(13) 98833-1220',
        'andressa@gmail.com'
    );
    it('should create', () => {
        expect(userObject).toBeTruthy();
    });
    it('should change the object to plain object', () => {
        const plainObject = {
            name:  'Andressa', 
            cpf: '647.559.988-32',
            phone: '(13) 98833-1220',
            email: 'andressa@gmail.com'
        };
        expect(userObject.plainObject()).toEqual(plainObject);
    });
    it('should return name', () => {
        expect(userObject.name).toEqual('Andressa');
    });
    it('should return cpf', () => {
        expect(userObject.cpf).toEqual('647.559.988-32');
    });
    it('should return phone', () => {
        expect(userObject.phone).toEqual('(13) 98833-1220');
    });
    it('should return email', () => {
        expect(userObject.email).toEqual('andressa@gmail.com');
    });
})