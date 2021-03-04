import UserController from './controllers/UserController.js';


const route = window.location.pathname;
const userController = new UserController();
const userList = userController.listUser();

if (route == '/user-list.html') {

    const buildTable = users => {

        console.log(users);
        const tbodyRef = document.getElementById('table').getElementsByTagName('tbody')[0];

        // Insert a row at the end of table

        // Insert a cell at the end of the row
        for (let index = 0; index < users.length; index++) {
            let newRow = tbodyRef.insertRow();
            newRow.insertCell().appendChild(document.createTextNode(users[index]['name']));
            newRow.insertCell().appendChild(document.createTextNode(users[index]['cpf']));
            newRow.insertCell().appendChild(document.createTextNode(users[index]['phone']));
            newRow.insertCell().appendChild(document.createTextNode(users[index]['email']));
            let btnDelete = '<button class="btn-danger btn-delete" id="' + users[index]['cpf'] + '">Deletar</button>';
            let btnEdit = '<button class="btn-primary btn-edit" id="' + users[index]['cpf'] + '" >Editar</button>';
            newRow.insertCell().insertAdjacentHTML('beforeend', btnDelete + btnEdit);
        }
        let btnDelete = document.querySelectorAll('.btn-delete');
        let btnEdit = document.querySelectorAll('.btn-edit');
        console.log(btnDelete)

        for (var i = 0; i < btnDelete.length; i++) {
            btnDelete[i].addEventListener('click', function (event) {
                console.log(event)
                userController.deleteUser(event.target.id);
                location.reload();

            });
            btnEdit[i].addEventListener('click', function (event) {
                console.log(event)
                userController.editUser(event.target.id)

            });
        }
        /* for (var i = 0; i < btnEdit.length; i++) {
            btnEdit[i].addEventListener('click', function (event) {
                console.log(event)
                console.log(userController.editUser(event.target.id));

            });
        } */
    };
    if (Promise.resolve(userList) == userList) {
        userList.then(users => buildTable(users));
    } else {
        buildTable(userList);
    }

    //var newText = document.createTextNode('new row');

} else {
    const queryParams = new URLSearchParams(location.search);
    // Mascara do telefone
    document.getElementById('phone').addEventListener('input', function (e) {
        let n = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        e.target.value = !n[2] ? n[1] : '(' + n[1] + ') ' + n[2] + (n[3] ? '-' + n[3] : '');
    });

    document.getElementById('cpf').addEventListener('input', function (e) {
        let n = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
        e.target.value = (!n[2] ? n[1] : n[1] + '.' + n[2] + '.') + (n[3] ? n[3] + '-' + n[4] : '');
    });

    const submit = document.querySelector('#form-user');
    submit.addEventListener('submit', (event) => {
        event.preventDefault();
        const form = {
            name: document.getElementById('name').value,
            cpf: document.getElementById('cpf').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value
        }
        const cpf = queryParams.get('cpf');
        if (cpf && cpf.length > 0) {
            userController.editUser(form);
        } else {
            userController.createUser(form, cpf);
        }
    });


}