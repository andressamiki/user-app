class UserService {

    async fetchList() {
        const response = await fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users');
        const data = await response.json();
        localStorage.setItem('requestMade', 1);
        localStorage.setItem('userList', JSON.stringify(data));
        return data;
    }
}

export default UserService;