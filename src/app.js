import UserController from './controllers/UserController.js';


const route = window.location.pathname;
const userController = new UserController();

if(route == '/user-list.html'){
    console.log(userController.listUser());
}else{
    const submit = document.querySelector('#form-user');
    submit.addEventListener('submit', (event) => {
        event.preventDefault();
        const form = {
            name: document.getElementById('name').value,
            cpf: document.getElementById('cpf').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value
        }
        userController.createUser(form);
    });
}