class UserService {

    async fetchUserList() {
        const response = await fetch('https://private-21e8de-rafaellucio.apiary-mock.com/users');
        const data = await response.json();
        return data;
    }
}

export default UserService;