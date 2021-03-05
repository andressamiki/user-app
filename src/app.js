import UserController from './controllers/UserController.js';
import Mask from './utils/Mask.js';


const route = window.location.pathname;
const userController = new UserController();
const userList = userController.listUser();

if (route == '/user-list.html') {

    const buildTable = users => {

        const tbodyRef = document.getElementById('table').getElementsByTagName('tbody')[0];

        for (let index = 0; index < users.length; index++) {
            let newRow = tbodyRef.insertRow();
            newRow.insertCell().appendChild(document.createTextNode(users[index]['name']));
            newRow.insertCell().appendChild(document.createTextNode(users[index]['cpf']));
            newRow.insertCell().appendChild(document.createTextNode(users[index]['phone']));
            newRow.insertCell().appendChild(document.createTextNode(users[index]['email']));
            let btnDelete = '<button class="btn-danger btn-delete" id="' + users[index]['cpf'] + '">Deletar</button>';
            let btnEdit = '<button class="btn-primary btn-edit" id="' + users[index]['cpf'] + '" >Editar</button>';
            newRow.insertCell().insertAdjacentHTML('beforeend', btnEdit + btnDelete);
        }
        let btnDelete = document.querySelectorAll('.btn-delete');
        let btnEdit = document.querySelectorAll('.btn-edit');
        for (var i = 0; i < btnDelete.length; i++) {
            btnDelete[i].addEventListener('click', function (event) {
                userController.deleteUser(event.target.id);
                location.reload();

            });
            btnEdit[i].addEventListener('click', function (event) {
                window.location.replace('index.html' + '?cpf=' + event.target.id);
            });
        }
    };
    if (Promise.resolve(userList) == userList) {
        userList.then(users => buildTable(users));
    } else {
        buildTable(userList);
    }
} else {
    const queryParams = new URLSearchParams(window.location.search);
    if(queryParams.get('cpf')){
        const user = userController.returnUser(queryParams.get('cpf'));
        document.getElementById('name').value =  user.name;
        document.getElementById('cpf').value = user.cpf;
        document.getElementById('phone').value = user.phone;
        document.getElementById('email').value = user.email;
    }
    document.getElementById('phone').addEventListener('input', function (e) {
        e.target.value = Mask.maskPhone(e.target.value);
    });

    document.getElementById('cpf').addEventListener('input', function (e) {
        e.target.value = Mask.maskCpf(e.target.value);
    });

    const submit = document.querySelector('#form-user');
    submit.addEventListener('submit', (event) => {
        event.preventDefault();
        const form = {
            name: document.getElementById('name').value,
            cpf: Mask.removeMask(document.getElementById('cpf').value),
            phone: Mask.removeMask(document.getElementById('phone').value),
            email: document.getElementById('email').value
        }
        if (queryParams.get('cpf')) {
            userController.editUser(form);
        } else {
            userController.createUser(form);
        }
    });
}