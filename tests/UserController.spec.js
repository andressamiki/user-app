import UserController from '../src/controllers/UserController';

require("jasmine-local-storage");
global.fetch = require('node-fetch');

describe('UserController', () => {
    const userController = new UserController();
    const objt = [{
        name: 'Andressa',
        cpf: '64755998832',
        phone: '13988331220',
        email: 'andressa@gmail.com'
    }];
    localStorage.setItem('userList', JSON.stringify(objt));
    localStorage.setItem('requestMade', 1);
    it('should create', () => {
        expect(userController).toBeTruthy();
    });
    /* it('should create user', () => {
        //spyOn(userList, 'pushUser');
        //const storage = localStorage.getItem('userItem');
        const input = {
            name:  'Andressa',
            cpf: '647.559.988-32',
            phone: '(13) 98833-1220',
            email: 'andressa@gmail.com'
        };
        //expect(storage).toString();
        //expect(userController.createUser(input)).toEqual(input);
    }); */
    it('should get user list', () => {
        const list = userController.userList();
        list.then(result => expect(result).toEqual(objt));
    });
    it('should get user by cpf', () => {
        localStorage.removeItem('userList');
        localStorage.removeItem('requestMade');
        const cpf = 77797584192;
        const user = userController.getUserByCPF(cpf);
        expect(user).toEqual({
            "name": "My name 2",
            "cpf": "77797584192",
            "phone": "11987654321",
            "email": "myemail2@test.com.br"
        });
    });
});