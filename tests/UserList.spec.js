import UserList from '../src/models/UserList';
import User from '../src/models/User';

describe('UserList', () => {
    const userList = new UserList();
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
        //expect(storage).toString();
    });
});