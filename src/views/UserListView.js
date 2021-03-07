import UserController from '../controllers/UserController.js';
import Mask from '../utils/Mask.js';

class UserListView {

    constructor() {
        this._tbodyRef = document.getElementById('table').getElementsByTagName('tbody')[0];

    }

    renderTable(users) {
        const userController = new UserController();

        for (let index = 0; index < users.length; index++) {
            let newRow = this._tbodyRef.insertRow();
            newRow.insertCell().appendChild(document.createTextNode(users[index]['name']));
            newRow.insertCell().appendChild(document.createTextNode(Mask.maskCpf(users[index]['cpf'])));
            newRow.insertCell().appendChild(document.createTextNode(Mask.maskPhone(users[index]['phone'])));
            newRow.insertCell().appendChild(document.createTextNode(users[index]['email']));
            let btnDelete = '<button class="btn-danger btn-delete" id="' + users[index]['cpf'] + '">Deletar</button>';
            let btnEdit = '<button class="btn-primary btn-edit" id="' + users[index]['cpf'] + '" >Editar</button>';
            newRow.insertCell().insertAdjacentHTML('beforeend', btnEdit + btnDelete);
        }
        const buttonsDelete = document.querySelectorAll('.btn-delete');
        const buttonsEdit = document.querySelectorAll('.btn-edit');
        for (let i = 0; i < buttonsDelete.length; i++) {
            buttonsDelete[i].addEventListener('click', event => {
                userController.deleteUser(event.target.id);
                location.reload();

            });
            buttonsEdit[i].addEventListener('click', event => {
                window.location.replace('/' + '?cpf=' + event.target.id);
            });
        }
    }

}

export default UserListView;