import UserController from '../src/controllers/UserController';
import UserList from '../src/models/UserList';

describe('UserController', () => {
    const userController = new UserController();
    const userList = new UserList();
    it('should create', () => {
        expect(userController).toBeTruthy();
    });
    it('should create user', () => {
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
    });
});