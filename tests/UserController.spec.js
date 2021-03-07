import UserController from '../src/controllers/UserController';

require("jasmine-local-storage");
global.fetch = require('node-fetch');

describe('UserController', () => {
    const userController = new UserController();
    const obj = [{
        name: 'Andressa',
        cpf: '64755998832',
        phone: '13988331220',
        email: 'andressa@gmail.com'
    },
    {
        name: 'Andressa',
        cpf: '64755998838',
        phone: '13988331220',
        email: 'andressa@gmail.com'
    }];
    beforeEach(function () {
        mockLocalStorage();
    });
    it('should create', () => {
        expect(userController).toBeTruthy();
    });
    it('should get user list', () => {
        const list = userController.userList();
        list.then(result => expect(result).toEqual(obj));
    });
    it('should get user by cpf', () => {
        localStorage.setItem('userList', JSON.stringify(obj));
        localStorage.setItem('requestMade', 1);
        const cpf = '64755998832';
        const user = userController.getUserByCPF(cpf);
        expect(user).toEqual(obj[0]);
    });
    it('should verify cpf', () => {
        localStorage.setItem('userList', JSON.stringify(obj));
        localStorage.setItem('requestMade', 1);
        const cpf = '64755998832';
        const hasUser = userController.verifyCPF(cpf);
        expect(hasUser).toBeTrue();
    });
    it('should delete user', () => {
        localStorage.setItem('userList', JSON.stringify(obj));
        localStorage.setItem('requestMade', 1);
        const cpf = '64755998832';
        userController.deleteUser(cpf);
        const hasUser = userController.verifyCPF(cpf);
        expect(hasUser).toBeFalse();
    });
});