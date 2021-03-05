import UserList from '../src/models/UserList';
import User from '../src/models/User';
require("jasmine-local-storage");

describe('UserList', () => {
    const userList = new UserList();

    beforeEach(function () {
        mockLocalStorage();
    });

    it('should create', () => {
        expect(userList).toBeTruthy();
    });
    it('should push user to list', () => {
        const user = new User(
            'Andressa',
            '647.559.988-32',
            '(13) 98833-1220',
            'andressa@gmail.com'
        );
        userList.pushUser(user);
        expect(userList.users).toEqual([user.plainObject()]);
    });
});