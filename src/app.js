import UserController from './controllers/UserController.js';


const route = window.location.pathname;
const userController = new UserController();
        
if(route == '/user-list.html'){
    userController.listUser();
}else{
    const submit = document.querySelector('#form-user');
    submit.addEventListener('submit', (event) => {
        event.preventDefault();
        userController.addUser();
    });
}