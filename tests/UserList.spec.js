import UserList from '../src/models/UserList';
import User from '../src/models/User';
import UserService from '../src/services/UserService';

require("jasmine-local-storage");

describe('UserList', () => {
    const userList = new UserList();

    const objt = {
        name: 'Andressa',
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

    const userListAPI = [
        {
          "name": "My name 1",
          "cpf": "04080757247",
          "phone": "11987654321",
          "email": "myemail1@test.com.br"
        },
        {
          "name": "My name 2",
          "cpf": "77797584192",
          "phone": "11987654321",
          "email": "myemail2@test.com.br"
        },
        {
          "name": "My name 3",
          "cpf": "45486737688",
          "phone": "11987654321",
          "email": "myemail3@test.com.br"
        }
      ];

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
        localStorage.setItem('requestMade', 1);
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

});