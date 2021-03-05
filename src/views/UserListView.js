class UserListView {

    constructor() {
        this._tbodyRef = document.getElementById('table').getElementsByTagName('tbody')[0];
        this._btnDelete = document.querySelectorAll('.btn-delete');
        this._btnEdit = document.querySelectorAll('.btn-edit');
    }

    renderTable(users) {

        for (let index = 0; index < users.length; index++) {
            let newRow = this._tbodyRef.insertRow();
            newRow.insertCell().appendChild(document.createTextNode(users[index]['name']));
            newRow.insertCell().appendChild(document.createTextNode(users[index]['cpf']));
            newRow.insertCell().appendChild(document.createTextNode(users[index]['phone']));
            newRow.insertCell().appendChild(document.createTextNode(users[index]['email']));
            let btnDelete = '<button class="btn-danger btn-delete" id="' + users[index]['cpf'] + '">Deletar</button>';
            let btnEdit = '<button class="btn-primary btn-edit" id="' + users[index]['cpf'] + '" >Editar</button>';
            newRow.insertCell().insertAdjacentHTML('beforeend', btnEdit + btnDelete);
        }

        for (let i = 0; i < this._btnDelete.length; i++) {
            this._btnDelete[i].addEventListener('click', event => {
                userController.deleteUser(event.target.id);
                location.reload();

            });
            this._btnEdit[i].addEventListener('click', event => {
                window.location.replace('index.html' + '?cpf=' + event.target.id);
            });
        }
    }

}

export default UserListView;