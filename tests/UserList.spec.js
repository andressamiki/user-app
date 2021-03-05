import UserList from '../src/models/UserList';
import User from '../src/models/User';
import UserService from '../src/services/UserService';

require("jasmine-local-storage");

describe('UserList', () => {
    const userList = new UserList();

    const objt =  { 
        name:  'Andressa', 
        cpf: '64755998832',
        phone: '13988331220',
        email: 'andressa@gmail.com' 
    };

    const user = new User(
        'Andressa',
        '64755998832',
        '13988331220',
        'andressa@gmail.com'
    );

    beforeEach(function () {
        mockLocalStorage();
    });

    it('should create', () => {
        expect(userList).toBeTruthy();
    });
    it('should push user to list', () => {
        userList._users = []
        const newUser = new User(
            'Andressa',
            '64755998832',
            '13988331220',
            'andressa@gmail.com'
        );
    
        userList.pushUser(newUser);
        expect(userList._users).toEqual([newUser.plainObject()]);
    });
    it('should get list user', () => {     
        localStorage.setItem('userList', JSON.stringify([objt]));
        const list = userList.users;
        expect(list).toEqual([objt]);
    });
    it('should set list user', () => {   
        userList.users = [user.plainObject()];
        expect(userList._users).toEqual([user.plainObject()]);
    });
    it('should update list user', () => { 
        userList.update([user.plainObject()]);
        expect(userList._users).toEqual([user.plainObject()]);
    });
    it('should get list api', () => { 
        const response = Promise.resolve(objt);
        spyOn(userList, 'getUserAPI').and.returnValue(response);
        const list = userList.getUserAPI();
        expect(list).toEqual(response);
    });
    
});